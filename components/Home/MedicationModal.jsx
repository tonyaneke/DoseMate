import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Modal,
  StyleSheet,
  SafeAreaView,
  Image,
  Button,
} from "react-native";
import {
  Background,
  Colors,
  Greyscale,
  HEADING2,
  HEADING3,
  Spacing,
  WHITE,
} from "../../constants/styles";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import Header from "../Header/Header";
import { MaterialIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

const MedicationModal = ({ onClose, open, onOpen }) => {
  return (
    <View style={styles.container}>
      <Modal
        transparent={true}
        animationType="fade"
        visible={open}
        onRequestClose={() => onClose()}
      >
        <SafeAreaView style={[styles.container, styles.grey]}>
          <View style={styles.modalContainer}>
            <View style={styles.card}>
              <View style={styles.top}>
                <Button title="X" onPress={onClose} />

                <View style={styles.topRight}>
                  <TouchableOpacity>
                    <MaterialCommunityIcons
                      name="delete-forever-outline"
                      size={24}
                      color={Greyscale.SIX}
                    />
                  </TouchableOpacity>
                  <TouchableOpacity>
                    <Feather name="edit" size={20} color={Greyscale.SIX} />
                  </TouchableOpacity>
                </View>
              </View>
              <View style={styles.img}>
                <Image source={require("../../assets/images/pill.png")} />
              </View>
              <View>
                <Header fontSize={HEADING3} title={"Prednisolone 500mg"} />
              </View>
              <View style={styles.content}>
                <MaterialCommunityIcons
                  name="calendar-month-outline"
                  size={24}
                  color="black"
                />
                <Text style={styles.contentText}>
                  Scheduled to be taken by 5:30 PM
                </Text>
              </View>
              <View style={styles.content2}>
                <MaterialIcons name="info-outline" size={24} color="black" />
                <Text style={styles.contentText}>Take Two Doses</Text>
              </View>
              <View style={styles.bottom}>
                <View>
                  <TouchableOpacity style={styles.circle}>
                    <Ionicons name="md-close" size={30} color="black" />
                  </TouchableOpacity>
                  <Text style={styles.bottomText}>Skip</Text>
                </View>

                <View>
                  <TouchableOpacity style={styles.circleMid}>
                    <Ionicons name="checkmark" size={30} color="white" />
                  </TouchableOpacity>
                  <Text style={styles.bottomText}>Take</Text>
                </View>
                <View style={styles.reschedule}>
                  <TouchableOpacity style={styles.circle}>
                    <MaterialCommunityIcons
                      name="calendar-arrow-left"
                      size={26}
                      color="black"
                    />
                  </TouchableOpacity>
                  <Text style={styles.bottomText}>Reschedule</Text>
                </View>
              </View>
            </View>
          </View>
        </SafeAreaView>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  card: {
    backgroundColor: Background.GREEN,
    height: "40%",
    width: 370,
    borderRadius: 4,
  },
  top: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderBottomWidth: 0.2,
    borderBottomColor: "grey",
    paddingHorizontal: 15,
  },
  topRight: {
    flexDirection: "row",
    alignItems: "center",
    gap: 15,
  },
  img: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
    marginBottom: 30,
  },
  content: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 10,
    marginTop: 10,
    gap: 10,
  },
  content2: {
    flexDirection: "row",
    alignItems: "center",
    paddingLeft: 10,
    marginTop: 10,
    gap: 10,
    borderBottomWidth: 0.2,
    borderColor: "grey",
    paddingBottom: 10,
    width: "100%",
  },
  contentText: {
    fontSize: 14,
  },
  bottom: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    paddingHorizontal: Spacing.THREE,
    paddingTop: 10,
  },
  circle: {
    height: 50,
    width: 50,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: Colors.PRIMARY_COLOR,
    borderRadius: 25,
    backgroundColor: WHITE,
    marginBottom: 5,
  },
  circleMid: {
    height: 50,
    width: 50,
    backgroundColor: Colors.PRIMARY_COLOR,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 25,
    marginBottom: 5,
  },
  bottomText: {
    textAlign: "center",
    fontWeight: "600",
  },
  reschedule: {
    justifyContent: "center",
    alignItems: "center",
  },
});

export default MedicationModal;
