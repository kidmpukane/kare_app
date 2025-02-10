import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import { HeaderBody2 } from "../molecules/HeaderBody";
import { useRouter } from "expo-router";
import React from "react";

const ProgramCard = (props) => {
  const router = useRouter();
  const cardImage =
    "https://i.pinimg.com/474x/77/64/bd/7764bdc071f1907071e0a6cf046865a0.jpg";
  return (
    <View>
      <TouchableOpacity
        onPress={() => {
          {
            router.push("/app/recommendations/programs");
          }
        }}
      >
        <ImageBackground
          source={{ uri: cardImage }}
          style={styles.cardImageStyles}
          imageStyle={styles.borderImageStyle}
        >
          <View style={styles.cardTopContainer}>
            <View style={styles.durationIndicator}>
              <View style={styles.durationContainer}>
                <Text style={styles.durationText}>Duration</Text>
              </View>
              <View style={styles.weeksContainer}>
                <Text>12 Weeks</Text>
              </View>
            </View>
            <View style={styles.resultsIndicator}>
              <Text>Dry</Text>
            </View>
          </View>
          <View style={styles.cardDescription}>
            <HeaderBody2
              headerText={"Routine Name"}
              bodyText={
                "Your are currently taking the KARE 001 Magic Repair routine"
              }
            />
          </View>
        </ImageBackground>
      </TouchableOpacity>
    </View>
  );
};

export default ProgramCard;

const styles = StyleSheet.create({
  cardImageStyles: {
    padding: 15,
    height: 600,
    width: 380,
    justifyContent: "space-between",
  },
  borderImageStyle: {
    borderRadius: 40,
  },
  cardTopContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  cardDescription: {
    paddingTop: 20,
    paddingBottom: 20,
    paddingLeft: 10,
    paddingRight: 10,
    backgroundColor: "#EBE5DC",
    width: "100%",

    borderRadius: 30,
  },
  resultsIndicator: {
    padding: 5,
    borderWidth: 1.5,
    borderColor: "#24221E",
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "pink",
    width: "20%",
  },
  durationIndicator: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#EBE5DC",
    padding: 0,
    borderWidth: 1.5,
    borderColor: "#24221E",
    borderRadius: 30,
    width: "56%",
  },
  durationContainer: {
    backgroundColor: "#24221E",
    color: "#EBE5DC",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 30,
    width: "50%",
    height: 40,
  },
  weeksContainer: {
    color: "#EBE5DC",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 30,
    width: "50%",
  },
  durationText: {
    color: "#EBE5DC",
  },
});
