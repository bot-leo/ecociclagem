import { StyleSheet} from 'react-native' 
import {height, width} from "../../style/globalStyle"       


export const style = StyleSheet.create({
  containerSafe: {
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
    width: '100%'
  },

  title: {
    width: '90%',
    marginBottom: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },

  input: {
    width: '80%',
    marginBottom: 10,
    justifyContent: 'center',
  },

  register: {
    width: '50%',
    marginBottom: 20,
    marginTop: 20,
    justifyContent: 'space-around',
    alignItems: 'center'
  },

  bottomTitle: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },

  footerPlace: {
    width: '100%',
  },
}) 
