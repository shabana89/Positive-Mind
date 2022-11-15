import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import RoutineDisplay from "../../components/Routine/RoutineDisplay";
import {
  tasksMorning,
  tasksAfternoon,
  tasksEvening,
} from "../../libs/tasksRoutine";
import Popup from "../../components/Generic/Popup";

export default function Routine() {
  return (
    <SafeAreaView style={styles.container}>
      <RoutineDisplay time={"Morning"} todArray={tasksMorning} />
      <RoutineDisplay time={"Afternoon"} todArray={tasksAfternoon} />
      <RoutineDisplay time={"Evening"} todArray={tasksEvening} />
      <Popup />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFCF7",
    alignItems: "center",
    justifyContent: "center",
  },
});
