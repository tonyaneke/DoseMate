import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Header from "../Header/Header";
import { Colors, HEADING6, Spacing, Status } from "../../constants/styles";

const week = [
  {
    day: {
      taken: 2,
      missed: 1,
      day: "Sun",
    },
  },
  {
    day: {
      taken: 2,
      missed: 0,
      day: "Mon",
    },
  },
  {
    day: {
      taken: 2,
      missed: 1,
      day: "Tues",
    },
  },
  {
    day: {
      taken: 2,
      missed: 1,
      day: "Wed",
    },
  },
  {
    day: {
      taken: 2,
      missed: 1,
      day: "Thurs",
    },
  },
  {
    day: {
      taken: 0,
      missed: 1,
      day: "Fri",
    },
  },
  {
    day: {
      taken: 1,
      missed: 2,
      day: "Sat",
    },
  },
];

export default function TrendsGraph() {
  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <View style={styles.topLeft}>
          <View style={styles.leftCircle} />
          <View>
            <Header title={"Taken"} fontSize={HEADING6} />
          </View>
        </View>
        <View style={styles.topRight}>
          <View style={styles.rightCircle} fontSize={HEADING6} />
          <Header title={"Missed"} />
        </View>
      </View>

      <View style={styles.graph}>
        {week.map((el, i) => {
          return (
            <View style={{}}>
              <View
                style={[
                  styles.bar,
                  el.day.taken == 0 || el.day.missed == 0
                    ? { gap: 0 }
                    : { gap: 10 },
                ]}
                key={i}
              >
                <View style={[styles.taken, { flex: el.day.taken }]} />

                <View style={[styles.missed, { flex: el.day.missed }]} />
              </View>
              <View style={styles.bottomText}>
                <Text style={styles.text}>{el.day.day}</Text>
              </View>
            </View>
          );
        })}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 250,
  },
  top: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: Spacing.TWO,
  },
  topLeft: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 15,
  },
  leftCircle: {
    width: 10,

    height: 10,
    borderRadius: 5,
    backgroundColor: Colors.PRIMARY_COLOR,
  },
  rightCircle: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: Status.ERROR,
  },
  topRight: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 15,
  },
  graph: {
    height: "100%",
    width: "100%",
    backgroundColor: "white",
    borderRadius: 12,
    elevation: 5, // Adjust the elevation value according to your preference
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 1,
    shadowOpacity: 0.3,
    backgroundColor: "white",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    padding: 10,
  },
  bar: {
    flex: 1,

    height: "90%",
    justifyContent: "space-between",
  },
  taken: {
    backgroundColor: Colors.PRIMARY_COLOR,

    width: 20,
    marginHorizontal: 8,
    borderRadius: 10,
  },
  missed: {
    backgroundColor: Status.ERROR,
    width: 20,
    marginHorizontal: 8,
    borderRadius: 10,
  },
  text: {
    fontSize: 10,
    fontWeight: "700",
    textAlign: "center",
    marginTop: 5,
  },
});
