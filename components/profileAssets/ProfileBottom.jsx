import { StyleSheet, Text, View } from 'react-native'
import HeaderBody from '../../molecules/HeaderBody'
import PressableNav from '../../molecules/PressableNav'
import React from 'react'

const ProfileBottom = () => {
  return (
    <View>
      <View>
        <HeaderBody />
      </View>
      <View><PressableNav/></View>
      <View><PressableNav/></View>
    </View>
  )
}

export default ProfileBottom

const styles = StyleSheet.create({})