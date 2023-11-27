import {
  FlatList,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { Colors, HEADING5, Spacing, WHITE } from "../../constants/styles";
import HomeHeader from "../../components/Header/HomeHeader";
import { SafeAreaView } from "react-native-safe-area-context";
import HomeCard from "../../components/Home/HomeCard";
import MedicationCard from "../../components/MedicationCard/MedicationCard";
import Header from "../../components/Header/Header";
import ReminderCard from "../../components/Home/ReminderCard";
import MedicationModal from "../../components/Home/MedicationModal";
import Routes from "../../navigation/Routes";

const data = [1, 2, 3, 4, 5];

export default function DocHome({ navigation }) {
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={styles.container}
      bounces={false}
    >
      <SafeAreaView>
        <View style={styles.headerContainer}>
          <HomeHeader imgLink={require("../../assets/images/profilepic.png")} />
        </View>
        <View style={styles.card}>
          <HomeCard
            greeting={"Hello Dr. Precious"}
            content={"Here is your patient’s medication adherent overview"}
            percent={70}
            adherent={"Adherent Patient"}
            nonadherent={"Non-Adherent Patient"}
          />
        </View>

        <View style={styles.reminder}>
          <Header title={"Patients"} fontSize={HEADING5} />
          <TouchableOpacity
            onPress={() => navigation.navigate(Routes.docScreen.Patient)}
          >
            <Header
              title={"View All"}
              color={Colors.PRIMARY_COLOR}
              fontSize={HEADING5}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.todayReminder} showsVerticalScrollIndicator={false}>
          <FlatList
            overScrollMode="smooth"
            data={data}
            renderItem={({ item, index }) => (
              <ReminderCard
                imgLink={require("../../assets/images/profilepic.png")}
                patient={true}
                key={index}
              />
            )}
          />
        </View>
      </SafeAreaView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: WHITE,
    scroll: "smooth",
  },
  headerContainer: {
    marginHorizontal: Spacing.THREE,
  },
  card: {
    margin: Spacing.THREE,
  },
  medCard: {
    marginHorizontal: Spacing.THREE,
  },
  reminder: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: Spacing.THREE,
    marginTop: Spacing.FIVE,
  },
  todayReminder: {
    marginHorizontal: Spacing.THREE,
    marginTop: 10,
    marginBottom: 70,
    paddingBottom: 20,
    borderStyle: "solid",
    zIndex: 10,
  },
});
