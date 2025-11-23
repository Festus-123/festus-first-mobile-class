import React from 'react';
import { View, StyleSheet } from 'react-native';
import { useNavigateTo } from '../utils/navigateTo';
import Profile from '../components/Profile';

const SettingsScreen = () => {
    const navigateTo = useNavigateTo()

  return (
    <View style={styles.container}>
        <Profile 
            iconName={'bulb-outline'}
            title={'Notification Setting'}
            onPress={() => navigateTo('Notification Settings Screen')}/>
        <Profile 
            iconName={'key-outline'}
            title={'Password Manager'}
            onPress={() => navigateTo('Password Manager Screen')}/>
        <Profile 
            iconName={'person-outline'}
            title={'Delete Account'}/>
    </View>
  )
}

export default SettingsScreen

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: "center",
        marginTop: 20,
        gap: 20,
        padding: 10
    }
})