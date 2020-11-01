import React from 'react'
// import LottieView from 'lottie-react-native';
import {useEffect, useState, useRef } from 'react';
import {createStackNavigator}from '@react-navigation/stack'
// import { useLinkProps } from '@react-navigation/native';
import splashScreen from '../../assets/splash.js'


const navContainer = createStackNavigator
(
    {
        Home: Home,
        screen:splashScreen

    }
)



const App = () => {
    return (
        <Appcontainer />
    )

}



const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent,
        
    }
})







// <lottieview(required{source='../assets/hacker.json'})