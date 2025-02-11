import React, { useState } from "react";
import { TouchableOpacity, StyleSheet, Text } from "react-native";

const SquareButton = (props) => {
  const [bttnStyle, setBttnStyle] = useState(styles.squareButton);

  const changeColour = () => {
    setBttnStyle((prevStyle) =>
      prevStyle === styles.squareButton
        ? styles.greenButton
        : styles.squareButton
    );
  };

  return (
    <TouchableOpacity
      style={bttnStyle}
      onPress={() => {
        props.onPress();
        changeColour();
      }}
    >
      <Text style={styles.buttonText}>{props.squareButtonText}</Text>
    </TouchableOpacity>
  );
};

export default SquareButton;

const styles = StyleSheet.create({
  squareButton: {
    fontSize: 5,
    width: 12,
    height: 16,
    borderRadius: 20,
    backgroundColor: "#EBE5DC",
    justifyContent: "center",
    alignItems: "center",
  },
  greenButton: {
    fontSize: 5,
    width: 12,
    height: 16,
    flexShrink: 0,
    borderRadius: 20,
    color: "#EBE5DC",
    backgroundColor: "#868365",
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: "#000",
  },
});
