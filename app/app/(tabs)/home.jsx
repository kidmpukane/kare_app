import { View, Text, StyleSheet, ScrollView } from 'react-native'
import React from 'react'
import Products from '../../../components/homeProducts/Products';

export default function home() {
  return (
    <View style={styles.container}>
        <Products />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#24221E',
  },
});