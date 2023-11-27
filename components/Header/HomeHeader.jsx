import { StyleSheet, Image, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import Header from "./Header";
import { Colors, HEADING6 } from "../../constants/styles";
import { useNavigation } from "@react-navigation/native";
import Routes from "../../navigation/Routes";
import { Entypo } from "@expo/vector-icons";

let img = require("../../assets/images/avatar.jpeg");

export default function HomeHeader({
  header = "Home",
  add = false,
  imgLink = img,
  route = Routes.Profile,
}) {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => navigation.navigate(route)}
        style={styles.imgContainer}
      >
        <Image style={styles.img} resizeMode="cover" source={imgLink} />
      </TouchableOpacity>
      <View>
        <Header title={header} fontSize={HEADING6} />
      </View>
      <View>
        {add ? (
          <TouchableOpacity
            onPress={() => navigation.navigate(Routes.AddMedication)}
            style={styles.plus}
          >
            <Entypo name="plus" size={24} color="white" />
          </TouchableOpacity>
        ) : (
          <TouchableOpacity>
            <Ionicons name="ios-notifications" size={24} color="black" />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    alignItems: "center",
  },
  img: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  imgContainer: {
    borderWidth: 2,
    borderRadius: 25,
    borderColor: Colors.PRIMARY_COLOR,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.3,
    shadowRadius: 16,

    // To make sure the shadow is visible, you may need to adjust the elevation:
    elevation: 8,
  },
  plus: {
    height: 40,
    width: 40,
    backgroundColor: Colors.PRIMARY_COLOR,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.3,
    shadowRadius: 16,

    // To make sure the shadow is visible, you may need to adjust the elevation:
    elevation: 8,
  },
});
