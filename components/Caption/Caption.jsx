import { View, Text } from "react-native";
import React from "react";
import PropTypes from "prop-types";
import { useFonts } from "expo-font";
import { Body, Greyscale, Spacing } from "../../constants/styles";

export default function Caption({ content, textAlign = "center" }) {
  const [loaded] = useFonts({
    OpenSans_R: require("../../assets/fonts/opensans/OpenSans-Regular.ttf"),
  });

  if (!loaded) {
    return null;
  }
  return (
    <>
      <Text style={[styles.content, { textAlign: textAlign }]}>{content}</Text>
    </>
  );
}

const styles = {
  content: {
    fontFamily: "OpenSans_R",
    color: Greyscale.NINE,
    fontSize: Body.Large,
  },
};

Caption.proptypes = {
  content: PropTypes.string.isRequired,
};
