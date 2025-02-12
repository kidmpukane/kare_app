import { ScrollView, StyleSheet, Text, View } from "react-native";
import SurveyForm from "../../../forms/SurveyForm";
import React from "react";

const assessment = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text>assessment</Text>
      <SurveyForm />
    </ScrollView>
  );
};

export default assessment;

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    gap: 10,
    justifyContent: "center",
    alignItems: "center",
    padding: 2,
  },
});
