import {
  StyleSheet,
  Text,
  View,
  Platform,
  Image,
  Pressable,
} from "react-native";
import React from "react";
import Header from "../Header/Header";
import { Colors, HEADING6 } from "../../constants/styles";
import Caption from "../Caption/Caption";
import { useNavigation } from "@react-navigation/native";
import Routes from "../../navigation/Routes";

export default function ({
  taken,
  missed,
  text,
  sideShow = true,
  patient = false,
  imgLink,
}) {
  const navigation = useNavigation();
  const route = patient ? Routes.docScreen.PatientProfile : "";
  return (
    <View style={styles.container}>
      {sideShow && (
        <View style={styles.sideContainer}>
          <View style={styles.side} />
          <View style={styles.sideline} />
        </View>
      )}

      <Pressable onPress={() => navigation.navigate(route)} style={styles.box}>
        <View style={patient ? { flexDirection: "row", gap: 10 } : {}}>
          {patient && (
            <Image
              source={imgLink}
              style={{ width: 20, height: 20, borderRadius: 10 }}
            />
          )}
          <Header
            textAlign="left"
            title={"Prednisolone 500mg"}
            fontSize={HEADING6}
          />
        </View>
        <View style={styles.bottomText}>
          <Text>{"taken"}</Text>
          <Header title={"5:30PM"} />
        </View>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  box: {
    width: "85%",
    height: 80,
    backgroundColor: "white",
    marginVertical: 25,
    borderRadius: 4,
    top: 10,
    right: 10,
    ...Platform.select({
      ios: {
        shadowColor: "rgba(0, 0, 0, 0.16)",
        shadowOffset: {
          width: 0,
          height: 4,
        },
        shadowOpacity: 1,
        shadowRadius: 8,
      },
      android: {
        elevation: 4,
      },
    }),
    paddingHorizontal: 20,
    justifyContent: "center",
    gap: 10,
    marginLeft: 30,
  },
  bottomText: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  side: {
    width: 20,
    height: 20,
    borderWidth: 1,
    top: 1,
    backgroundColor: Colors.PRIMARY_COLOR,
    borderRadius: 10,
    left: 0,
    right: 10,
    zIndex: 10,
    position: "absolute",
    marginLeft: -10,
  },
  sideline: {
    height: 130,
    width: 1,
    backgroundColor: "black",
    // position,
  },
  sideContainer: {
    marginLeft: 10,

    width: 10,
  },
  container: {
    flexDirection: "row",
  },
});
