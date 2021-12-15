import { StatusBar } from 'expo-status-bar'
import React from 'react'
import AppLoading from 'expo-app-loading'
import { useFonts } from 'expo-font'


import Navigation from "./assets/navigation"



export default function App() {

  const [fontsLoaded] = useFonts({
    'nats-regular': require('./assets/fonts/NATS-Regular.ttf'),
    
  })

  if (!fontsLoaded) {
    return <AppLoading />
  }
  return (
    <Navigation/>
  )
}


