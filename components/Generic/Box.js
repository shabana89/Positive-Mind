import { StyleSheet, View, Text, ScrollView } from "react-native";
import React from "react";
import {
  tasksMorning,
  tasksAfternoon,
  tasksEvening,
} from "../../libs/tasksRoutine";
import TaskDisplay from "../Routine/TaskDisplay";

export default function PMBox({ array }) {
  return (
    <View style={styles.container}>
      <ScrollView>
        {array.map((task, index) => (
          <TaskDisplay task={task.task} key={index} />
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "139px",
    width: "342px",

    alignItems: "center",
    justifyContent: "center",
    borderColor: "#77567A",
    borderWidth: "3px",
    borderRadius: "20px",
    // padding: "10px",
    paddingVertical: "15px",
  },
});

/*
- Tasks to render in each box
- Morning tasks to go in the morning box 
-> how would we determine what the morning box is
-> morning box = morning because we're passing down a string as a prop 
- to render: we map over array
array.map((task, index) => (
  return <Text key={index}>{task.task}</Text>))





*/
