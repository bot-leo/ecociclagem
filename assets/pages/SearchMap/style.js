import { StyleSheet } from'react-native'
import { width, height } from '../../style/globalStyle'

export const style = StyleSheet.create({
  containerGradient:{
    flex:1, 
    justifyContent:"space-evenly",
    alignItems:"center"
  },
 containerTop:{
  justifyContent:"center", 
  alignItems:"center",
  width:'100%'
 },
 

 textRegularSimple:{
   color:"#FFFFFF",
   fontFamily:"poppins-regular", 
   fontSize:11, 
   textAlign:"center"
  },
  textBold:{
   fontFamily:"poppins-bold", 
   color:'#FFFFFF', 
   fontFamily:"poppins-bold",
   textAlign:"center"
  },
  textFont12:{
    fontSize:12
  },
  

  map:{
    width: width,
    height: height - 420,
  },





containerCard:{
  width: "50%",                 
  backgroundColor:'#006A39', 
  position:"absolute", 
  top:190,
  left:20,
  borderRadius:8,
  alignItems:"center",
  justifyContent:"center",
  paddingHorizontal:5,
  borderWidth:3,
},
headerContainerCard:{
  flexDirection:"row", 
  width: "100%", 
  justifyContent:"space-around", 
  marginTop:15,
  marginBottom:10
},
containerSelectPev:{
  backgroundColor:"#04366B", 
  borderRadius:6, 
  padding:3
},
containerCardFooter:{
  justifyContent:"center",
  alignItems:"center",
  marginTop:12,
  marginBottom:20
},


placesContainer:{
    width: "100%",
    maxHeight:200,
    position: 'absolute',
    top:10
  },
  place:{
    width:width - 250,
    maxHeight:100,
    borderRadius:10,
    backgroundColor:"#006A39",
    marginHorizontal:20,
    justifyContent:"center",
    alignItems:"center"
  },


  containerBottom:{
   width:width - 20,
   justifyContent:"center", 
   alignItems:"center"
  },
  textMaterial:{
    fontSize:16,
    fontFamily:"poppins-bold",
    color:"#FFFFFF"
  },
})

