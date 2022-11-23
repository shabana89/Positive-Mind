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
  function morningClick() {
    console.log("im pushing to the morning libs");
  }
  function afternoonClick() {
    console.log("im pushing to the afternoon libs");
  }
  function eveningClick() {
    console.log("im pushing to the evening libs");
  }

  return (
    <SafeAreaView style={styles.container}>
      <RoutineDisplay
        time={"Morning"}
        todArray={tasksMorning}
        onPressFunction={morningClick}
      />
      <RoutineDisplay
        time={"Afternoon"}
        todArray={tasksAfternoon}
        onPressFunction={afternoonClick}
      />
      <RoutineDisplay
        time={"Evening"}
        todArray={tasksEvening}
        onPressFunction={eveningClick}
      />
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
