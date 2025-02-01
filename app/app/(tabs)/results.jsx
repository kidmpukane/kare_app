import { StyleSheet, Text, View } from 'react-native'
import ResultsTop from '../../../components/resultsTop'
import ResultsBottom from '../../../components/resultsBottom'
import React from 'react'

const results = () => {
  return (
    <View>
      <ResultsTop />
      <Text>results</Text>
      <ResultsBottom />
    </View>
  )
}

export default results

const styles = StyleSheet.create({})