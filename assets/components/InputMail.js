import React, { useState } from 'react';
import { StyleSheet, onChangeNumber, text, View, TextInput, Text, TouchableOpacity } from 'react-native';
import Email from '../img/Iconeemail.svg'
import Pass from '../img/IconeSenha.svg'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'


export default function ImputMail(props) {

  const [hide, setHide] = useState(true)
   
  const styles = StyleSheet.create({
    container: {
      height: 40,
      width: '100%',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#fff',
      borderColor: '#055C30',
      borderWidth: 3,
      marginBottom: 20,
      borderRadius: 20,
      flexDirection: 'row',
    },
  
    IconPlace: {
      width: '10%',
      height: '100%',
      borderBottomLeftRadius: 20,
      borderTopLeftRadius: 20,
      backgroundColor: '#055C30',
      alignItems: 'center',
      justifyContent: 'center'
    },
    input: {
      width:  props.pwdInput ? '70%' : '90%',
      height: '100%',
      color: '#000',
      backgroundColor: '#fff',
      borderTopRightRadius: 20,
      borderBottomRightRadius: 20,
      paddingLeft:10,
      textAlign:'left',
      fontFamily:'poppins-regular',
      fontSize:11
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

      <View style={styles.IconPlace}>
       {
         props.iconEmail ? <Email width={15} height={15} /> : <></>
       }
       {
         props.iconPass ? <Pass width={15} height={15} /> : <></>
       }
      </View>

      <TextInput
        placeholderTextColor='#000'
        placeholder={props.placeholder}
        secureTextEntry={props.pwdInput ? hide : null}
        style={styles.input}
        onChangeText={(value) => props.onChange(value)}
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


