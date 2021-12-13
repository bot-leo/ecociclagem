import React from 'react'
import {Text, View, StyleSheet, TouchableOpacity} from "react-native"
import { backgroundColor } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes'
import { width } from '../style/globalStyle'

const style = StyleSheet.create({
  containerButton:{
    width:'90%',
    height: 32,
    backgroundColor:"#fff",
    borderRadius:10,
    justifyContent:"center",
    alignItems:"center"
  },
  titleButton:{
    color: '#fff',
    fontSize:15
  }
})

export default function ButtonOptionName(props){
  const ColorRed =  props.red
  return(
    <TouchableOpacity style={[style.containerButton, {backgroundColor: props?.color || '#fff' }]} activeOpacity={.5}>
      <Text style={style.titleButton}>{props.buttonTitle}</Text>
    </TouchableOpacity>
  )
}