import { View, Text, StyleSheet, ScrollView } from "react-native";
import React from "react";
import SkinTypeCard from "../../../organisms/SkinTypeCard";

const routineCard = [
  {
    id: 1,
    routineName: "Normal Skin",
    routineDescription: "Description of the routine",
    cardImage:
      "https://i.pinimg.com/474x/a9/aa/0b/a9aa0b1a8f24bcfb3625bad5fa4b65a0.jpg",
  },
  {
    id: 2,
    routineName: "Dry Skin",
    routineDescription: "Description of the routine",
    cardImage:
      "https://i.pinimg.com/474x/77/64/bd/7764bdc071f1907071e0a6cf046865a0.jpg",
  },
  {
    id: 3,
    routineName: "Oily SKin",
    routineDescription: "Description of the routine",
    cardImage:
      "https://i.pinimg.com/474x/47/16/0b/47160bc6ba111b50084c244853a03744.jpg",
  },
  {
    id: 4,
    routineName: "Mixed SKin",
    routineDescription: "Description of the routine",
    cardImage:
      "https://i.pinimg.com/736x/bb/98/0c/bb980c8f2de8a882c03710d1106e38c5.jpg",
  },
  {
    id: 5,
    routineName: "Sensitive SKin",
    routineDescription: "Description of the routine",
    cardImage:
      "https://i.pinimg.com/736x/af/08/95/af0895e5f194e07b1891593e40957aaf.jpg",
  },
];

export default function home() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {routineCard.map((card) => (
        <SkinTypeCard
          key={card.id}
          routineName={card.routineName}
          routineDescription={card.routineDescription}
          cardImage={card.cardImage}
          buttonName="Explore Routine"
        />
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: "#24221E",
    gap: 10,
    padding: 10,
  },
});
