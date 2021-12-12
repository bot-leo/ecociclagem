import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import RegisterInfo from '../../components/RegisterInfo';
import Login from '../../components/LoginButton';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useState } from 'react/cjs/react.development';
import axios from 'axios';
import { LinearGradient } from 'expo-linear-gradient';
import api from '../../utils/api';


export default function App() {

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
          alert(JSON.stringify(response.data))
          console.log(response.data)
        })
        .catch((error) => { //requisição deu errado
          console.log(error);
          alert("Houve um erro!");
        });
    }
    else{
      alert("As senhas são diferentes")
    }


  };


  return (

    <LinearGradient style={styles.container} colors={['#42D259', '#28496D']}>

      <View style={styles.topLogoPlace}>
        <Image
          source={require('../../../assets/imgs/PrefeituraLogo1.png')}
        />
      </View>

      <View style={styles.title}>
        <Text style={{ color: '#FFF', fontSize: 35, }}>
          Vamos Lá!
        </Text>
      </View>
      <View style={styles.subTitle}>
        <Text style={{ color: '#FFF', fontSize: 13, textAlign: 'justify', lineHeight: 30 }}>
          Verificamos que esse é o seu primeiro acesso no aplicativo. Para continuar, insira seus dados para realizar seu cadastro:
        </Text>
      </View>

      <View style={styles.topInfo}>
        <View style={styles.infoName}>
          <RegisterInfo inputTitle='Nome:' onChange={(value) => setStateName(value)} />

          <RegisterInfo inputTitle='Sobrenome:' onChange={(value) => setStateLastName(value)} />

          <RegisterInfo inputTitle='Data de Nascimento:' onChange={(value) => setStateBirth(value)} />

          <RegisterInfo inputTitle='E-mail:' onChange={(value) => setStateEmail(value)} />

          <RegisterInfo
            inputTitle='Senha'
            onChange={(value) => setStatePass(value)}
            passwordKeyboard={true}
          />

          <RegisterInfo
            inputTitle='Confirmação de Senha'
            onChange={(value) => setStateConfirmPass(value)}
            passwordKeyboard={true}
            onEnd={() => confirmPassword()}
          />

          <RegisterInfo inputTitle='CEP:' onChange={(value) => setStateCep(value)} inputType='decimal-pad' onEnd={() => getAdress()} />
        </View>

      </View>

      <View style={styles.regButton}>
        <Login titulo='Cadastrar' onPress={() => signIn()} />
      </View>

      <View style={styles.bottomLogoPlace}>
        <Image
          source={require('../../../assets/imgs/PMALogo2.png')}
        />
        <Image
          source={require('../../../assets/imgs/FehidroLogo3.png')}
        />
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
    marginBottom: 10,
  },

  title: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 40,
  },
  subTitle: {
    width: '98%',
    alignItems: 'center',
    justifyContent: 'center',

  },

  topInfo: {
    width: '100%',
    height: 200,
    justifyContent: 'space-between',
    paddingHorizontal: 30,

  },

  infoName: {
    width: '100%',
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: 300,
  },

  regButton: {
    width: '90%',
    marginTop: 150,
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