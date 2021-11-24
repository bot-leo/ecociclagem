import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, onChangeNumber, text, View, TextInput } from 'react-native';


export default function Componente(props) {
  return (
    <View style={styles.container}>
      <TextInput
        placeholderTextColor='#FFF '
        placeholder='Informe seu CPF: '
        style={styles.input}
        onChangeText={(value) => props.onChange(value)}
        keyboardType='number-pad'
      >

      </TextInput>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    alignItems: 'flex-start',
    justifyContent: 'center',
    borderBottomWidth: 1,
    borderColor: '#FFF',
  },

  input: {
    color: '#FFF'
  }
});
