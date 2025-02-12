import { StyleSheet, Text, View, TouchableOpacity, FlatList, Dimensions, ImageBackground } from 'react-native';
import React, { useLayoutEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';
import Ionicons from '@expo/vector-icons/Ionicons';
import Heading from './Heading';

export default function Products() {
  const [active, setActive] = useState(false);

  const handleChangeActive = () => {
    setActive((previousIcon) => !previousIcon);
  };

  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, [navigation]);

  const boxData = [
    { id: '1', heading: 'Product One', text: 'The Morning Magic routine aids your skin...', image: 'https://plus.unsplash.com/premium_photo-1681154819752-1250861264de?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { id: '2', heading: 'Product Two', text: 'The Morning Magic routine aids your skin...', image: 'https://images.unsplash.com/photo-1725172045217-d1e1f2ecdf62?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { id: '3', heading: 'Product Three', text: 'The Morning Magic routine aids your skin...', image: 'https://plus.unsplash.com/premium_photo-1679064286787-143237eb97c6?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { id: '4', heading: 'Product Four', text: 'The Morning Magic routine aids your skin...', image: 'https://images.unsplash.com/photo-1559881230-1af605ca3f67?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' }
  ];

  const renderBox = ({ item }) => {
    return (
      <TouchableOpacity
        style={styles.box}
        onPress={() => navigation.navigate('Display')}
      >
        <ImageBackground
          source={{ uri: item.image }}
          style={styles.imageBackground}
          imageStyle={{ borderRadius: 10 }}
        >
          <LinearGradient 
            colors={[ 'transparent', 'rgba(0,0,0,0.9)',]} 
            style={styles.linearGradient}
          >
            <View style={styles.desContainer}>
              <Text style={styles.text}>{item.heading}</Text>
              <Text style={styles.text}>{item.text}</Text>
            </View>
            <View style={styles.iconContainer}>
              <TouchableOpacity onPress={handleChangeActive}>
                {active ? (
                  <Ionicons name="bag-check" size={24} color="black" />
                ) : (
                  <Ionicons name="bag-add" size={24} color="black" />
                )}
              </TouchableOpacity>
            </View>
          </LinearGradient>
        </ImageBackground>
      </TouchableOpacity>
    );
  };

  return (
    <FlatList
      data={boxData}
      renderItem={renderBox}
      keyExtractor={(item) => item.id}
      numColumns={2}
      contentContainerStyle={styles.boxContainer}
      ListHeaderComponent={<Heading />}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#24221E',
  },
  boxContainer: {
    padding: 5,
  },
  box: {
    width: '50%',
    height: Dimensions.get('window').height * 0.425,
    padding: 5,
  },
  desContainer: {
    padding: 10,
    position: 'absolute',
    bottom: 0,
  },
  text: {
    fontSize: 16,
    color: '#fff',
  },
  imageBackground: {
    width: '100%',
    height: '100%',
  },
  linearGradient: {
    height: '100%',
    width: '100%',
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