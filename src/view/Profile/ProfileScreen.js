/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
var { height, width } = Dimensions.get('window');

export default class ProfileScreen extends Component {
  static navigationOptions = {
    tabBarLabel: 'Profile',
    tabBarIcon: ({ tintColor }) => (
      <Icon
        name={'ios-person'}
        color={tintColor}
        size={30}
      />
    ),
    headerTitle: 'Profile',
  
  }
  render() {
    return (
      <View style={styles.container}>
        <Text>I'm the ProfileScreen component</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
