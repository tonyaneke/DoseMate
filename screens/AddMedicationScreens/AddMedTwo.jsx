import {
  Keyboard,
  SafeAreaView,
  StyleSheet,
  Pressable,
  View,
} from "react-native";
import React from "react";
import { HEADING3, HEADING6, Spacing, WHITE } from "../../constants/styles";
import ProgressBar from "../../components/ProgressBlock/ProgressBlock";
import Header from "../../components/Header/Header";
import Button from "../../components/Button/Button";
import Routes from "../../navigation/Routes";
import Dropdown from "../../components/Dropdown/Dropdown";
import { useNavigation } from "@react-navigation/native";
import { saveToAsyncStorage } from "../../services/asyncStorage";

export default function AddMedTwo() {
  const page = [
    {
      active: true,
    },
    {
      active: true,
    },
    {
      active: false,
    },
    {
      active: false,
    },
  ];
  const options = [
    {
      name: "Once daily",
    },
    {
      name: "Twice daily",
    },
    {
      name: "Three Times daily",
    },
    {
      name: "Next 30secs",
    },
  ];

  const navigation = useNavigation();

  const [freq, setFreq] = React.useState("");

  const saveFrequency = async () => {
    await saveToAsyncStorage("frequency", freq);
    next();
  };

  const next = () => {
    navigation.navigate(Routes.addMed.ThirdScreen);
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
                title={"Select How often you take it"}
              />
            </View>
            <View style={styles.input}>
              <Dropdown setValue={setFreq} options={options} />
            </View>
          </View>
          <View style={styles.btn}>
            <Button onPress={saveFrequency}>
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
