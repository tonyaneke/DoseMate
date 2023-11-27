import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import React from "react";
import {
  Colors,
  Greyscale,
  HEADING1,
  HEADING6,
  Spacing,
  WHITE,
} from "../../constants/styles";
import { AntDesign } from "@expo/vector-icons";
import Header from "../../components/Header/Header";
import Caption from "../../components/Caption/Caption";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import Routes from "../../navigation/Routes";
import { useNavigation } from "@react-navigation/native";

export default function Verification({
  title = "Verification",
  route = Routes.Success,
}) {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={styles.backBtn}
      >
        <AntDesign name="left" size={24} color="black" />
      </TouchableOpacity>
      <View style={styles.topBarHeader}>
        <Header title={title} fontSize={HEADING6} />
      </View>
      <View style={styles.header}>
        <Header title={"Verification Required"} fontSize={HEADING1} />
      </View>
      <View>
        <Caption content={"We sent a 4 digit-code to your Email"} />
        <Text style={styles.email}>emmanuel@gmail.com</Text>
      </View>
      <View style={styles.input}>
        <Input />
      </View>
      <Text style={styles.timer}>0:30</Text>
      <View style={styles.bottom}>
        <Text style={styles.bottomText}>
          Didn't get{" "}
          <TouchableOpacity>
            <Text style={styles.resend}>Resend</Text>
          </TouchableOpacity>
        </Text>

        <View style={styles.btn}>
          <Button route={route}>
            <Text style={styles.btnText}>Verify</Text>
          </Button>
        </View>
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
    padding: 3,
    backgroundColor: WHITE,
    borderWidth: 1,
    width: 30,
    borderRadius: 7.5,
  },
  header: {
    marginHorizontal: Spacing.THREE,
    marginTop: Spacing.THREE,
    marginBottom: Spacing.TWO,
  },
  email: {
    fontWeight: "700",
    textAlign: "center",
  },
  input: {
    marginHorizontal: Spacing.THREE,
    marginTop: 60,
  },
  timer: {
    marginTop: 60,
    fontSize: 30,
    fontWeight: "700",
    textAlign: "center",
    fontFamily: "RobotoSlab_X",
  },
  bottom: {
    position: "absolute",
    bottom: Spacing.EIGHT,
    width: "100%",
  },
  bottomText: {
    textAlign: "center",
    marginBottom: 10,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",

    height: 20,
    marginBottom: Spacing.THREE,
  },
  btnText: {
    fontSize: 16,
    fontWeight: "700",
    color: WHITE,
    fontFamily: "RobotoSlab_X",
  },
  btn: {
    marginHorizontal: 24,
  },
  resend: {
    top: 3,
    fontWeight: "700",
    color: Greyscale.NINE,
  },
});
