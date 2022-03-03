import React from 'react'
import AppLoading from 'expo-app-loading'
import { useFonts } from 'expo-font'

import Navigation from "./assets/navigation"

export default function App(){

  const [fontsLoaded] = useFonts({
    'poppins-bold': require('./assets/fonts/Poppins-Bold.ttf'),
    'poppins-regular': require('./assets/fonts/Poppins-Regular.ttf'),
  })

  if (!fontsLoaded) {
    return <AppLoading />
  }
  return (
    <Navigation/>
  )
}


