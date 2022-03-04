import React from 'react'
import {
  createDrawerNavigator,
  DrawerContentOptions
} from '@react-navigation/drawer'

import { drawerScreens} from './DrawerScreens'

const { Navigator, Screen } = createDrawerNavigator()


function HomeDrawer() {
  
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

export default HomeDrawer
