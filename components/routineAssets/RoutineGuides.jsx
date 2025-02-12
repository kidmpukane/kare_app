import { StyleSheet, Text, View } from "react-native";
import { HeaderBody4 } from "../../molecules/HeaderBody";
import React from "react";

const RoutineGuides = () => {
  return (
    <View style={styles.routineContainer}>
      <View style={styles.resultsTopContainer}>
        <View style={styles.resultsIndicator}>
          <Text>Dry</Text>
        </View>
        <View>
          <HeaderBody4
            headerText="Routines"
            bodyText="Complete a quick examination, to find the perfect routine.The app processes this information and provides an overview of a personalised skincare routine."
          />
        </View>
      </View>
    </View>
  );
};

export default RoutineGuides;

const styles = StyleSheet.create({
  routineContainer: {
    padding: 35,
    width: "100%",
    backgroundColor: "#24221E",
    borderRadius: 15,
  },
  resultsIndicator: {
    position: "absolute", // Use absolute positioning
    top: 10, // Distance from the top of the parent container
    right: 10, // Distance from the right of the parent container
    padding: 5,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#EEC9B5",
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
