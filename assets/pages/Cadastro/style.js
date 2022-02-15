import { StyleSheet} from 'react-native'    
import { height, width } from '../../style/globalStyle'    


export const style = StyleSheet.create({
  container: {
      flex: 1,
    },
  containerGradient: {
      flex: 1,
      backgroundColor: '#3f7424',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
  
    topLogoPlace: {
      marginTop: 30
    },
  
    midContent: {
      justifyContent: 'center',
      alignItems: 'center',
      width:'100%'
    },
  
    title: {
      width: '100%',
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: 5,
    },
  
    subTitle: {
      width: '75%',
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: 25,
    },
  
    topInfo: {
      width: '100%',
      justifyContent: 'space-between',
      paddingHorizontal: 30,
  
    },
  
    regInfo: {
      width: '100%',
      flexDirection: 'column',
      marginBottom: 25,
    },
  
    regButton: {
      width: '50%',
      justifyContent: 'center',
      alignItems: 'center',
    },
  
    footerPlace: {
      width: '100%',
     },
  });
  