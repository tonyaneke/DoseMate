import {
  StyleSheet,
  View,
  Image,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import { HEADING1, HEADING6, Spacing, WHITE } from "../../constants/styles";
import Header from "../../components/Header/Header";
import Routes from "../../navigation/Routes";

export default function Success({ navigation }) {
  React.useEffect(() => {
    // Set a timeout for 2 seconds (2000 milliseconds)
    const timeout = setTimeout(() => {
      // Navigate to the desired screen (replace 'HomeScreen' with your screen name)
      navigation.navigate(Routes.PatientSetup);
    }, 2000);

    // Clear the timeout to prevent it from triggering if the component unmounts
    return () => clearTimeout(timeout);
  }, [navigation]);

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
        <Header title={"Successful"} fontSize={HEADING1} />
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
});
