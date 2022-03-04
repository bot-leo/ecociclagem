import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { SafeAreaView } from 'react-native-safe-area-context'
import { LinearGradient } from 'expo-linear-gradient'

import {HeaderApp} from '../../components/HeaderApp'
import {globalStyle, gradientColor} from '../../style/globalStyle.js'
import {style} from './style.js'
import TitleRegular from '../../components/TitleRegular'
import { ListMaterias } from '../../components/ListMaterias'
import { ScrollView, Text, View } from 'react-native'

import MascoteRegular from '../../img/mascote-regular.svg'
import AcordionVideos from './AcordionVideo'

export default function ColetaSeletivaVideos(){
  return (
    <SafeAreaView style={globalStyle.safeContainer}>
      <LinearGradient style={globalStyle.gradientContainer} colors={gradientColor}>
      <StatusBar style='light' backgroundColor='#000' />
      <HeaderApp/>
      <ScrollView style={[globalStyle.scrollContainer]}>
      
      <TitleRegular title={'COLETA SELETIVA'}/>


      <View style={{height:200, width:"80%", marginTop:12}}>

        <View style={style.containerDialogoTextMascote}>
            <Text style={style.textDialogoMascote}>
            Clique nos botões abaixo para assistir aos
             <Text style={style.textDialogoMascoteBold}> vídeos especiais</Text> que eu mesmo preparei
            para vocês!
            Neles vocês irão encontrar uma variedade
            de informações importantes.
            </Text>
        </View>

        <View style={{ transform: [{ scaleX: -1 }], position:"absolute", top:110, left:-25 }}>
            <MascoteRegular width={90} height={90} />
        </View>


      </View>






        <View style={{flex:1,
    width:'85%', 
    justifyContent:"space-around",
    alignItems:"center", 
    marginTop:15, 
    flexDirection:"column", 
    marginBottom:15,}}>
          <View style={style.marginBottom} >
            <AcordionVideos nomeAcordionVideo={'COMO DESCARTAR LIXO CORRETAMENTE - PARTE 1'}/>
          </View>
          <View style={style.marginBottom} >
            <AcordionVideos nomeAcordionVideo={'COMO DESCARTAR LIXO CORRETAMENTE - PARTE 2'}/>
          </View>
          <View style={style.marginBottom} >
            <AcordionVideos nomeAcordionVideo={'OS CORPOS HÍDRICOS DE GUARAPIRANGA'}/>
          </View>
          <View style={style.marginBottom} >
            <AcordionVideos nomeAcordionVideo={'PARTICIPANDO DO PROGRAMA DE COLETA SELETIVA'}/>
          </View>
          
        </View>
      
      </ScrollView>
    </LinearGradient>
    </SafeAreaView>
  )
}


