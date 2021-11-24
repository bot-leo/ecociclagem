import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import RegisterInfo from '../components/RegisterInfo';

import { TouchableOpacity } from 'react-native-gesture-handler';


export default function App() {
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
          <RegisterInfo inputTitle='Nome*' onChange={(value) => console.log(value)} />

          <RegisterInfo inputTitle='Sobrenome*' onChange={(value) => console.log(value)} />
        </View>

        <View>
          <RegisterInfo inputTitle='Data de nascimento*' onChange={(value) => console.log(value)} inputType='decimal-pad' />
        </View>
      </View>

      <View style={styles.bottomInfo}>

        <View style={{ width: '45%' }}>
          <RegisterInfo inputTitle='CEP' onChange={(value) => console.log(value)} inputType='decimal-pad' />
        </View>
        <View>
          <RegisterInfo inputTitle='Bairro' onChange={(value) => console.log(value)} />
        </View>

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

});