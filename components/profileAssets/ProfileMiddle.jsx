import { StyleSheet, View, Text } from 'react-native';
import { ReminderButtonLrg, ReminderButtonSml } from '../../molecules/ReminderButtons';
import React from 'react';

const ProfileMiddle = () => {
  return (
    <View style={styles.profileMiddleContainerStyles}>
      <Text style={styles.profileHeaderTxt}>Routine Reminders</Text>
      <View style={styles.underline} />
      <View style={styles.profileReminderBtnStyles}>
        <ReminderButtonLrg />
        <ReminderButtonSml 
          iconPm ="coffee" 
          timePm ="06:00AM"
          routinePm ="Sunrise Routine"
          />
        <ReminderButtonSml 
          iconPm="sun-o" 
          timePm ="12:00PM"
          routinePm ="Sunrise Routine"
          />
        <ReminderButtonSml 
          iconPm="moon-o" 
          timePm ="22:00PM"
          routinePm ="Evening Routine"
          />
      </View>
    </View>
  );
};

export default ProfileMiddle;

const styles = StyleSheet.create({
  profileMiddleContainerStyles: {
    display: 'flex',
    flexDirection: 'column',
    borderRadius: 15,
    padding: 12,

    width: '100%', // Added to ensure proper layout
  },
  profileHeaderTxt: {
    fontSize: 40,
    padding: 10,
  },
  underline: {
    height: 1,              // Thickness of the line
    backgroundColor: 'black', // Line color
    width: '90%',           // Adjust width as needed
    alignSelf: 'center',     // Centers the line
    marginTop: 20,        // Space below the line
    marginBottom: 20,        // Space below the line
  },
  profileReminderBtnStyles: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly', // Changed to evenly space buttons
    alignItems: 'center',
    borderRadius: 15,
    paddingTop: 5,
    paddingBottom: 5,
    // // borderColor: 'black',
    // // borderWidth: 1,
    width: '100%', // Added to utilize full width for spacing
  },

});
