import React from "react";
import { View, StyleSheet, Text, FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import PopularCard from "../components/PopularCard";
function Liked() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.wrapper}>
        <Text style={[styles.Text, styles.title]}>Popular</Text>
      </View>
      <View style={styles.card}>
        <Text style={styles.text}>Suggestion for you</Text>
        <PopularCard />
      </View>
    </SafeAreaView>
  );
}

export default Liked;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
  },
  Text: {
    color: "#eee",
  },
  wrapper: {
    paddingTop: "4%",
    alignItems: "center",
  },
  title: {
    fontSize: 32,
  },
  card: {
    flex: 1,
    width: "100%",
    height: "14%",
    paddingHorizontal: "8%",
  },
  text: {
    marginVertical: "4%",
    color: "#D71617",
    fontSize: 18,
  },
});
