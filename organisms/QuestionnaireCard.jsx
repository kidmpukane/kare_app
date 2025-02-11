import { StyleSheet, Text, View } from "react-native";
import { PressableNav } from "../molecules/PressableNav";
import { HeaderBody } from "../molecules/HeaderBody";
import SquareButton from "../molecules/SquareButton";
import React from "react";

const QuestionnaireCard = () => {
  return (
    <View>
      <PressableNav
        buttonName="Questionnaire"
        onPress={() => {
          console.log("Questionnaire Pressed");
        }}
      />
      <View style={styles.formCardContainer}>
        <HeaderBody
          headerText="Questionnaire"
          bodyText="Please answer the following questions to the best of your ability."
        />
        <View style={styles.buttonContainer}>
          <SquareButton squareButtonText="0" onPress={() => console.log("0")} />
          <SquareButton squareButtonText="1" onPress={() => console.log("1")} />
          <SquareButton squareButtonText="2" onPress={() => console.log("2")} />
          <SquareButton squareButtonText="3" onPress={() => console.log("3")} />
          <SquareButton squareButtonText="4" onPress={() => console.log("4")} />
          <SquareButton squareButtonText="5" onPress={() => console.log("5")} />
        </View>
      </View>
    </View>
  );
};

export default QuestionnaireCard;

const styles = StyleSheet.create({
  formCardContainer: {
    backgroundColor: "#24221E",
    padding: 20,
    margin: 10,
    borderRadius: 30,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginTop: 20,
  },
});
