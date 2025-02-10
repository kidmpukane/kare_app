import { StyleSheet, Text, View } from "react-native";
import PurchaseAllCard from "../../organisms/PurchaseAllCard";
import { PressableNav3 } from "../../molecules/PressableNav";
import React from "react";

const ProgramTop = (props) => {
  return (
    <View>
      <PurchaseAllCard />
      <PressableNav3
        buttonName="Purchase Entire Routine"
        onPress={props.onPress}
      />
    </View>
  );
};

export default ProgramTop;

const styles = StyleSheet.create({});
