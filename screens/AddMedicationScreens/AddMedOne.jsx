import {
  SafeAreaView,
  StyleSheet,
  Keyboard,
  Pressable,
  View,
} from "react-native";
import React from "react";
import { HEADING3, HEADING6, Spacing, WHITE } from "../../constants/styles";
import ProgressBar from "../../components/ProgressBlock/ProgressBlock";
import Header from "../../components/Header/Header";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import Routes from "../../navigation/Routes";
import { saveToAsyncStorage } from "../../services/asyncStorage";
import { useNavigation } from "@react-navigation/native";

export default function AddMedOne() {
  const page = [
    {
      active: true,
    },
    {
      active: false,
    },
    {
      active: false,
    },
    {
      active: false,
    },
  ];

  const [medicine, setMedicine] = React.useState("");

  const navigation = useNavigation();

  const saveMed = async () => {
    await saveToAsyncStorage("Medicine", medicine);
    next();
  };

  const next = () => {
    navigation.navigate(Routes.addMed.SecondScreen);
  };

  return (
    <Pressable onPress={() => Keyboard.dismiss()} style={styles.container}>
      <SafeAreaView>
        <View style={styles.screen}>
          <View>
            <View style={styles.progressBar}>
              <ProgressBar pages={page} />
            </View>
            <View style={styles.header}>
              <Header
                fontSize={HEADING3}
                textAlign="left"
                title={"Type in the medicine you would like to add"}
              />
            </View>
            <View style={styles.input}>
              <Input
                onChangeText={(value) => setMedicine(value)}
                placeholder={"Medicine"}
              />
            </View>
          </View>
          <View style={styles.btn}>
            <Button onPress={saveMed}>
              <Header title={"Save"} color="white" fontSize={HEADING6} />
            </Button>
          </View>
        </View>
      </SafeAreaView>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: WHITE,
  },
  screen: {
    height: "100%",
    justifyContent: "space-between",
  },
  progressBar: {
    marginHorizontal: Spacing.THREE,
    marginTop: 20,
  },
  header: {
    marginTop: Spacing.FIVE,
    marginHorizontal: Spacing.THREE,
    paddingRight: Spacing.THREE,
  },
  input: {
    marginHorizontal: Spacing.THREE,
    marginTop: Spacing.THREE,
  },
  btn: {
    marginBottom: Spacing.FOUR,
    marginHorizontal: Spacing.THREE,
  },
});
