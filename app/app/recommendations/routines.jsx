import { StyleSheet, Text, View, ScrollView } from "react-native";
import ProgramTop from "../../../components/programAssets/ProgramTop";
import ProgramBottom from "../../../components/programAssets/ProgramBottom";
import React from "react";

const routines = () => {
  return (
    <ScrollView contentContainerStyle={styles.routinesContainer}>
      <ProgramTop onPress={() => alert("Purchase Entire Routine")} />
      <View style={styles.underline} />
      <ProgramBottom />
    </ScrollView>
  );
};

export default routines;

const styles = StyleSheet.create({
  routinesContainer: {
    flexGrow: 1,
    padding: 10,
    gap: 2,
  },
  underline: {
    height: 1,
    backgroundColor: "black",
    width: "90%",
    alignSelf: "center",
    marginTop: 20,
    marginBottom: 20,
  },
});
