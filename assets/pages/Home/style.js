import {StyleSheet} from 'react-native'
import {width} from '../../style/globalStyle.js'

export const style = StyleSheet.create({
  containerConteudo:{
    flex:1, 
    height:'100%'
  },
  containerContentMain:{
    width:width, 
    height:'70%', 
    backgroundColor:'#024C27',
    flexDirection:"row",
    alignItems:'center',
    justifyContent:"space-around"
  },
  textInfo:{
    width: '45%',
    fontFamily:'poppins-regular',
    fontSize:14,
    color:'#FFFFFF',
    marginLeft:25,
  },
  containerMascote:{
    position: 'relative',
    top: 0,
    left: 10,
  },



  containerBottomView:{
    width:width, 
    height:'30%', 
    backgroundColor:'#D3D4D6', 
    flexDirection:'row',
    justifyContent:"space-evenly",
    alignItems:"center"
  }
})