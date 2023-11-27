import { StyleSheet, Text, View } from "react-native";
import React from "react";
import FirstTimeUsers from "../AddMedicationScreens/FirstTimeUsers";

export default function AddMedication() {
  return (
    <View style={styles.container}>
      <FirstTimeUsers />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
