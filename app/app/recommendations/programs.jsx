import { StyleSheet, Text, View, ScrollView } from "react-native";
import { useRouter } from "expo-router";
import { useLocalSearchParams } from "expo-router";
import RoutineGuides from "../../../components/routineAssets/RoutineGuides";
import useGetInfo from "../../../hooks/useGetInfo";
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
  const router = useRouter();
  const { id } = useLocalSearchParams();
  const { isLoading, data, isError, error } = useGetInfo(
    `http://10.0.2.2:8000//api/routines/get_routines_by_programs/${id}/ `
  );

  if (isLoading) {
    return <Text>Loadming...</Text>;
  }

  if (isError) {
    return <Text>Error: {error.message}</Text>;
  }
  console.log(data ? data : isError);
  console.log(id);

  const routineCardInfo = data ? data : routineCard;
  return (
    <ScrollView contentContainerStyle={styles.programsContainer}>
      <RoutineGuides />
      {routineCardInfo.map((card) => (
        <RoutineCard
          key={card.id}
          routineName={card.routine_name}
          routineDescription={card.description}
          start={card.start_date}
          finish={card.end_date}
          cardImage={card.image}
          onPress={() => {
            router.push(`/app/recommendations/routines?id=${card.id}`);
          }}
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
