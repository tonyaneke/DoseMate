import { StyleSheet, Text, TouchableOpacity, Alert, View } from "react-native";
import React, { useState } from "react";
import Header from "../../components/Header/Header";
import {
  HEADING6,
  HEADING1,
  Spacing,
  WHITE,
  Colors,
} from "../../constants/styles";
import Caption from "../../components/Caption/Caption";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import Routes from "../../navigation/Routes";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import axios from "axios";
import { saveToAsyncStorage } from "../../services/asyncStorage";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigation = useNavigation();

  const handleLogin = async () => {
    try {
      const apiUrl = "http://health-app.olajide23.com.ng/api/auth/login";

      const requestBody = {
        email,
        password,
      };

      const response = await axios.post(apiUrl, requestBody);

      console.log(response.data);
      if (response.status === 200) {
        Alert.alert("Success", "Login successful!");
        await saveToAsyncStorage("userData", response.data);
        setTimeout(() => navigation.navigate("Main"), 3000);
      }
      if (response.status !== 200) {
        // API response indicates login failure
        Alert.alert("Error", response.data.error || "Credentials incorrect");
        throw new Error(`Received unexpected status code: ${response.status}`);
      }
    } catch (error) {
      // Error handling for network issues, unexpected errors, or non-200 status codes
      console.error("Login error:", error.message);
      Alert.alert("Error", "Something went wrong. Please try again.");
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => navigation.navigate(Routes.GetStarted)}
        style={styles.backBtn}
      >
        <AntDesign name="left" size={24} color="black" />
      </TouchableOpacity>
      <View style={styles.topBarHeader}>
        <Header title={"Login"} fontSize={HEADING6} />
      </View>
      <View style={styles.header}>
        <Header title={"Welcome Back"} fontSize={HEADING1} textAlign={"left"} />
      </View>
      <View style={styles.text}>
        <Caption content={"Please fill in your details"} textAlign={"left"} />
      </View>
      <View style={styles.input}>
        <Input
          placeholder={"Email address"}
          onChangeText={(value) => {
            setEmail(value);
          }}
        />
      </View>
      <View style={styles.input}>
        <Input
          secureTextEntry={true}
          placeholder={"Password"}
          password={true}
          onChangeText={(value) => setPassword(value)}
        />
      </View>
      <TouchableOpacity
        onPress={() => navigation.navigate(Routes.LoginVerification)}
      >
        <Text style={styles.forgotPass}>Forget Password</Text>
      </TouchableOpacity>
      <View style={styles.btn}>
        <Button onPress={handleLogin}>
          <Text style={styles.btnText}>Login</Text>
        </Button>
      </View>
    </View>
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
    borderColor: "grey",
  },
  header: {
    marginLeft: Spacing.THREE,
    marginTop: Spacing.THREE,
  },
  text: {
    marginTop: Spacing.ONE,
    marginLeft: Spacing.THREE,
    marginRight: Spacing.FOUR,
    width: "80%",
    marginBottom: Spacing.SEVEN,
  },
  input: {
    marginHorizontal: Spacing.THREE,
    marginBottom: Spacing.TWO,
  },
  forgotPass: {
    fontWeight: "700",
    color: Colors.SECONDARY_COLOR,
    textAlign: "right",
    marginRight: Spacing.THREE,
  },
  btn: {
    marginHorizontal: Spacing.THREE,
    marginTop: Spacing.SIX,
  },
  btnText: {
    fontWeight: "700",
    fontSize: 16,
    color: WHITE,
    fontFamily: "RobotoSlab_X",
  },
});
