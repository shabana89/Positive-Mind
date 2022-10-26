import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import PMButton from "./components/Generic/Button";
import PMBox from "./components/Generic/Box";

export default function App() {
  function testFunction() {
    console.log("clicked");
  }

  return (
    <View style={styles.container}>
      <Text>Hello!</Text>
      <PMButton handleClick={testFunction} />
      {/* <PMBox task="test" /> */}
      <StatusBar style="auto" />
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
