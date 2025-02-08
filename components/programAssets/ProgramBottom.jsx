import { StyleSheet, FlatList, View } from "react-native";
import ProductCard from "../../organisms/ProductCard";
import React from "react";

const data = [1, 2, 3, 4]; // Dummy data for now

const ProgramBottom = () => {
  return (
    <FlatList
      data={data}
      keyExtractor={(item, index) => index.toString()}
      numColumns={2} // ✅ Two columns
      columnWrapperStyle={styles.row} // ✅ Adds spacing between columns
      renderItem={() => (
        <View style={styles.cardContainer}>
          <ProductCard />
        </View>
      )}
    />
  );
};

export default ProgramBottom;

const styles = StyleSheet.create({
  row: {
    justifyContent: "space-between", // ✅ Even spacing between columns
  },
  cardContainer: {
    flex: 1, // ✅ Ensures each column takes equal width
    margin: 8, // ✅ Adds spacing around each card
  },
});
