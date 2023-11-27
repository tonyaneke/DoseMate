import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Profile from "../MainScreen/Profile";

export default function DocProfile() {
  return (
    <>
      <Profile
        name="Dr Precious Abuo"
        card={false}
        imgUrl={require("../../assets/images/avatar.jpeg")}
      />
    </>
  );
}

const styles = StyleSheet.create({});
