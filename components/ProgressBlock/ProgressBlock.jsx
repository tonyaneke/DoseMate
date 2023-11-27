import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Colors, Status } from "../../constants/styles";

function ProgressBlock({ active }) {
  return (
    <View
      style={[
        styles.block,
        active
          ? { backgroundColor: Colors.PRIMARY_COLOR }
          : { backgroundColor: Status.DISABLED },
      ]}
    ></View>
  );
}

export default function ProgressBar({ pages }) {
  return (
    <View style={styles.container}>
      {pages.map((el) => (
        <ProgressBlock active={el.active} />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  block: {
    height: 10,
    width: "22%",
    borderRadius: 5,
  },
  container: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
  },
});
