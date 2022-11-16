import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";
import { Feather } from "@expo/vector-icons";
function SettingsCard({ navigation, title, iconName }) {
  return (
    <View style={styles.settings_Container}>
      <TouchableOpacity
        style={styles.settings_fields}
        onPress={() => {
          navigation.navigate(title);
        }}
      >
        <Feather name={iconName} size={24} color="#eee" />
        <Text style={styles.settings_text}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
}

export default SettingsCard;

const styles = StyleSheet.create({
  settings_Container: {
    alignItems: "center",
    paddingLeft: "4%",
    marginVertical: "1%",
  },
  settings_fields: {
    width: "100%",
    paddingLeft: "4%",
    alignItems: "center",
    flexDirection: "row",
    height: 64,
  },
  settings_text: {
    fontSize: 16,
    color: "#eee",
    paddingLeft: 14,
  },
});
