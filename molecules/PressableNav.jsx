import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const PressableNav = () => {
  return (
    <View>
      <Pressable onPress={() => alert('Pressable Nav')}>
        <Text>Pressable Nav</Text>
      </Pressable>
    </View>
  )
}

export default PressableNav

const styles = StyleSheet.create({})