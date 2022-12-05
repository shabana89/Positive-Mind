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

export default function PMButton({
  text,
  setUserInput,
  addUserInput,
  popup,
  setPopup,
}) {
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
          <TextInput
            style={styles.input}
            multiline={true}
            maxLength={38}
            onChangeText={setUserInput}
          />
          <DialogButton
            style={styles.dialogButton}
            text="Save"
            textStyle={{ color: "#FFFCF7" }}
            onPress={addUserInput}
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
set up state to record the value of the text in the input field 
as user types, the state is updated via the setState function
as button is pressed, state is pushed to libs? 
map through the libs and display the tasks 
*/
