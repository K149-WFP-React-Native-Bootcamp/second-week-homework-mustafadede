import React from "react";
import { View, StyleSheet } from "react-native";
import EpisodeCard from "./EpisodeCard";

function Episode() {
  return (
    <View style={styles.container}>
      <View style={styles.episodeWrapper}></View>
      <EpisodeCard />
      <EpisodeCard />
      <EpisodeCard />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  episodeWrapper: {
    width: "100%",
    height: 940,
    backgroundColor: "#e67",
  },
});
export default Episode;
