import { NavigationContainer } from '@react-navigation/native'
import StackNavigation from './StackNavigation'
import React from 'react'

function Routes() {
  return( 
    <NavigationContainer>
      <StackNavigation/>
    </NavigationContainer>
  )
}

export default Routes