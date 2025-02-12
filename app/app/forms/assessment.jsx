import { ScrollView, StyleSheet, Text, View } from "react-native";
import { HeaderBody4 } from "../../../molecules/HeaderBody";
import SurveyForm from "../../../forms/SurveyForm";
import React from "react";

const assessment = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.formContainer}>
        <View style={styles.headerBodyContainer}>
          <HeaderBody4
            headerText="Skin Examination"
            bodyText="Complete a quick examination, to find the perfect routine.Our algorithm will processes this information and provide you with the perfect skincare routine just for you."
          />
        </View>
        <SurveyForm />
      </View>
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
    padding: 6,
  },
  headerBodyContainer: {
    padding: 20,
  },
  formContainer: {
    backgroundColor: "#24221E",
    padding: 10,
    borderRadius: 30,
  },
});
