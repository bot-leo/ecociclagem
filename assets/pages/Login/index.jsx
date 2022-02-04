import React, { useState } from 'react'
import { StatusBar } from 'expo-status-bar'
import {
  Text,
  View,
  Alert,
  SafeAreaView,
  ScrollView,
  StyleSheet
} from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { LinearGradient } from 'expo-linear-gradient'
import axios from 'axios'

import { style } from "./style"

import LoginButton from '../../components/LoginButton'
import InputMail from '../../components/InputMail'
import LogoColeta from '../../img/logo-coleta-seletiva.svg'
import Footer from '../../components/Footer'


export default function App() {

  const navigation = useNavigation()

  const showAlertLogin = (nome) =>
    Alert.alert(`Bem Vindo ${nome} !!`, `Precisamos da sua ajuda para escolher o nome do mascote.\nAbaixo temos algumas opções para você escolher.\nVamos La ?!!`, [
      { text: 'Entendi', onPress: () => console.log('OK Pressed') }
    ])
  const showAlertLoginVotou = (nome, voto) =>
    Alert.alert(`Ola ${nome} !!`, `Você votou no ${voto}, agradecemos sua participação, em breve teremos atualizações então fique ligado...`, [
      { text: 'Entendi', onPress: () => console.log('OK Pressed') }
    ])

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
      .then((response) => {

        //Login realizado
        if (response.data?.status === "Login sucessfull") {
          if (response.data.data.voto === "") {
            navigation.navigate('Votacao', response.data.data.id)
            showAlertLogin(response.data.data.name)
          } else {
            navigation.navigate('TabBottomNavigation')
          }
        } else {
          alert("Erro Desconhecido")
        }
      })
      .catch((error) => { //requisição deu errado
        console.log(error)
        alert("Houve um erro!")
      })

  }


  return (
    <SafeAreaView style={style.containerSafe}>
      <StatusBar style="light" backgroundColor="#000"/>
    <LinearGradient style={style.containerGradient} colors={['#019444', '#006A39']}>

      <View style={style.topLogoPlace}>
      <LogoColeta width={141} height={68}/>
      </View>

      <View style={style.midContent}>
        <View style={style.title}>
          <Text style={{ fontSize: 17, color: '#fff', lineHeight: 25, fontFamily: 'poppins-bold' }}>
            Olá! Tudo bem?
          </Text>
          <Text style={{ fontSize: 12, color: '#fff', textAlign: 'center', lineHeight: 15, textAlign: 'center', fontFamily: 'poppins-regular' }}>
            Por favor, insira abaixo as suas informações de cadastro no Coleta Seletiva de Itapecerica.
          </Text>
        </View>

        <View style={style.input}>
          <InputMail onChange={(value) => setStateEmail(value)} placeholder="E-mail" iconEmail />

          <InputMail onChange={(value) => setStatePass(value)} placeholder="Senha" passwordInput={true} iconPass />
        </View>

        <View style={style.register}>
          <LoginButton titulo='Realizar Acesso' onPress={() => login()} />
        </View>

        <View style={{ width: '80%', height: 3, backgroundColor: '#fff', marginBottom: 20 }} />


        <View style={style.bottomTitle}>
          <Text style={{ fontSize: 17, color: '#fff', lineHeight: 25, fontFamily: 'poppins-bold' }}>
            Não possui cadastro?
          </Text>
          <Text style={{ fontSize: 12, color: '#fff', textAlign: 'justify', lineHeight: 15,fontFamily: 'poppins-regular' }}>
            Caso não tenha um cadastro, não se preocupe!
          </Text>
        </View>

        <View style={style.register}>
          <LoginButton titulo='Criar Cadastro' onPress={() => navigation.navigate('Cadastro')} />
        </View>
      </View>

      <View style={style.footerPlace}>
        <Footer />
      </View>

    </LinearGradient>
    </SafeAreaView>

  );
}

