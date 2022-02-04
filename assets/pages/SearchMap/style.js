import { StyleSheet } from'react-native'
import { width, height } from '../../style/globalStyle'

export const style = StyleSheet.create({
  
  containerTeste:{
    flex:1, 
    justifyContent:"flex-end", 
    alignItems:"flex-end"
  },
  map:{
    width: width,
    height: height,
    position: 'absolute',
    
  },
  placesContainer:{
    width: "100%",
    maxHeight:200,
  },
  place:{
    width:width - 40,
    maxHeight:150,
    borderRadius:10,
    backgroundColor:"#019444",
    marginHorizontal:20,
    justifyContent:"center",
    alignItems:"center"
  },
  textMaterial:{
    fontSize:16,
    fontFamily:"poppins-bold",
    color:"#FFFFFF"
  },
})

