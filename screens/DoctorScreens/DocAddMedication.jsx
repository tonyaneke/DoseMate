import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { WHITE } from "../../constants/styles";

export default function DocAddMedication() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Coming soon</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: WHITE,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 30,
    fontFamily: "RobotoSlab_X",
  },
});
