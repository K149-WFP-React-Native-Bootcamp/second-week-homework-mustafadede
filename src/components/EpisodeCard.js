import React from "react";
import { View, StyleSheet } from "react-native";

function EpisodeCard() {
  return (
    <View style={styles.container}>
      <View style={styles.card}></View>
    </View>
  );
}

export default EpisodeCard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  card: {
    width: "100%",
    height: 640,
    backgroundColor: "#e67",
  },
});
