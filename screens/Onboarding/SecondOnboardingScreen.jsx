import {
  View,
  Text,
  Image,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import React from "react";
import {
  Greyscale,
  Body,
  Spacing,
  WHITE,
  HEADING1,
} from "../../constants/styles";
import { useFonts } from "expo-font";
import { StatusBar } from "expo-status-bar";
import Header from "../../components/Header/Header";
import Caption from "../../components/Caption/Caption";
import Button from "../../components/Button/Button";
import { AntDesign } from "@expo/vector-icons";
import Routes from "../../navigation/Routes";

export default function SecondOnboardingScreen({ navigation }) {
  const [loaded] = useFonts({
    RobotoSlab_X: require("../../assets/fonts/roboto/RobotoSlab-ExtraBold.ttf"),
    OpenSans_R: require("../../assets/fonts/opensans/OpenSans-Regular.ttf"),
  });

  if (!loaded) {
    return null;
  }

  const next = () => {
    navigation.navigate(Routes.OnboardingThree);
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <TouchableOpacity onPress={() => navigation.navigate(Routes.GetStarted)}>
        <Text style={styles.skip}>Skip</Text>
      </TouchableOpacity>
      <View style={styles.illustration}>
        <Image
          source={require("../../assets/illustration/Onboarding/onboard2.png")}
        />
      </View>
      <View style={styles.header}>
        <Header title={"Enhance Your Medical Adhenrence"} fontSize={HEADING1} />
      </View>
      <View style={styles.caption}>
        <Caption
          content={
            "Adhering to your prescribed medical regimen is a crucial aspect of achieving and maintaining good health"
          }
        />
      </View>
      <View style={styles.progressBar}>
        <Image source={require("../../assets/icons/progressbar2.png")} />
      </View>
      <View style={styles.btn}>
        <Button width={100} onPress={next}>
          <AntDesign name="arrowright" size={24} color={WHITE} />
        </Button>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  skip: {
    color: Greyscale.FIVE,
    fontFamily: "OpenSans_R",
    fontSize: Body.Medium,
    position: "absolute",
    right: Spacing.SIX,
    top: Spacing.ONE,
  },
  illustration: {
    justifyContent: "center",
    alignItems: "center",
    marginVertical: Spacing.NINE,
  },
  header: {
    marginHorizontal: Spacing.THREE,
    marginBottom: Spacing.THREE,
  },
  caption: {
    marginHorizontal: Spacing.THREE,
  },
  progressBar: {
    marginTop: Spacing.SEVEN,
    alignItems: "center",
    marginBottom: Spacing.THREE,
  },
  btn: {
    alignItems: "center",
  },
});
