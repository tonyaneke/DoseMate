import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import RNPickerSelect from "react-native-picker-select";
import { Greyscale, Spacing, WHITE } from "../../constants/styles"; // Import your style constants

const styles = StyleSheet.create({
  container: {
    borderWidth: 2,
    borderColor: Greyscale.FOUR,
    backgroundColor: WHITE,
    height: 50,
    borderRadius: 4,
    fontFamily: "OpenSans_SB",
    justifyContent: "space-between",
    paddingHorizontal: Spacing.TWO,
    color: Greyscale.SEVEN,
    flexDirection: "row",
  },
  pickerContainer: {
    // Style for the dropdown container
    flex: 1,
    justifyContent: "center",
  },
  picker: {
    // Style for the dropdown input
    inputIOS: {
      fontSize: 16,
      paddingVertical: 12,
      paddingHorizontal: 10,
      color: "black",
    },
    inputAndroid: {
      fontSize: 16,
      paddingVertical: 12,
      paddingHorizontal: 10,
      color: "black",
    },
  },
});

const Select = ({ items }) => {
  const [selectedValue, setSelectedValue] = useState(null);

  return (
    <View style={styles.container}>
      <Text>{selectedValue}</Text>
      <View style={styles.pickerContainer}>
        <RNPickerSelect
          style={styles.picker}
          onValueChange={(value) => setSelectedValue(value)}
          items={items}
          placeholder={{ label: "Select an option", value: null }}
        />
      </View>
    </View>
  );
};

export default Select;
