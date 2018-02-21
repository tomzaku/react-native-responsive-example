//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

// create a component
class LibraryScreen extends Component {
  constructor(props){
    super(props);
    this.state = {
      listFileImage: []
    }
  }
  renderItem = () => {
    return (
      <View>
        <Image
          style={{ width: width, height:100 }}
          source={{ uri: 'file://' + item.path }}
        />
        <Text>
          {item.name.split('.')[0]}
        </Text>
      </View>
    )
  }
  render() {
    return (
      <View style={styles.container}>
        <Text>
          Library
        </Text>
        {/* <FlatList
          // refreshing={!this.state.fetched}
          // onRefresh={this.loadImageFile}
          data={this.state.listFileImage}
          renderItem={this.renderItem}
          // keyExtractor={this.keyExtractor}
        /> */}
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
});

//make this component available to the app
export default LibraryScreen;
