import React from 'react'
import {Text, 
        View, 
        ScrollView,  
        ToastAndroid,
        Platform} from "react-native"
import { LinearGradient } from "expo-linear-gradient"
import { StatusBar } from 'expo-status-bar'

import { SafeAreaView } from 'react-native-safe-area-context'
import {style} from './style.js'
import TitleRegular from '../../components/TitleRegular.jsx'
import { HeaderApp } from '../../components/HeaderApp'

import LogoPrefeitura from '../../img/logo-prefeitura-itapecerica-lg.svg'
import LogoFehidro from '../../img/logo-fehidro-background.svg'
import LogoSecretaria from '../../img/logo-prefeitura-itapecerica.svg'

export default function Sobre(){
  
  return (
    <SafeAreaView style={style.containerSafeView} >
      
      <ScrollView style={style.contrainerScrollView} showsVerticalScrollIndicator={false} >
        
      <StatusBar style="light" backgroundColor='#000' translucent={false} />
      <HeaderApp goBack/>
        <LinearGradient colors={['#019444', '#006C39',]}
        style={style.background}
          >
            
            <TitleRegular title={'Sobre'}/>
            

            <LogoPrefeitura width={350} height={350}/>


            <View style={{flexDirection:"row"}}>
              <LogoSecretaria width={140} height={70}/>
              <LogoFehidro width={70} height={95}/>
            </View>
            
        </LinearGradient>
      </ScrollView>
    </SafeAreaView>
  )
}


