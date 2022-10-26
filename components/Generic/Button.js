import AddCircleIcon from "@mui/icons-material/AddCircle";
import { StyleSheet, View, Text } from "react-native";

export default function PMButton({ handleClick }) {
  return (
    <View style={styles.container}>
      <AddCircleIcon onClick={handleClick} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 0.05,
    backgroundColor: "#77567A",
    alignItems: "center",
    justifyContent: "center",
  },
});
