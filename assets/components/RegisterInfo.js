import React, { useState } from 'react'
import { StyleSheet, onChangeNumber, text, View, TextInput, TouchableOpacity } from 'react-native'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import { height } from '../style/globalStyle'


export default function Componente(props) {

  const [hide, setHide] = useState(true)

  const styles = StyleSheet.create({
    container: {
      backgroundColor: '#EEEEEE',
      flexDirection:"row",
      borderWidth: 3,
      borderRadius: 20,
      borderColor: '#055C30',
      width:'100%',
      height: height/17.8,
      alignItems: 'center',
      justifyContent:'center',
      marginBottom: 15,
  
    },
  
    input: {
      color: '#414143',
      paddingLeft:15,
      textAlign:'center',
      fontFamily:'poppins-regular',
      fontSize:11,
      width: props.pwdInput ? '80%' : '100%',
      alignItems:"center"
    },
    buttonOcultarPwd:{
      width:"20%", 
      height: '100%', 
      borderBottomRightRadius:20, 
      borderTopRightRadius:20, 
      justifyContent:"center", 
      alignItems:"center"
    }
  })

  return (
    <View style={styles.container}>
      <TextInput
        placeholderTextColor='#414143'
        placeholder={props.inputTitle}
        style={styles.input}
        onChangeText={(value) => props.onChange(value)}
        keyboardType={props.inputType}
        onEndEditing={props.onEnd}
        secureTextEntry={props.pwdInput ? hide : null}
      />
      {
        props.pwdInput ?  
                        <TouchableOpacity style={styles.buttonOcultarPwd} onPress={() => setHide(!hide)}>
                          { hide ? <FontAwesome5 name='eye' color={'#414143'} size={15}/> : <FontAwesome5 name='eye-slash' color={'#414143'} size={15}/>}
                        </TouchableOpacity>
                        : null
                      }
    </View>
  );
}


