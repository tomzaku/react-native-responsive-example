/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  ScrollView,
  Dimensions,
  TouchableOpacity,
  ListView
} from 'react-native';
import ShimmerPlaceholder from 'react-native-shimmer-placeholder';
import Icon from 'react-native-vector-icons/Ionicons';
import Item from './component/Item.js'
var { height, width } = Dimensions.get('window');
export default class HomePageScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checkListImageLoaded: [],
    };
  }
  static navigationOptions = {
    tabBarLabel: 'Dashboard',
    tabBarIcon: ({ tintColor }) => (
      <Icon
        name={'ios-aperture'}
        color={tintColor}
        size={30}
      />
    ),
  }
  getImage(size) {
    return { uri: `https://unsplash.it/${size}/${width}` };
  }
  getData(size) {
    let result = [];
    for (let index = 400; index < size + 400; index += 1) {
      result.push(this.getImage(index));
    }
    return result;
  }
  onPressItem = (item) => {
    const { navigate } = this.props.navigation;
    navigate('Detail', item);
  }
  onLoad = (index) => {
    const changeList = this.state.checkListImageLoaded;
    changeList[index] = true;
    this.setState({ checkListImageLoaded: changeList });
  }
  renderItem = ({ item, index }) => {
    return (
      <Item
        isDisplayChildComponent={this.state.checkListImageLoaded[index]}
        item={item}
        onLoad={() => this.onLoad(index)}
        onPress={() => this.onPressItem(item)}
      />
    );
  }
  keyExtractor = (item, index) => index;
  render() {
    return (
      <View style={styles.container}>
          <View style={styles.body}>
            <FlatList
              data={this.getData(1000)}
              renderItem={this.renderItem}
              keyExtractor={this.keyExtractor}
              initialNumToRender={5}
            />
            {/* {this.renderBody()} */}
          </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    // marginTop: 30,
  },
  body: {
    flex: 1,
    // flexWrap: 'wrap',
    // flexDirection: 'row',
    // backgroundColor: 'red',
  },
});
