import React from "react";
import { View, StyleSheet, Text, FlatList, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import PopularCard from "../components/PopularCard";
import popularList from "../../assets/data/popularList";
function Popular({ navigation }) {
  const renderPopularList = ({ item }) => {
    return (
      <PopularCard
        title={item.title}
        image={item.image}
        id={item.id}
        navigation={navigation}
        name="popularList"
      />
    );
  };
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={popularList}
        renderItem={renderPopularList}
        keyExtractor={(item) => item.id}
        ListHeaderComponent={
          <>
            <View style={styles.wrapper}>
              <Text style={[styles.Text, styles.title]}>Popular</Text>
            </View>
            <View style={styles.card}>
              <Text style={styles.text}>Suggestion for you</Text>
            </View>
          </>
        }
      />
    </SafeAreaView>
  );
}

export default Popular;

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
    paddingHorizontal: "1%",
  },
  text: {
    paddingTop: "4%",
    paddingBottom: "2%",
    paddingLeft: "7%",
    color: "#D71617",
    fontSize: 18,
  },
});
