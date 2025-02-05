import { StyleSheet, Text, View } from "react-native";
import { HeaderBody2 } from "../../molecules/HeaderBody";
import { PressableNav2 } from "../../molecules/PressableNav";
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
      <View style={styles.underline} />
      <PressableNav2 />
      <PressableNav2 />
    </View>
  );
};

export default SkinResults;

const styles = StyleSheet.create({
  resultsTopContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
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
