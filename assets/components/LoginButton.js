import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function Componente(props) {
  return (
    <TouchableOpacity style={styles.container} onPress={() => props.onPress()}>
        <Text style={styles.textButton}>{props.titulo}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#2C52A0',
    width:'100%',
    height:32,
    alignItems:'center',
    justifyContent: 'center',
    borderRadius: 10,
    
    
  },
  textButton:{
    fontFamily:'poppins-regular',
    fontSize: 14, 
    color: '#fff', 
  
  },
})
