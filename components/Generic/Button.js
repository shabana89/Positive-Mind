import AddCircleIcon from "@mui/icons-material/AddCircle";
import { View, Text } from "react-native";

export default function PMButton(handleClick) {
  return (
    <View>
      <AddCircleIcon onClick={handleClick} />
    </View>
  );
}
