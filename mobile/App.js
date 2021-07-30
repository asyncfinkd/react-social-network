import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, View } from "react-native";
import DogeIcon from "./src/assets/icons/DogeIcon";

export default function App() {
  return (
    <>
      <View style={styles.container}>
        <DogeIcon />
        <StatusBar style="auto" />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0b0e11",
    alignItems: "center",
    justifyContent: "center",
    color: "#fff",
  },
});
