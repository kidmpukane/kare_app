import { StyleSheet, Text, View, ScrollView } from "react-native";
import SkinResults from "../../../components/resultsAssets/SkinResults";
import ProgramCard from "../../../organisms/ProgramCard";
import React from "react";

const programRecommendations = [
  {
    id: "1",
    heading: "Routine One",
    description: "The Morning Magic routine aids your skin...",
    duration: "12 Weeks",
    skinType: "Dry",
    image:
      "https://i.pinimg.com/474x/77/64/bd/7764bdc071f1907071e0a6cf046865a0.jpg",
  },
  {
    id: "2",
    heading: "Routine Two",
    description: "The Morning Magic routine aids your skin...",
    duration: "8 Weeks",
    skinType: "Dry",
    image:
      "https://i.pinimg.com/474x/77/64/bd/7764bdc071f1907071e0a6cf046865a0.jpg",
  },
  {
    id: "3",
    heading: "Routine Three",
    description: "The Morning Magic routine aids your skin...",
    duration: "6 Weeks",
    skinType: "Dry",
    image:
      "https://i.pinimg.com/474x/77/64/bd/7764bdc071f1907071e0a6cf046865a0.jpg",
  },
  {
    id: "4",
    heading: "Routine Four",
    description: "The Morning Magic routine aids your skin...",
    duration: "9 Weeks",
    skinType: "Dry",
    image:
      "https://i.pinimg.com/474x/77/64/bd/7764bdc071f1907071e0a6cf046865a0.jpg",
  },
];
const results = () => {
  const item = programRecommendations;

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <SkinResults />

      <Text style={styles.resultText}>Program Recommendations</Text>
      <View style={styles.underline} />
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.recommendationsContainer}
      >
        {item.map((item) => (
          <ProgramCard
            key={item.id}
            id={item.id}
            headerText={item.heading}
            bodyText={item.description}
            programDuration={item.duration}
            programType={item.skinType}
            cardImage={item.image}
          />
        ))}
      </ScrollView>
    </ScrollView>
  );
};

export default results;

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    gap: 10,
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 20,
    paddingLeft: 1,
    paddingRight: 1,
    paddingBottom: 20,
    backgroundColor: "#EBE5DC",
  },
  underline: {
    height: 1.5,
    backgroundColor: "#24221E",
    width: "90%",
    alignSelf: "center",
    marginTop: 20,
    marginBottom: 20,
  },
  resultText: {
    fontSize: 40,
    padding: 10,
  },
  recommendationsContainer: {
    flexDirection: "row",
    padding: 20,
    alignItems: "center",
    gap: 20,
  },
});
