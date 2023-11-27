import {
  Keyboard,
  KeyboardAvoidingView,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useState, useEffect, useRef } from "react";
import { HEADING3, HEADING6, Spacing, WHITE } from "../../constants/styles";
import ProgressBar from "../../components/ProgressBlock/ProgressBlock";
import Header from "../../components/Header/Header";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import Routes from "../../navigation/Routes";
import {
  getFromAsyncStorage,
  saveToAsyncStorage,
} from "../../services/asyncStorage";
import { useNavigation } from "@react-navigation/native";
import * as Notifications from "expo-notifications";
import Constants from "expo-constants";
import storage from "@react-native-async-storage/async-storage";

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: true,
  }),
});

export default function AddMedThree() {
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
      active: false,
    },
  ];

  const navigation = useNavigation();

  const [doses, setDoses] = React.useState(0);

  const saveDoses = async () => {
    await saveToAsyncStorage("doses", doses);
  };

  const next = () => {
    navigation.navigate(Routes.addMed.FourthScreen);
  };

  const setReminder = async () => {
    try {
      saveDoses();
      const med = await getFromAsyncStorage("medicine");
      const doses = await getFromAsyncStorage("doses");
      const freq = await getFromAsyncStorage("frequency");

      const apiUrl =
        "http://health-app.olajide23.com.ng/api/patient/set-reminder";

      const requestBody = {
        drug_name: med,
        dosage: doses,
        dosage_frequency: freq,
      };

      const response = await axios.post(apiUrl, requestBody);

      console.log(response.data);
      if (response.status === 200 || response.status === 201) {
        Alert.alert("Reminder Set Successfully");
        await saveToAsyncStorage("", response.data);
        setTimeout(() => navigation.navigate("Main"), 3000);
        onStart();
        next();
      }
      if (response.status !== 200) {
        // API response indicates login failure
        Alert.alert("Error", response.data.error || "Credentials incorrect");
        throw new Error(`Received unexpected status code: ${response.status}`);
      }
    } catch (error) {}
  };

  const [notification, setNotification] = useState(false);
  const [notificationId, setNotificationId] = useState(null);
  const notificationListener = useRef();
  const responseListener = useRef();

  useEffect(() => {
    const getPermission = async () => {};

    getPermission();

    notificationListener.current =
      Notifications.addNotificationReceivedListener((notification) => {
        setNotification(notification);
      });

    responseListener.current =
      Notifications.addNotificationResponseReceivedListener((response) => {});

    return () => {
      Notifications.removeNotificationSubscription(
        notificationListener.current
      );
      Notifications.removeNotificationSubscription(responseListener.current);
    };
  }, []);

  const onStart = async () => {
    const identifier = await Notifications.scheduleNotificationAsync({
      content: {
        title: "Remember to drink water! 🥤",
        body: "Staying hydrated supports cardiovascular health by helping maintain adequate blood volume and circulation.",
      },
      trigger: {
        seconds: 30,
        repeats: false,
      },
    });
    setNotificationId(identifier);
    Alert.alert("Reminder has been set!!");
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
                title={"How many doses are you to take per session"}
              />
            </View>
            <View style={styles.input}>
              <Input
                onChangeText={(value) => setDoses(value)}
                placeholder={"Dose"}
                keyboardType="number-pad"
              />
            </View>
          </View>
          <View style={styles.btn}>
            <Button onPress={setReminder}>
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
