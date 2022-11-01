import AddCircleIcon from "@mui/icons-material/AddCircle";
import { StyleSheet, View, Text } from "react-native";

export default function PMButton({ handleClick }) {
  return (
    <View style={styles.container}>
      <AddCircleIcon
        style={{
          fill: "#77567A",
          height: "42px",
          width: "42px",
        }}
        onClick={handleClick}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 0.1,
    backgroundColor: "#FFFCF7",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: "20px",
    maxWidth: "20px",
    borderColor: "#000000",
  },
});
