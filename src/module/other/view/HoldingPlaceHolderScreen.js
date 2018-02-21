//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

// create a component
class HoldingPlaceHolderScreen extends Component {
  static navigationOptions = ({ navigation }) => ({
    header: null
  })
  render() {
    return (
      <View style={styles.container}>
      </View>
    );
  }
}

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#8fa3b8',
  },
});

//make this component available to the app
export default HoldingPlaceHolderScreen;
