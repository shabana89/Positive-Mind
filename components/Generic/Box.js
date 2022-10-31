import { StyleSheet, View, Text } from "react-native";
import React from "react";

export default function PMBox({ task }) {
  return (
    <View style={styles.container}>
      <Text>{task}</Text>
      <Text>{task}</Text>
      <Text>{task}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "139px",
    width: "342px",

    alignItems: "center",
    justifyContent: "center",
    borderColor: "#77567A",
    borderWidth: "3px",
    borderRadius: "20px",
  },
});
