import { View, Text, StyleSheet, ScrollView } from "react-native";
import { useRouter } from "expo-router";
import React from "react";
import SkinTypeCard from "../../../organisms/SkinTypeCard";
import useGetInfo from "../../../hooks/useGetInfo";

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
  const router = useRouter();
  const { isLoading, data, isError, error } = useGetInfo(
    "http://10.0.2.2:8000/api/programs/programs/"
  );

  if (isLoading) {
    return <Text>Loadming...</Text>;
  }

  if (isError) {
    return <Text>Error: {error.message}</Text>;
  }
  console.log(data ? data : isError);
  const cardInfo = data ? data : routineCard;

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {cardInfo.map((card) => (
        <SkinTypeCard
          key={card.id}
          routineName={card.name}
          routineDescription={card.description}
          cardImage={card.image}
          buttonName={card.duration}
          onPress={() => {
            router.push(`/app/recommendations/programs?id=${card.id}`);
          }}
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
