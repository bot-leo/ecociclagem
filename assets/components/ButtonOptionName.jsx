import React from 'react'
import {Text, StyleSheet, TouchableOpacity} from "react-native"


export default function ButtonOptionName({
  buttonTitle,
  onPress,
  color,
}){

  const style = StyleSheet.create({
    containerButton:{
      backgroundColor:color || "#fff",
      width:'90%',
      height: 32,
      borderRadius:10,
      justifyContent:"center",
      alignItems:"center",
    },
    titleButton:{
      color: '#fff',
      fontSize:15,
      fontFamily:"poppins-regular"
    },
    
  })
  
  return(
    <TouchableOpacity style={style.containerButton} 
                      activeOpacity={.5}
                      onPress={() => {onPress(buttonTitle)}}>
      <Text style={style.titleButton}>{buttonTitle}</Text>
    </TouchableOpacity>
  )
}


