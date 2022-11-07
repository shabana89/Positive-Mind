import { StyleSheet, View, Text, SafeAreaView } from "react-native";
import React from "react";

export default function TaskDisplay() {
  return (
    <View style={styles.container}>
      <View style={styles.checkbox}>
        <input type="checkbox" />
      </View>
      <View style={styles.text}>
        <Text>TASK DISPLAY TASK DISPLAY TASK DISPLAY TASK DISPLAY</Text>{" "}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderWidth: "3px",
    borderColor: "red",
    flexDirection: "row",
    justifyContent: "space-between",
    width: "20rem",
  },
  checkbox: {
    borderWidth: "3px",
    borderColor: "blue",
    flexDirection: "row",
  },
  text: {
    borderWidth: "3px",
    borderColor: "green",
    flexDirection: "row",
    flex: 1,
    flexWrap: "wrap",
  },
});
