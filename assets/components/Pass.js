import React from 'react';
import { StyleSheet, onChangeNumber, text, View, TextInput } from 'react-native';


export default function Componente(props) {
  return (
    <View style={styles.container}>
      <TextInput
        placeholderTextColor='#000'
        placeholder='Senha: '
        style={styles.input}
        onChangeText={(value) => props.onChange(value)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    alignItems: 'flex-start',
    justifyContent: 'center',
    backgroundColor:'#fff',
    borderRadius:10
  },

  input: {
    color: '#000'
  }
});
