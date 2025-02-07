import { StyleSheet, Text, View, TouchableOpacity, FlatList, Dimensions,  ImageBackground, ScrollView } from 'react-native';
import React, { useLayoutEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { LinearGradient } from 'react-native-linear-gradient'
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import Ionicons from '@expo/vector-icons/Ionicons';

const Home = () => {
  const [active, setActive] = useState(false);

  const handleChangeActive = () => {
    setActive((previousIcon) => {
      return !previousIcon;
    });
  };
  
  const navigation = useNavigation();
  
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, [navigation]);

  // Data for the FlatList
  const boxData = [
    { id: '1', heading: 'Product One', text: 'The Morning Magic routine aids your skin...', image: 'https://plus.unsplash.com/premium_photo-1681154819752-1250861264de?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { id: '2', heading: 'Product Two', text: 'The Morning Magic routine aids your skin...', image: 'https://images.unsplash.com/photo-1725172045217-d1e1f2ecdf62?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { id: '3', heading: 'Product Three', text: 'The Morning Magic routine aids your skin...', image: 'https://plus.unsplash.com/premium_photo-1679064286787-143237eb97c6?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { id: '4', heading: 'Product Four', text: 'The Morning Magic routine aids your skin...', image: 'https://images.unsplash.com/photo-1559881230-1af605ca3f67?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' }
  ];

  // Render each box item
  const renderBox = ({ item }) => {
    return (
      <TouchableOpacity
        style={styles.box}
        onPress={() => navigation.navigate('Profile')}
      >
        <ImageBackground
        source={{ uri: item.image }}
        style={{ 
          width: '100%', 
          height: '100%', 
          borderRadius: 10 
        }} 
        >
        {/* <LinearGradient 
        colors={['#00000000', '#000000']} 
        style={{height : '100%', width : '100%'}}>
        </LinearGradient> */}
        <View style={styles.desContainer}>
          <Text style={styles.text}>{item.heading}</Text>
          <Text style={styles.text}>{item.text}</Text>
        </View>
        <View style={{ position: 'absolute', right: 0, flexDirection: 'row', justifyContent: 'space-between', padding: 10 }}>
          <TouchableOpacity onPress={handleChangeActive}>
            {active ? (
              <Ionicons name="bag-check" size={24} color="black" />
            ) : (
              <Ionicons name="bag-add" size={24} color="black" />
            )}
          </TouchableOpacity>
        </View>
        </ImageBackground>
      </TouchableOpacity>
    );
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        {/* <View style={styles.header}>
          <Text style={styles.text}>Header Component</Text>
        </View> */}
        <View style={{ position: 'absolute', right: 0, flexDirection: 'row', justifyContent: 'space-between', padding: 10 }}>
          <TouchableOpacity>
            <FontAwesome5 name="shopping-cart" size={24} color="white" />
          </TouchableOpacity>
        </View>
        <View style={styles.headingContainer}>
          <Text style={styles.heading}>Programs</Text>
          <Text style={styles.text}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium et nemo iusto minus commodi, nihil eos dolorum suscipit aspernatur error omnis eaque dicta, quisquam repudiandae! Quo temporibus repellendus delectus possimus!</Text>
        </View>
        <FlatList
          data={boxData}
          renderItem={renderBox}
          keyExtractor={(item) => item.id}
          numColumns={2}
          contentContainerStyle={styles.boxContainer}
        />
        {/* <View style={styles.footer}>
          <TouchableOpacity style={styles.footerButton}>
          </TouchableOpacity>
          <View style={styles.textContainer}>
            <Text style={styles.text}>Continue To Checkout</Text>
          </View>
        </View> */}
      </View>
    </ScrollView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#24221E',
  },
  headingContainer: {
    padding: 10,
    margin: 10,
  },
  heading: {
    fontSize: 26,
    color: '#ffffff',
    fontWeight: 'bold',   
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
  desContainer: {
    padding: 10,
    position: 'absolute',
    bottom: 0,
  },
  // footer: {
  // inner: {
  //   flex: 1,
  //   backgroundColor: '#c8c8c8',
  //   alignItems: 'center',
  //   justifyContent: 'center',
  // },
  text: {
    fontSize: 16,
    color: '#fff',
  },
  imageBackground: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  footer: {
    width: '100%',
    height: '5%',
    marginTop: 10,
    marginBottom: 10,
    borderRadius: 20,
    backgroundColor: '#EBE5DC',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textContainer: {
    // position: 'absolute',
    // bottom: 5,
    fontSize: 18,
    padding: 10,
    // top: 20,
  },
  footerButton: {
    width: '10%',
    height: '90%',
    backgroundColor: '#000',
    borderRadius: '45%',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 160,
  },
});
