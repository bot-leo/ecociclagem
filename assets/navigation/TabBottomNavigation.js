import React from "react"
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs"
import {tabBottomScreens} from "./TabBottomScreens"
import Icon from '@expo/vector-icons/FontAwesome5'

import LogoColetaSeletiva from '../img/logo-coleta-seletiva.svg'

const {Navigator, Screen} =createBottomTabNavigator()

export default function TabBottomNavigation(){
  return(
    <Navigator 

    screenOptions={({ route }) => ({
      headerShown: false,
      headerStyle: {
        backgroundColor: '#006738', 
      },
      tabBarActiveBackgroundColor:"#006A39",
      tabBarIcon: ({ color, size }) => {
        let iconName;
  
        switch (route.name) {
          case 'Home':
            iconName = 'home'
            break
          case 'SearchMap':
            iconName = 'map-marked-alt'
            break
          case 'Usuario':
            iconName = 'user'
            break
          case 'Status':
            iconName = 'recycle'
            break
          case 'BibliotecaMateriais':
            iconName = 'server'
            break
          default:
            iconName = 'circle'
            break
        }
  
        return <Icon name={iconName} size={size} color={color} />;
      },
      
      tabBarStyle:{
        backgroundColor: '#C4C4C4',  

      },
    })}
      tabBarOptions={{
        activeTintColor: "#fff",
        
        inactiveTintColor: "#006738",
        showLabel: false,
        
      }}

                >
      {tabBottomScreens.map(({name, component }) =>(
        <Screen
          key={name}
          name={name}
          component={component}
          options={({ navigation, route }) => ({
            headerTitle: props => <LogoColetaSeletiva {...props} />,
            headerTitleAlign: 'center'
          })}
        />
      ))}
    </Navigator>
  )
}



