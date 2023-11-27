import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Verification from "../Registration/Verification";
import Routes from "../../navigation/Routes";
import { useSelector } from "react-redux";

export default function LoginVerification() {
  const user = useSelector((state) => state.user);
  console.log(user.email);
  return (
    <>
      <Verification title="Forgot Password" route={Routes.ConfirmPassword} />
    </>
  );
}

const styles = StyleSheet.create({});
