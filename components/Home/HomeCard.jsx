import { StyleSheet, Text, View, Platform, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import {
  Background,
  Dark,
  HEADING5,
  HEADING6,
  Spacing,
} from "../../constants/styles";
import Header from "../Header/Header";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Caption from "../Caption/Caption";
import CircularProgress from "react-native-circular-progress-indicator";
import { Entypo } from "@expo/vector-icons";
import { getFromAsyncStorage } from "../../services/asyncStorage";

export default function HomeCard({
  greeting = "Hello Angela",
  content = "Here is your medication adherent insight",
  percent = 90,
  adherent = "Adherent",
  nonadherent = "Non-Adherent",
}) {
  const [name, setName] = React.useState("");
  const [value, setValue] = useState(0);

  useEffect(() => {
    const getUser = async () => {
      const user = await getFromAsyncStorage("userData");
      const firstName = user.first_name;
      setName(firstName);
      console.log(firstName);
    };
    getUser();
  }, []);

  console.log(name);

  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <View style={styles.header}>
          {/* <Header
            title={greeting}
            name={name}
            fontSize={HEADING6}
            textAlign={"left"}
          /> */}
          <Text style={styles.header1}>Hello {" " + name}</Text>
          <MaterialCommunityIcons name="hand-wave" size={24} color="#ED8A19" />
        </View>
        <View style={styles.textContainer}>
          <Caption textAlign="left" content={content} />
        </View>
      </View>
      <View style={styles.progress}>
        <CircularProgress
          value={percent}
          radius={45}
          inActiveStrokeColor={"#2ecc71"}
          inActiveStrokeOpacity={0.2}
          progressValueColor={"#000"}
          valueSuffix={"%"}
          delay={1}
        />
        <View>
          <View style={styles.adherent}>
            <Entypo name="dot-single" size={30} color="#2ECC71" />
            <Header title={adherent} fontSize={HEADING6} textAlign={"left"} />
          </View>
          <View style={styles.nonadherent}>
            <Entypo name="dot-single" size={30} color="#BEFFDC" />
            <Header
              title={nonadherent}
              textAlign={"left"}
              fontSize={HEADING6}
            />
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 240,

    width: "100%",
    paddingHorizontal: Spacing.FOUR,
    paddingVertical: Spacing.THREE,
    backgroundColor: Background.GREEN,
    borderRadius: 10,
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
  },
  header: {
    flexDirection: "row",
    gap: 10,
  },
  textContainer: {
    width: "80%",
  },
  progress: {
    height: 100,
    color: "black",
    flexDirection: "row",
    alignItems: "center",
    gap: Spacing.FIVE,
  },
  topContainer: {
    marginBottom: 20,
  },
  adherent: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  nonadherent: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  header1: {
    fontFamily: "RobotoSlab_X",
    color: Dark.Dark1,
    fontWeight: "700",
    fontSize: 24,
    justifyContent: "center",
  },
});
