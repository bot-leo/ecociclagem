import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import RegisterInfo from '../components/RegisterInfo';
import Login from '../components/LoginButton';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useState } from 'react/cjs/react.development';


export default function App() {

  const data = {
    name: stateName,
    lastname: stateLastName,
    birthday: stateBirth,
    cep: stateCep,
    bairro: stateNeigh,
  }

  const [stateName, setStateName] = useState('')
  const [stateLastName, setStateLastName] = useState('')
  const [stateBirth, setStateBirth] = useState('')
  const [stateCep, setStateCep] = useState('')
  const [stateNeigh, setStateNeigh] = useState('')


  return (

    <View style={styles.container}>

      <View>
        <View style={styles.logoPlace}>
        </View>
      </View>

      <View style={styles.title}>
        <Text style={{ color: '#FFF', fontSize: 25, }}>
          Bem-vindo ao Reciclaúdio
        </Text>
        <Text style={{ color: '#FFF', fontSize: 13, textAlign: 'center' }}>
          Verificamos que esse é o seu primeiro acesso. Complete seu cadastro abaixo:
        </Text>
      </View>

      <View style={styles.topInfo}>
        <View style={styles.infoName}>
          <RegisterInfo inputTitle='Nome*' onChange={(value) => setStateName(value)} />

          <RegisterInfo inputTitle='Sobrenome*' onChange={(value) => setStateLastName(value)} />
        </View>

        <View>
          <RegisterInfo inputTitle='Data de nascimento*' onChange={(value) => setStateBirth(value)} inputType='decimal-pad' />
        </View>
      </View>

      <View style={styles.bottomInfo}>

        <View style={{ width: '45%' }}>
          <RegisterInfo inputTitle='CEP' onChange={(value) => setStateCep(value)} inputType='decimal-pad' />
        </View>
        <View>
          <RegisterInfo inputTitle='Bairro' onChange={(value) => setStateNeigh(value)} />
        </View>

      </View>

      <View style={styles.regButton}>
        <Login titulo='Cadastrar' onPress={() => console.log(stateName, stateLastName, stateBirth, stateCep, stateNeigh)} />
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
    width: 70,
    height: 70,
    backgroundColor: '#FFF',
    marginHorizontal: 20,
  },

  title: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },

  topInfo: {
    width: '100%',
    height: 150,
    justifyContent: 'space-between',
    marginVertical: 15,
    paddingHorizontal: 10,
  },

  infoName: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  bottomInfo: {
    width: '100%',
    height: 150,
    justifyContent: 'space-between',
    marginVertical: 15,
    paddingHorizontal: 10,
  },

  regButton: {
    width: '80%',
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center'
  },

});