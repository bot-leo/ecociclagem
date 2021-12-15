import React from 'react'
import {Text, View, ScrollView, SafeAreaView, Image} from "react-native"
import { LinearGradient } from "expo-linear-gradient"
import { StatusBar } from 'expo-status-bar'
import {useNavigation} from "@react-navigation/native"

import {style} from './style.js'

import TextTitle from "../../components/TextTitle"

import MascoteAgradecimento from '../../img/mascote-agradecimento.svg'
import LogoAmbiental from '../../img/logo-meio-ambiente-arvore.svg'
import LogoFehidro from '../../img/logo-fehidro-background.svg'
import LogoItapecirica from '../../img/logo-prefeitura-itapecirica.svg'

import LogoSemear from '../../img/logo-semear.svg'





export default function ThanksScreen(){
  const navigation = useNavigation()
  return (
    <SafeAreaView style={style.containerSafeView}>
      <StatusBar style="light" backgroundColor='#000' translucent={false} />
      <ScrollView style={style.contrainerScrollView} showsVerticalScrollIndicator={false} >
        <LinearGradient colors={['#42D259', '#28496D']}
        style={style.background}
          >
            
            <LogoItapecirica width={175} height={72}/>

            <View style={style.containerTextTitle}>
              <TextTitle title="Muito Obrigado!"/> 
            </View>
            
            <Text style={style.textInfo}>Depois de escolher o nome para o nosso mascote, está na hora de aguardar até o momento da oficialização do nome.{'\n'}
              Fiquem atentos para qualquer novidade! {'\n'}
              Até breve!
            </Text>


            

      
          <MascoteAgradecimento/>
          
          

          <View style={style.containerLogos}>
            <LogoAmbiental width={159} height={74} />
            <LogoFehidro width={104} height={71}/>
          </View>

          <View style={{marginTop:2, marginBottom:10}}>
            <Text style={{fontSize: 12, lineHeight: 35, color:'#FFF',textAlign:"center" }}>Desenvolvido por :</Text>
            <LogoSemear width={160} height={100}/>
          </View>
            
        </LinearGradient>
      </ScrollView>
    </SafeAreaView>
  )
}


