import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Modal,
  StyleSheet,
  Button,
} from "react-native";
import { Greyscale } from "../../constants/styles";
import { AntDesign } from "@expo/vector-icons";

const Dropdown = ({
  options,
  setValue = () => {},
  setHeathCareProvider = () => {},
  placeholder = "Select an option",
}) => {
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  const selectOption = (option) => {
    setSelectedOption(option);
    setDropdownVisible(false);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.dropdownContainer}
        onPress={toggleDropdown}
      >
        <Text
          style={[
            styles.dropdownText,
            selectOption == null
              ? { color: Greyscale.ONE }
              : { color: Greyscale.NINE },
          ]}
        >
          {selectedOption || placeholder}
        </Text>
        <AntDesign name="caretdown" size={20} color="black" />
      </TouchableOpacity>

      <Modal
        transparent={true}
        animationType="fade"
        visible={dropdownVisible}
        onRequestClose={() => setDropdownVisible(false)}
      >
        <View style={styles.modalContainer}>
          <Button
            color={"white"}
            onPress={() => setDropdownVisible(false)}
            title="X"
          />
          {options?.map((option, index) => (
            <TouchableOpacity
              key={index}
              style={styles.option}
              onPress={() => {
                selectOption(option?.name);
                setHeathCareProvider(option?.id);
                setValue(option?.name);
              }}
            >
              <Text style={styles.text}>{option?.name}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 20,
  },
  dropdownContainer: {
    borderWidth: 2,
    borderColor: Greyscale.FOUR,
    backgroundColor: "white", // Replace with WHITE
    height: 50,
    width: "100%",
    borderRadius: 4,
    fontFamily: "OpenSans_R",
    justifyContent: "space-between",
    paddingHorizontal: 8, // Replace with Spacing.TWO
    color: "black", // Replace with Greyscale.SEVEN
    flexDirection: "row",
    alignItems: "center",
  },
  dropdownText: {
    color: Greyscale.FOUR, // Replace with Greyscale.SEVEN
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  option: {
    height: 50,
    width: "40%", // 50% of the screen width
    backgroundColor: "white",
    borderBottomWidth: 1,
    borderBottomColor: Greyscale.FOUR, // Replace with Greyscale.FOUR
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "black",
  },
});

export default Dropdown;
