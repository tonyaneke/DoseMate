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
import { getFromAsyncStorage } from "../../services/asyncStorage";

const data = [1, 2, 3, 4, 5];

export default function Home() {
  const [modalVisible, setModalVisible] = React.useState(false);

  const openModal = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  const getUser = async () => {
    const user = await getFromAsyncStorage("userData");
    const firstName = user.first_name;
    setName(firstName);
  };

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={styles.container}
      bounces={false}
    >
      <SafeAreaView>
        <View style={styles.headerContainer}>
          <HomeHeader />
        </View>
        <View style={styles.card}>
          <HomeCard />
        </View>
        <Pressable onLongPress={openModal} style={styles.medCard}>
          <MedicationCard />
        </Pressable>

        <MedicationModal open={modalVisible} onClose={closeModal} />

        <View style={styles.reminder}>
          <Header title={"Today's Reminder"} fontSize={HEADING5} />
          <TouchableOpacity>
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
            renderItem={({ item, index }) => <ReminderCard key={index} />}
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
