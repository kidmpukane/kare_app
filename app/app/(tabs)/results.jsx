import { StyleSheet, Text, View, ScrollView } from "react-native";
import SkinResults from "../../../components/resultsAssets/SkinResults";
import ProgramCard from "../../../organisms/ProgramCard";
import React from "react";

const results = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <SkinResults />
      <Text style={styles.resultText}>Program Recommendations</Text>
      <View style={styles.underline} />
      {/* Wrap recommendations in a horizontal ScrollView */}
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.recommendationsContainer}
      >
        <ProgramCard />
        <ProgramCard />
        <ProgramCard />
        <ProgramCard />
        <ProgramCard />
        <ProgramCard />
      </ScrollView>
    </ScrollView>
  );
};

export default results;

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 20,
    paddingLeft: 2,
    paddingRight: 2,
    paddingBottom: 20,
  },
  underline: {
    height: 1.5,
    backgroundColor: "black",
    width: "90%",
    alignSelf: "center",
    marginTop: 20,
    marginBottom: 20,
  },
  resultText: {
    fontSize: 40,
    padding: 10,
  },
  recommendationsContainer: {
    flexDirection: "row",
    padding: 20,
    alignItems: "center",
    gap: 20,
  },
});
