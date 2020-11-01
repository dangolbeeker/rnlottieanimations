import React from 'react'
// import LottieView from 'lottie-react-native';
import {useEffect, useState, useRef } from 'react';
import {createStackNavigator}from '@react-navigation/stack'
// import { useLinkProps } from '@react-navigation/native';
import Splash from './src/screens/splash'


const navContainer = createStackNavigator

(
    {
        // Home: Home,
        screen:Splash

    }

)



const App = () => {
    return (
    <navContainer/>
    )

}



const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent,
        
    }
})







