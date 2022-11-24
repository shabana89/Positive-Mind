import AddCircleIcon from "@mui/icons-material/AddCircle";
import {
  StyleSheet,
  View,
  Text,
  Button,
  TextInput,
  ScrollView,
} from "react-native";
import Dialog, {
  DialogContent,
  DialogButton,
  DialogTitle,
} from "react-native-popup-dialog";
import { useState } from "react";
import { height } from "@mui/system";

export default function PMButton({ handleClick, text }) {
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
        containerStyle={styles.popup}
        visible={popup.visible}
        onTouchOutside={() => {
          setPopup({ visible: false });
        }}
        width="75%"
        height="20%"
      >
        <ScrollView>
          <DialogTitle
            style={styles.popupTitle}
            textStyle={{ color: "#FFFCF7" }}
            title={text}
          ></DialogTitle>
          <TextInput style={styles.input} multiline={true} maxLength={100} />
          <DialogButton
            style={styles.dialogButton}
            text="Save"
            textStyle={{ color: "#FFFCF7" }}
            onPress={handleClick}
          />
        </ScrollView>
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
  popup: {
    backgroundColor: "#FFFCF7",
    alignItems: "center",
    justifyContent: "center",
    borderColor: "#77567A",
  },
  popupTitle: {
    backgroundColor: "#77567A",
    color: "#FFFCF7",
  },
  dialogButton: {
    backgroundColor: "#77567A",
    color: "#FFFCF7",
    maxHeight: "10%",
    width: "30%",
    top: "10%",
    borderRadius: "20px",
  },
  input: {
    width: "80%",
    height: "30%",
    borderColor: "#77567A",
    borderWidth: "2px",
    alignSelf: "center",
    marginTop: "20px",
    borderRadius: "15px",
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
