//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { GiftedChat } from 'react-native-gifted-chat'

// create a component
const sandMessage = {
  text: 'Awesome with responsive',
  createdAt: new Date(),
  user: {
    _id: 2,
    name: 'React Native',
    avatar: 'https://facebook.github.io/react/img/logo_og.png',
  },
}
class ChatPersonScreen extends Component {
  state = {
    messages: [],
  }
  static navigationOptions = ({navigation}) => {
    const { item } = navigation.state.params;
    return {
      headerTitle: `${item.name}`,
      // header: {
      //   title: 'null'
      // }
    };
  }
  generatorMessage() {
    const { item } = this.props.navigation.state.params;
    return {
      text: 'Awesome with responsive',
      createdAt: new Date(),
      _id: parseInt(Math.random(4)*100000000),
      user: {
        _id: 2,
        name: 'React Native',
        avatar: item.avatar_url,
      },
    }
  }
  componentWillMount() {
    const { item } = this.props.navigation.state.params;
    this.setState({
      messages: [
        {
          _id: 1,
          text: 'Hello',
          createdAt: new Date(),
          user: {
            _id: 2,
            name: 'React Native',
            avatar: item.avatar_url,
          },
        },
      ],
    })
  }

  onSend(messages = []) {
    messages.push(this.generatorMessage())
    messages.reverse()
    this.setState(previousState => ({
      messages: GiftedChat.append(previousState.messages, messages),
    }))
  }

  render() {
    return (
      <GiftedChat
        messages={this.state.messages}
        onSend={messages => this.onSend(messages)}
        user={{
          _id: 1,
        }}
      />
    )
  }
}

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2c3e50',
  },
});

//make this component available to the app
export default ChatPersonScreen;
