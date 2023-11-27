import { View, Text, StyleSheet } from "react-native";
import React from "react";
import PropTypes from "prop-types";
import { useFonts } from "expo-font";
import { Dark, HEADING1, Spacing } from "../../constants/styles";

export default function Header({
  title,
  fontSize,
  color = "black",
  textAlign = "center",
}) {
  const [loaded] = useFonts({
    RobotoSlab_X: require("../../assets/fonts/roboto/RobotoSlab-Bold.ttf"),
    OpenSans_R: require("../../assets/fonts/opensans/OpenSans-Regular.ttf"),
  });

  if (!loaded) {
    return null;
  }

  return (
    <>
      <Text style={[styles.header, { fontSize: fontSize, textAlign, color }]}>
        {title}
      </Text>
    </>
  );
}

const styles = StyleSheet.create({
  header: {
    fontFamily: "RobotoSlab_X",
    color: Dark.Dark1,
  },
});

Header.proptypes = {
  title: PropTypes.string.isRequired,
  fontSize: PropTypes.number.isRequired,
};
