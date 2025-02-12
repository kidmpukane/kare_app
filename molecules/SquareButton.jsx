import React from "react";
import { TouchableOpacity, StyleSheet, Text, View } from "react-native";

const SquareButton = ({ onPress, isSelected, squareButtonText }) => {
  return (
    <TouchableOpacity
      style={[styles.squareButton, isSelected && styles.greenButton]}
      onPress={onPress}
    >
      <View style={styles.textContainer}>
        <Text style={styles.buttonText}>{squareButtonText}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  squareButton: {
    width: 50,
    height: 50,
    backgroundColor: "#ddd",
    justifyContent: "center",
    alignItems: "center",
    margin: 5,
    borderRadius: 5,
  },
  greenButton: {
    backgroundColor: "green",
  },
  buttonText: {
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default SquareButton;
