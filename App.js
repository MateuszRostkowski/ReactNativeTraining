import React, { Component, useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';


function Greetings({ name }) {
  return(
    <Text>Hello, { name }!</Text>
  )
}

class Blink extends Component {
  componentDidMount(){
    setInterval(() => (
      this.setState(previousState => (
        { isShowingText: !previousState.isShowingText }
      ))
    ), 1000);
  }
  state = { isShowingText: true };
  render() {
    if (!this.state.isShowingText) {
      return null;
    }
    return (
      <Text>{this.props.text}</Text>
    );
  }
}

export default function App() {
  let pic = {
    uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
  }
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Greetings name="Daria" />
      <Greetings name='Rexxar' />
      <Greetings name='Jaina' />
      <Greetings name='Valeera' />
      <Blink text='I love to blink' />
      <Image source={pic} style={{width: 193, height: 110}} />
  </View>
  );
}
