import { StyleSheet, Text, View } from "react-native";
import { HeaderBody2 } from "../../molecules/HeaderBody";
import { PressableNav2 } from "../../molecules/PressableNav";
import React from "react";

const SkinResults = () => {
  return (
    <View style={styles.resultsContainer}>
      <View style={styles.resultsTopContainer}>
        <View style={styles.resultsIndicator}>
          <Text>Results</Text>
        </View>
        <View>
          <HeaderBody2 />
        </View>
      </View>
      <View style={styles.underline} />
      <View style={styles.resultsBottomContainer}>
        <PressableNav2 />
        <PressableNav2 />
      </View>
    </View>
  );
};

export default SkinResults;

const styles = StyleSheet.create({
  resultsContainer: {
    padding: 10,
    borderWidth: 1.5,
    borderColor: "#24221E",
    borderRadius: 30,
  },
  resultsIndicator: {
    position: "absolute", // Use absolute positioning
    top: 10, // Distance from the top of the parent container
    right: 10, // Distance from the right of the parent container
    padding: 5,
    borderWidth: 1.5,
    borderColor: "#24221E",
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "pink",
    width: "20%",
  },
  resultsTopContainer: {
    display: "flex",
    justifyContent: "space-between",
  },
  underline: {
    height: 1.5,
    backgroundColor: "black",
    width: "90%",
    alignSelf: "center",
    marginTop: 20,
    marginBottom: 20,
  },
  resultsBottomContainer: {},
});
