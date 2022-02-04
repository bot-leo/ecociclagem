import { StyleSheet} from 'react-native'    
import { height, width } from '../../style/globalStyle'    


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
    marginBottom: 10,
  },

  title: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 40,
  },
  subTitle: {
    width: '85%',
    alignItems: 'flex-start',
    justifyContent: 'center',
    
  },
  subTitleText:{
    color: '#FFF', 
    fontSize: 16, 
    textAlign: 'left', 
    lineHeight: 30,
    
    fontFamily:'poppins-regular',

    marginBottom:20,
  },

  topInfo: {
    width: '100%',
    height: 200,
    justifyContent: 'space-between',
    paddingHorizontal: 30,

  },

  infoName: {
    width: '100%',
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: 300,
  },

  regButton: {
    width: '90%',
    marginTop: 150,
    justifyContent: 'center',
    alignItems: 'center',
  },

  bottomLogoPlace: {
    flexDirection: 'row',
    width: '90%',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 10,
    marginBottom:15,
  },

  buttonBack:{
    width:40, 
    height:40,
    position:"absolute", 
    top:10, 
    left:10,
    borderRadius:10, 
    alignItems:"center", 
    justifyContent:"center"
  }
})