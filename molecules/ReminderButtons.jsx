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
const ReminderButtonSml = ({ iconPm, timePm, routinePm, isActive }) => {
  return (
    <View>
      <View
        style={[
          isActive
            ? styles.reminderBtnSmlStylesAct
            : styles.reminderBtnSmlStyles,
        ]}
      >
        <FontAwesome
          name={iconPm}
          size={15}
          color={isActive ? "#EBE5DC" : "#24221E"}
        />
        <Text
          style={[
            isActive
              ? styles.reminderTxtSmlStylesAct
              : styles.reminderTxtSmlStyles,
          ]}
        >
          {timePm}
        </Text>
        <Text
          style={[
            isActive
              ? styles.reminderBtnSmlStyles2Act
              : styles.reminderTxtSmlStyles2,
          ]}
        >
          {routinePm}
        </Text>
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
    backgroundColor: "#868365",
    borderRadius: 15,
    padding: 20,
    alignItems: "center",
  },
  reminderTxtSmlStylesAct: {
    fontSize: 10,
    color: "#EBE5DC",
  },
  reminderBtnSmlStyles2Act: {
    fontSize: 6,
    color: "#EBE5DC",
  },
  iconStylesAct: {
    color: "#EBE5DC",
  },
});
