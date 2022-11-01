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
      <View style={styles.textbutton}>
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
            position: "relative",
            right: "100px",
            backgroundColor: "#000000",
            float: "left",
          }}
          handleClick={testFunction}
        />
        <PMBox task={"test"} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    width: "393px",
    height: "236px",
    borderColor: "#000000",
    borderWidth: "5px",
    backgroundColor: "#ffffff",
    // alignItems: "center",
    // justifyContent: "center",
  },
  textbutton: {
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "row",
    borderColor: "#847382",
    borderWidth: "10px",
    width: "350px",
    height: "50px",
    alignItems: "center",
  },
});
