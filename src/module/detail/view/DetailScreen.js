//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, Dimensions, ScrollView } from 'react-native';
import Button from '../../common-layout/Button';
var { height, width } = Dimensions.get('window');
import { ThemeColor, ThemeSpacing } from 'Theme';

// create a component
class DetailScreen extends Component {
  renderInfoDetail() {
    return (
      <View style={styles.detailContainer}>
        <Text>Name: Image 1 </Text>
        <Text>Uploaded date: 12/2/2018 </Text>
        <Text>Owner: Tomle </Text>
      </View>
    )
  }
  
  render() {
    const { item } = this.props.navigation.state.params;
    return (
      <View style={styles.container}>
        <ScrollView>
          <Image
            style={{ width, height: height - 250 }}
            source={{uri: item.uri}}
          />
          <View style={styles.buttonContainer}>
            <Button title={'Download'}  />
            <Button title={'Make a wallpaper'} success />
            <Button title={'Share'} backgroundColor={'#0019A6'} />
          </View>
          {this.renderInfoDetail()}
        </ScrollView>
      </View>
    );
  }
}

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  detailContainer: {
    margin: ThemeSpacing.MARGIN,
  },
  buttonContainer: {
    flexDirection: 'row',
  }
});

//make this component available to the app
export default DetailScreen;
