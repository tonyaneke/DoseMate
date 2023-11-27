import { TouchableOpacity, Text, StyleSheet } from "react-native";
import React from "react";
import PropTypes from "prop-types";
import { Colors, Dark, Status } from "../../constants/styles";
import { useNavigation } from "@react-navigation/native";

export default function Button({ isDisabled, onPress, children, width }) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.btn,
        { width: width },
        isDisabled ? { backgroundColor: Status.DISABLED } : {},
      ]}
    >
      <>{children}</>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  btn: {
    backgroundColor: Colors.PRIMARY_COLOR,
    height: 60,
    borderRadius: 4,
    justifyContent: "center",
    alignItems: "center",
  },
});

Button.proptypes = {
  width: PropTypes.number.isRequired,
};
