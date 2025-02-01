import { StyleSheet, Text, View, TouchableOpacity, FlatList, Dimensions,  Image } from 'react-native';
import React, { useLayoutEffect } from 'react';
import { useNavigation } from '@react-navigation/native';

const Home = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, [navigation]);

  // Data for the FlatList
  const boxData = [
    { id: '1', heading: 'Product One', text: 'The Morning Magic routine aids your skin...' },
    { id: '2', heading: 'Product Two', text: 'The Morning Magic routine aids your skin...' },
    { id: '3', heading: 'Product Three', text: 'The Morning Magic routine aids your skin...' },
    { id: '4', heading: 'Product Four', text: 'The Morning Magic routine aids your skin...' },
    { id: '4', heading: 'Product Five', text: 'The Morning Magic routine aids your skin...' },
    { id: '4', heading: 'Product Six', text: 'The Morning Magic routine aids your skin...' },
  ];

  // Render each box item
  const renderBox = ({ item }) => (
    <TouchableOpacity
      style={styles.box}
      onPress={() => navigation.navigate('Profile')}
    >
      <View style={styles.inner}>
        <View style={styles.boxText}>
          <Text>{item.heading}</Text>
          <Text style={styles.text}>{item.text}</Text>
          {/* <Image source={require('../../../assets/images/image.png')} style={styles.cardImage} /> */}
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.text}>Header Component</Text>
      </View>
      <FlatList
        data={boxData}
        renderItem={renderBox}
        keyExtractor={(item) => item.id}
        numColumns={2}
        contentContainerStyle={styles.boxContainer}
      />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#24221E',
  },
  header: {
    width: '100%',
    height: '15%',
    backgroundColor: '#c8c8c8',
    justifyContent: 'center',
    alignItems: 'center',
  },
  boxContainer: {
    padding: 5,
  },
  box: {
    width: '50%',
    height: Dimensions.get('window').height * 0.425, 
    padding: 5,
  },
  boxText: {
    margin: 10,
    padding: 10,
  },
  inner: {
    flex: 1,
    backgroundColor: '#c8c8c8',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 16,
  },
});