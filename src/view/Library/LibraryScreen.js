/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  Dimensions,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
var { height, width } = Dimensions.get('window');

var RNFS = require('react-native-fs');

export default class LibraryScreen extends Component {
  static navigationOptions = ({ navigation }) => {
    const { params = {} } = navigation.state;
    return {
      tabBarLabel: 'Library',
      tabBarIcon: ({ tintColor }) => (
        <View style={{ marginRight: 16 }}>
          <Icon
            name={'ios-images'}
            color={tintColor}
            size={30}
          />
        </View>

      ),
      headerRight: (
        <Icon
          name={'ios-trash'}
          size={24}
          onPress={params.deleteAll}
          style={{marginRight: 16}}
        />
      )
    }
  }
  deleteAll = () => {
    const readPath = RNFS.DocumentDirectoryPath + '/wallpaper/';
    RNFS.unlink(readPath).then(()=>alert("Delete Done!")).catch((err)=>alert("Err!"))
  }
  constructor(props) {
    super(props);
    this.state = {
      listFileImage: [],
      fetched: false,
    };
  }
  loadImageFile = () => {
    // this.setState({
    //   fetched: false,
    // });
    const readPath = RNFS.DocumentDirectoryPath + '/wallpaper/';
    RNFS.readDir(readPath)
      .then((files) => {
        console.log('GOT RESULT', files);
        // stat the first file
        let images = [];
        for (index = 0; index < files.length; index += 1 ){
            const splitName = files[index].name.split('.');
            const extension = splitName[splitName.length - 1];
            const extensions = 'png jpeg jpg';
            if (extensions.includes(extension.toLowerCase()) === true) {
              images.push(files[index]);
            }
        }
        this.setState({
          listFileImage: images,
          fetched: true,
        });
      })
      .catch((err) => {
        console.log(err.message, err.code);
      });
  }
  componentDidMount() {
    this.loadImageFile();
    this.props.navigation.setParams({ deleteAll: this.deleteAll });
  }
  renderItem = ({ item }) => {
    console.log(">>item", item);
    return (
      <View>
        <Image
          style={{ width: width, height:100 }}
          source={{ uri: 'file://'+item.path }}
        />
        <Text>
          {item.name.split('.')[0]}
        </Text>
        {/* <Text>
          {item.path}
        </Text> */}
      </View>
    )
  }
  keyExtractor = (item, index) => index;
  render() {
    return (
      <View style={styles.container}>
        <FlatList
          refreshing={!this.state.fetched}
          onRefresh={this.loadImageFile}
          data={this.state.listFileImage}
          renderItem={this.renderItem}
          keyExtractor={this.keyExtractor}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
