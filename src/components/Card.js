import React from "react";
import { Text, TouchableOpacity, View, StyleSheet, Image } from "react-native";

function Card({ name, id, title, image, tabBarInfo, navigation }) {
  return (
    <TouchableOpacity
      style={styles.cardContainer}
      onPress={() =>
        navigation.navigate("Details", {
          name: name,
          id: id,
        })
      }
    >
      <View style={tabBarInfo ? styles.searchCard : styles.card}>
        <Image source={{ uri: image }} style={styles.image}></Image>
        <Text style={styles.Text}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    borderRadius: 24,
    marginVerticaly: 24,
    marginBottom: "5%",
    paddingHorizontal: 4,
  },
  card: {
    width: 190,
    paddingLeft: 27,
    paddingLeft: 27,
  },
  searchCard: {
    width: 190,
  },
  image: {
    width: 180,
    height: 240,
    borderRadius: 24,
    marginBottom: 5,
  },
  Text: {
    marginTop: "5%",
    color: "#eee",
  },
});

export default Card;
