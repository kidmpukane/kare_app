import React from "react";
import { TouchableOpacity, StyleSheet, Text, View } from "react-native";

const SquareButton = ({ onPress, isSelected, squareButtonText }) => {
  return (
    <TouchableOpacity
      style={[styles.squareButton, isSelected && styles.greenButton]}
      onPress={onPress}
    >
      <View style={styles.textContainer}>
        <Text style={[styles.buttonText, isSelected && styles.buttonText2]}>
          {squareButtonText}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  squareButton: {
    width: 50,
    height: 60,
    borderWidth: 1,
    borderColor: "#EBE5DC",
    justifyContent: "center",
    alignItems: "center",
    margin: 5,
    borderRadius: 10,
  },
  greenButton: {
    backgroundColor: "#EEC9B5",
  },
  buttonText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#EBE5DC",
  },
  buttonText2: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#24221E",
  },
});

export default SquareButton;
