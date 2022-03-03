import { StyleSheet } from 'react-native'
import { height } from '../../style/globalStyle'


export const style = StyleSheet.create({

  containerGradient: {
    flex: 1,
    alignItems: "center",
    paddingTop: 5,
    justifyContent:'space-between',
    height:height
  },

  topContent: {
    width: '100%',
    alignItems: 'center',
    marginBottom: 5
  },

  midContent: {
    width: '90%',
    alignItems: 'center',
    marginBottom: 5
  },

  botContent: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },

  doubleButtom: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent:'center',
    marginBottom: 5
  },

  buttomStyle:{
    width:'45%',
    marginHorizontal:5
  },
}) 
