import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import Routine from "./screens/Routine/Routine";
import Navbar from "./components/Navbar/Navbar";

export default function App() {
  function testFunction() {
    console.log("clicked");
  }

  return (
    <SafeAreaView style={styles.container}>
      <Navbar />
      <Routine />
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
