import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'

export default function LoginButton(props) {
  return (
    <TouchableOpacity style={styles.container} onPress={() => props.onPress()}>
        <Text style={styles.textButton}>{props.titulo}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#04366B',
    alignItems: 'center',
    justifyContent: 'center',
    width:'100%',
    height:36,
    borderRadius: 20,
    marginBottom:10

  },
  textButton:{
    fontFamily:'poppins-bold',
    fontSize: 11, 
    color: '#fff', 

  },
})
