 import {StyleSheet} from 'react-native'
import { width } from '../../style/globalStyle'


 export const style = StyleSheet.create({
  containerSafe:{
    flex:1
  },
  containerGradient:{
    flex:1,
    width: width,

    alignItems:"center"
  },

  titleMain:{
    fontFamily:'poppins-bold',
    fontSize:16,
    color:'#EEEEEE',
  },
  textRegular:{
    fontFamily:'poppins-regular',
    fontSize:12,
    color:'#EEEEEE',
    textAlign:"center",
  },

 })