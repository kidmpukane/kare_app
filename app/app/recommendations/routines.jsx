import { StyleSheet, Text, View, ScrollView, FlatList } from "react-native";
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
  return (
    <ScrollView contentContainerStyle={styles.routinesContainer}>
      <ProgramTop onPress={() => alert("Purchase Entire Routine")} />
      <View style={styles.underline} />

      <FlatList
        data={routineSteps}
        keyExtractor={(item) => item.id} // ✅ Extracts correct key
        numColumns={2}
        columnWrapperStyle={styles.row}
        renderItem={(
          { item } // ✅ Destructures 'item' properly
        ) => (
          <View style={styles.cardContainer}>
            <ProductCard
              programNumber={item.programNumber} // ✅ Uses correct data
              buttonName={item.buttonName}
              onPress={() => alert(item.instructions)}
              cardImage={item.cardImage}
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
