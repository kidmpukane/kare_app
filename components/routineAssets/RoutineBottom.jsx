import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";
import RoutineCard from "../../organisms/RoutineCard";
import React from "react";

const RoutineBottom = () => {
  const router = useRouter();
  return (
    <View>
      <TouchableOpacity
        onPress={() => {
          router.push("/app/recommendations/routines");
        }}
      >
        <RoutineCard />
      </TouchableOpacity>
    </View>
  );
};

export default RoutineBottom;

const styles = StyleSheet.create({});
