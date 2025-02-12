import { StyleSheet, Text, View, ScrollView } from "react-native";
import RoutineGuides from "../../../components/routineAssets/RoutineGuides";
import RoutineCard from "../../../organisms/RoutineCard";
import React from "react";

const routineCard = [
  {
    id: 1,
    routineName: "Morning Routine",
    routineDescription: "Description of the routine",
    start: "06:00",
    finish: "12:00",
    cardImage:
      "https://i.pinimg.com/474x/47/16/0b/47160bc6ba111b50084c244853a03744.jpghttps://i.pinimg.com/474x/47/16/0b/47160bc6ba111b50084c244853a03744.jpg",
  },
  {
    id: 2,
    routineName: "Afternoon Routine",
    routineDescription: "Description of the routine",
    start: "12:00",
    finish: "18:00",
    cardImage:
      "https://i.pinimg.com/474x/47/16/0b/47160bc6ba111b50084c244853a03744.jpghttps://i.pinimg.com/474x/47/16/0b/47160bc6ba111b50084c244853a03744.jpg",
  },
  {
    id: 3,
    routineName: "Evening Routine",
    routineDescription: "Description of the routine",
    start: "18:00",
    finish: "22:00",
    cardImage:
      "https://i.pinimg.com/474x/47/16/0b/47160bc6ba111b50084c244853a03744.jpg",
  },
];

const programs = () => {
  return (
    <ScrollView contentContainerStyle={styles.programsContainer}>
      <RoutineGuides />
      {routineCard.map((card) => (
        <RoutineCard
          key={card.id}
          routineName={card.routineName}
          routineDescription={card.routineDescription}
          start={card.start}
          finish={card.finish}
          cardImage={card.cardImage}
        />
      ))}
    </ScrollView>
  );
};

export default programs;

const styles = StyleSheet.create({
  programsContainer: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#EBE5DC",
    padding: 10,
    gap: 10,
  },
});
