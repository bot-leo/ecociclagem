import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Login from '../../components/LoginButton';
import InputCPF from '../../components/InputCPF'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

export default function App() {

  const navigation = useNavigation();
  const [CPFState, setCPFState] = useState('')

  return (
    <View style={styles.container}>

      <View>
        <View style={styles.logoPlace}>

        </View>
      </View>

      <View style={styles.title}>
        <Text style={{ fontSize: 50, color: '#fff' }}>
          Reciclaúdio
        </Text>
      </View>

      <View style={styles.input}>
        <InputCPF onChange={(value) => setCPFState(value)} />
      </View>

      <View style={styles.register}>

        <Login titulo='Acessar' onPress={() => console.log(CPFState)} />

        <Text style={{ paddingBottom: 10, color: '#aba283' }}>
          Ou
        </Text>

        <Login titulo='Cadastrar' onPress={() => navigation.navigate('Cadastro')} />

      </View>

      <View style={{ width: '90%', flexDirection: 'row', justifyContent: 'space-around' }}>

        <TouchableOpacity style={styles.squareButtons}>
          <Text>
            Bilhete QR Code
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.squareButtons}>
          <Text>
            Denúncias
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.squareButtons}>
          <Text>
            FAQ
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.squareButtons}>
          <Text>
            Suporte
          </Text>
        </TouchableOpacity>

      </View>

    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#3f7424',
    alignItems: 'center',
    justifyContent: 'center',
  },

  logoPlace: {
    width: 200,
    height: 200,
    backgroundColor: '#aca49a',
    marginTop: 20,
  },

  title: {
    width: '90%',
    marginBottom: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },

  input: {
    width: '80%',
    marginBottom: 30,
  },

  register: {
    width: '80%',
    marginBottom: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },

  squareButtons: {
    width: 75,
    height: 75,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#48a258',
  },
});