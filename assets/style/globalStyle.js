import {StyleSheet, Dimensions} from 'react-native'

export const gradientColor = ['#019444', '#006C39']
export const {width, height} = Dimensions.get('window')

export const Font12 = 12
export const Font11 = 11
export const Font16 = 16

export const FontBold = 'poppins-bold'
export const FontRegular = 'poppins-regular'

export const ColorWhite = '#FFFFFF'

export const globalStyle  = StyleSheet.create({
  titleRegular:{
    fontFamily:'poppins-bold',
    fontSize:16,
    color:"#EEEEEE",
  },


  safeContainer:{
    flex:1,
    alignItems:"center",
  },
  scrollContainer:{
    flex:1,
    
  },
  gradientContainer:{
    flex:1,
    
  },

  
}) 



