import React from 'react'
import {Text, View} from "react-native"
import { LinearGradient } from "expo-linear-gradient"
import {globalStyle} from '../../style/globalStyle.js'
import {style} from './style.js'
import ConstructionScreen from "../../components/ConstructionScreen"
import TextTitle from "../../components/TextTitle"
import {useNavigation} from "@react-navigation/native"

import MascoteOff from '../../img/sombra-mascote.svg'

export default function Votacao(){
  const navigation = useNavigation()
  return (
    <ConstructionScreen>
      <LinearGradient colors={['#42D259', '#28496D',]}
      style={style.background}
        >
          {/* <TextTitle title="Faca sua escolha"/>
          <Text style={{fontSize: 16,lineHeight: 34, color:'#FFF'}}>Olá! Eu sou o novo mascote da Coleta Seletiva de Itapecerica e conto com a sua ajuda para escolher meu nome! VOTE!</Text> */}


          <MascoteOff/>
          
      </LinearGradient>
    </ConstructionScreen>
  )
}


