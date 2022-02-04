import React,{useState} from 'react'
import { Text, View, SafeAreaView, ToastAndroid } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import axios from 'axios'
import { LinearGradient } from 'expo-linear-gradient'

import RegisterInfo from '../../components/RegisterInfo'
import Login from '../../components/LoginButton'

import api from '../../utils/api'
import Footer from '../../components/Footer'
import LogoColeta from '../../img/logo-coleta-seletiva.svg'
import { StatusBar } from 'expo-status-bar'
import { style } from './style'


export default function App() {
  const navigation = useNavigation()

  const showToast = (text) => {
    ToastAndroid.show(text, ToastAndroid.SHORT)
  }

  const data = {
    name: stateName,
    lastname: stateLastName,
    birthday: stateBirth,
    cep: stateCep,
    email: stateEmail,
    pass: statePass,
  }

  const [stateName, setStateName] = useState('')
  const [stateLastName, setStateLastName] = useState('')
  const [stateBirth, setStateBirth] = useState('')
  const [stateCep, setStateCep] = useState('')
  const [stateEmail, setStateEmail] = useState('')
  const [statePass, setStatePass] = useState('')
  const [stateConfirmPass, setStateConfirmPass] = useState('')

  const [passwordOdd, setPasswordOdd] = useState(false)

  const confirmPassword = () => {
    if (statePass == stateConfirmPass) {
      setPasswordOdd(true)
    }
    else {
      setPasswordOdd(false)
    }
  }

  const getAdress = async () => {
    axios({
      method: 'get',
      url: 'https://ecociclagem-api.herokuapp.com/cep',
      data: { 'cep': '45020330' }
    })
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error.response)
      })
  }

  const signIn = () => {

    const configurationObject = {
      url: `https://ecociclagem-api.herokuapp.com/cadastro`,
      method: "post",
      data:{
        nome: stateName,
        sobrenome: stateLastName,
        cep: stateCep,
        nascimento: stateBirth,
        email: stateEmail,
        senha: statePass
      },
    };

    if (passwordOdd) {
      axios(configurationObject)
        .then((response) => { //Cadastro realizado
          // alert(JSON.stringify(response.data))
          console.log(response.data)
          showToast('Sucesso!')
          navigation.navigate("Login")
        })
        .catch((error) => { //requisição deu errado
          console.log(error);
          alert("Houve um erro!");
        });
    }
    else {
      alert("As senhas são diferentes")
    }

  };

  return (
    <SafeAreaView style={style.container}>
      <StatusBar style="light" backgroundColor="#000"/>
      <LinearGradient style={style.containerGradient} colors={['#019444', '#006A39']}>
      
        <View style={style.topLogoPlace}>
          <LogoColeta width={141} height={68}/>
        </View>

        <View style={style.midContent}>
          <View style={style.title}>
            <Text style={{ color: '#FFF', fontSize: 17, lineHeight: 25,fontFamily: 'poppins-bold' }}>
              Vamos Lá!
            </Text>
          </View>
          <View style={style.subTitle}>
            <Text style={{ color: '#FFF', fontSize: 12, textAlign: 'center', lineHeight: 14, fontFamily: 'poppins-regular' }}>
              Verificamos que esse é o seu primeiro acesso no aplicativo. Para continuar, insira seus dados para realizar seu cadastro:
            </Text>
          </View>

          <View style={style.topInfo}>
            <View style={style.regInfo}>
              <RegisterInfo
                inputTitle='Nome'
                onChange={(value) => setStateName(value)} />

              <RegisterInfo
                inputTitle='E-mail'
                onChange={(value) => setStateEmail(value)} />

              <RegisterInfo
                inputTitle='CEP'
                onChange={(value) => setStateCep(value)}
                inputType='decimal-pad'
                onEnd={() => getAdress()} />

              <RegisterInfo
                inputTitle='Senha'
                onChange={(value) => setStatePass(value)}
                passwordKeyboard={true}
              />

              <RegisterInfo
                inputTitle='Confirme a Senha'
                onChange={(value) => setStateConfirmPass(value)}
                passwordKeyboard={true}
                onEnd={() => confirmPassword()}
              />
            </View>
          </View>

          <View style={style.regButton}>
            <Login titulo='Cadastrar' onPress={() => signIn()} />
            <Login titulo='Voltar para Tela de Login' onPress={() => navigation.goBack()} />
          </View>
        </View>

        <View style={style.footerPlace}>
          <Footer/>
        </View>

      </LinearGradient>
    </SafeAreaView>
  )
}

