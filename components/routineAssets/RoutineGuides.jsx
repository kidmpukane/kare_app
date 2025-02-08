import { StyleSheet, Text, View } from "react-native";
import { HeaderBody3 } from "../../molecules/HeaderBody";
import React from "react";

const RoutineGuides = () => {
  return (
    <View style={styles.routineContainer}>
      <View style={styles.resultsTopContainer}>
        <View style={styles.resultsIndicator}>
          <Text>Results</Text>
        </View>
        <View>
          <HeaderBody3 />
        </View>
      </View>
    </View>
  );
};

export default RoutineGuides;

const styles = StyleSheet.create({
  routineContainer: {
    padding: 35,
    backgroundColor: "#24221E",
    borderRadius: 20,
  },
  resultsIndicator: {
    position: "absolute", // Use absolute positioning
    top: 10, // Distance from the top of the parent container
    right: 10, // Distance from the right of the parent container
    padding: 5,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "pink",
    width: "22%",
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
