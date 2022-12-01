import { StyleSheet, View, Text, ScrollView } from "react-native";
import React from "react";
import {
  tasksMorning,
  tasksAfternoon,
  tasksEvening,
} from "../../libs/tasksRoutine";
import TaskDisplay from "../Routine/TaskDisplay";

export default function PMBox({ array, deleteTask }) {
  return (
    <View style={styles.container}>
      <ScrollView>
        {array.map((task, index) => (
          <TaskDisplay
            task={task.task}
            id={task.id}
            key={index}
            deleteTask={deleteTask}
          />
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
