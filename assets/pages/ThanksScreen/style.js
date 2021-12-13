
import {StyleSheet} from "react-native"
import { height, width } from "../../style/globalStyle"

export const style = StyleSheet.create({
  containerSafeView:{
    flex:1
  },
  contrainerScrollView:{
    flex:1, 
    width: width, 
    height: height
  },
  background:{
    flex: 1,
    width: width,
    height: height,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop:20
  },
  containerTextTitle:{
    marginTop:15
  },
  textInfo:{
    fontSize: 15,
    lineHeight: 35, 
    color:'#FFF', 
    marginTop:15,
    paddingHorizontal:15,
  },
  containerLogos:{
    width:'90%',
    flexDirection:'row', 
    justifyContent:"space-between", 
    alignItems:"center", 
    marginBottom:20, 
    marginTop:39
  }




  
})