import React from 'react'
import {Text, View, ScrollView, SafeAreaView} from "react-native"
import { LinearGradient } from "expo-linear-gradient"
import { StatusBar } from 'expo-status-bar'
import {globalStyle, height, width} from '../../style/globalStyle.js'
import {style} from './style.js'
import ConstructionScreen from "../../components/ConstructionScreen"
import TextTitle from "../../components/TextTitle"
import Login from '../../components/LoginButton';
import {useNavigation} from "@react-navigation/native"

import MascoteOff from '../../img/sombra-mascote.svg'
import LogoAmbiental from '../../img/logo-meio-ambiente-arvore.svg'
import LogoFehidro from '../../img/logo-fehidro-background.svg'
import LogoItapecirica from '../../img/logo-prefeitura-itapecirica.svg'
import ButtonOptionName from '../../components/ButtonOptionName.jsx'


export default function Votacao(){
  const navigation = useNavigation()
  return (
    <SafeAreaView style={style.containerSafeView}>
      <StatusBar style="light" backgroundColor='#000' translucent={false} />
      <ScrollView style={style.contrainerScrollView} showsVerticalScrollIndicator={false} >
        <LinearGradient colors={['#42D259', '#28496D',]}
        style={style.background}
          >
            
            <LogoItapecirica />

            <View style={style.containerTextTitle}>
              <TextTitle title="Faça sua escolha!"/> 
            </View>
            
            <Text style={style.textInfo}>Olá! 
            Eu sou o novo mascote da Coleta Seletiva de Itapecerica e conto com a sua ajuda para escolher meu nome!
            VOTE!
            </Text>


            <MascoteOff/>

            <View style={style.containerButtonsName}>
              <ButtonOptionName buttonTitle="Recicleiton" color={'#CA3030'}/>
              <ButtonOptionName buttonTitle="Leco-Treco" color={'#CCC40F'}/>
              <ButtonOptionName buttonTitle="Olavo" color={'#5CD948'}/>
              <ButtonOptionName buttonTitle="Lixolino" color={'#0F2E71'}/>
              <ButtonOptionName buttonTitle="Recicláudio" color={'#7D510E'}/>
            </View>

            <View style={{width:'90%', marginTop:39}}>
              <Login titulo="CONFIRMAR VOTO" onPress={() => navigation.navigate("ThanksScreen")}/>
            </View>
            

            <View style={style.containerLogos}>
              <LogoAmbiental/>
              <LogoFehidro/>
            </View>
            
        </LinearGradient>
      </ScrollView>
    </SafeAreaView>
  )
}


