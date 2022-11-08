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
    marginBottom: "10px",
  },
});

// PLAN: button functionality to add task
// press the button
// input field show up
// value of the input field to be saved
// take that valuskDisplay component as a new task
// (WE WONT DO IT LIKE THIS) -> every time e and put it in our Tathe input button is clicked (e.g "add task"), a new TaskDisplay component is made
// OR -> every time the input button is clicked, we want to push it to the array and that is mapped over and displays the new task
// make sure each button corresponds to right box
