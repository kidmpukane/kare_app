import { StyleSheet, Text, View } from "react-native";
import { HeaderBody } from "../../molecules/HeaderBody";
import { PressableNav } from "../../molecules/PressableNav";
import { useRouter } from "expo-router";
import React from "react";

const ProfileBottom = () => {
  const router = useRouter();
  return (
    <View style={styles.programContainer}>
      <View style={styles.headBodyStyles}>
        <HeaderBody
          headerText="Programs"
          bodyText="Theses are the programs you are currently enrolled in, as well as the suggested alternatives."
        />
      </View>
      <View>
        <PressableNav
          buttonName="Current Programs"
          onPress={() => router.push("/app/recommendations/programs")}
        />
      </View>
      <View>
        <PressableNav
          buttonName="Alternative Programs"
          onPress={() => router.push("/app/results")}
        />
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
