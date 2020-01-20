import React, { useState } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button,
  TouchableHighlight,
  TouchableOpacity,
  TouchableNativeFeedback,
  TouchableWithoutFeedback
} from "react-native";
import { render } from "react-dom";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center"
  },
  buttonContainer: {
    margin: 20
  },
  box: {
    height: 100,
    flex: 1
  },
  firstBox: {
    backgroundColor: "red",
    flex: 2
  },
  secondBox: {
    backgroundColor: "blue"
  },
  thirdBox: {
    backgroundColor: "yellow"
  },
  button: {
    marginBottom: 20,
    width: 260,
    alignItems: "center",
    backgroundColor: "#2196F3",
  },
  buttonText: {
    textAlign: "center",
    padding: 20,
    color: "white"
  }
});

function TextDisplay() {
  const [text, setText] = useState("");
  return (
    <View>
      <TextInput
        style={{ height: 120, background: "lightblue" }}
        placeholder="Type here to display text below!"
        onChangeText={text => setText(text)}
        value={text}
      />
      <Text>{text}</Text>
    </View>
  );
}

function ButtonBasic() {
  const _onPressButton = () => {
    alert("You tapped button!");
  };

  return (
    <View style={styles.buttonContainer}>
      <Button onPress={_onPressButton} title="Press Me" color="#841584" />
    </View>
  );
}

function Touchables() {
  const _onPressButton = () => {
    alert("You pressed the button")
  }

  const _onLongPressButton = () => {
    alert("You long pressed the button!")
  } 

  return (
    <View>
      <TouchableHighlight
        onPress={_onPressButton}
        onLongPress={_onLongPressButton}
        underlayColor="white"  
      >
        <View style={styles.button}>
          <Text style={styles.buttonText}>
            TouchableHighlight
          </Text>
        </View>
      </TouchableHighlight>
      <TouchableOpacity
        onPress={_onPressButton}
      >
       <View style={styles.button}>
          <Text style={styles.buttonText}>
            TouchableOpacity
          </Text>
        </View>
      </TouchableOpacity>
      <TouchableWithoutFeedback
        onPress={_onPressButton}
      >
        <View style={styles.button}>
          <Text style={styles.buttonText}>
            TouchableWithoutFeedback
          </Text>
        </View>
      </TouchableWithoutFeedback>
    </View>
  )
}

export default function App() {
  return (
    <View style={{ flex: 1 }}>
      <View style={[styles.box, styles.firstBox]}></View>
        <ButtonBasic />
        <Touchables />
      <View style={[styles.box, styles.secondBox]} />
      <View style={[styles.box, styles.thirdBox]} />
    </View>
  );
}
