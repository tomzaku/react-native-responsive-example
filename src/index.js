/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import { addNavigationHelpers, TabNavigator, StackNavigator } from 'react-navigation';
import HomePageScreen from './view/HomePage/HomePageScreen.js';
import ProfileScreen from './view/Profile/ProfileScreen.js';
import DetailScreen from './view/Detail/DetailScreen.js';
import LibraryScreen from './view/Library/LibraryScreen.js';

const TapApp = TabNavigator({
  Dashboard: {
    screen: HomePageScreen,
  },
  Profile: {
    screen: ProfileScreen,
  },
  Library: {
    screen: LibraryScreen,
  },
}, {
  tabBarOptions: {
    activeTintColor: '#2844d9',
    inactiveTintColor: 'rgb(0, 0, 0)',
  },
});
const StackApp = StackNavigator({
  TabApp: {
    screen: TapApp,
    navigationOptions: ({ navigation }) => ({
      title: navigation.state.routes[navigation.state.index].routeName,
    }),
  },
  Detail: {
    screen: DetailScreen,
    navigationOptions: ({ navigation }) => ({
      title: 'Detail',
    }),
  },
});


class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <StackApp />
      </View>
    );
  }
}
export default App;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(181, 181, 181)',
  },
});
