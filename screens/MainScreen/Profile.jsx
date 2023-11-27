import {
  Image,
  StyleSheet,
  Text,
  Linking,
  TouchableOpacity,
  View,
  ScrollView,
} from "react-native";
import React from "react";
import {
  Colors,
  Greyscale,
  HEADING6,
  Spacing,
  Status,
  WHITE,
} from "../../constants/styles";
import UniversalHeader from "../../components/Home/UniversalHeader";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../../components/Header/Header";
import Button from "../../components/Button/Button";
import { Feather } from "@expo/vector-icons";
import Caption from "../../components/Caption/Caption";
import Routes from "../../navigation/Routes";
import { useNavigation } from "@react-navigation/native";

export default function Profile({
  name = "Kolade Bello",
  card = true,
  imgUrl = require("../../assets/images/profilepic.png"),
}) {
  const navigation = useNavigation();
  const openWebLink = (url) => {
    Linking.openURL("https://med-card.netlify.app");
  };

  return (
    <ScrollView
      overScrollMode="always"
      showsVerticalScrollIndicator={false}
      style={styles.container}
    >
      <SafeAreaView>
        <UniversalHeader />
        <View style={styles.top}>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={styles.editIcon}
          >
            <Feather name="edit" size={24} color={Greyscale.SIX} />
          </TouchableOpacity>
          <View style={styles.imgContainer}>
            <Image style={styles.img} source={imgUrl} />
          </View>
          <Header title={name} fontSize={24} />
          {card && (
            <View>
              <TouchableOpacity onPress={openWebLink} style={styles.btn}>
                <Text style={styles.btnText}>View Card</Text>
              </TouchableOpacity>
            </View>
          )}
        </View>
        <View style={styles.bottom}>
          <Header textAlign="left" fontSize={20} title={"Email Address"} />
          <Caption textAlign="left" content={"angeladairo@gmail.com"} />
        </View>
        <View style={styles.bottom}>
          <Header textAlign="left" fontSize={20} title={"Phone Number"} />
          <Caption textAlign="left" content={"08321332342"} />
        </View>
        <View style={styles.bottom}>
          <Header textAlign="left" fontSize={20} title={"Hospital"} />
          <Caption textAlign="left" content={"DoseMate Special Clinic"} />
        </View>
        <View style={styles.bottom}>
          <TouchableOpacity
            onPress={() => navigation.navigate(Routes.Login)}
            style={styles.logout}
          >
            <Feather name="log-out" size={24} color={Status.ERROR} />
            <Header
              textAlign="left"
              fontSize={20}
              title={"Log Out"}
              color={Status.ERROR}
            />
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: WHITE,
    paddingHorizontal: Spacing.THREE,
  },
  img: {
    height: 148,
    width: 148,
    borderWidth: 2,
    borderRadius: 74,
    borderColor: Colors.SECONDARY_COLOR,
  },
  imgContainer: {
    width: "100%",
    alignItems: "center",
    marginTop: 70,
    marginBottom: 24,
  },
  top: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 50,
  },
  btn: {
    width: 160,
    height: 50,
    backgroundColor: Colors.PRIMARY_COLOR,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 4,
    marginTop: 20,
  },
  btnText: {
    fontFamily: "RobotoSlab_X",
    color: WHITE,
    fontSize: 16,
  },
  editIcon: {
    top: 100,
    zIndex: 10,
    left: 50,
  },
  bottom: {
    width: "50%",

    marginBottom: 30,
  },
  logout: {
    width: "50%",
    gap: 10,
    flexDirection: "row",
  },
});
