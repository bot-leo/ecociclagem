import React from 'react'
import { Text,
         ScrollView, 
         View, 
         SafeAreaView} from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import { StatusBar } from 'expo-status-bar'

import {style} from './style.js'
import { DoubtButton } from '../../components/DoubtButton/index.jsx'
import { ListMaterias } from '../../components/ListMaterias/index.jsx'

import IconLixeira from '../../img/icone-lixeira.svg'
import IconGota from '../../img/icone-gota.svg'
import IconReciclagem from '../../img/icon-reciclagem.svg'
import MascoteRegular from '../../img/mascote-regular.svg'
import IconMascoteWhite from '../../img/icone-mascote-white.svg'
import { HeaderApp } from '../../components/HeaderApp/index.jsx'
import { globalStyle } from '../../style/globalStyle.js'


export default function BibliotecaMateriais(){

  return (
    <SafeAreaView style={globalStyle.safeContainer}>
     <StatusBar style='light' backgroundColor='#000' />
     <HeaderApp  />
     <ScrollView style={globalStyle.scrollContainer}>
      
        <LinearGradient
          style={style.containerGradient}
          colors={["#019444", "#006A39"]}
        >
          
          <Text style={style.titleMain}>BIBLIOTECA DE MATERIAIS</Text>
          <Text style={style.textRegular}>
            Aperte em um dos botões para abrir os detalhes e obter mais
            informações sobre o assunto!
          </Text>

          <View style={style.containerMain}>
            <View style={{ transform: [{ scaleX: -1 }] }}>
              <MascoteRegular width={150} height={150} />
            </View>

            <View style={style.containerButtons}>
        
              <View style={style.containerButtonsRow}>
                <DoubtButton
                  titleButton={"COMO DESCARTAR LIXO CORRETAMENTE"}
                  iconButton={<IconLixeira />}
                />
                <DoubtButton
                  titleButton={"COMO DESCARTAR LIXO CORRETAMENTE"}
                  iconButton={<IconMascoteWhite width={35} height={45}/>}
                />
              </View>

              <View style={style.containerButtonsRow}>
                <DoubtButton
                  titleButton={"A IMPORTÂNCIA DOS CORPOS HÍDRICOS DO MUNICÍPIO"}
                  iconButton={<IconGota width={25} height={32}/>}
                />
                <DoubtButton
                  titleButton={"PARTICIPANDO DO PROGRAMA DE COLETA SELETIVA"}
                  iconButton={<IconReciclagem />}
              />
              </View>
              
              
            </View>
          </View>

          <Text style={style.textRegular}>
            Abaixo temos outras informações importantíssimas sobre a separação de
            lixo, suas diferenças e o que podem se tornar. Aperte nos botões para
            abrir em detalhes:
          </Text>

          
          <View style={style.containerListAccordions}>
          
            <View style={{marginBottom:15}}>
              <ListMaterias nomeList={'MATERIAIS RECICLÁVEIS'}/>
            </View>
            <View style={{marginBottom:15}}>
            <ListMaterias nomeList={'MATERIAIS NÃO RECICLÁVEIS'}/>
            </View>
            <View style={{marginBottom:15}}>
            <ListMaterias nomeList={'MATERIAIS ESPECIAIS'}/>
            </View>
            
          </View>

        </LinearGradient>
     </ScrollView>
  </SafeAreaView>
  )
}


