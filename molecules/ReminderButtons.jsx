import { TouchableOpacity, StyleSheet, Text, View } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import React from "react";

const ReminderButtonLrg = () => {
  return (
    <View>
      <TouchableOpacity style={styles.reminderBtnLrgStyles}>
        <FontAwesome name="bell-o" size={24} color="#EBE5DC" />
      </TouchableOpacity>
    </View>
  );
};
const ReminderButtonSml = (props) => {
  return (
    <View>
      <View style={styles.reminderBtnSmlStyles}>
        <FontAwesome name={props.iconPm} size={15} color={styles.iconStyles} />
        <Text style={styles.reminderTxtSmlStyles}>{props.timePm}</Text>
        <Text style={styles.reminderTxtSmlStyles2}>{props.routinePm}</Text>
      </View>
    </View>
  );
};

export { ReminderButtonLrg, ReminderButtonSml };

const styles = StyleSheet.create({
  reminderBtnLrgStyles: {
    backgroundColor: "#24221E",
    borderRadius: 15,
    padding: 30,
    alignItems: "center",
  },
  reminderBtnSmlStyles: {
    borderWidth: 1,
    borderColor: "#24221E",
    borderRadius: 15,
    padding: 20,
    alignItems: "center",
  },
  iconStyles: {
    color: "#24221E",
  },
  reminderTxtSmlStyles: {
    fontSize: 10,
  },
  reminderTxtSmlStyles2: {
    fontSize: 6,
  },
  reminderBtnSmlStylesAct: {
    borderWidth: 1,
    borderColor: "#868365",
    borderRadius: 15,
    padding: 20,
    alignItems: "center",
  },
  reminderTxtSmlStylesAct: {
    fontSize: 10,
    color: "#EBE5DC",
  },
  iconStylesAct: {
    color: "#EBE5DC",
  },
});
