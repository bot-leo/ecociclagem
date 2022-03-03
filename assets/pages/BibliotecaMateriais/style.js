 import {StyleSheet} from 'react-native'
import { height, width } from '../../style/globalStyle'


 export const style = StyleSheet.create({
  containerGradient:{
    flex:1,
    width: width,
    height:'auto',
    alignItems:"center"
  },
  containerMain:{
    width:'85%',
    flexDirection:"row", 
    justifyContent:"space-around", 
    alignItems:"center",
    
  },


 

  titleMain:{
    fontFamily:'poppins-bold',
    fontSize:16,
    color:'#EEEEEE',
    marginTop:14,
  },
  textRegular:{
    width:'85%',
    fontFamily:'poppins-regular',
    fontSize:12,
    color:'#EEEEEE',
    textAlign:"center",
    marginTop:12
  },


  containerButtons:{
    flexDirection:"column", 
    width:220, 
    flexWrap:"wrap", 
    justifyContent:"space-between", 
    height:211,
    marginTop:13,
  },
  containerButtonsRow:{
    width:'100%', 
    flexDirection:"row", 
    justifyContent:"space-between", 
    alignItems:"center"
  },

  containerListAccordions:{
    flex:1,
    width:'85%', 
    justifyContent:"space-around",
    alignItems:"center", 
    marginTop:15, 
    flexDirection:"column", 
    marginBottom:15,
  },
 })