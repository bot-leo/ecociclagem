import { StyleSheet, Dimensions} from 'react-native'        

export const style = StyleSheet.create({
  containerButtons: {
    marginTop:Dimensions.get('window').height / 15,
    height: Dimensions.get('window').height / 6,
    justifyContent:"space-evenly"
  },
});