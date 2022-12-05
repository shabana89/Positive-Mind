import { StyleSheet, View, Text, Button } from "react-native";
import React from "react";
import CheckBox from "@react-native-community/checkbox";
import { useState } from "react";

export default function TaskDisplay({ task, deleteTask, id }) {
  const [isClicked, setIsClicked] = useState(false);

  return (
    <View style={styles.container}>
      <View style={styles.checkboxContainer}>
        <input
          type="checkbox"
          style={styles.checkbox}
          onChange={() => setIsClicked(!isClicked)}
        />
      </View>
      <View style={styles.textContainer}>
        <Text style={isClicked === true ? styles.isClickedText : styles.text}>
          {task}
        </Text>
        <Button onPress={() => deleteTask(id)}>x</Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "20rem",
    marginBottom: 10,
    marginLeft: 3,
  },
  checkboxContainer: {
    flexDirection: "row",
  },
  checkbox: {
    borderRadius: "100%",
    overflow: "hidden",
    color: "#77567A",
  },
  textContainer: {
    flexDirection: "row",
    flex: 1,
    flexWrap: "wrap",
    marginLeft: 6,
  },
  text: {
    color: "#77567A",
    fontWeight: "bold",
  },
  isClickedText: {
    color: "#77567A",
    fontWeight: "bold",
    textDecorationLine: "line-through",
  },
});
