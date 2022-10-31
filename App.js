import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Routine from "./screens/Routine/Routine";

export default function App() {
  function testFunction() {
    console.log("clicked");
  }

  return (
    <View style={styles.container}>
      <Routine />
    </View>
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
