import { StyleSheet, View, Text } from "react-native";
import React from "react";

export default function PMBox({ task }) {
  return (
    <View style={styles.container}>
      <Text>{task}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 0.5,
    width: "500%",
    backgroundColor: "#6096BA",
    alignItems: "center",
    justifyContent: "center",
    borderColor: "#000000",
    borderWidth: "10px",
  },
});
