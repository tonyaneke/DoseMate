import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Image,
  TouchableOpacity,
} from "react-native";
import React from "react";
import Header from "../../components/Header/Header";
import { Spacing, Body, WHITE, Colors, HEADING1 } from "../../constants/styles";
import Button from "../../components/Button/Button";
import Routes from "../../navigation/Routes";

export default function GetStarted({ navigation }) {
  const navigate = () => {
    navigation.navigate(Routes.Register);
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.image}>
        <Image
          source={require("../../assets/illustration/Register/getStarted.png")}
          resizeMode="contain"
        />
      </View>
      <View>
        <View style={styles.header}>
          <Header title={"Get Started"} fontSize={HEADING1} />
        </View>
        <View>
          <Button width={"100%"} onPress={navigate}>
            <Text style={styles.btnText1}>Register</Text>
          </Button>
          <TouchableOpacity
            style={styles.btn}
            onPress={() => navigation.navigate(Routes.Login)}
          >
            <Text style={styles.btnText}>Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: Spacing.THREE,
    top: Spacing.TEN * 1.5,
    gap: Spacing.SEVEN,
  },
  image: {
    justifyContent: "center",
    alignItems: "center",
  },
  header: {
    marginBottom: Spacing.THREE,
  },
  btnText1: {
    fontFamily: "RobotoSlab_X",
    fontSize: Body.Large,
    color: WHITE,
  },
  btnText: {
    fontFamily: "RobotoSlab_X",
    fontSize: Body.Large,
    color: Colors.PRIMARY_COLOR,
  },
  btn: {
    width: "100%",
    justifyContent: "center",
    height: 60,
    alignItems: "center",
    borderWidth: 2,
    borderColor: Colors.PRIMARY_COLOR,
    marginTop: Spacing.THREE,
    borderRadius: 4,
  },
});
