import React, { useState } from "react";
import { Text, View, StyleSheet, TextInput, FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import DATA from "../../assets/data/listData";
import Card from "../components/Card";

export default function Search({ navigation }) {
  const [filteredData, setFilteredData] = useState("");

  function filteredSearch(text) {
    const filteredOriginalData = DATA.filter((item) => {
      if (item.title.toLowerCase().includes(text.toLowerCase())) {
        return item.title;
      }
    });
    setFilteredData(filteredOriginalData);
  }

  const renderData = ({ item }) => {
    return (
      <Card
        id={item.id}
        title={item.title}
        image={item.image}
        tabBarInfo={true}
        navigation={navigation}
        name="DATA"
      ></Card>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        ListHeaderComponent={
          <>
            <View style={styles.searchArea}>
              <Text style={[styles.Text, styles.searchAreaTitle]}>Search</Text>
              <TextInput
                style={styles.input}
                placeholder="Movie, Series ?"
                onChangeText={(e) => {
                  filteredSearch(e);
                }}
              ></TextInput>
            </View>
            <View style={styles.resultsWrapper}>
              <Text style={[styles.Text, styles.resultsTitle]}>Movies</Text>
            </View>
          </>
        }
        data={filteredData ? filteredData : DATA}
        renderItem={renderData}
        keyExtractor={(item) => item.id}
        style={styles.card}
        numColumns={2}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
  },
  searchArea: {
    width: "100%",

    marginBottom: "5%",
  },
  Text: {
    color: "#eee",
  },
  searchAreaTitle: {
    fontSize: 34,
  },
  input: {
    width: "95%",
    height: 48,
    marginTop: "5%",
    borderWidth: 1,
    paddingLeft: 18,
    backgroundColor: "#eee",
    borderRadius: 24,
  },
  resultsWrapper: {
    paddingLeft: "5%",
  },
  resultsTitle: {
    fontSize: 24,
  },
  card: {
    paddingHorizontal: "4%",
    paddingBottom: "10%",
  },
});
