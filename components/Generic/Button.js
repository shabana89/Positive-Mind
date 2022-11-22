import AddCircleIcon from "@mui/icons-material/AddCircle";
import { StyleSheet, View, Text, Button } from "react-native";
import Dialog, { DialogContent } from "react-native-popup-dialog";
import { useState } from "react";

export default function PMButton({ clickFunction }) {
  function consoleLog() {
    console.log("clicked");
  }
  const [popup, setPopup] = useState(false);
  return (
    <View style={styles.container}>
      <AddCircleIcon
        style={{
          fill: "#77567A",
          height: "42px",
          width: "42px",
        }}
        onClick={() => {
          setPopup({ visible: true });
        }}
      />

      <Dialog
        visible={popup.visible}
        onTouchOutside={() => {
          setPopup({ visible: false });
        }}
      >
        <DialogContent>
          <Text>Text</Text>
        </DialogContent>
        <Button onClick={consoleLog}>Button</Button>
      </Dialog>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFFCF7",
    alignItems: "center",
    justifyContent: "center",
    borderColor: "#000000",
  },
});

/*
we now have a button that opens a popup dialog
we want each button to show a specific popup (ie morning for morning tasks etc)
we need 3 different popups X
hand down each popup as a prop to the button X
and we hand it down in routine display? X

hard code text and keep it general
inside the popup, there should be a button
when that button is clicked, it pushes the data to the correct libs 
that function or those functions is/are a prop that we hand down
*/
