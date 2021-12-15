import React,{useState} from 'react'
import {  Text, 
         View, 
         SafeAreaView,
         ToastAndroid, 
         ScrollView,
        TouchableOpacity} from 'react-native'
import {useNavigation} from "@react-navigation/native"
import { StatusBar } from 'expo-status-bar'
import axios from 'axios'
import { LinearGradient } from 'expo-linear-gradient'

import { FontAwesome } from '@expo/vector-icons'

import {style} from "./style"

import RegisterInfo from '../../components/RegisterInfo'
import Login from '../../components/LoginButton'


import Logo1 from '../../img/logo-prefeitura-itapecirica.svg'
import Logo2 from '../../img/logo-meio-ambiente-arvore.svg'
import Logo3 from '../../img/logo-fehidro-background.svg'


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
      data: {
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

  }


  return (
  <SafeAreaView style={style.containerSafe}>
    <StatusBar style="light" backgroundColor='#000' translucent={false} />
    <ScrollView style={style.contrainerScrollView} showsVerticalScrollIndicator={false} >
    <LinearGradient style={style.container} colors={['#42D259', '#759DC8']}>
       
          <TouchableOpacity style={style.buttonBack}
                            activeOpacity={.5}
                            onPress={() => navigation.goBack()}>
           <FontAwesome name="arrow-circle-left" size={35} color={"#fff"}/>
          </TouchableOpacity>
        
      <View style={style.topLogoPlace}>
        <Logo1 width={175} height={72}/>
      </View>

      <View style={style.title}>
        <Text style={{ color: '#FFF', fontSize: 48,fontFamily:'nats-regular'  }}>
          Vamos Lá!
        </Text>
      </View>

      <View style={style.subTitle}>
        <Text style={style.subTitleText}>
          Verificamos que esse é o seu primeiro acesso no {'\n'}aplicativo. Para continuar, insira seus dados para{'\n'}realizar seu cadastro:
        </Text>
      </View>

      <View style={style.topInfo}>
        <View style={style.infoName}>
          <RegisterInfo inputTitle='Nome:' onChange={(value) => setStateName(value)} />

          <RegisterInfo inputTitle='Sobrenome:' onChange={(value) => setStateLastName(value)} />

          <RegisterInfo inputTitle='Data de Nascimento:' onChange={(value) => setStateBirth(value)} />

          <RegisterInfo inputTitle='E-mail:' onChange={(value) => setStateEmail(value)} />

          <RegisterInfo
            inputTitle='Senha:'
            onChange={(value) => setStatePass(value)}
            passwordKeyboard={true}
          />

          <RegisterInfo
            inputTitle='Confirmação de Senha:'
            onChange={(value) => setStateConfirmPass(value)}
            passwordKeyboard={true}
            onEnd={() => confirmPassword()}
          />

          <RegisterInfo inputTitle='CEP:' onChange={(value) => setStateCep(value)} inputType='decimal-pad' onEnd={() => getAdress()} />
        </View>
      </View>

      <View style={style.regButton}>
        <Login titulo='Cadastrar' onPress={() => signIn()} />
      </View>

      <View style={style.bottomLogoPlace}>
        <Logo2 width={159} height={74} />
        <Logo3 width={104} height={71}/>
      </View>

      <View style={{marginTop:2, marginBottom:3, width:"100%"}}>
        <Text style={{fontSize: 11, lineHeight: 35, color:'#FFF',textAlign:"center", fontFamily:'nats-regular' }}>Desenvolvido por SEMEAR - Projetos Educacionais</Text>
      </View>
    </LinearGradient>
    </ScrollView>
    </SafeAreaView>
  )
}

