import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import PMButton from "./components/Generic/Button";

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Hello!</Text>
      <PMButton />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#666",
    alignItems: "center",
    justifyContent: "center",
  },
});
