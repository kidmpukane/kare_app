import { Pressable, StyleSheet, Text, View } from 'react-native'
import { FontAwesome } from '@expo/vector-icons'
import React from 'react'

const ReminderButtonLrg = () => {
  return (
    <View>
      <Pressable style={styles.reminderBtnLrgStyles}>
        <FontAwesome name="bell-o" size={24} color="#EBE5DC" />
      </Pressable>
    </View>
  )
}
const ReminderButtonSml = () => {
  return (
    <View>
      <Pressable style={styles.reminderBtnSmlStyles}>
        <FontAwesome name="sun-o" size={15} color="#24221E" />
        <Text style={styles.reminderTxtSmlStyles}>
            06:30AM
        </Text>
        <Text style={styles.reminderTxtSmlStyles2}> 
            Sunrise Routine
        </Text>
      </Pressable>
    </View>
  )
}


export {  ReminderButtonLrg, ReminderButtonSml }

const styles = StyleSheet.create({
    reminderBtnLrgStyles:
    {
        backgroundColor: '#24221E',
        borderRadius: 15,
        padding: 30,
        alignItems: 'center',
    },
    reminderBtnSmlStyles:
    {
        borderWidth: 1,
        borderColor: '#24221E',
        borderRadius: 15,
        padding: 20,
        alignItems: 'center',
    },
    reminderTxtSmlStyles:
    {
        fontSize: 10,
    },
    reminderTxtSmlStyles2:
    {
        fontSize: 6,
    },
})