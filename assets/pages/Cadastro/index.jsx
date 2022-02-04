import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import RegisterInfo from '../../components/RegisterInfo';
import Login from '../../components/LoginButton';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useState } from 'react/cjs/react.development';
import axios from 'axios';
import { LinearGradient } from 'expo-linear-gradient';
import api from '../../utils/api';
import Footer from '../../components/Footer'
import LogoColeta from '../../img/logo-coleta-seletiva.svg'


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

  };

  return (

    <LinearGradient style={styles.container} colors={['#019444', '#006A39']}>

      <View style={styles.topLogoPlace}>
        <LogoColeta/>
      </View>

      <View style={styles.midContent}>
        <View style={styles.title}>
          <Text style={{ color: '#FFF', fontSize: 17, lineHeight: 25 }}>
            Vamos Lá!
          </Text>
        </View>
        <View style={styles.subTitle}>
          <Text style={{ color: '#FFF', fontSize: 12, textAlign: 'center', lineHeight: 14 }}>
            Verificamos que esse é o seu primeiro acesso no aplicativo. Para continuar, insira seus dados para realizar seu cadastro:
          </Text>
        </View>

        <View style={styles.topInfo}>
          <View style={styles.regInfo}>
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

        <View style={styles.regButton}>
          <Login titulo='Cadastrar' onPress={() => signIn()} />
        </View>
      </View>

      <View style={styles.footerPlace}>
        <Footer/>
      </View>

      <View style={{marginTop:2, marginBottom:3, width:"100%"}}>
        <Text style={{fontSize: 11, lineHeight: 35, color:'#FFF',textAlign:"center", fontFamily:'poppins-regular' }}>Desenvolvido por SEMEAR - Projetos Educacionais</Text>
      </View>
    </LinearGradient>
  )
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
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 5,
  },

  subTitle: {
    width: '75%',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 25,
  },

  topInfo: {
    width: '100%',
    justifyContent: 'space-between',
    paddingHorizontal: 30,

  },

  regInfo: {
    width: '100%',
    flexDirection: 'column',
    marginBottom: 25,
  },

  regButton: {
    width: '50%',
    justifyContent: 'center',
    alignItems: 'center',
  },

  footerPlace: {
    width: '100%',
   },
});
