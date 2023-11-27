import {
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import {
  Background,
  Colors,
  HEADING3,
  Spacing,
  WHITE,
} from "../../constants/styles";
import { Feather } from "@expo/vector-icons";
import Header from "../Header/Header";
import Button from "../Button/Button";

export default function MedicationCard() {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.dismiss}>
        <Feather name="x" size={14} color="black" />
      </TouchableOpacity>
      <View style={styles.header}>
        <Header title={"Prednisolone 500mg"} />
      </View>
      <View style={styles.time}>
        <Header title={"5:30 PM"} fontSize={HEADING3} />
      </View>
      <View style={styles.buttons}>
        <TouchableOpacity style={styles.snoozeBtn}>
          <Text style={styles.snoozeBtnText}>Snooze</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.takeBtn}>
          <Text style={styles.btnText}>Take</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 160,
    width: "100%",
    borderWidth: 1,
    borderColor: Colors.PRIMARY_COLOR,
    backgroundColor: Background.GREEN,
    borderRadius: 10,
    ...Platform.select({
      ios: {
        shadowColor: ["rgba(0, 0, 0, 0.16)", "rgba(255, 0, 0, 0.5)"], // Add multiple shadow colors
        shadowOffset: {
          width: 0,
          height: 4,
        },
        shadowOpacity: 0.3,
        shadowRadius: 8,
      },
      android: {
        elevation: 4,
      },
    }),
  },
  dismiss: {
    justifyContent: "center",
    alignItems: "center",
    padding: 5,
    width: 24,
    height: 24,
    marginLeft: 14,
    marginTop: 14,
  },
  header: {
    position: "absolute",
    width: "100%",
    top: 16,
    justifyContent: "center",
    alignItems: "center",
  },
  time: {
    marginVertical: 10,
  },
  buttons: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: Spacing.FOUR,
    marginBottom: 10,
  },
  btnText: {
    fontFamily: "RobotoSlab_X",
    color: WHITE,
  },
  snoozeBtnText: {
    fontFamily: "RobotoSlab_X",
    color: Colors.PRIMARY_COLOR,
  },
  snoozeBtn: {
    width: 100,
    height: 50,
    borderWidth: 2,
    borderColor: Colors.PRIMARY_COLOR,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 4,
  },
  takeBtn: {
    width: 100,
    height: 50,

    backgroundColor: Colors.PRIMARY_COLOR,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 4,
  },
});
