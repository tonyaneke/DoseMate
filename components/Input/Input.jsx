import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableWithoutFeedback,
  Pressable,
  Keyboard,
} from "react-native";
import React, { useState, useRef } from "react";
import { BLUE, Greyscale, Spacing, WHITE } from "../../constants/styles";
import PropTypes from "prop-types";
import PasswordSvg from "../Svg/PasswordSvg";
import { AntDesign } from "@expo/vector-icons";
import Dropdown from "../Dropdown/Dropdown";

export default function Input({
  keyboardType = "default",
  secureTextEntry = false,
  placeholder,
  password = false,
  onChangeText,
}) {
  const [value, setValue] = useState("");
  const [focus, setFocus] = useState(false);

  const inputRef = useRef(null);

  const handleFocus = () => {
    if (inputRef.current) {
      inputRef.current.focus();
      setFocus(true);
    }
  };
  const handleBlur = () => {
    if (inputRef.current) {
      inputRef.current.blur();
      setFocus(false);
    }
  };

  return (
    <Pressable
      // onPress={handlePress}
      style={[styles.container, focus ? { borderColor: BLUE } : {}]}
    >
      <TextInput
        returnKeyType="send"
        ref={inputRef}
        value={value}
        placeholder={placeholder}
        onChangeText={(value) => {
          setValue(value);
          onChangeText(value);
        }}
        style={styles.input}
        secureTextEntry={secureTextEntry}
        keyboardType={keyboardType}
        onFocus={handleFocus}
        onBlur={handleBlur}
      />
      <View style={styles.svg}>{password && <PasswordSvg />}</View>
    </Pressable>
  );
}

// Input.proptypes = {
//   type: PropTypes.string.isRequired,
//   keyboardType: PropTypes.string.isRequired,
//   secureTextEntry: PropTypes.boleean.isRequired,
//   placeholder: PropTypes.string.isRequired,
// };

const styles = StyleSheet.create({
  container: {
    borderWidth: 2,
    borderColor: Greyscale.FOUR,
    backgroundColor: WHITE,
    height: 50,
    borderRadius: 4,
    fontFamily: "OpenSans_R",
    justifyContent: "space-between",
    paddingHorizontal: Spacing.TWO,
    color: Greyscale.SEVEN,
    flexDirection: "row",
  },
  input: {
    width: "100%",
  },
  svg: {
    right: Spacing.THREE,
    justifyContent: "center",
    alignItems: "center",
  },
  dropdown: {
    position: "absolute",
    zIndex: 1000,
  },
});
