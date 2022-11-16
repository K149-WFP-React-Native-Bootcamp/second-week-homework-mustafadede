import React from "react";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
  ImageBackground,
  ScrollView,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { SafeAreaView } from "react-native-safe-area-context";
import DATA from "../../assets/data/listData";
import reversedDATA from "../../assets/data/reversedListData";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import Episode from "../components/Episode";
import Trailer from "../components/Trailer";
import Info from "../components/Info";
import popularList from "../../assets/data/popularList";

const Tab = createMaterialTopTabNavigator();

function MoreDetails() {
  return (
    <Tab.Navigator
      initialRouteName="Episode"
      screenOptions={{
        tabBarStyle: {
          backgroundColor: "#000",
        },
        tabBarActiveTintColor: "#eee",
        tabBarIndicatorStyle: {
          backgroundColor: "#eee",
        },
      }}
    >
      <Tab.Screen name="Episode" component={Episode} />
      <Tab.Screen name="Trailer" component={Trailer} />
      <Tab.Screen name="Info" component={Info} />
    </Tab.Navigator>
  );
}

const dataResult = (name, id, info) => {
  let res = "";
  let listName =
    name === "DATA"
      ? DATA
      : name === "reversedDATA"
      ? reversedDATA
      : popularList;

  listName.forEach((item) => {
    if (item.id === id) {
      res = info === "title" ? item.title : item.image;
    }
  });
  return res;
};

function Details({ route }) {
  const { name, id } = route.params;
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <ImageBackground
          resizeMode="cover"
          source={{ uri: dataResult(name, id, "image") }}
          style={styles.image}
          height={360}
        >
          <LinearGradient
            colors={["rgba(0,0,0,100)", "transparent"]}
            start={{ x: 0, y: 1 }}
            end={{ x: 0, y: 0.5 }}
            style={styles.background}
          />
          <View style={styles.Info}>
            <Text style={[styles.text, styles.title]}>
              {dataResult(name, id, "title")}
            </Text>
            <View style={styles.ImageInfoContainer}>
              <Text style={[styles.text, styles.InfoText]}>2017</Text>
              <Text style={[styles.text, styles.InfoText]}>15+</Text>
              <Text style={[styles.text, styles.InfoText]}>1h 44m</Text>
            </View>
          </View>
        </ImageBackground>
        <MoreDetails />
      </ScrollView>
    </SafeAreaView>
  );
}

export default Details;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
  },
  image: {
    width: "100%",
    height: 270,
    position: "relative",
  },
  background: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
  },
  text: {
    color: "#eee",
  },
  title: {
    fontSize: 28,
  },
  Info: {
    paddingLeft: "10%",
    position: "absolute",
    bottom: 45,
  },
  ImageInfoContainer: {
    position: "relative",
    top: 10,
    width: "47%",
    flexDirection: "row",
    marginTop: 4,
  },
  InfoText: {
    paddingRight: 24,
  },
});
