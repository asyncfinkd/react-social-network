import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, View, Text } from "react-native";
import DogeIcon from "./src/assets/icons/DogeIcon";

export default function App() {
  return (
    <>
      <View style={styles.container}>
        <DogeIcon />
        <View style={styles.content}>
          <View style={styles.contentTitles}>
            <Text style={styles.contentTitle}>Welcome</Text>
          </View>
        </View>
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
  content: {
    backgroundColor: "#151a21",
    width: "90%",
    height: 424,
    marginTop: 30,
    borderRadius: 8,
    padding: 40,
    display: "flex",
    flexDirection: "column",
  },
  contentTitles: {
    display: "flex",
    flexDirection: "column",
  },
  contentTitle: {
    marginTop: 4,
    fontSize: 18,
    color: "#dee3ea",
  },
});
