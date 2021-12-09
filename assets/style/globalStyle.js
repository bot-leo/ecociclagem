import {StyleSheet, Dimensions} from 'react-native'

export const {width, height} = Dimensions.get('window')

export const globalStyle  = StyleSheet.create({
  containerScreen: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textTitle:{
    fontSize:20,
    fontWeight:"bold"
  }
})