import React from 'react'
import {Text, View, StyleSheet} from 'react-native'

export default function SubItemList({colorBackground, radiusLastSubItem}){
  const style = StyleSheet.create({
   containerSubItem:{
    backgroundColor:colorBackground ? colorBackground :"#000", 
    padding: 13,


    borderBottomLeftRadius:radiusLastSubItem ? radiusLastSubItem : 0,
    borderBottomRightRadius:radiusLastSubItem ? radiusLastSubItem : 0 ,
   },
   textSubItem:{
     fontFamily:'poppins-regular',
     fontSize:12,
     color: '#FFFFFF',
   },
   textSubItemBold:{
    fontFamily:'poppins-bold',
   },
  })

  return(
    <View style={style.containerSubItem}>
        <Text style={style.textSubItem}>Os materiais recicláveis do tipo <Text style={style.textSubItemBold}>PLÁSTICO</Text> 
        {'\n'}podem ser encontrados nos seguintes{'\n'}
        produtos:{'\n'}
        {'\n'}
        <Text style={style.textSubItemBold}>
        • Copos{'\n'}
        • Sacos{'\n'}
        • Sacolas{'\n'}
        • Frascos{'\n'}
        • Tampas{'\n'}
        • Potes{'\n'}
        </Text>
        </Text>
    </View>
  )
}