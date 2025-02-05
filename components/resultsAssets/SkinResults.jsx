import { StyleSheet, Text, View } from "react-native";
import { HeaderBody2 } from "../../molecules/HeaderBody";
import React from "react";

const SkinResults = () => {
  return (
    <View>
      <View style={styles.resultsTopContainer}>
        <View>
          <HeaderBody2 />
        </View>
        <View>
          <Text>Results</Text>
        </View>
      </View>
    </View>
  );
};

export default SkinResults;

const styles = StyleSheet.create({
  resultsTopContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
