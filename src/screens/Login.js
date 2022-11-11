import React from "react";
import { View, Text, StyleSheet, Image, ImageBackground } from "react-native";
import Button from "../components/Button";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Login({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.containerWrapper}>
        <ImageBackground
          source={require("../../assets/images/login.jpg")}
          resizeMode="cover"
          style={styles.loginImage}
        >
          <View style={styles.wrapper}>
            <View style={styles.logoContainer}>
              <Image
                source={require("../../assets/images/logo.png")}
                style={{ width: 200, height: 60 }}
              />
              <Text style={styles.Text}>LET'S GET STARTED</Text>
            </View>
            <View style={styles.buttonContainer}>
              <Button
                title="Sign In"
                onClickHandler={() => navigation.navigate("My Tabs")}
              ></Button>
              <Button
                title="Sign Up"
                onClickHandler={() => navigation.navigate("My Tabs")}
              ></Button>
            </View>
          </View>
        </ImageBackground>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
  },
  containerWrapper: {
    flex: 1,
    flexDirection: "row",
  },
  Text: {
    color: "#fff",
    letterSpacing: 1.5,
    marginTop: "5%",
  },
  logoContainer: {
    width: "100%",
    alignItems: "center",
  },
  loginImage: {
    flex: 1,
  },
  buttonContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  wrapper: {
    height: "100%",
    justifyContent: "space-around",
  },
});
