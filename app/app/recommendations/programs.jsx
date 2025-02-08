import { StyleSheet, Text, View, ScrollView } from "react-native";
import RoutineGuides from "../../../components/routineAssets/RoutineGuides";
import RoutineBottom from "../../../components/routineAssets/RoutineBottom";
import React from "react";

const programs = () => {
  return (
    <ScrollView contentContainerStyle={styles.programsContainer}>
      <RoutineGuides />
      <RoutineBottom />
      <RoutineBottom />
      <RoutineBottom />
    </ScrollView>
  );
};

export default programs;

const styles = StyleSheet.create({
  programsContainer: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    gap: 10,
  },
});
