import React from "react";
import { SafeAreaView, StyleSheet, TextInput, Text } from "react-native";
import { useState } from "react";

function Popup() {
  const [text, onChangeText] = useState("");

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>Add to your todo list!</Text>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
        multiline={true}
        maxLength={70}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  container: {
    borderWidth: 2,
    height: 100,
    display: "flex",
    justifyContent: "center",
    width: 300,
    alignItems: "center",
    borderRadius: "20px",
    borderColor: "#77567A",
  },
  text: {
    color: "#77567A",
    fontWeight: "bold",
  },
});

export default Popup;
