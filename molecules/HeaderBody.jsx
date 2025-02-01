import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const HeaderBody = () => {
  return (
    <View>
      <Text style={styles.headerStyles}>Header</Text>
      <Text style={styles.bodyStyle}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</Text>
    </View>
  )
}

export default HeaderBody

const styles = StyleSheet.create({

  headerStyles: {
    fontSize: 38,
    padding: 10,
    color: '#EBE5DC'
  },
  bodyStyle: {
    fontSize: 14,
    padding: 10,
    color: '#EBE5DC'
  }

})