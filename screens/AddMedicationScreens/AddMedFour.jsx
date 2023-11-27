import {
  SafeAreaView,
  StyleSheet,
  Keyboard,
  Pressable,
  View,
} from "react-native";
import React, { useEffect } from "react";
import { HEADING3, HEADING6, Spacing, WHITE } from "../../constants/styles";
import ProgressBar from "../../components/ProgressBlock/ProgressBlock";
import Header from "../../components/Header/Header";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import Routes from "../../navigation/Routes";
import ReminderCard from "../../components/Home/ReminderCard";
import { getFromAsyncStorage } from "../../services/asyncStorage";

export default function AddMedOne() {
  const [data, setData] = React.useState({});
  const getMedication = async () => {
    const med = await getFromAsyncStorage("medicine");
    const doses = await getFromAsyncStorage("doses");
    const freq = await getFromAsyncStorage("frequency");
    setData((prev) => ({ ...prev, med, doses, freq }));
  };

  useEffect(() => {
    getMedication();
  }, []);

  const card = Array.from({ length: 3 });

  const page = [
    {
      active: true,
    },
    {
      active: true,
    },
    {
      active: true,
    },
    {
      active: true,
    },
  ];
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
                title={"Review your reminder"}
              />
            </View>
            <View style={styles.input}>
              {card.map((el) => (
                <ReminderCard sideShow={false} />
              ))}
            </View>
          </View>
          <View style={styles.btn}>
            <Button route={"Main"}>
              <Header title={"Done"} color="white" fontSize={HEADING6} />
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
