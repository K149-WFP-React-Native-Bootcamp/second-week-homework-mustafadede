import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet } from "react-native";
import React from "react";
import Index from "./src/navigation/Index";

export default function App() {
  return <Index />;
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
  },
});
