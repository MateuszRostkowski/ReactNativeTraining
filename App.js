import React, { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { render } from 'react-dom';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  buttonContainer: {
    margin: 20
  },
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

function ButtonBasic() {
  const _onPressButton = () =>  {
    alert("You tapped button!")
  }
  
  return (
    <View style={styles.buttonContainer}>
      <Button
        onPress={_onPressButton}
        title="Press Me"
        color="#841584"
      />
    </View>
  )
}

export default function App() {
  return (
    <View style={{ flex: 1 }}>
      <View style={[styles.box, styles.firstBox]}>
        
      </View>
      <ButtonBasic />
      <View style={[styles.box, styles.secondBox]}/>
      <View style={[styles.box, styles.thirdBox]}/>
    </View>
  );
}
