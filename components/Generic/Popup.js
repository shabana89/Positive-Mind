import React from "react";
import Dialog, { DialogContent } from "react-native-popup-dialog";
import { Button } from "react-native";
import { SafeAreaView, StyleSheet, TextInput, Text, View } from "react-native";
import { useState } from "react";

export default function Popup() {
  const [popup, setPopup] = useState(false);

  return (
    <View style={styles.container}>
      <Button
        title="Show Dialog"
        onPress={() => {
          setPopup({ visible: true });
        }}
      />
      <Dialog
        visible={popup.visible}
        onTouchOutside={() => {
          setPopup({ visible: false });
        }}
      >
        <DialogContent>Hello</DialogContent>
      </Dialog>
    </View>
  );
}

// function Popup() {
//   const [text, onChangeText] = useState("");

//   return (
//     <SafeAreaView style={styles.container}>
//       <Text style={styles.text}>Add to your todo list!</Text>
//       <TextInput
//         style={styles.input}
//         onChangeText={onChangeText}
//         value={text}
//         multiline={true}
//         maxLength={70}
//       />
//     </SafeAreaView>
//   );
// }

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  container: {
    borderWidth: 2,
    height: 100,
    display: "flex",
    justifyContent: "center",
    width: 300,
    alignItems: "center",
    borderRadius: "20px",
    borderColor: "#77567A",
  },
  text: {
    color: "#77567A",
    fontWeight: "bold",
  },
});

// export default Popup;
