import { StyleSheet, Text, View } from "react-native";
import { HeaderBody2 } from "../molecules/HeaderBody";
import React from "react";

const ProgramCard = () => {
  return (
    <View>
      <View style={styles.cardTopContainer}>
        <View style={styles.durationIndicator}>
          <View style={styles.durationContainer}>
            <Text style={styles.durationText}>Duration</Text>
          </View>
          <View style={styles.weeksContainer}>
            <Text>12 Weeks</Text>
          </View>
        </View>
        <View style={styles.resultsIndicator}>
          <Text>Dry</Text>
        </View>
      </View>
      <View style={styles.cardDescription}>
        <HeaderBody2 />
      </View>
    </View>
  );
};

export default ProgramCard;

const styles = StyleSheet.create({
  cardTopContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  cardDescription: {
    paddingTop: 20,
    paddingBottom: 20,
    paddingLeft: 10,
    paddingRight: 10,
    backgroundColor: "#EBE5DC",
    width: "100%",
    height: 240,
    borderRadius: 40,
  },
  resultsIndicator: {
    padding: 5,
    borderWidth: 1.5,
    borderColor: "#24221E",
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "pink",
    width: "20%",
  },
  durationIndicator: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#EBE5DC",
    padding: 0,
    borderWidth: 1.5,
    borderColor: "#24221E",
    borderRadius: 30,
    width: "40%",
  },
  durationContainer: {
    backgroundColor: "#24221E",
    color: "#EBE5DC",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 30,
    width: "50%",
  },
  weeksContainer: {
    color: "#EBE5DC",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 30,
    width: "50%",
  },
  durationText: {
    color: "#EBE5DC",
  },
});
