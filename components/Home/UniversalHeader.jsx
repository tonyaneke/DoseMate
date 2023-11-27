import {
  StyleSheet,
  Text,
  Touchable,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import Header from "../Header/Header";
import { HEADING6 } from "../../constants/styles";
import { useNavigation } from "@react-navigation/native";

export default function ({ header = "Profile" }) {
  const navigation = useNavigation();

  return (
    <View>
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={styles.backBtn}
      >
        <AntDesign name="left" size={24} color="black" />
      </TouchableOpacity>
      <View style={styles.profile}>
        <Header title={header} fontSize={HEADING6} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  backBtn: {
    width: 40,
    height: 40,
    left: 5,

    alignItems: "center",
    justifyContent: "center",
  },
  profile: {
    marginTop: -30,
  },
});
