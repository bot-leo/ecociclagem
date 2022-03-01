import {StyleSheet, Dimensions} from 'react-native'
import { StatusBar } from 'expo-status-bar'

import Constants from "expo-constants"
export const {width, height} = Dimensions.get('window')

export const globalStyle  = StyleSheet.create({
  titleRegular:{
    fontFamily:'poppins-bold',
    fontSize:16,
    color:"#EEEEEE",
  },


  safeContainer:{
    flex:1,
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#000',
    height:'100%',
    
  },
  scrollContainer:{
    backgroundColor: 'red',
    height:'100%',
  },
}) 



