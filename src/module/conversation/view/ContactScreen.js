//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { List, ListItem, Avatar } from 'react-native-elements'


const list = [
  {
    name: 'TomLe',
    subtitle: 'Vice President',
    avatar_url: 'https://source.unsplash.com/300x300/?girl?boy',
  },
  {
    name: 'Zaku',
    avatar_url: 'https://source.unsplash.com/300x301/?girl?boy',
    subtitle: 'Vice Chairman'
  },
  {
    name: 'Amy Farha',
    subtitle: 'Vice President',
    avatar_url: 'https://source.unsplash.com/300x302/?girl?boy',
  },
  {
    name: 'Chris Jackson',
    avatar_url: 'https://source.unsplash.com/300x303/?girl?boy',
    subtitle: 'Vice Chairman'
  },
  {
    name: 'ABX',
    subtitle: 'Vice President',
    avatar_url: 'https://source.unsplash.com/300x304/?girl?boy',
  },
  {
    name: 'Sven',
    avatar_url: 'https://source.unsplash.com/300x305/?girl?boy',
    subtitle: 'Vice Chairman'
  },
  {
    name: 'Pudge',
    avatar_url: 'https://source.unsplash.com/300x306/?girl?boy',
    subtitle: 'Vice Chairman'
  },
  {
    name: 'Naix',
    avatar_url: 'https://source.unsplash.com/300x307/?girl?boy',
    subtitle: 'Vice Chairman'
  },
  {
    name: 'Invoker',
    avatar_url: 'https://source.unsplash.com/300x308/?girl?boy',
    subtitle: 'Vice Chairman'
  },
];

// create a component
class ContactScreen extends Component {
  renderItem = ({ item }) => {
    const { avatar_url, name, subtitle } = item
    return (
      <ListItem 
        // avatar={avatar_url}
        avatar={<Avatar
                rounded
                source={avatar_url && {uri: avatar_url}}
                title={name[0]}
              />}
        title={name}
        subtitle={subtitle}
        onPress={() => this.onPressItem(item)}
      />
    );
  }
  onPressItem(item){ 
    const { navigate } = this.props.navigation;
    navigate('ChatPerson', {item})
  }
  keyExtractor = (item, index) => item.name
  render() {
    return (
      <View style={styles.container}>
        <FlatList 
          data={list}
          renderItem={this.renderItem}
          keyExtractor={this.keyExtractor}
        />
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
export default ContactScreen;
