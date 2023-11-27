import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Greyscale } from "../../constants/styles";
import { Ionicons } from "@expo/vector-icons";

export default function UploadImg() {
  return (
    <View style={styles.container}>
      <Ionicons
        name="person-circle-outline"
        size={24}
        color={Greyscale.SEVEN}
      />
      <Text style={styles.text}>Upload Image</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    borderWidth: 1,
    borderColor: Greyscale.FIVE,
    height: 60,
    borderRadius: 16,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
  },
  text: {
    color: Greyscale.SEVEN,
  },
});
