import { StyleSheet, Text, View, ScrollView, FlatList } from "react-native";
import { useRouter } from "expo-router";
import { useLocalSearchParams } from "expo-router";
import useGetInfo from "../../../hooks/useGetInfo";
import ProgramTop from "../../../components/programAssets/ProgramTop";
import ProductCard from "../../../organisms/ProductCard";
import React from "react";

const routineSteps = [
  {
    id: "1",
    programNumber: "1",
    buttonName: "Step 1",
    instructions: "Step 1 Instructions",
    cardImage:
      "https://i.pinimg.com/736x/bb/98/0c/bb980c8f2de8a882c03710d1106e38c5.jpg",
  },
  {
    id: "2",
    programNumber: "2",
    buttonName: "Step 2",
    instructions: "Step 2 Instructions",
    cardImage:
      "https://i.pinimg.com/736x/bb/98/0c/bb980c8f2de8a882c03710d1106e38c5.jpg",
  },
  {
    id: "3",
    programNumber: "3",
    buttonName: "Step 3",
    instructions: "Step 3 Instructions",
    cardImage:
      "https://i.pinimg.com/736x/bb/98/0c/bb980c8f2de8a882c03710d1106e38c5.jpg",
  },
  {
    id: "4",
    programNumber: "4",
    buttonName: "Step 4",
    instructions: "Step 4 Instructions",
    cardImage:
      "https://i.pinimg.com/736x/bb/98/0c/bb980c8f2de8a882c03710d1106e38c5.jpg",
  },
];

const Routines = () => {
  const router = useRouter();
  const { id } = useLocalSearchParams();
  const { isLoading, data, isError, error } = useGetInfo(
    `http://10.0.2.2:8000//api/routines/get_instructions_by_routines/${id}/ `
  );

  if (isLoading) {
    return <Text>Loadming...</Text>;
  }

  if (isError) {
    return <Text>Error: {error.message}</Text>;
  }
  console.log(data ? data : isError);
  console.log(id);

  const instructionsCardInfo = data ? data : routineSteps;
  return (
    <ScrollView contentContainerStyle={styles.routinesContainer}>
      <ProgramTop onPress={() => alert("Purchase Entire Routine")} />
      <View style={styles.underline} />

      <FlatList
        data={instructionsCardInfo}
        keyExtractor={(item) => item.id}
        numColumns={2}
        columnWrapperStyle={styles.row}
        renderItem={(
          { item } // ✅ Destructures 'item' properly
        ) => (
          <View style={styles.cardContainer}>
            <ProductCard
              programNumber={item.instruction_number} // ✅ Uses correct data
              buttonName={`Step ${item.instruction_number}`} // ✅ Correct template literal
              onPress={() =>
                alert(
                  `${item.instruction_description}\n${item.instruction_name}`
                )
              } // ✅ Fix alert to show both values
              cardImage={item.image}
            />
          </View>
        )}
      />
    </ScrollView>
  );
};

export default Routines;

const styles = StyleSheet.create({
  routinesContainer: {
    flexGrow: 1,
    padding: 10,
    gap: 2,
    backgroundColor: "#EBE5DC",
  },
  underline: {
    height: 1,
    backgroundColor: "black",
    width: "90%",
    alignSelf: "center",
    marginTop: 20,
    marginBottom: 20,
  },
  row: {
    justifyContent: "space-between",
  },
  cardContainer: {
    flex: 1,
    margin: 8,
  },
});
