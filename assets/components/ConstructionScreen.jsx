import React from "react"
import {View} from "react-native"
import { StatusBar } from 'expo-status-bar'
import { globalStyle } from "../style/globalStyle"



export default function ConstructionScreen(props){
  return(
    <View style={globalStyle.containerScreen}>
      <StatusBar style="light" backgroundColor="#000"/>
      {props.children}
    </View>
  )
}