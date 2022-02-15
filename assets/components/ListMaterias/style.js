import { StyleSheet } from 'react-native'

export const style = StyleSheet.create({
  containerTitleAcordion:{
    justifyContent:"center",
    alignItems:"center"
  },
  titleAcordion:{
    textAlign:"center", 
    color:"#fff", 
    fontFamily:"poppins-bold", 
    fontSize:16
  },
  
  
  containerContentAcordionDisable:{
    width:'100%', 
    borderRadius:20, 
    backgroundColor:"#055C30", 
    height:40, 
    justifyContent:"center", 
    alignItems:"center", 
    padding:0
  },
  containerContentAcordionExpanded:{
    width:'100%',
    borderRadius:20,
    borderTopLeftRadius:20,
    borderTopEndRadius:20,
    backgroundColor:"#055C30", 
    height:'auto', 
    justifyContent:"center", 
    alignItems:"center", 
    padding:0
  },
})