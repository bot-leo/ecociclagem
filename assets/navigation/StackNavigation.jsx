import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { screenOptions, universalScreenOptions } from './options'

import { stackScreens } from './StackScreens'


const { Navigator, Screen } = createNativeStackNavigator()

function StackNavigation() {
  return (
    <>
      <Navigator
        initialRouteName="Login"
        screenOptions={screenOptions}
      >
        {stackScreens.map(({ name, component }) => (
          <Screen
            key={name}
            name={name}
            component={component}
            options={universalScreenOptions}
          />
        ))}
      </Navigator>
      
    </>
  )
}

export default StackNavigation
