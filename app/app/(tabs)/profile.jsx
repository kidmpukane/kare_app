import { StyleSheet, Button, Text, View } from 'react-native'
import { AuthenticationContext } from "../../AuthContext"
import React, {useContext} from 'react'
import ProfileTop from '../../../components/profileAssets/ProfileTop'
import ProfileMiddle from '../../../components/profileAssets/ProfileMiddle'
import ProfileBottom from '../../../components/profileAssets/ProfileBottom'


const profile = () => {

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
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <ProfileTop/>
      <ProfileMiddle/>
      <ProfileBottom/>
      <Text>profile</Text>
            <Button title="Sign Out" onPress={handleSignOut} />

    </View>
  )
}

export default profile

const styles = StyleSheet.create({})
