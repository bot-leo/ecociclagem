import React, { useState } from 'react'
import { View, StyleSheet } from 'react-native';
import { ListItem } from 'react-native-elements'
import { Font11 } from '../../style/globalStyle';



export default function AcordionVideos({nomeAcordionVideo}){
  const [expanded,setExpanded] = useState(false)

  const style = StyleSheet.create({
    containerContentAcordionDisable:{
      width:'100%', 
      borderRadius:10, 
      backgroundColor:"#055C30", 
      height:40, 
      justifyContent:"center", 
      alignItems:"center", 
      padding:0
    },
    containerContentAcordionExpanded:{
      width:'100%',
      borderRadius:10,
      borderTopLeftRadius:20,
      borderTopEndRadius:20,
      backgroundColor:"#055C30", 
      height:'auto', 
      justifyContent:"center", 
      alignItems:"center", 
      padding:0
    },

    containerTitleAcordion:{
      justifyContent:"center",
      alignItems:"center"
    },
    titleAcordion:{
      textAlign:"center", 
      color:"#fff", 
      fontFamily:"poppins-bold", 
      fontSize:Font11
    },
  })
  return(
    <View style={expanded ? style.containerContentAcordionExpanded : style.containerContentAcordionDisable }>
      <ListItem.Accordion
        noIcon
          content={
            <>
                <ListItem.Content style={style.containerTitleAcordion}>
                  <ListItem.Title style={style.titleAcordion}>{nomeAcordionVideo}</ListItem.Title>
                </ListItem.Content>
            </>
          }
          isExpanded={expanded}
          onPress={() => {
            setExpanded(!expanded);
          }}
          containerStyle={expanded ? style.containerContentAcordionExpanded : style.containerContentAcordionDisable }
        >

          <ListItem.Content>
            <ListItem.Title>Ola</ListItem.Title>
          </ListItem.Content>

      </ListItem.Accordion>
    </View>
  )
}