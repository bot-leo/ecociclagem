import React from 'react'
import { TouchableOpacity, Text } from 'react-native'
import { style } from './style'

export function DoubtButton({titleButton, iconButton, onPress}){
  return(
    <TouchableOpacity style={style.containerButton} onPress={onPress}>
      {
        iconButton ? iconButton : null
      }
      <Text style={style.texButton}>{titleButton}</Text>
    </TouchableOpacity>
  )
}