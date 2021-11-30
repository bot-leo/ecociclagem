import React from "react"
import {TouchableOpacity, Text, StyleSheet, Dimensions} from "react-native"


export default function ButtomGeneric(props){
  return(
    <TouchableOpacity onPress={props.onPress} style={style.containerButton}>
      <Text style={style.textButon}>{props.buttonTitle}</Text>
    </TouchableOpacity>
  )
}

const style = StyleSheet.create({
  containerButton:{
    backgroundColor:"green",
    width: Dimensions.get('window').width / 3,
    borderRadius:5,
    justifyContent:"center",
    alignItems:"center",
    padding: 10,
  },
  textButon:{
    fontSize:Dimensions.get('window').width / 35,
    color: "#fff",
    fontWeight:"bold"
  }
})