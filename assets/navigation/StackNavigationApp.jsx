import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { screenOptions, universalScreenOptions } from './options'

import { stackScreensApp } from './StackScreensApp'


const { Navigator, Screen } = createNativeStackNavigator()

function StackNavigationApp() {
  return (
    <>
      <Navigator
        initialRouteName="Home"
        screenOptions={screenOptions}
      >
        {stackScreensApp.map(({ name, component }) => (
          <Screen
            key={name}
            name={name}
            component={component}
            options={{headerShown:false, 
              title:name,
              headerStyle: {
              backgroundColor: '#006738', 
              }}}
              
          />
        ))}
      </Navigator>
      
    </>
  )
}

export default StackNavigationApp
