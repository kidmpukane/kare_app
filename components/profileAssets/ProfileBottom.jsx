import { StyleSheet, Text, View } from "react-native";
import { HeaderBody } from "../../molecules/HeaderBody";
import PressableNav from "../../molecules/PressableNav";
import React from "react";

const ProfileBottom = () => {
  return (
    <View style={styles.programContainer}>
      <View style={styles.headBodyStyles}>
        <HeaderBody />
      </View>
      <View>
        <PressableNav />
      </View>
      <View>
        <PressableNav />
      </View>
    </View>
  );
};

export default ProfileBottom;

const styles = StyleSheet.create({
  programContainer: {
    backgroundColor: "#24221E",
    borderRadius: 30,
    paddingTop: 25,
    paddingBottom: 15,
    paddingLeft: 0,
    paddingRight: 0,
  },
  headBodyStyles: {
    paddingTop: 5,
    paddingBottom: 25,
    paddingLeft: 10,
    paddingRight: 10,
  },
});
