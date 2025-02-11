import { StyleSheet, Text, View, ImageBackground } from "react-native";
import { HeaderBody } from "../../molecules/HeaderBody";
import { PressableNav } from "../../molecules/PressableNav";
import React from "react";

const profileImage = {
  uri: "https://images.unsplash.com/photo-1531727991582-cfd25ce79613?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
};

const ProfileTop = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={profileImage}
        style={styles.profileImageStyles}
        imageStyle={styles.imageBorder}
      >
        <View style={styles.overlay} />
        <View style={styles.textContainer}>
          <HeaderBody
            headerText="Progress Images"
            bodyText="Store a collection of your images to keep track of your progress overtime."
          />
          <PressableNav
            buttonName="Upload Images To Track Progress"
            onPress={() => alert("Upload Images")}
          />
        </View>
      </ImageBackground>
    </View>
  );
};

export default ProfileTop;

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  profileImageStyles: {
    height: 500,
    justifyContent: "flex-end", // Align text at the bottom
  },
  imageBorder: {
    borderRadius: 30,
  },

  textContainer: {
    padding: 10,
  },
});
