import { StyleSheet, Text, View, ImageBackground } from "react-native";
import { HeaderBody3 } from "../molecules/HeaderBody";
import { FontAwesome } from "@expo/vector-icons";
import React from "react";

const PurchaseAllCard = () => {
  const cardImage =
    "https://i.pinimg.com/474x/a9/aa/0b/a9aa0b1a8f24bcfb3625bad5fa4b65a0.jpg";
  return (
    <View>
      <ImageBackground
        source={{ uri: cardImage }}
        style={styles.cardImageStyles}
        imageStyle={styles.borderImageStyle}
      >
        <View style={styles.cardTopContainer}></View>
        <View style={styles.cardBottomContainer}>
          <View style={styles.cardDescription}>
            <HeaderBody3 />
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

export default PurchaseAllCard;

const styles = StyleSheet.create({
  cardImageStyles: {
    padding: 15,
    borderRadius: 5,
    height: 200,
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

  cardDescription: {
    padding: 15,
    borderWidth: 1.5,
    borderColor: "#EBE5DC",
    width: "100%",
    borderRadius: 20,
  },
});
