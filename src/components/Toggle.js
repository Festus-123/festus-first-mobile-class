import React, { useState } from 'react'
import { View, StyleSheet, TouchableOpacity, } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'

const Toggle = () => {
    const [state, setState] = useState(true)

    const handleTOggle = () => {
        setState(!state)
    }

  return (
    <LinearGradient 
        colors={state ? ['#33e4db', '#00bbd3'] : ['#33e4db68', '#33e4db6b']}
        style={styles.knobContainer}>
        <TouchableOpacity 
            style={ state ? styles.activeKnob : styles.inactiveKnob}
            onPress={handleTOggle}>

        </TouchableOpacity>
    </LinearGradient>
  )
}

export default Toggle

const styles = StyleSheet.create({
    knobContainer:{
        width: 50,
        height: 25,
        borderRadius: 20,
        position: "relative",
        
    },
    activeKnob:{
        width: 20,
        height: 20,
        borderRadius: 50,
        backgroundColor: '#ffffff',

        position: 'absolute',
        right: 5,
        top: 2
    },
    inactiveKnob:{
        width: 20,
        height: 20,
        borderRadius: 50,
        backgroundColor: '#ffffff97',
        position: "absolute",
        left: 5,
        top: 2
    }
})