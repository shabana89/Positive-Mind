import { StyleSheet, View, Text, SafeAreaView } from "react-native";
import React from "react";
import CheckBox from "@react-native-community/checkbox";

export default function TaskDisplay() {
  return (
    <View style={styles.container}>
      <View style={styles.checkboxContainer}>
        <input type="checkbox" style={styles.checkbox} />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.text}>TASK DISPLAY</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // borderWidth: "3px",
    // borderColor: "red",
    flexDirection: "row",
    justifyContent: "space-between",
    width: "20rem",
    marginTop: 10,
    marginLeft: 3,
  },
  checkboxContainer: {
    // borderWidth: "3px",
    // borderColor: "blue",
    flexDirection: "row",
  },
  checkbox: {
    borderRadius: "100%",
    overflow: "hidden",
    color: "#77567A",
  },
  textContainer: {
    // borderWidth: "3px",
    // borderColor: "green",
    flexDirection: "row",
    flex: 1,
    flexWrap: "wrap",
    marginLeft: 6,
  },
  text: {
    color: "#77567A",
    fontWeight: "bold",
  },
});
