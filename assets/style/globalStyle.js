import {StyleSheet, Dimensions} from 'react-native'
import { StatusBar } from 'expo-status-bar'

import Constants from "expo-constants"
export const {width, height} = Dimensions.get('window')

export const globalStyle  = StyleSheet.create({
  containerScreen: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textTitle:{
    fontSize:48,
    color:"#000",
    fontFamily:'poppins-regular',
  },


  safeContainer:{
    flex:1,
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#000',
    
  },
  scrollContainer:{
    backgroundColor: '#445500',
    height: '100%',
  },
}) 



