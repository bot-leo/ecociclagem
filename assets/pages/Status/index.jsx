import React from 'react'
import {Text} from "react-native"
import {style} from './style.js'
import { SafeAreaView } from 'react-native-safe-area-context'

import MascoteHappy from '../../img/mascote-construindo.svg'
import { LinearGradient } from 'expo-linear-gradient'
import { HeaderApp } from '../../components/HeaderApp/index.jsx'
import { globalStyle, gradientColor } from '../../style/globalStyle.js'
import TitleRegular from '../../components/TitleRegular.jsx'

export default function Status(){
  return (
    <SafeAreaView style={globalStyle.safeContainer}>
    <HeaderApp goBack/>
    <LinearGradient style={globalStyle.gradientContainer} colors={gradientColor}>
      <TitleRegular title={"COLETA SELETIVA"}/>
      <Text style={style.textViewContrucao}>TELA EM CONSTRUÇÃO</Text>
      <MascoteHappy/>

      <Text style={style.textViewContrucao}>EM BREVE UM NOVO
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


