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
      <View>
        <HeaderBody
          headerText="Questionnaire"
          bodyText="Please answer the following questions to the best of your ability."
        />
        <SquareButton squareButtonText="1" onPress={() => console.log("1")} />
      </View>
    </View>
  );
};

export default QuestionnaireCard;

const styles = StyleSheet.create({});
