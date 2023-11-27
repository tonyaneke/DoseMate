import {
  FlatList,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import {
  Colors,
  HEADING1,
  HEADING5,
  Spacing,
  WHITE,
} from "../../constants/styles";
import UniversalHeader from "../../components/Home/UniversalHeader";
import Header from "../../components/Header/Header";
import TrendsGraph from "../../components/TrendsGraph/TrendsGraph";

const achievements = [
  { img: require("../../assets/images/crown.png"), text: "Last Week" },
  { img: require("../../assets/images/cup.png"), text: "Today" },
  { img: require("../../assets/images/crown.png"), text: "Yesterday" },
];

const activeShadowStyle = Platform.select({
  ios: {
    shadowColor: "rgba(0, 0, 0, 0.12)",
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 1,
    shadowRadius: 16,
  },
  android: {
    elevation: 16,
  },
});

const shadowStyle = Platform.select({
  ios: {
    shadowColor: "rgba(0, 0, 0, 0.24)",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 1,
    shadowRadius: 4,
  },
  android: {
    elevation: 4,
  },
});

export default function Insights() {
  const [monthActive, setMonthActive] = useState(false);
  const [weeklyActive, setWeeklyActive] = useState(true);

  const onMonthPress = () => {
    setWeeklyActive(false);
    setMonthActive(true);
  };
  const onWeeklyPress = () => {
    setWeeklyActive(true);
    setMonthActive(false);
  };
  return (
    <View style={styles.container}>
      <SafeAreaView>
        <View style={styles.page}>
          <UniversalHeader />
        </View>
        <View style={styles.nav}>
          <View style={styles.tabContainer}>
            <TouchableOpacity
              onPress={onWeeklyPress}
              style={[
                styles.week,
                weeklyActive
                  ? { backgroundColor: "white" }
                  : { backgroundColor: Colors.PRIMARY_COLOR },
              ]}
            >
              <Text
                style={[
                  styles.navText,
                  weeklyActive
                    ? { color: Colors.PRIMARY_COLOR }
                    : { color: Colors.SECONDARY_COLOR },
                ]}
              >
                Weekly
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={onMonthPress}
              style={[
                styles.month,
                monthActive
                  ? { backgroundColor: "white" }
                  : { backgroundColor: Colors.PRIMARY_COLOR },
              ]}
            >
              <Text
                style={[
                  styles.navText,
                  monthActive
                    ? { color: Colors.PRIMARY_COLOR }
                    : { color: Colors.SECONDARY_COLOR },
                ]}
              >
                Monthly
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.header}>
          <Header
            title={"Adherence Trends"}
            fontSize={HEADING1}
            textAlign="left"
          />
        </View>
        <View style={styles.graph}>
          <TrendsGraph />
        </View>
        <View style={styles.header2}>
          <Header
            textAlign="left"
            fontSize={HEADING5}
            title={"Recent Achievements"}
          />
        </View>
        <View style={styles.achievements}>
          <FlatList
            style={{ height: 200 }}
            keyExtractor={(item) => item.text.toString()}
            showsHorizontalScrollIndicator={false}
            horizontal
            data={achievements}
            renderItem={({ item, index }) => (
              <View style={styles.card} key={index}>
                <Image source={item.img} />
                <Text style={styles.cardText}>{item.text}</Text>
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
  page: {
    left: 10,
  },
  tabContainer: {
    flexDirection: "row",
    height: 52,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    borderRadius: 110,
    backgroundColor: Colors.PRIMARY_COLOR,
  },
  nav: {
    marginTop: 20,
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: "20%",
  },
  week: {
    width: "47%",
    justifyContent: "center",
    alignItems: "center",
    height: "80%",
    borderRadius: 100,
  },
  month: {
    height: "80%",
    width: "47%",
    borderRadius: 100,
    alignItems: "center",
    justifyContent: "center",
  },
  navText: {
    fontWeight: "700",
    fontSize: 17,
  },
  header: {
    marginTop: 30,
    marginLeft: 20,
    paddingLeft: 10,
  },
  graph: {
    marginHorizontal: Spacing.FIVE,
    marginVertical: Spacing.THREE,
  },
  header2: {
    marginVertical: 20,
    marginHorizontal: Spacing.FOUR,
  },
  card: {
    width: 150,
    height: 150,
    backgroundColor: "white",

    marginLeft: 30,
    ...shadowStyle,
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
  },
  achievements: {
    height: "30%",
    width: "100%",
    paddingTop: 20,
  },
  cardText: {
    fontFamily: "RobotoSlab_X",
  },
});
