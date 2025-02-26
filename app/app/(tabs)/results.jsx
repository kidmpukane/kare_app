import { StyleSheet, Text, View, ScrollView } from "react-native";
import SkinResults from "../../../components/resultsAssets/SkinResults";
import ProgramCard from "../../../organisms/ProgramCard";
import { CustomButton3 } from "../../../molecules/CustomButtons";
import { React, useState } from "react";
import { useRouter } from "expo-router";
import useGetInfo from "../../../hooks/useGetInfo";
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
  const [selectedFilter, setSelectedFilter] = useState(null); // Track selected filter

  const filters = ["Dry", "Normal", "Oily", "Mixed", "Sensitive"];

  const handleFilterPress = (filter) => {
    setSelectedFilter(filter); // Update selected filter
  };

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
  const cardInfo = data ? data : item;

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <SkinResults />
      {/* <Text style={styles.resultText}>Filter</Text>
      <View style={styles.underline} /> */}
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.filterContainer}
      >
        {filters.map((filter) => (
          <CustomButton3
            key={filter}
            customButtonText={filter}
            onPress={() => handleFilterPress(filter)}
            isSelected={selectedFilter === filter} // Highlight selected button
          />
        ))}
      </ScrollView>
      {/* 
      <Text style={styles.resultText}>Recommendations</Text>
      <View style={styles.underline} /> */}
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.recommendationsContainer}
      >
        {cardInfo.map((item) => (
          <ProgramCard
            key={item.id}
            id={item.id}
            headerText={item.name}
            bodyText={item.description}
            programDuration={item.duration}
            programType={item.name}
            cardImage={item.image}
            onPress={() => {
              router.push(`/app/recommendations/programs?id=${item.id}`);
            }}
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
    paddingTop: 10,
    paddingLeft: 5,
    paddingRight: 5,
    paddingBottom: 10,
    backgroundColor: "#EBE5DC",
  },
  customButtonContainer: {
    display: "flex",
    flexDirection: "row",
    gap: 4,
  },
  underline: {
    height: 1.5,
    backgroundColor: "#24221E",
    width: "90%",
    alignSelf: "center",
    marginTop: 10,
    marginBottom: 10,
  },
  resultText: {
    fontSize: 40,
    padding: 10,
  },
  filterContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
  },
  recommendationsContainer: {
    flexDirection: "row",
    paddingLeft: 10,
    alignItems: "center",
    gap: 20,
  },
});
