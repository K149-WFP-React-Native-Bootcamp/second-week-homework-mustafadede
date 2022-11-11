import React from "react";
import {
  Text,
  View,
  StyleSheet,
  ImageBackground,
  ScrollView,
  Image,
  FlatList,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import DATA from "../../assets/data/listData";
import reversedDATA from "../../assets/data/reversedListData";
import Card from "../components/Card";

function Home({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.top}>
          <ImageBackground
            source={require("../../assets/images/getout.jpg")}
            resizeMode="cover"
            style={styles.homeTopImage}
          >
            <View style={styles.headerLogo}>
              <Image
                style={{ width: "38%", height: "34%" }}
                resizeMode="contain"
                source={require("../../assets/images/logo.png")}
              />
            </View>
          </ImageBackground>
          <View style={styles.topImageInfoLeft}>
            <Text style={styles.ImageTitle}>GET OUT</Text>
            <View style={styles.ImageInfoContainer}>
              <Text style={[styles.Text, styles.InfoText]}>2017</Text>
              <Text style={[styles.Text, styles.InfoText]}>15+</Text>
              <Text style={[styles.Text, styles.InfoText]}>1h 44m</Text>
            </View>
          </View>
        </View>
        <View style={styles.mylistwrapper}>
          <Text style={[styles.Text, styles.middleHeader]}>My List</Text>
          <View style={styles.mylistdataWrapper}>
            <FlatList
              data={DATA}
              renderItem={({ item }) => (
                <Card
                  id={item.id}
                  title={item.title}
                  image={item.image}
                  navigation={navigation}
                  name="DATA"
                ></Card>
              )}
              keyExtractor={(item) => item.id}
              horizontal
              showHorizontalScrollIndicator={false}
              nestedScrollEnabled
            ></FlatList>
          </View>
        </View>
        <View style={styles.mylistwrapper}>
          <Text style={[styles.Text, styles.middleHeader]}>
            Top of the Week
          </Text>
          <View style={styles.mylistdataWrapper}>
            <FlatList
              data={reversedDATA}
              renderItem={({ item }) => (
                <Card
                  id={item.id}
                  title={item.title}
                  image={item.image}
                  navigation={navigation}
                  name="reversedDATA"
                ></Card>
              )}
              keyExtractor={(item) => item.id}
              horizontal
              showHorizontalScrollIndicator={false}
              nestedScrollEnabled
            ></FlatList>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
  },
  headerLogo: {
    alignItems: "center",
    justifyContent: "center",
  },
  Text: {
    color: "#eee",
  },
  top: {
    flex: 1,
    position: "relative",
  },
  homeTopImage: {
    flex: 1,
    height: 376,
  },
  topImageInfoLeft: {
    position: "absolute",
    bottom: 40,
    left: 27,
  },
  ImageTitle: {
    color: "#fff",
    fontSize: 27,
    fontWeight: "bold",
  },
  ImageInfoContainer: {
    width: "47%",
    flexDirection: "row",
  },
  InfoText: {
    paddingRight: 24,
  },
  mylistwrapper: {
    marginBottom: "28%",
    height: 240,
  },
  middleHeader: {
    marginTop: "4%",
    fontSize: 20,
    paddingHorizontal: 27,
  },
  mylistdataWrapper: {
    marginTop: "5%",
    height: 460,
  },
});

export default Home;
