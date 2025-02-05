import { StyleSheet, Text, View } from "react-native";
import { HeaderBody2 } from "../molecules/HeaderBody";
import React from "react";

const ProgramCard = () => {
  return (
    <View>
      <View style={styles.cardDescription}>
        <HeaderBody2 />
      </View>
    </View>
  );
};

export default ProgramCard;

const styles = StyleSheet.create({
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
});
