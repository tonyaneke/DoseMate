import React, { useState } from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { Greyscale, Spacing, WHITE } from "../constants/styles";

const Calendar = ({ setDOB, calculateAge }) => {
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [dateOfBirth, setDateOfBirth] = useState("");

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date) => {
    const longDate = date.toString();
    const shortDate = longDate.split("T");
    console.log("A date has been picked: ", shortDate[0]);
    const part = shortDate[0].split(" ");

    // Combine the date parts into a new string
    const datePart = `${part[0]} ${part[1]} ${part[2]} ${part[3]}`;
    setDateOfBirth(datePart);
    setDOB(dateOfBirth);
    const parts = dateOfBirth.split(" ");

    // Find the part that represents the year
    const yearPart = parts.find((part) => /^\d{4}$/.test(part));

    // Extract the year
    const year = parseInt(yearPart, 10);

    console.log("Year:", year);
    const age = calculateAge(year);
    console.log(dateOfBirth);
    hideDatePicker();
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={{
          width: "100%",
          color: Greyscale.FOUR,
          justifyContent: "center",
          height: "100%",
        }}
        onPress={showDatePicker}
      >
        <Text>{dateOfBirth ? dateOfBirth : "Date of Birth"}</Text>
      </TouchableOpacity>
      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="date"
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
      />
    </View>
  );
};

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
    alignItems: "flex-start",
  },
  input: {
    width: "100%",
  },
});

export default Calendar;
