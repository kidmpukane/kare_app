import { StyleSheet, Text, View } from "react-native";
import SkinResults from "../../../components/resultsAssets/SkinResults";
import RecommendationResults from "../../../components/resultsAssets/RecommendationResults";
import React from "react";

const results = () => {
  return (
    <View>
      <SkinResults />
      <Text>Program Recommendations</Text>
      <View style={styles.underline} />
      <RecommendationResults />
    </View>
  );
};

export default results;

const styles = StyleSheet.create({
  underline: {
    height: 1.5,
    backgroundColor: "black",
    width: "90%",
    alignSelf: "center",
    marginTop: 20,
    marginBottom: 20,
  },
});
