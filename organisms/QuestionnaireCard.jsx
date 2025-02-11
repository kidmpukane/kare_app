import { StyleSheet, Text, View } from "react-native";
import { PressableNav } from "../molecules/PressableNav";
import { HeaderBody } from "../molecules/HeaderBody";
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
      </View>
    </View>
  );
};

export default QuestionnaireCard;

const styles = StyleSheet.create({});
