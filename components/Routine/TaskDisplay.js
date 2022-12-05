import { StyleSheet, View, Text, Button } from "react-native";
import React from "react";
import CheckBox from "@react-native-community/checkbox";
import { useState } from "react";
import CancelIcon from "@mui/icons-material/Cancel";
import { red } from "@mui/material/colors";

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
        <View style={styles.deleteTaskButton}>
          <CancelIcon
            style={{
              fill: "#77567A",
              height: "25px",
              width: "25px",
            }}
            onClick={() => deleteTask(id)}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "",
    alignContent: "center",
    width: "20rem",
    marginBottom: 10,
    marginLeft: 3,
    borderColor: "#77567A",
    borderWidth: "2px",
    borderRadius: "10px",
  },
  checkboxContainer: {
    flexDirection: "row",
    // borderColor: "black",
    // borderWidth: "2px",
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
    // borderColor: "green",
    // borderWidth: "2px",
    alignItems: "center",
    justifyContent: "space-between",
    marginRight: 6,
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
  deleteTaskButton: {
    justifyContent: "space-between",
    flexDirection: "row",
    marginBottom: "10px",
    width: "30px",
    // borderColor: "blue",
    // borderWidth: "2px",
    marginTop: "10px",
  },
});
