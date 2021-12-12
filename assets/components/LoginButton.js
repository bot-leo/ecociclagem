import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function Componente(props) {
  return (
    <TouchableOpacity style={styles.container} onPress={() => props.onPress()}>

        <Text style={{color:'#fff'}}>{props.titulo}</Text>
     
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#2C52A0',
    alignItems: 'center',
    justifyContent: 'center',
    width:'100%',
    height:30,
    borderRadius: 10,
    marginBottom:10
  },
});
