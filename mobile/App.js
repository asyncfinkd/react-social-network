import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <>
      <View style={styles.container}>
        <Text>Open up App.js to starts working on your app!</Text>
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
