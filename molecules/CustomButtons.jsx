import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";

const CustomButton1 = (props) => {
  return (
    <TouchableOpacity style={styles.buttonOneStyles} onPress={props.onPress}>
      <Text style={styles.buttonOneTextStyles}>{props.customButton1Text}</Text>
    </TouchableOpacity>
  );
};
const CustomButton2 = (props) => {
  return (
    <TouchableOpacity style={styles.buttonTwoStyles} onPress={props.onPress}>
      <Text style={styles.buttonTwoTextStyles}>{props.customButton2Text}</Text>
    </TouchableOpacity>
  );
};

export { CustomButton1, CustomButton2 };

const styles = StyleSheet.create({
  buttonOneStyles: {
    padding: 15,
    borderRadius: 50,
    backgroundColor: "#EEC9B5",
    alignItems: "center",
  },
  buttonOneTextStyles: {},
  buttonTwoStyles: {},
  buttonTwoTextStyles: {},
});
