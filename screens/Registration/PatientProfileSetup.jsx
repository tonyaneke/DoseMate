import React, { useRef, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  KeyboardAvoidingView,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { HEADING6, HEADING1, Spacing, WHITE } from "../../constants/styles";
import { useNavigation } from "@react-navigation/native";
import Header from "../../components/Header/Header";
import Caption from "../../components/Caption/Caption";
import { StatusBar } from "expo-status-bar";
import Button from "../../components/Button/Button";
import { useFonts } from "expo-font";
import Input from "../../components/Input/Input";
import Dropdown from "../../components/Dropdown/Dropdown";
import UploadImg from "../../components/UploadImg/UploadImg";
import Calendar from "../../components/CalenderPicker";
import { useSharedState } from "../../BioDataContext";

export default function PatientProfileSetup() {
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [gender, setGender] = useState("");
  const [age, setAge] = useState(null);
  const [conditions, setConditions] = useState(null);
  const [allergies, setAllergies] = useState(null);
  const { bioData, setBioData } = useSharedState();

  const [loaded] = useFonts({
    RobotoSlab_X: require("../../assets/fonts/roboto/RobotoSlab-ExtraBold.ttf"),
    OpenSans_R: require("../../assets/fonts/opensans/OpenSans-SemiBold.ttf"),
  });
  const genders = [{ name: "Male" }, { name: "Female" }];
  const userType = [{ name: "Patient" }, { name: "Doctor" }];

  const navigation = useNavigation();

  if (!loaded) {
    return null;
  }

  function calculateAge(yearOfBirth) {
    const currentYear = new Date().getFullYear();

    const age = currentYear - yearOfBirth;
    setAge(age);
    return age;
  }

  const handleConditions = (value) => {
    const conditionArray = value?.split(",");
    setConditions(conditionArray);
  };

  const handleAllergies = (value) => {
    const allergiesArray = value?.split(",");
    setAllergies(allergiesArray);
  };

  const handleBioData = () => {
    const halfBio = {
      age: age,
      conditions: conditions,
      allergies: allergies,
      date_of_birth: dateOfBirth,
      gender: gender,
    };
    setBioData(halfBio);
    navigateT();
  };
  console.log(bioData);

  const navigateT = () => {
    navigation.navigate(Routes.SetupTwo);
  };

  return (
    <>
      <KeyboardAvoidingView
        behavior="margin"
        keyboardVerticalOffset={80}
        style={styles.keyboard}
      >
        <ScrollView contentContainerStyle={styles.container} bounces={false}>
          <StatusBar style="auto" />

          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={styles.backBtn}
          >
            {/* <AntDesign name="left" size={24} color="black" /> */}
          </TouchableOpacity>
          <View style={styles.topBarHeader}>
            <Header title={"Profile Set Up"} fontSize={HEADING6} />
          </View>
          <View style={styles.header}>
            <Header
              title={"Complete your Profile"}
              fontSize={HEADING1}
              textAlign={"left"}
            />
          </View>
          <View style={styles.text}>
            <Caption
              content={
                "To proceed, we required that you fill in the  details below"
              }
              textAlign={"left"}
            />
          </View>
          <View style={styles.upload}>
            <UploadImg />
          </View>
          <View style={styles.input}>
            <Dropdown
              options={genders}
              setValue={(value) => setGender(value)}
              placeholder={"Select Gender"}
            />
          </View>
          <View style={styles.input}>
            <Dropdown options={userType} placeholder={"I am a..."} />
          </View>
          <View style={styles.input}>
            <Calendar calculateAge={calculateAge} setDOB={setDateOfBirth} />
          </View>
          <View style={styles.input}>
            <Input
              onChangeText={handleConditions}
              placeholder={"Enter Medical Conditions with spaces"}
            />
          </View>
          <View style={styles.input}>
            <Input
              placeholder={"Enter Allergies with spaces"}
              onChangeText={(value) => {
                handleAllergies(value);
              }}
            />
          </View>

          <View style={styles.btn}>
            <Button onPress={handleBioData}>
              <Text style={styles.btnText}>Submit</Text>
            </Button>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Spacing.THREE,
    backgroundColor: WHITE,
    height: "100%",
  },
  topBarHeader: {
    position: "absolute",
    top: Spacing.SIX + 9,
    flexDirection: "row",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  backBtn: {
    marginLeft: Spacing.THREE,
    marginTop: Spacing.FIVE,
  },
  header: {
    marginLeft: Spacing.THREE,
    marginTop: Spacing.THREE,
  },
  keyboard: {
    flex: 1,
  },
  text: {
    marginLeft: Spacing.THREE,
    marginTop: Spacing.ONE,
    marginBottom: Spacing.FIVE,
    marginRight: Spacing.FIVE,
  },
  input: {
    marginHorizontal: Spacing.THREE,
    marginBottom: Spacing.FOUR,
  },

  btn: {
    marginHorizontal: Spacing.THREE,
    marginTop: Spacing.ONE,
  },
  btnText: {
    fontFamily: "RobotoSlab_X",
    color: WHITE,
    fontSize: HEADING6,
  },
  upload: {
    marginHorizontal: Spacing.THREE,
    marginBottom: Spacing.FIVE,
  },
});
