import React, { useState } from "react";
import { TouchableOpacity, StyleSheet, Text, View } from "react-native";

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
    <View>
      <TouchableOpacity
        style={bttnStyle}
        onPress={() => {
          props.onPress();
          changeColour();
        }}
      >
        <View style={styles.textContainer}>
          <Text style={styles.buttonText}>{props.squareButtonText}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default SquareButton;

const styles = StyleSheet.create({
  squareButton: {
    padding: 20,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#EBE5DC",
    justifyContent: "center",
    alignItems: "center",
  },
  greenButton: {
    padding: 20,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#EBE5DC",
    backgroundColor: "#868365",
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: "#EBE5DC",
    fontSize: 20,
  },
});
