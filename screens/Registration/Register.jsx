import React, { useEffect, useRef, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  KeyboardAvoidingView,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import {
  HEADING6,
  HEADING1,
  Spacing,
  WHITE,
  Colors,
} from "../../constants/styles";
import { useNavigation } from "@react-navigation/native";
import Header from "../../components/Header/Header";
import Caption from "../../components/Caption/Caption";
import { StatusBar } from "expo-status-bar";
import Button from "../../components/Button/Button";
import { useFonts } from "expo-font";
import Input from "../../components/Input/Input";
import Dropdown from "../../components/Dropdown/Dropdown";
import Routes from "../../navigation/Routes";
import axios from "axios";
import signup from "../../services/api";

const API_URL = "https://health-app.olajide23.com.ng/api";

export default function Register() {
  const [fullname, setFullname] = useState("");
  const [data, setData] = useState();
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [hospitalId, setHospitalId] = useState("");
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const navigation = useNavigation();

  const handleFullname = (value) => {
    setFullname(value);
  };

  const handleSignup = async () => {
    try {
      let names = fullname.split(" ");
      let firstName = names[0];
      let lastName = names[1];
      // API endpoint for signup
      const apiUrl =
        "http://health-app.olajide23.com.ng/api/auth/patients/register";

      // Request body
      const requestBody = {
        first_name: firstName,
        last_name: lastName,
        email: email,
        phone: phoneNumber,
        hospital_id: hospitalId,
        password: password,
        password_confirmation: confirmPassword,
      };

      // Making a POST request to the API
      const response = await axios.post(apiUrl, requestBody);

      if (response.status === 201) {
        setError("");
        setSuccess("You have successfully registered");
        setTimeout(() => navigation.navigate(Routes.Login), 3000);
      }

      if (response.status !== 201) {
        throw new Error(`Received unexpected status code: ${response.status}`);
      }

      // Handling the API response
    } catch (error) {
      // Error handling for network issues or unexpected errors
      console.error("Signup error:", error.message);
      setError(error);
    }
  };
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${API_URL}/hospitals`);

        setData(response.data.data);
      } catch (error) {
        // Handle errors
        setError(error.message);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <KeyboardAvoidingView
        behavior="margin"
        keyboardVerticalOffset={80}
        style={styles.keyboard}
      >
        <ScrollView contentContainerStyle={styles.container} bounces={true}>
          <StatusBar style="auto" />

          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={styles.backBtn}
          >
            <AntDesign name="left" size={24} color="black" />
          </TouchableOpacity>
          <View style={styles.topBarHeader}>
            <Header title={"Register"} fontSize={HEADING6} />
          </View>
          <View style={styles.header}>
            <Header
              title={"Create an Account"}
              fontSize={HEADING1}
              textAlign={"left"}
            />
          </View>
          <View style={styles.text}>
            <Caption
              content={"Please fill in your details"}
              textAlign={"left"}
            />
          </View>
          <View style={styles.input}>
            <Input placeholder={"Full Name"} onChangeText={handleFullname} />
          </View>
          <View style={styles.input}>
            <Input
              onChangeText={(value) => setEmail(value)}
              placeholder={"Email address"}
              keyboardType="email-address"
            />
          </View>
          <View style={styles.input}>
            <Input
              onChangeText={(value) => setPhoneNumber(value)}
              placeholder={"Phone Number"}
              keyboardType="number-pad"
            />
          </View>
          <View style={styles.input}>
            <Dropdown options={data} setHeathCareProvider={setHospitalId} />
          </View>
          <View style={styles.input}>
            <Input
              onChangeText={(value) => setPassword(value)}
              placeholder={"Password"}
              password={true}
              secureTextEntry={true}
            />
          </View>
          <View style={[styles.input, { marginBottom: Spacing.NINE }]}>
            <Input
              onChangeText={(value) => setConfirmPassword(value)}
              placeholder={"Confirm Password"}
              password={true}
              secureTextEntry={true}
            />
          </View>
          {error.length > 0 && <Text style={styles.error}>{error}</Text>}
          {success.length > 0 && <Text style={styles.success}>{success}</Text>}
          <Text style={styles.bottomTxt1}>
            By registering, you agreed to{" "}
            <Text style={styles.bottomTxt2}>
              {" "}
              DoseMate’s Terms and Privacy Policy{" "}
            </Text>
          </Text>
          <View style={styles.btn}>
            <Button
              isDisabled={
                fullname.length <= 2 ||
                email.length <= 5 ||
                password.length < 8 ||
                password !== confirmPassword
              }
              onPress={handleSignup}
              // onPress={async () => {
              //   try {
              //     // Move splitting logic here to capture the latest fullname
              //     let names = fullname.split(" ");
              //     let firstName = names[0];
              //     let lastName = names[1];

              //     const user = await signup(
              //       firstName,
              //       lastName,
              //       hospitalId,
              //       phoneNumber,
              //       email,
              //       password,
              //       confirmPassword
              //     );
              //     console.log(user);
              //     if (user.error) {
              //       setError(user.error);
              //     } else {
              //       setError("");
              //       setSuccess("You have successfully registered");
              //       setTimeout(() => navigation.navigate(Routes.Login), 3000);
              //     }
              //   } catch (error) {
              //     console.error("Registration error", error.message);
              //   }
              // }}
            >
              <Text style={styles.btnText}>Register</Text>
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
    padding: 3,
    backgroundColor: WHITE,
    width: 30,
    borderRadius: 7.5,
    justifyContent: "center",
    alignItems: "center",
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
  },
  input: {
    marginHorizontal: Spacing.THREE,
    marginBottom: Spacing.TWO,
  },
  bottomTxt1: {
    textAlign: "center",
    marginHorizontal: Spacing.THREE,
  },
  bottomTxt2: {
    // fontFamily: "OpenSans_R",
    color: Colors.SECONDARY_COLOR,
    fontWeight: "700",
  },
  btn: {
    marginHorizontal: Spacing.THREE,
    marginTop: Spacing.TWO,
  },
  btnText: {
    // fontFamily: "RobotoSlab_X",
    fontWeight: "700",
    color: WHITE,
    fontSize: HEADING6,
  },
  error: {
    fontWeight: "700",
    color: "red",
    marginLeft: Spacing.FOUR,
    bottom: Spacing.SIX,
  },
  success: {
    fontWeight: "700",
    color: "green",
    marginLeft: Spacing.FOUR,
    bottom: Spacing.SIX,
  },
});
