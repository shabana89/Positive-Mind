import AddCircleIcon from "@mui/icons-material/AddCircle";
import { StyleSheet, View, Text } from "react-native";

export default function PMButton({ handleClick }) {
  return (
    <View style={styles.container}>
      <AddCircleIcon style={{ fill: "#77567A" }} onClick={handleClick} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 0.04,
    backgroundColor: "#FFFCF7",
    alignItems: "center",
    justifyContent: "center",
  },
});
