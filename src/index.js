/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

import NavigationApp from './config/navigation/index';

class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <NavigationApp />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});

export default App;