import React from 'react'
import { SafeAreaView, 
         Text, 
         View } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'

import {style} from './style.js'
import { DoubtButton } from '../../components/DoubtButton/index.jsx'

import IconLixeira from '../../img/icone-lixeira.svg'

export default function BibliotecaMateriais(){
  return (
    <SafeAreaView style={style.containerSafe}>
      <LinearGradient style={style.containerGradient} colors={['#019444', '#006A39']}>
        <Text style={style.titleMain}>BIBLIOTECA DE MATERIAIS</Text>
        <Text style={style.textRegular}>Aperte em um dos botões para abrir os detalhes e obter mais informações sobre o assunto!</Text>


        <View style={{backgroundColor:"#ff5500", width:'100%'}}>


          <View style={{flexDirection:"row", width:220, backgroundColor:"#ff9900", flexWrap:"wrap", justifyContent:"space-between"}}>
            <DoubtButton  titleButton={'COMO DESCARTAR LIXO CORRETAMENTE'} iconButton={<IconLixeira/>}/>
            <DoubtButton  titleButton={'COMO DESCARTAR LIXO CORRETAMENTE'} iconButton={<IconLixeira/>}/>
            <DoubtButton  titleButton={'COMO DESCARTAR LIXO CORRETAMENTE'} iconButton={<IconLixeira/>}/>
            <DoubtButton  titleButton={'COMO DESCARTAR LIXO CORRETAMENTE'} iconButton={<IconLixeira/>}/>
           
          </View>
        </View>
      </LinearGradient>
    </SafeAreaView>
  )
}


