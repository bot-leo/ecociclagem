import React from "react"
import { Text} from "react-native"
import { globalStyle } from "../style/globalStyle"

export default function TitleRegular(props){
  return(
    <Text style={globalStyle.titleRegular}>{props.title}</Text>
  )
}