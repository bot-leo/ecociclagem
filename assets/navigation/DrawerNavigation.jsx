import React from 'react'
import {
  createDrawerNavigator,
} from '@react-navigation/drawer'

import { drawerScreens} from './DrawerScreens'

const { Navigator, Screen } = createDrawerNavigator()

function DrawerNavigation(props) {
  
  return (
    <Navigator
      initialRouteName="Home"
      screenOptions={{drawerPosition:"right",headerShown:false}}
    >
      {drawerScreens.map(({ name, component  }) => (
        <Screen
          key={name}
          name={name}
          component={component}
      
        />
      ))}
    </Navigator>
  )
}

export default DrawerNavigation
