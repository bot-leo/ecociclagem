import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, onChangeNumber, text, View, TextInput } from 'react-native';


export default function Componente(props) {
  return (
    <View style={styles.container}>
      <TextInput
        placeholderTextColor='#FFF'
        placeholder={props.inputTitle}
        style={styles.input}
        onChangeText={(value) => props.onChange(value)}
        keyboardType={props.inputType}
        onEndEditing={props.onEnd}
        secureTextEntry={props.passwordKeyboard}
      >
      </TextInput>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderBottomWidth: 1,
    borderColor: '#FFF',
    maxWidth: '100%',
    minWidth:'45%'
  },

  input: {
    color: '#FFF',
    fontSize: 14, 
  }
});
