import React from "react"
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs"
import {tabBottomScreens} from "./TabBottomScreens"
import Icon from '@expo/vector-icons/FontAwesome5'


import LogoColetaSeletiva from '../img/logo-coleta-seletiva.svg'

const {Navigator, Screen} =createBottomTabNavigator()

export default function TabBottomNavigation(){
  return(
    <Navigator initialRouteName="Home"

    screenOptions={({ route }) => ({
      headerShown: true,
      headerStyle: {
        backgroundColor: '#006738', 
      },
      tabBarIcon: ({ color, size }) => {
        let iconName;
  
        switch (route.name) {
          case 'Home':
            iconName = 'home'
            break
          case 'SearchMap':
            iconName = 'search'
            break
          case 'Status':
            iconName = 'chart-bar'
            break
          case 'RecyclingLibrary':
            iconName = 'book'
            break
          default:
            iconName = 'circle'
            break
        }
  
        return <Icon name={iconName} size={size} color={color} />;
      },
    })}
      tabBarOptions={{
      activeTintColor: "#42CC2D",
      inactiveTintColor: "#4A8042",
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



