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
      <Text style={styles.buttonTextStyles2}>{props.customButton2Text}</Text>
    </TouchableOpacity>
  );
};

const CustomButton3 = ({ onPress, isSelected, customButtonText }) => {
  return (
    <TouchableOpacity
      style={[styles.buttonThreeStyles, isSelected && styles.buttonTwoStyles]}
      onPress={onPress}
    >
      <Text
        style={[
          styles.buttonTextStyles,
          isSelected && styles.buttonTextStyles2,
        ]}
      >
        {customButtonText}
      </Text>
    </TouchableOpacity>
  );
};

const CustomButton4 = (props) => {
  return (
    <TouchableOpacity style={styles.buttonFourStyles} onPress={props.onPress}>
      <Text style={styles.buttonTextStyles}>{props.customButton2Text}</Text>
    </TouchableOpacity>
  );
};

export { CustomButton1, CustomButton2, CustomButton3, CustomButton4 };

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
  buttonTextStyles2: {
    fontSize: 16,
    color: "#EBE5DC",
  },
  buttonTwoStyles: {
    padding: 15,
    paddingLeft: 35,
    paddingRight: 35,
    borderRadius: 50,
    backgroundColor: "#24221E",
    alignItems: "center",
  },
  buttonFourStyles: {
    padding: 15,
    paddingLeft: 35,
    paddingRight: 35,
    borderRadius: 50,
    backgroundColor: "#EBE5DC",
    alignItems: "center",
  },
  buttonThreeStyles: {
    padding: 15,
    paddingLeft: 35,
    paddingRight: 35,
    borderRadius: 50,
    borderWidth: 1.2,
    borderColor: "#24221E",
    alignItems: "center",
  },
});
