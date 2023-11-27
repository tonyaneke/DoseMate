import {
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
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

export default function ConfirmPassword() {
  const navigation = useNavigation();
  return (
    <KeyboardAvoidingView style={{ flex: 1 }}>
      <View style={styles.container}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.backBtn}
        >
          <AntDesign name="left" size={24} color="black" />
        </TouchableOpacity>
        <View style={styles.topBarHeader}>
          <Header title={"Change Password"} fontSize={HEADING6} />
        </View>
        <View style={styles.header}>
          <Header
            title={"Change Password"}
            fontSize={HEADING1}
            textAlign={"left"}
          />
        </View>
        <View style={styles.text}>
          <Caption content={"Enter new password twice"} textAlign={"left"} />
        </View>
        <View style={styles.input}>
          <Input
            placeholder={"Enter new password"}
            secureTextEntry={true}
            password={true}
          />
        </View>
        <View style={styles.input}>
          <Input
            placeholder={"Confirm new password"}
            secureTextEntry={true}
            password={true}
          />
        </View>
        <View style={styles.btn}>
          <Button route={Routes.PasswordResetConfirmed}>
            <Text style={styles.btnText}>Change</Text>
          </Button>
        </View>
      </View>
    </KeyboardAvoidingView>
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
    borderWidth: 1,
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
