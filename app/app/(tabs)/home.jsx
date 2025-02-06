import { StyleSheet, Text, View, TouchableOpacity, FlatList, Dimensions,  Image, ScrollView } from 'react-native';
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
          {/* <View style={styles.inner}> */}
            <Image
            source={{ uri: item.image }}
            style={{ 
              width: '100%', 
              height: '100%', 
              borderRadius: 10 
            }} 
            />
            {/* <View style={styles.boxText}>
              <Text>{item.heading}</Text>
              <Text style={styles.text}>{item.text}</Text>
            </View> */}
          {/* </View> */}
      </TouchableOpacity>
    );
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        {/* <View style={styles.header}>
          <Text style={styles.text}>Header Component</Text>
        </View> */}
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
        <View style={styles.footer}>
          {/* <Text style={styles.text}>Footer Component</Text> */}
          <TouchableOpacity style={styles.footerButton}>
            <View>
              {/* <Text style={{ color: '#ffffff', fontSize: 18 }}>Discover More</Text> */}
            </View>
          </TouchableOpacity>
        </View>
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
  boxText: {
    margin: 10,
    padding: 10,
  },
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
    backgroundColor: '#c8c8c8',
    justifyContent: 'center',
    alignItems: 'center',
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