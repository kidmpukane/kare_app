import { Pressable, StyleSheet, Text, View } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import React from 'react';

const PressableNav = () => {
  return (
    <View style={styles.pressableViewStyles}>
      <Pressable 
        style={styles.pressableStyles}
        onPress={() => alert('Pressable Nav')}
      >
        <Text style={styles.pressableTextStyle}>Pressable Nav</Text>
        <View style={styles.iconViewStyle}>
          <FontAwesome 
            style={styles.iconStyle}
            name="long-arrow-right"
            size={10} // Adjust size as needed
          />
        </View>
      </Pressable>
    </View>
  );
};

export default PressableNav;

const styles = StyleSheet.create({
  pressableViewStyles: {
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 10,
    paddingRight: 10,
  },
  pressableStyles: {
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    borderRadius: 40,
    fontSize: 14,
    padding: 5,
    backgroundColor: '#EBE5DC',
  },
  pressableTextStyle: {
    marginLeft: 20, // Moves the text 10 units to the right
  },
  iconViewStyle: {
    width: 45,
    height: 45,
    borderRadius: 50,
    backgroundColor: '#24221E',
    justifyContent: 'center', // Center vertically
    alignItems: 'center',     // Center horizontally
  },
  iconStyle: {
    color: '#EBE5DC',
  },
});
