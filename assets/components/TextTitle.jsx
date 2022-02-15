import React from "react"
import {Text} from "react-native"
import { globalStyle } from "../style/globalStyle"



export default function TextTitle(props){
  return(
    <Text style={globalStyle.textTitle}>{props.title}</Text>
  )
}