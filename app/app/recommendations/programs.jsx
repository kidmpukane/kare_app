import { StyleSheet, Text, View } from "react-native";
import RoutineGuides from "../../../components/routineAssets/RoutineGuides";
import RoutineBottom from "../../../components/routineAssets/RoutineBottom";
import React from "react";

const programs = () => {
  return (
    <View>
      <RoutineGuides />
      <RoutineBottom />
    </View>
  );
};

export default programs;

const styles = StyleSheet.create({});
