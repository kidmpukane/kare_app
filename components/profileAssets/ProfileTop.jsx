import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import HeaderBody from '../../molecules/HeaderBody';
import React from 'react';

const profileImage = { uri: 'https://images.unsplash.com/photo-1531727991582-cfd25ce79613?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' };

const ProfileTop = () => {
  return (
    <View style={styles.container}>
      <ImageBackground source={profileImage} style={styles.profileImageStyles} imageStyle={styles.imageBorder}>
        <View style={styles.overlay} />
        <View style={styles.textContainer}>
          <HeaderBody/>
        </View>
      </ImageBackground>
    </View>
  );
};

export default ProfileTop;

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  profileImageStyles: {
    height: 300,
    justifyContent: 'flex-end', // Align text at the bottom
  },
  imageBorder: {
    borderTopLeftRadius: 30,
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0,
    borderBottomLeftRadius: 0,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.4)', // Dark overlay
    borderTopLeftRadius: 30,
  },
  textContainer: {
    padding: 15,
  },
  title: {
    color: '#FFFFFF',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  subtitle: {
    color: '#FFFFFF',
    fontSize: 14,
  },
});
