import {
  StyleSheet,
  Image,
  View,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import React from "react";
import {
  Dark,
  HEADING1,
  HEADING6,
  Spacing,
  WHITE,
} from "../../constants/styles";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import Header from "../../components/Header/Header";
import Caption from "../../components/Caption/Caption";
import Button from "../../components/Button/Button";
import Routes from "../../navigation/Routes";

export default function FirstTimeUsers() {
  const navigation = useNavigation();

  const next = () => {
    navigation.navigate(Routes.addMed.FirstScreen);
  };
  return (
    <View style={styles.container}>
      <SafeAreaView>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.closeIcon}
        >
          <AntDesign name="close" size={24} color="black" />
        </TouchableOpacity>

        <View style={styles.image}>
          <Image source={require("../../assets/illustration/addMed.png")} />
        </View>
        <View style={styles.header}>
          <Header
            title={"Welcome on board, Emmanuel"}
            fontSize={HEADING1}
            color={Dark.Dark1}
          />
        </View>
        <View style={styles.text}>
          <Caption
            content={
              "DoseMate is here to  support and make you a medication-adherent person"
            }
          />
        </View>
        <View style={styles.btn}>
          <Button onPress={next}>
            <Header title={"Add Medicne"} fontSize={HEADING6} color={WHITE} />
          </Button>
        </View>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: WHITE,
  },
  closeIcon: {
    top: 20,
    left: Spacing.THREE,

    height: 40,
    width: 40,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: "100%",
    alignItems: "center",
    marginTop: Spacing.EIGHT,
    marginBottom: Spacing.SIX,
  },
  header: {
    marginBottom: Spacing.THREE,
  },
  text: {
    marginBottom: Spacing.THREE,
  },
  btn: {
    marginHorizontal: Spacing.THREE,
  },
});
