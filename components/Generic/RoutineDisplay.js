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
      <Text
        style={{
          fontSize: "32px",
          fontWeight: "700",
          color: "#77567A",
          position: "relative",
          right: "96px",
        }}
      >
        {time}
      </Text>
      <PMButton
        style={{
          position: "absolute",
          right: "500px",
          backgroundColor: "#000000",
        }}
        handleClick={testFunction}
      />
      <PMBox task={"test"} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "393px",
    height: "236px",
    borderColor: "#000000",
    borderWidth: "5px",
    backgroundColor: "#ffffff",
    alignItems: "center",
    justifyContent: "center",
  },
});
