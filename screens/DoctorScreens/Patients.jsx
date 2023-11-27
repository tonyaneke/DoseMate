import {
  SafeAreaView,
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import { Spacing, WHITE } from "../../constants/styles";
import HomeHeader from "../../components/Header/HomeHeader";
import ReminderCard from "../../components/Home/ReminderCard";
import UniversalHeader from "../../components/Home/UniversalHeader";

const data = [1, 2, 3, 4, 5, 6, 7, 2, 3, 3, 3, 3, 3, 3, 3, 3];

export default function Patient() {
  return (
    <View style={styles.container} bounces={false}>
      <SafeAreaView>
        <View style={styles.todayReminder} showsVerticalScrollIndicator={false}>
          <FlatList
            overScrollMode="smooth"
            onEndReachedThreshold={0.5}
            ListHeaderComponent={
              <View style={styles.header}>
                <UniversalHeader header="Patients" />
              </View>
            }
            bounces={false}
            showsVerticalScrollIndicator={false}
            data={data}
            renderItem={({ item, index }) => (
              <View style={styles.flatlist}>
                <ReminderCard
                  imgLink={require("../../assets/images/profilepic.png")}
                  patient={true}
                  key={index}
                />
              </View>
            )}
          />
        </View>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: WHITE,
  },
  header: {
    marginHorizontal: Spacing.THREE,

    marginBottom: 40,
  },
  todayReminder: {
    marginTop: 10,
    marginBottom: 47,
    paddingBottom: 20,
    borderStyle: "solid",
    zIndex: 10,
  },
  flatlist: {
    marginHorizontal: 30,
    left: 5,
  },
});
