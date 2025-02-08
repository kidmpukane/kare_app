import { StyleSheet, Text, View } from "react-native";
import PurchaseAllCard from "../../organisms/PurchaseAllCard";
import { PressableNav3 } from "../../molecules/PressableNav";
import React from "react";

const ProgramTop = () => {
  return (
    <View>
      <PurchaseAllCard />
      <PressableNav3 />
    </View>
  );
};

export default ProgramTop;

const styles = StyleSheet.create({});
