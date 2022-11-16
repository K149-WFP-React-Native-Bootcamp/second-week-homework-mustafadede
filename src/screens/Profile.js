import React from "react";
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import SettingsCard from "../components/SettingsCard";
import { Feather } from "@expo/vector-icons";

function Profile({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.profileArea}>
          <View style={styles.navbar}>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("Account");
              }}
              style={styles.settingsIcon}
            >
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
        </View>
        <SettingsCard
          iconName={"download"}
          navigation={navigation}
          title={"Download"}
        />
        <SettingsCard
          iconName={"bookmark"}
          navigation={navigation}
          title={"Bookmark"}
        />
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
  settingsIcon: {
    marginTop: "4%",
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
