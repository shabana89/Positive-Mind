import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import RoutineDisplay from "../../components/Generic/routineDisplay";

export default function Routine() {
  return (
    <SafeAreaView style={styles.container}>
      <RoutineDisplay time={"Morning"} />
      <RoutineDisplay time={"Afternoon"} />
      <RoutineDisplay time={"Evening"} />

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
