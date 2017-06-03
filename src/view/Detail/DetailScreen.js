/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image,
  Button,
  ActivityIndicator,
  Modal
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
var RNFS = require('react-native-fs');
var { height, width } = Dimensions.get('window');
const uuidV1 = require('uuid/v1');

export default class DetailScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isFetching: false,
    };
  }
  createDirectory = (path) => {
    RNFS.mkdir(path).then(response => {}).catch(err => alert('Error!'))
  }
  onDownload = () => {
    this.setState({
      isFetching: true,
    });
    const item = this.props.navigation.state.params;
    const directoryPath = RNFS.DocumentDirectoryPath + '/wallpaper/';
    this.createDirectory(directoryPath);
    const targetPath = directoryPath + uuidV1() + '.jpeg';
    console.log('target path: ',targetPath);

    RNFS.downloadFile({
      fromUrl: item.uri,
      toFile: targetPath,
    }).promise.then(response => {
      // console.log('>res', response);
      if (response.statusCode == 200 ){
        this.setState({
          isFetching: false,
        });
        setTimeout(() => alert('Save successful!'), 50);
      }});
  }
  render() {
    console.log('Props', this.props);
    const item = this.props.navigation.state.params;
    const { isFetching } = this.state;
    return (
      <View style={styles.container}>
        <Image
          ref={'image'}
          style={{ width, height: 250 }}
          source={{uri: item.uri}}
        />
        <View style={styles.footerImage}>
          <View style={{ flexDirection: 'row' }}>
            <Icon
              name={'ios-thumbs-up'}
              size={24}
              color={'white'}
              style={styles.icon}
            />
            <Icon
              name={'ios-thumbs-down'}
              size={24}
              color={'white'}
              style={styles.icon}
            />
          </View>
          <Icon
            name={'md-download'}
            size={24}
            color={'white'}
            style={{marginRight: 16}}
            onPress={this.onDownload}
          />
          {/* <Text style={styles.linkText}>
            {`Link: ${item.uri}`}
          </Text> */}
        </View>
        <Modal
          animationType={'fade'}
          transparent={true}
          visible={isFetching}
          onRequestClose={() => { alert('Modal has been closed.')}}
        >
          <View
            style={styles.centering}
          >
            <ActivityIndicator
              animating={true}
              // style={[styles.centering, {height: 80}]}
              size='large'
              color={'rgb(39, 123, 184)'}
            />
            <Text style={{ color: 'white' }}>Wait a momments!</Text>
          </View>
        </Modal>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  centering: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.35)',
    flex: 1,
  },
  footerImage: {
    backgroundColor: 'rgb(39, 123, 184)',
    width,
    height: 35,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginRight: 16,
  },
  icon: {
    marginLeft: 16,
  },
  linkText: {
    // marginTop: 16,
    // marginLeft: 16,
    flex: 1,
    color: 'white',
    textAlign: 'right',
    marginRight: 16,
    fontSize: 16,
    fontWeight: 'bold',
  },
});
