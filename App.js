import React, { Component, useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';


function Greetings({ name }) {
  return(
    <Text>Hello, { name }!</Text>
  )
}

export default function App() {
  let pic = {
    uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
  }
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Greetings name="Mateusz" />
      <Image source={pic} style={{width: 193, height: 110}} />
  </View>
  );
}
