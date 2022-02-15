import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, onChangeNumber, text, View, TextInput } from 'react-native';
import { height } from '../style/globalStyle';


export default function Componente(props) {
  return (
    <View style={styles.container}>
      <TextInput
        placeholderTextColor='#414143'
        placeholder={props.inputTitle}
        style={styles.input}
        onChangeText={(value) => props.onChange(value)}
        keyboardType={props.inputType}
        onEndEditing={props.onEnd}
        secureTextEntry={props.passwordKeyboard}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#EEEEEE',
    borderWidth: 3,
    borderRadius: 20,
    borderColor: '#055C30',
    width: '100%',
    height: height/17.8,
    alignItems: 'center',
    justifyContent:'center',
    marginBottom: 15,

  },

  input: {
    color: '#414143',
    textAlign:'center',
    fontFamily:'poppins-regular',
    fontSize:11,
    width: '100%',
  }
});
