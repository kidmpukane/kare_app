import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import { HeaderBody3, HeaderBody } from "../molecules/HeaderBody";
import { PressableNav2 } from "../molecules/PressableNav";
import { FontAwesome } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React from "react";

const SkinTypeCard = (props) => {
  const router = useRouter();
  const cardImage =
    "https://i.pinimg.com/474x/47/16/0b/47160bc6ba111b50084c244853a03744.jpg";
  return (
    <View>
      <TouchableOpacity onPress={props.onPress}>
        <ImageBackground
          source={{ uri: props.cardImage }}
          style={styles.cardImageStyles}
          imageStyle={styles.borderImageStyle}
        >
          <View style={styles.cardTopContainer}></View>
          <View style={styles.cardBottomContainer}>
            <View style={styles.cardDescription}>
              <HeaderBody
                headerText={props.routineName}
                bodyText={props.routineDescription}
              />
              <PressableNav2
                buttonName={props.buttonName}
                onPress={props.onPress}
              />
            </View>
          </View>
        </ImageBackground>
      </TouchableOpacity>
    </View>
  );
};

export default SkinTypeCard;

const styles = StyleSheet.create({
  cardImageStyles: {
    padding: 15,
    borderRadius: 5,
    height: 300,
    justifyContent: "space-between",
  },
  borderImageStyle: {
    borderRadius: 30,
  },
});
