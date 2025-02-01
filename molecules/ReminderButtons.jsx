import { Pressable, StyleSheet, Text, View } from 'react-native'
import { FontAwesome } from '@expo/vector-icons'
import React from 'react'

const ReminderButtonLrg = () => {
  return (
    <View>
      <Pressable style={styles.reminderBtnLrgStyles}>
        <FontAwesome name="bell" size={24} color="black" />
      </Pressable>
    </View>
  )
}
const ReminderButtonSml = () => {
  return (
    <View>
      <Pressable style={styles.reminderBtnSmlStyles}>
        <FontAwesome name="sun-o" size={15} color="black" />
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
        backgroundColor: 'lightblue',
        borderRadius: 15,
        padding: 40,
        alignItems: 'center',
    },
    reminderBtnSmlStyles:
    {
        backgroundColor: 'lightblue',
        borderRadius: 15,
        padding: 30,
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