import React from 'react';
import { StyleSheet, onChangeNumber, text, View, TextInput, Text } from 'react-native';
import Email from '../img/Iconeemail.svg'
import Pass from '../img/IconeSenha.svg'


export default function ImputMail(props) {
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
        secureTextEntry={props.passwordInput}
        style={styles.input}
        onChangeText={(value) => props.onChange(value)}
      />
    </View>
  );
}

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
    width: '90%',
    height: '100%',
    color: '#000',
    backgroundColor: '#fff',
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20,
    textAlign:'center',
    fontFamily:'poppins-regular',
    fontSize:11
  }
});
