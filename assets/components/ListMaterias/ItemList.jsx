import React from 'react'
import { ListItem } from 'react-native-elements'

import { StyleSheet, View } from 'react-native'

export default function ItemList({nomeItem, 
                                  iconItem, 
                                  onPress,
                                  colorContainerIcon,
                                  colorTitle,
                                  colorContainerTitle,
                                  radiusLastItem
                                }){

  const style = StyleSheet.create({
    containerItem:{
      width:'100%',
      height:64, 
      padding:0,
      flexDirection:"column",

      borderBottomLeftRadius:radiusLastItem ? radiusLastItem : 0,
      borderBottomRightRadius:radiusLastItem ? radiusLastItem : 0 ,
    },
    container:{ 
      flexDirection:"row", 
      justifyContent:"space-between", 
      alignItems:"center",
      height:'100%',

      borderBottomLeftRadius:radiusLastItem ? radiusLastItem : 0,
      borderBottomRightRadius:radiusLastItem ? radiusLastItem : 0 ,
    },
    containerIconItem:{ 
      backgroundColor:colorContainerIcon ? colorContainerIcon: "#000",
      width:"20%",
      justifyContent:"center", 
      alignItems:"center",
      height:'100%',

      borderBottomLeftRadius:radiusLastItem ? radiusLastItem : 0,
      
    },
    containerTitleItem:{
      width:"80%",
      backgroundColor:colorContainerTitle ? colorContainerTitle :"#C6C8CA", 
      justifyContent:"center", 
      alignItems:"center",
      height:'100%',

  
      borderBottomRightRadius:radiusLastItem ? radiusLastItem : 0 ,
    },
    titleItem:{
      color:colorTitle ? colorTitle: "#000",
      fontFamily:"poppins-bold", 
      fontSize:16, 
      textTransform:"uppercase",

     
    },
  })

  return(
    <ListItem onPress={onPress} bottomDivider containerStyle={style.containerItem} activeOpacity={.6}>
      <ListItem.Content style={style.container}>
        
        <View style={style.containerIconItem}>
          {iconItem ? iconItem : null}
        </View>

        <View style={style.containerTitleItem}>
          <ListItem.Title style={style.titleItem}>{nomeItem}</ListItem.Title>
        </View>
        
      </ListItem.Content>
    </ListItem>
  )
}