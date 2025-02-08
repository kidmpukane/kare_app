import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import RoutineCard from "../../organisms/RoutineCard";
import React from "react";

const RoutineBottom = () => {
  return (
    <View>
      <TouchableOpacity
        onPress={() => {
          alert("Pressed");
        }}
      >
        <RoutineCard />
      </TouchableOpacity>
    </View>
  );
};

export default RoutineBottom;

const styles = StyleSheet.create({});
