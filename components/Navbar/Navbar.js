import { StyleSheet, View, Text } from "react-native";
import React from "react";
import MenuIcon from "@mui/icons-material/Menu";

import { useState } from "react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <View style={styles.container}>
      <View style={styles.left}>
        <Text style={{ color: "white" }}>PM</Text>
      </View>
      <View style={styles.right} onClick={() => setMenuOpen(!menuOpen)}>
        <MenuIcon style={styles.icon} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#77567A",
    width: "100%",
    flexDirection: "row",
    height: "50px",
  },
  left: {
    display: "flex",
    alignItems: "center",
    borderColor: "blue",
  },
  right: {
    display: "flex",
  },
  hamburger: {
    width: "32px",
    height: "25px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    cursor: "pointer",
  },
  icon: {
    color: "white",
  },
});

export default Navbar;
