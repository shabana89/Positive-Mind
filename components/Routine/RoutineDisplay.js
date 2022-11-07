import { StyleSheet, View, Text, SafeAreaView } from "react-native";
import React from "react";
import PMBox from "../Generic/Box";
import PMButton from "../Generic/Button";


export default function RoutineDisplay({ time, todArray }) {
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
            marginLeft: "10px",
          }}
        >
          {time}
        </Text>
        <PMButton handleClick={testFunction} />
      </View>
      <PMBox array={todArray} />
 
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: "40px",
  },
  textbutton: {
    justifyContent: "space-between",
    flexDirection: "row",
  },
});
