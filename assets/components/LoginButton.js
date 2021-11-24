import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function Componente(props) {
  return (
    <TouchableOpacity style={styles.container} onPress={() => props.onPress()}>

        <Text>{props.titulo}</Text>
     
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#50a192',
    alignItems: 'center',
    justifyContent: 'center',
    width:'100%',
    height:30,
    borderRadius: 20,
    marginBottom:10
  },
});
