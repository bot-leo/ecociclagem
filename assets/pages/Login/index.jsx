import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import Login from '../../components/LoginButton';
import InputMail from '../../components/InputMail'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';
import axios from 'axios';
import Logo1 from '../../imgs/PrefeituraLogoSVG.svg'
import Logo2 from '../../imgs/PMALogoSVG.svg'
import Logo3 from '../../imgs/FehindroLogoSVG.svg'




export default function App() {

  const navigation = useNavigation();

  const data = {
    pass: statePass,
    email: stateEmail,
  }

  const [statePass, setStatePass] = useState('')
  const [stateEmail, setStateEmail] = useState('')

  const login = () => {

    const configurationObject = {
      url: `https://ecociclagem-api.herokuapp.com/login`,
      method: "post",
      data: {
        email: stateEmail,
        senha: statePass
      },
    };

    axios(configurationObject)
      .then((response) => { //Cadastro realizado
        alert(JSON.stringify(response.data))
        console.log(response.data)
      })
      .catch((error) => { //requisição deu errado
        console.log(error);
        alert("Houve um erro!");
      });

  };


  return (
    <LinearGradient style={styles.container} colors={['#42D259', '#28496D']}>

      <View style={styles.topLogoPlace}>
        <Logo1 />
      </View>

      <View style={styles.title}>
        <Text style={{ fontSize: 40, color: '#fff' }}>
          Olá! Tudo bem?
        </Text>
        <Text style={{ fontSize: 14, color: '#fff', textAlign: 'center', lineHeight: 35 }}>
          Por favor, insira abaixo as suas informações de cadastro no Coleta Seletiva de Itapecerica.
        </Text>
      </View>

      <View style={styles.input}>
        <InputMail onChange={(value) => setStateEmail(value)} placeholder="Email:" />

        <InputMail onChange={(value) => setStatePass(value)} placeholder="Senha:" passwordInput={true} />
      </View>

      <View style={styles.register}>
        <Login titulo='Realizar Acesso' onPress={() => login()} />
      </View>

      <View style={styles.bottomTitle}>
        <Text style={{ fontSize: 35, color: '#fff' }}>
          Não possui cadastro?
        </Text>
        <Text style={{ fontSize: 14, color: '#fff', textAlign: 'justify', lineHeight: 35 }}>
          Caso não tenha um cadastro, não se preocupe!
        </Text>
        <Text style={{ fontSize: 14, color: '#fff', textAlign: 'justify', lineHeight: 35 }}>
          Clique no botão para os próximos passos de cadastro.
        </Text>
      </View>

      <View style={styles.register}>
        <Login titulo='Criar Cadastro' onPress={() => navigation.navigate('Cadastro')} />
      </View>

      <View style={styles.bottomLogoPlace}>
        <Logo2 />
        <Logo3 />
      </View>

    </LinearGradient>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#3f7424',
    alignItems: 'center',
    justifyContent: 'center',
  },

  topLogoPlace: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },

  title: {
    width: '90%',
    marginBottom: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },

  input: {
    width: '80%',
    marginBottom: 10,
    justifyContent: 'space-around',
  },

  register: {
    width: '80%',
    marginBottom: 20,
    marginTop: 20,
    justifyContent: 'space-around',
    alignItems: 'center'
  },

  bottomTitle: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },

  bottomLogoPlace: {
    flexDirection: 'row',
    width: '90%',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 10,
  },
});