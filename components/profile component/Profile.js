import React from 'react'
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from 'expo-router';

const Profile = ({ title, iconName, onPress}) => {
  return (

        <TouchableOpacity 
            style={styles.container}
            onPress={onPress}>
            <View style={{
                flexDirection: 'row',
                alignItems: 'center',
                gap: 10
            }}>
                <LinearGradient
                    colors={['#33E4DB', '#00BBD3']}
                    style={styles.gradient}>
                    <Ionicons name={iconName} color={'#ffffff'} size={20}/>
                </LinearGradient>
                <Text style={{ fontSize: 20, fontWeight: "bold"}}>{title}</Text>
            </View>

            <Ionicons name='chevron-forward' color={'#00BBD3'} size={20}/>
        </TouchableOpacity>

  )
}

export default Profile

const styles = StyleSheet.create({
    container:{
        flexDirection: "row",
        alignItems: 'center',
        justifyContent: "space-between",
        width: "90%",
        margin: 10
    },
    gradient:{
        borderRadius: 50,
        padding: 5
    }
})