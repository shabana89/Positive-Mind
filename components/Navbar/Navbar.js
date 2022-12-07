import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import SideMenu from "./SideMenu";

import { useState } from "react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <View style={styles.container}>
      <View style={styles.left}>
        <Text style={{ color: "white" }}>PM</Text>
      </View>
      <TouchableOpacity
        style={styles.right}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <MenuIcon style={styles.icon} />
        {menuOpen ? <SideMenu /> : null}
      </TouchableOpacity>
    </View>
  );
}
// conditional rendering
//  (menuOpen) ? <Menu /> : null

const styles = StyleSheet.create({
  container: {
    display: "flex",

    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#77567A",
    width: "100%",
    flexDirection: "row",
    height: "55px",
    marginBottom: "15px",
  },
  left: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderColor: "blue",
    borderWidth: "1px",
    height: "40px",
    width: "40px",
    marginTop: "5px",
    marginLeft: "15px",
  },
  right: {
    borderColor: "red",
    borderWidth: "1px",
    marginTop: "5px",
    marginRight: "15px",
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
    height: "40px",
    width: "40px",
  },
});

export default Navbar;
