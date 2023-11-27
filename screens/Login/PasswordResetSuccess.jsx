import {
  StyleSheet,
  View,
  Image,
  Text,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { AntDesign } from "@expo/vector-icons";
import { HEADING1, HEADING6, Spacing, WHITE } from "../../constants/styles";
import Header from "../../components/Header/Header";
import Routes from "../../navigation/Routes";
import Caption from "../../components/Caption/Caption";
import Button from "../../components/Button/Button";

export default function PasswordResetSuccess({ navigation }) {
  const [email, setEmail] = useState("");
  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={styles.backBtn}
      >
        <AntDesign name="left" size={24} color="black" />
      </TouchableOpacity>
      <View style={styles.topBarHeader}>
        <Header title={"Success"} fontSize={HEADING6} />
      </View>
      <View style={styles.img}>
        <Image
          source={require("../../assets/illustration/Register/success.png")}
        />
      </View>
      <View style={styles.header}>
        <Header title={"Password Changed"} fontSize={HEADING1} />
      </View>
      <View style={styles.text}>
        <Caption content={"Your password has been changed successfully "} />
      </View>
      <View style={styles.btn}>
        <Button width={"100%"} route={Routes.Login}>
          <Text style={styles.btnText}>Login</Text>
        </Button>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: WHITE,
  },
  topBarHeader: {
    position: "absolute",
    top: Spacing.SIX + 10,
    flexDirection: "row",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  backBtn: {
    marginLeft: Spacing.THREE,
    top: 8,
  },
  img: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: Spacing.NINE,
  },
  header: {
    marginTop: Spacing.FOUR,
  },
  text: {
    marginHorizontal: Spacing.FIVE,
  },
  btnText: {
    fontSize: 16,
    fontWeight: "700",
    color: WHITE,
  },
  btn: {
    marginHorizontal: Spacing.FOUR,
    marginTop: Spacing.EIGHT,
  },
});
