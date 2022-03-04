import React from 'react'
import {Text, 
        View} from "react-native"
import { LinearGradient } from "expo-linear-gradient"
import { StatusBar } from 'expo-status-bar'
import { SafeAreaView } from 'react-native-safe-area-context'

import {style} from './style.js'
import {globalStyle, gradientColor} from '../../style/globalStyle'
import TitleRegular from '../../components/TitleRegular.jsx'
import { HeaderApp } from '../../components/HeaderApp'

import LogoPrefeitura from '../../img/logo-prefeitura-itapecerica22.svg'
import LogoFehidro from '../../img/logo-fehidro-background.svg'
import LogoSecretaria from '../../img/logo-secretaria-meio-ambiente-22.svg'

export default function Sobre(){
  return (
    <SafeAreaView style={globalStyle.safeContainer} >
    <StatusBar style="light" backgroundColor='#000' translucent={false} />
    <HeaderApp goBack/>
    <LinearGradient colors={gradientColor}
                    style={globalStyle.gradientContainer}>
            
          <View  style={style.containerTextosInicial}>
            <TitleRegular title={'SOBRE'}/>
            <Text style={style.textInitialViewSobre}>Esse aplicativo foi uma iniciativa e colaboração de:</Text>
          </View>
          

          <LogoPrefeitura width={350} height={110}/>


          <View style={style.containerLogos}>
            <LogoSecretaria width={195} height={100}/>
            <LogoFehidro width={110} height={80}/>
          </View>


          <View style={style.containerTextosFooter}>
            <Text style={style.textViewSobre}>Desenvolvido por:{'\n'}
            <Text style={style.textViewSobreBold}>Semear - Projetos Educacionais</Text>
            </Text>
          </View>
            
        </LinearGradient>
    </SafeAreaView>
  )
}


