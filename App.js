import React, { Component, useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

const styles = StyleSheet.create({
  box: {
    height: 100,
    flex: 1,
  },
  firstBox: {
    backgroundColor: "red",
    flex:2
  },
  secondBox: {
    backgroundColor: "blue",
  },
  thirdBox: {
    backgroundColor: "yellow",
  },
})

function TextDisplay() {
  const [text, setText] = useState("");
  return (
    <View>
      <TextInput
        style={{height: 120, background: "lightblue"}}
        placeholder="Type here to display text below!"
        onChangeText={(text) => setText(text)}
        value={text}
      />
      <Text>{text}</Text>
    </View>
  )
}

export default function App() {
  return (
    <View style={{ flex: 1 }}>
      <View style={[styles.box, styles.firstBox]}>
        <TextDisplay />
      </View>
      <View style={[styles.box, styles.secondBox]}/>
      <View style={[styles.box, styles.thirdBox]}/>
    </View>
  );
}
