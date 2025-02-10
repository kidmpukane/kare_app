import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import { HeaderBody3 } from "../molecules/HeaderBody";
import { FontAwesome } from "@expo/vector-icons";
import { PressableNav4 } from "../molecules/PressableNav";
import React from "react";

const ProductCard = (props) => {
  const cardImage =
    "https://i.pinimg.com/474x/47/16/0b/47160bc6ba111b50084c244853a03744.jpg";
  return (
    <View>
      <ImageBackground
        source={{ uri: props.cardImage }}
        style={styles.cardImageStyles}
        imageStyle={styles.borderImageStyle}
      >
        <View style={styles.cardTopContainer}>
          <View style={styles.durationContainer}>
            <Text style={styles.durationText}>{props.programNumber}</Text>
          </View>
        </View>
        <View style={styles.cardBottomContainer}>
          <PressableNav4
            buttonName={props.buttonName}
            onPress={props.onPress}
          />
        </View>
      </ImageBackground>
    </View>
  );
};

export default ProductCard;

const styles = StyleSheet.create({
  cardImageStyles: {
    padding: 5,
    height: 300,
    justifyContent: "space-between",
  },
  borderImageStyle: {
    borderRadius: 15,
  },

  durationContainer: {
    left: "70%",
    padding: 6,
    backgroundColor: "#24221E",
    color: "#EBE5DC",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
    width: "30%",
  },

  durationText: {
    color: "#EBE5DC",
  },
});
