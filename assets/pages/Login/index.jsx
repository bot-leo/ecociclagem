import React, { useState } from 'react'
import { StatusBar } from 'expo-status-bar'
import {  Text, 
         View, 
         Alert,
         SafeAreaView,
         ScrollView} from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { LinearGradient } from 'expo-linear-gradient'
import axios from 'axios'

import {style} from "./style"

import Login from '../../components/LoginButton'
import InputMail from '../../components/InputMail'

import LogoAmbiental from '../../img/logo-meio-ambiente-arvore.svg'
import LogoFehidro from '../../img/logo-fehidro-background.svg'
import LogoItapecirica from '../../img/logo-prefeitura-itapecirica.svg'

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
        if(response.data?.status === "Login sucessfull"){
          if(response.data.data.voto === ""){
            navigation.navigate('Votacao', response.data.data.id)
            showAlertLogin(response.data.data.name)
          }else{
            navigation.navigate('ThanksScreen')
            showAlertLoginVotou(response.data.data.name, response.data.data.voto)
          }
        }else{
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
     <StatusBar style="light" backgroundColor='#000' translucent={false} />
     <ScrollView style={style.contrainerScrollView} showsVerticalScrollIndicator={false} >
        <LinearGradient style={style.container} colors={['#42D259', '#759DC8']}>

          <View style={style.topLogoPlace}>
            <LogoItapecirica width={175} height={72}/>
          </View>

          <View style={style.containerTitle}>
            <Text style={style.titlePrincipal}>Olá! Tudo bem?</Text>
            <Text style={style.subTitle}>
              Por favor, insira abaixo as suas informações de{'\n'}cadastro no Coleta Seletiva de Itapecerica.
            </Text>
          </View>

          <View style={style.containerInput}>
            <InputMail onChange={(value) => setStateEmail(value)} placeholder="Email:" />

            <InputMail onChange={(value) => setStatePass(value)} placeholder="Senha:" passwordInput={true} />
          </View>

          <View style={style.register}>
            <Login titulo='Realizar Acesso' onPress={() => login()} />
          </View>

          <View style={style.containerSecundaryitle}>
            <Text style={style.secundaryTitle}>
              Não possui cadastro?
            </Text>
            <Text style={style.secundarySubTitle}>
              Caso não tenha um cadastro, não se preocupe!
              {'\n'}
              Clique no botão para os próximos passos de cadastro.
            </Text>
          </View>

          <View style={style.register}>
            <Login titulo='Criar Cadastro' onPress={() => navigation.navigate('Cadastro')} />
          </View>

          <View style={style.bottomLogoPlace}>
            <LogoAmbiental width={159} height={74} />
            <LogoFehidro width={104} height={71}/>
          </View>

        </LinearGradient>
      </ScrollView>
    </SafeAreaView>
  )
}
