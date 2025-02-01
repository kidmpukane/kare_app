import { StyleSheet,View} from 'react-native'
import { ReminderButtonLrg, ReminderButtonSml } from '../../molecules/ReminderButtons'
import React from 'react'

const ProfileMiddle = () => {
  return (
    <View style={styles.profileMiddleContainerStyles}>
      <View style={styles.profileRemiderBtnStyles}>
      <ReminderButtonLrg/>
      <ReminderButtonSml/>
      <ReminderButtonSml/>
      <ReminderButtonSml/>
      </View>
    </View>
  )
}

export default ProfileMiddle

const styles = StyleSheet.create({
  profileRemiderBtnStyles:{
    display: 'flex',
    flexDirection: 'row',
    borderRadius: 15,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'space-around',
    borderColor: 'black',
    borderWidth: 1,
  },
  profileMiddleContainerStyles:{
    display: 'flex',
    flexDirection: 'column',
    borderRadius: 15,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'space-around',

  },
})