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

const data = [1, 2, 3, 4, 5, 6, 7, 2, 3, 3, 3, 3, 3, 3, 3, 3];

export default function Medication() {
  return (
    <View style={styles.container} bounces={false}>
      <SafeAreaView>
        <View style={styles.todayReminder} showsVerticalScrollIndicator={false}>
          <FlatList
            overScrollMode="smooth"
            onEndReachedThreshold={0.5}
            ListHeaderComponent={
              <View style={styles.header}>
                <HomeHeader header={"Medication"} />
              </View>
            }
            bounces={false}
            showsVerticalScrollIndicator={false}
            data={data}
            renderItem={({ item, index }) => (
              <ReminderCard sideShow={false} key={index} />
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
    backfaceVisibility: 1,
  },
  todayReminder: {
    marginTop: 10,
    marginBottom: 70,
    paddingBottom: 20,
    borderStyle: "solid",
    zIndex: 10,
  },
});
