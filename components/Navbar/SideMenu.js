import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { useState } from "react";
import { Link } from "@react-navigation/native";

function SideMenu() {
  return (
    <View style={styles.container}>
      <Link>
        <Text style={styles.text}>Daily Habit Tracker</Text>
      </Link>
      <Link>
        <Text style={styles.text}>Goals</Text>
      </Link>
      <Link>
        <Text style={styles.text}>Logout</Text>
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    width: "60%",
    height: "100%",
  },
  text: {
    color: "white",
  },
});

export default SideMenu;
