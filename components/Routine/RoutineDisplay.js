import { StyleSheet, View, Text, SafeAreaView } from "react-native";
import React from "react";
import PMBox from "../Generic/Box";
import PMButton from "../Generic/Button";
import { useState } from "react";
import { nanoid } from "nanoid";

export default function RoutineDisplay({
  time,
  todArray,
  onPressFunction,
  text,
}) {
  const [userInput, setUserInput] = useState("");
  const [taskArray, setTaskArray] = useState(todArray);
  const [id, setId] = useState(nanoid());
  const [popup, setPopup] = useState(false);

  function addUserInput() {
    setTaskArray([...taskArray, { id: { id }, task: userInput }]);
    setId(nanoid());
    console.log(taskArray);
    setPopup(false);
  }

  function deleteTask(key) {
    console.log("id", key);
    console.log("clicked", key);
    const newList = taskArray.filter((itemObj) => {
      return itemObj.id !== key;
    });
    setTaskArray(newList);
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
        <PMButton
          handleClick={onPressFunction}
          text={text}
          setUserInput={setUserInput}
          addUserInput={addUserInput}
          popup={popup}
          setPopup={setPopup}
        />
      </View>
      <PMBox array={taskArray} deleteTask={deleteTask} />
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
