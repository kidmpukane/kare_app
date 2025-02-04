import { StyleSheet, Text, View } from 'react-native'
import SkinResults from '../../../components/resultsAssets/SkinResults'
import RecommendationResults from '../../../components/resultsAssets/RecommendationResults'
import React from 'react'

const results = () => {
  return (
    <View>
      <SkinResults />
      <Text>results</Text>
      <RecommendationResults />
    </View>
  )
}

export default results

const styles = StyleSheet.create({})