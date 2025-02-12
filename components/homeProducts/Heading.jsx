import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React, {useLayoutEffect} from 'react';
import { useNavigation } from '@react-navigation/native';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';

export default function Heading() {

  const navigation = useNavigation();
  
    useLayoutEffect(() => {
      navigation.setOptions({
        headerShown: false,
      });
    }, [navigation]);
  

  return (
    <View style={styles.container}>
      <View style={styles.cartIconContainer}>
        <TouchableOpacity onPress={() => navigation.navigate('Product')}>
          <FontAwesome5 name="shopping-cart" size={24} color="white" />
        </TouchableOpacity>
      </View>
      <View style={styles.headingContainer}>
        <Text style={styles.heading}>Programs</Text>
      <Text style={styles.text}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium et nemo iusto minus commodi, nihil eos dolorum suscipit aspernatur error omnis eaque dicta, quisquam repudiandae! Quo temporibus repellendus delectus possimus!</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  headingContainer: {
    padding: 10,
    margin: 10,
  },
  heading: {
    fontSize: 26,
    color: '#ffffff',
    fontWeight: 'bold',
  },
  cartIconContainer: {
    position: 'absolute',
    right: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
  },
  boxContainer: {
    padding: 5,
  },
  text: {
    fontSize: 16,
    color: '#fff',
  },
  iconContainer: {
    position: 'absolute',
    right: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
  },
  textContainer: {
    fontSize: 18,
    padding: 10,
  },
});