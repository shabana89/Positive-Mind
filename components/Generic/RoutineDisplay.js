import { StyleSheet, View, Text, SafeAreaView } from "react-native";
import React from "react";
import PMBox from "./Box";
import PMButton from "./Button";

export default function RoutineDisplay({ time }) {
  function testFunction() {
    console.log("clicked");
  }
  return (
    <View style={styles.container}>
      <Text>{time}</Text>
      <PMButton handleClick={testFunction} />
      <PMBox task={"test"} />

      <Text>Hello from RoutineDisplay.js</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    alignItems: "center",
    justifyContent: "center",
  },
});
