import React from "react";
import { View, StyleSheet, Text, Image, TouchableOpacity } from "react-native";

function PopularCard() {
  return (
    <TouchableOpacity style={styles.wrapper}>
      <Image
        source={{
          uri: "https://i.pinimg.com/originals/db/db/ba/dbdbbad5798bfc3ff27a499dc5ca2b30.gif",
        }}
        resizeMode="cover"
        style={styles.cardInfo}
      />
      <View style={styles.cardWrapper}>
        <Text style={styles.cardHeader}>30 Best Movies on NETFLIX</Text>
      </View>
    </TouchableOpacity>
  );
}

export default PopularCard;

const styles = StyleSheet.create({
  wrapper: {
    borderRadius: 24,
    height: "24%",
  },
  cardInfo: {
    width: "100%",
    height: "100%",
    borderRadius: 24,
    overlayColor: "#000",
    position: "relative",
  },
  cardHeader: {
    color: "#eee",
    fontSize: 17,
    fontWeight: "bold",
  },
  cardWrapper: {
    position: "absolute",
    bottom: 18,
    left: 24,
  },
});
