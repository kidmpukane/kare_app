import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import ProgramCard from "../../organisms/ProgramCard";
import React from "react";
import { useRouter } from "expo-router";

const RecommendationResults = () => {
  const router = useRouter();
  return (
    <View>
      <TouchableOpacity
        onPress={() => {
          {
            router.push("/app/recommendations/programs");
          }
        }}
      >
        <ProgramCard />
      </TouchableOpacity>
    </View>
  );
};

export default RecommendationResults;

const styles = StyleSheet.create({});
