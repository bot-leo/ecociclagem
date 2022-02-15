import {StyleSheet} from 'react-native'
import {width} from '../../style/globalStyle.js'

export const style = StyleSheet.create({
  containerView:{
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
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
    width: 151,
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