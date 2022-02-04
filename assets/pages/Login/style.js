import { StyleSheet} from 'react-native' 
import {height, width} from "../../style/globalStyle"       



export const style = StyleSheet.create({
  containerSafe:{
    flex:1
  },
  container: {
    flex: 1,
    width: width,
    alignItems: 'center',
    justifyContent: 'center',
  },
  contrainerScrollView:{
    flex:1, 
    width: width, 
    height: height
  },

  topLogoPlace: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    
  },

  containerTitle: {
    flex:1,
    width: '90%',
    marginBottom: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },
  titlePrincipal: {
    fontSize: 48, 
    color: '#fff',
    fontFamily:'poppins-regular'
  },
  subTitle:{
    fontFamily:'poppins-regular',
    fontSize: 16, 
    color: '#fff', 
    textAlign: 'center', 
    lineHeight: 35 
  },

  containerInput: {
    width: '80%',
    marginBottom: 10,
    justifyContent: 'space-around',
  },

  register: {
    width: '80%',
    marginBottom: 20,
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center'
  },

  containerSecundaryitle: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  secundaryTitle:{
    fontFamily:'poppins-regular',
    fontSize: 40, 
    color: '#fff'
  },
  secundarySubTitle:{
    fontFamily:'poppins-regular',
    fontSize: 16, 
    color: '#fff', 
    textAlign: 'center', 
    lineHeight: 35 
  },

  bottomLogoPlace: {
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-around',
    marginTop: 10,
    marginBottom: 10,
   
  },
});