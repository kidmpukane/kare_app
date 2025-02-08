import { StyleSheet, Text, View } from "react-native";
import ProgramTop from "../../../components/programAssets/ProgramTop";
import ProgramBottom from "../../../components/programAssets/ProgramBottom";
import React from "react";

const routines = () => {
  return (
    <View>
      <ProgramTop />
      <ProgramBottom />
    </View>
  );
};

export default routines;

const styles = StyleSheet.create({});
