import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";

const CustomButton1 = (props) => {
  return (
    <TouchableOpacity style={styles.buttonOneStyles} onPress={props.onPress}>
      <Text style={styles.buttonTextStyles}>{props.customButton1Text}</Text>
    </TouchableOpacity>
  );
};
const CustomButton2 = (props) => {
  return (
    <TouchableOpacity style={styles.buttonTwoStyles} onPress={props.onPress}>
      <Text style={styles.buttonTextStyles}>{props.customButton2Text}</Text>
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
  buttonTextStyles: {
    fontSize: 16,
    color: "#24221E",
  },
  buttonTwoStyles: {
    padding: 15,
    borderRadius: 50,
    backgroundColor: "#EBE5DC",
    alignItems: "center",
  },
});
