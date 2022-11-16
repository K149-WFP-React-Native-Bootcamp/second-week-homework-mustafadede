import React from "react";
import { View, StyleSheet, Text, Image, TouchableOpacity } from "react-native";

function PopularCard({ title, image, id, navigation }) {
  return (
    <TouchableOpacity
      style={styles.wrapper}
      onPress={() => {
        navigation.navigate("Details", {
          id: id,
          name: title,
        });
      }}
    >
      <Image
        source={{
          uri: `${image}`,
        }}
        resizeMode="cover"
        style={styles.cardInfo}
      />
      <View style={styles.cardWrapper}>
        <Text style={styles.cardHeader}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
}

export default PopularCard;

const styles = StyleSheet.create({
  wrapper: {
    marginHorizontal: "5%",
    marginVertical: "4%",
    borderRadius: 24,
    height: 164,
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
