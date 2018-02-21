//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import getStackNavigator from './routerBuilder';

// create a component
class NavigationApp extends Component {
  render() {
    const MainNavigation = getStackNavigator('Main');
    return (
        <MainNavigation />
    );
  }
}

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',

  },
});

//make this component available to the app
export default NavigationApp;
