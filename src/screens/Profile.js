import React from "react";
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { Feather } from "@expo/vector-icons";
import Download from "./Download";
import Bookmark from "./Bookmark";
import Account from "./Account";
import { SafeAreaView } from "react-native-safe-area-context";

const Tab = createMaterialTopTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Bookmark"
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
      <Tab.Screen name="Download" component={Download} />
      <Tab.Screen name="Bookmark" component={Bookmark} />
      <Tab.Screen name="Account" component={Account} />
    </Tab.Navigator>
  );
}

function Profile() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.profileArea}>
          <View style={styles.navbar}>
            <TouchableOpacity>
              <Feather name="settings" size={32} color="white"></Feather>
            </TouchableOpacity>
          </View>
          <View style={styles.profileCard}>
            <Text style={styles.profileName}>Mustafa</Text>
            <Image
              source={require("../../assets/images/profile.jpg")}
              style={{ width: 100, height: 100 }}
              borderRadius={50}
            ></Image>
          </View>
          <MyTabs />
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
  profileArea: {
    flex: 1,
  },
  Text: {
    color: "#eee",
  },
  navbar: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "flex-end",
    paddingHorizontal: "7%",
  },
  profileCard: {
    width: "100%",
    alignItems: "center",
    paddingTop: "3%",
    marginBottom: "8%",
  },
  profileName: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
    marginBottom: "4%",
  },
});

export default Profile;
