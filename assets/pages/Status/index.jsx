import React from 'react'
import {View, Text, SafeAreaView} from "react-native"
import {style} from './style.js'
import {useNavigation} from "@react-navigation/native"

import MascoteHappy from '../../img/mascote-happy.svg'
import { LinearGradient } from 'expo-linear-gradient'
import { HeaderApp } from '../../components/HeaderApp/index.jsx'

export default function Status(){
  return (
    <SafeAreaView style={style.containerContentView}>
      <LinearGradient style={style.constainerGradient} colors={['#019444', '#006C39']}>
        <HeaderApp goBack/>
        <Text style={{fontFamily:"poppins-bold", color:"#EEEEEE", fontSize:16}}>COLETA SELETIVA</Text>
        <Text style={{fontFamily:"poppins-bold", color:"#EEEEEE", fontSize:25, width:200, textAlign:"center"}}>TELA EM CONSTRUÇÃO</Text>
        <MascoteHappy/>

        <Text style={{fontFamily:"poppins-bold", color:"#EEEEEE", fontSize:20, textAlign:"center", width:285}}>EM BREVE UM NOVO
          CONTEÚDO PARA VOCÊ!
          {'\n'}
          {'\n'}
          AGRADECEMOS SUA 
          PACIÊNCIA.
        </Text>
      </LinearGradient>
    </SafeAreaView>
  )
}


