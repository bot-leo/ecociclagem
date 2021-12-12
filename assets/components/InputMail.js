import React from 'react';
import { StyleSheet, onChangeNumber, text, View, TextInput } from 'react-native';


export default function Componente(props) {
  return (
    <View style={styles.container}>
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
    height: 30,
    width: '100%',
    alignItems: 'flex-start',
    justifyContent: 'center',
    backgroundColor:'#fff',
    borderRadius:10,
    marginBottom: 20
  },

  input: {
    paddingHorizontal: 15,
    width: '100%',
    height: '100%',
    color: '#000',
  }
});
