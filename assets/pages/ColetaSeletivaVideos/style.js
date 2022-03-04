import { StyleSheet} from 'react-native'
import { ColorWhite, Font12, FontBold, FontRegular } from '../../style/globalStyle'


export const style = StyleSheet.create({
  marginBottom:{
    marginBottom:15,
  },

  containerDialogoTextMascote:{
    width:280, 
    height:'auto', 
    backgroundColor:"#2f7607", 
    borderRadius:20, 
    position:"absolute", 
    left:65,
    borderWidth:3,
    borderColor:"#DFF32A",
    padding:8,
  },

  textDialogoMascote:{
    fontFamily:FontRegular,
    fontSize:Font12,
    color:ColorWhite,
  },
  textDialogoMascoteBold:{
    fontFamily:FontBold,
    fontSize:Font12,
    color:ColorWhite,
  },
})