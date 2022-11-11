import React from "react";
import { Text, StyleSheet, TouchableOpacity } from "react-native";

const Button = (props) => {
  return (
    <TouchableOpacity style={styles.container} onPress={props.onClickHandler}>
      <Text style={styles.text}>{props.title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 270,
    height: 48,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#D71617",
    borderRadius: 24,
    marginBottom: "5%",
  },
  text: {
    color: "#fff",
    fontSize: 16,
  },
});

export default Button;
