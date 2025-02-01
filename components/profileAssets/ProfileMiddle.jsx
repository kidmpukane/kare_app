import { StyleSheet, View } from 'react-native';
import { ReminderButtonLrg, ReminderButtonSml } from '../../molecules/ReminderButtons';
import React from 'react';

const ProfileMiddle = () => {
  return (
    <View style={styles.profileMiddleContainerStyles}>
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
  profileReminderBtnStyles: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly', // Changed to evenly space buttons
    alignItems: 'center',
    borderRadius: 15,
    paddingTop: 5,
    paddingBottom: 5,
    borderColor: 'black',
    borderWidth: 1,
    width: '100%', // Added to utilize full width for spacing
  },
  profileMiddleContainerStyles: {
    display: 'flex',
    flexDirection: 'column',
    borderRadius: 15,
    padding: 12,
    alignItems: 'center',
    justifyContent: 'center', // Changed for centered alignment
    width: '100%', // Added to ensure proper layout
  },
});
