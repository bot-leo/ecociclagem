
import {StyleSheet} from "react-native"
import { ColorWhite, Font12, FontBold, FontRegular, height, Text11, width } from "../../style/globalStyle"

export const style = StyleSheet.create({
  containerTextosInicial:{
    justifyContent:"center", 
    alignItems:"center", 
    marginTop:14, 
    marginBottom:35
  },
  containerLogos:{
    flexDirection:"row", 
    justifyContent:"space-between",
    alignItems:"flex-end", 
    width:"85%", 
    marginTop:35,
    
  },
  containerTextosFooter:{
    width:'100%', 
    justifyContent:"space-between", 
    alignItems:"center", 
    marginTop:35
  },
  
  textInitialViewSobre:{
    fontFamily:FontRegular,
    color: ColorWhite,
    fontSize:Font12,
    marginTop:Font12,
  },
  textViewSobre:{
    fontFamily:FontRegular,
    color: ColorWhite,
    fontSize:14,
    textAlign:"center"
  },
  textViewSobreBold:{
    fontFamily:FontBold,
    color: ColorWhite,
  }

})