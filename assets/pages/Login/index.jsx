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
import Logo4 from '../../imgs/Logo Coleta Seletiva 1.svg'
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
        if(response.data?.status === "Login sucessfull"){
          if(response.data.data.voto === ""){
            navigation.navigate('Votacao', response.data.data.id)
            showAlertLogin(response.data.data.name)
          }else{
            navigation.navigate('TabBottomNavigation')
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

    <LinearGradient style={styles.container} colors={['#019444', '#006A39']}>

      <View style={styles.topLogoPlace}>
        <Logo4 />
      </View>

      <View style={styles.midContent}>
        <View style={styles.title}>
          <Text style={{ fontSize: 17, color: '#fff', lineHeight: 25 }}>
            Olá! Tudo bem?
          </Text>
          <Text style={{ fontSize: 12, color: '#fff', textAlign: 'center', lineHeight: 15, textAlign: 'center' }}>
            Por favor, insira abaixo as suas informações de cadastro no Coleta Seletiva de Itapecerica.
          </Text>
        </View>

        <View style={styles.input}>
          <InputMail onChange={(value) => setStateEmail(value)} placeholder="E-mail" iconEmail/>

          <InputMail onChange={(value) => setStatePass(value)} placeholder="Senha" passwordInput={true} iconPass />
        </View>

        <View style={styles.register}>
          <Login titulo='Realizar Acesso' onPress={() => login()} />
        </View>

        <View style={{width: '80%', height: 3, backgroundColor:'#fff', marginBottom:20}}/>


        <View style={styles.bottomTitle}>
          <Text style={{ fontSize: 17, color: '#fff', lineHeight: 25 }}>
            Não possui cadastro?
          </Text>
          <Text style={{ fontSize: 12, color: '#fff', textAlign: 'justify', lineHeight: 15 }}>
            Caso não tenha um cadastro, não se preocupe!
          </Text>
        </View>

        <View style={styles.register}>
          <Login titulo='Criar Cadastro' onPress={() => navigation.navigate('Cadastro')} />
        </View>
      </View>

      <View style={styles.footerPlace}>
        <Footer/>
      </View>

    </LinearGradient>


  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#3f7424',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  topLogoPlace: {
    marginTop: 10
  },

  midContent: {
    justifyContent: 'center',
    alignItems: 'center',
    width:'100%'
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
    justifyContent: 'center',
  },

  register: {
    width: '50%',
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

  footerPlace: {
    width: '100%',
   },
}) 
