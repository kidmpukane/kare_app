import { StyleSheet, Button, Text, View, ScrollView } from "react-native";
import { AuthenticationContext } from "../../AuthContext";
import React, { useContext } from "react";
import ProfileTop from "../../../components/profileAssets/ProfileTop";
import ProfileMiddle from "../../../components/profileAssets/ProfileMiddle";
import ProfileBottom from "../../../components/profileAssets/ProfileBottom";
import { CustomButton2 } from "../../../molecules/CustomButtons";

const Profile = () => {
  const { updateAuthInfo } = useContext(AuthenticationContext);

  const handleSignOut = () => {
    updateAuthInfo({
      authCookie: null,
      sessionId: null,
      userId: null,
      profileId: null,
    });
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <ProfileTop />
      <ProfileMiddle />
      <ProfileBottom />
      <Text style={styles.profileText}>Profile</Text>

      <CustomButton2 customButton2Text="Sign Out" onPress={handleSignOut} />
    </ScrollView>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flexGrow: 1, // Makes sure content stretches even when not scrollable
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: 20,
    backgroundColor: "#EBE5DC",
  },
  profileText: {
    fontSize: 18,
    marginVertical: 20,
  },
});
