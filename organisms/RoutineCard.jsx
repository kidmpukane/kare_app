import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import { HeaderBody3 } from "../molecules/HeaderBody";
import { FontAwesome } from "@expo/vector-icons";
import React from "react";

const RoutineCard = (props) => {
  const cardImage =
    "https://i.pinimg.com/474x/47/16/0b/47160bc6ba111b50084c244853a03744.jpg";
  return (
    <View>
      <ImageBackground
        source={{ uri: cardImage }}
        style={styles.cardImageStyles}
        imageStyle={styles.borderImageStyle}
      >
        <View style={styles.cardTopContainer}>
          <View style={styles.durationIndicator}>
            <View style={styles.durationContainer}>
              <Text style={styles.durationText}>{props.start}</Text>
            </View>
            <View style={styles.weeksContainer}>
              <Text>{props.finish}</Text>
            </View>
          </View>
        </View>
        <View style={styles.cardBottomContainer}>
          <View style={styles.cardDescription}>
            <HeaderBody3
              headerText={props.routineName}
              bodyText={props.routineDescription}
            />
          </View>
          <View style={styles.moreInfo}>
            <View style={styles.moreBorderInfo}>
              <FontAwesome name="angle-right" size={24} color="#EBE5DC" />
            </View>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

export default RoutineCard;

const styles = StyleSheet.create({
  cardImageStyles: {
    padding: 15,
    borderRadius: 5,
    height: 300,
    justifyContent: "space-between",
  },
  borderImageStyle: {
    borderRadius: 20,
  },
  cardTopContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  cardBottomContainer: {
    display: "flex",
    flexDirection: "row",
    alignContent: "center",
    alignItems: "center",
    gap: 5,
  },
  cardDescription: {
    padding: 15,
    borderWidth: 1.5,
    borderColor: "#EBE5DC",
    width: "84%",
    borderRadius: 20,
  },
  moreInfo: {
    padding: 20,
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#24221E",
    height: 60,
    width: 60,
  },
  moreBorderInfo: {
    borderWidth: 1.5,
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#EBE5DC",
    width: 30,
    height: 30,
  },
  durationIndicator: {
    left: "60%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#EBE5DC",
    padding: 0,
    borderWidth: 1.5,
    borderColor: "#24221E",
    borderRadius: 30,
    width: "40%",
  },
  durationContainer: {
    padding: 6,
    backgroundColor: "#24221E",
    color: "#EBE5DC",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 30,
    width: "60%",
  },
  weeksContainer: {
    color: "#EBE5DC",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 30,
    width: "50%",
    right: "8%",
  },
  durationText: {
    color: "#EBE5DC",
  },
});
