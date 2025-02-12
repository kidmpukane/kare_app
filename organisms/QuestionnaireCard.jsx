import { StyleSheet, Text, View } from "react-native";
import { PressableNav5 } from "../molecules/PressableNav";
import { HeaderBody } from "../molecules/HeaderBody";
import SquareButton from "../molecules/SquareButton";
import { React, useState } from "react";

const QuestionnaireCard = () => {
  const [formToggle, setFormToggle] = useState(styles.formCardContainer);
  const toggleForm = () => {
    setFormToggle((prevStyle) =>
      prevStyle == styles.formCardContainer
        ? styles.formCardContainer2
        : styles.formCardContainer
    );
  };
  return (
    <View>
      <PressableNav5
        buttonName="Questionnaire"
        onPress={() => {
          console.log("Questionnaire Pressed");
          toggleForm();
        }}
      />
      <View style={formToggle}>
        <HeaderBody
          headerText="Questionnaire"
          bodyText="Please answer the following questions to the best of your ability."
        />
        <View style={styles.underline} />
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
    display: "none",
  },
  formCardContainer2: {
    backgroundColor: "#24221E",
    padding: 20,
    margin: 10,
    borderRadius: 30,
    borderWidth: 1,
    borderColor: "#EBE5DC",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginTop: 20,
  },
  underline: {
    height: 1,
    backgroundColor: "#EBE5DC",
    width: "90%",
    alignSelf: "center",
    marginTop: 20,
    marginBottom: 20,
  },
});
