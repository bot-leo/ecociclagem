import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { Text } from 'react-native'
import {style} from './style.js'

import {View, SafeAreaView} from "react-native"
import { DoubtButton } from '../../components/DoubtButton/index.jsx'



import IconReciclagem from '../../img/icon-reciclagem.svg'
import IconColetaHome from '../../img/icon-coleta-home.svg'
import IconPontoColeta from '../../img/icone-ponto-de-entrega.svg'

import MascoteRegular from '../../img/mascote-regular.svg'

export default function Home(){

  const navigation = useNavigation()

  return (
    <SafeAreaView style={style.containerView}>
      <View style={style.containerContentMain}>
        <Text style={style.textInfo}>Olá pessoal! Eu sou o <Text style={{fontWeight:"700"}}>Recicleiton</Text>, vou ajudá-los com o uso do aplicativo e com possíveis dúvidas sobre o Programa de Coleta Seletiva Municipal.</Text>
        
        <View style={style.containerMascote}>
          <MascoteRegular width={235} height={310}/>
        </View>
      </View>
      <View style={style.containerBottomView}>
         <DoubtButton titleButton={'COLETA SELETIVA'} iconButton={<IconReciclagem width={35} height={35}/>} onPress={() => navigation.navigate('Status','TabBottomNavigation')}/>
         <DoubtButton titleButton={'ENCONTRE O PEV MAIS PRÓXIMO DE VOCÊ'} iconButton={<IconPontoColeta width={35} height={35}/>} onPress={() => navigation.navigate('SearchMap','TabBottomNavigation')}/>
         <DoubtButton titleButton={'REGISTRE-SE NO PROGRAMA DE COLETA PORTA A PORTA'} iconButton={<IconColetaHome width={35} height={35}/>} onPress={() => navigation.navigate('RecyclingLibrary','TabBottomNavigation')}/>
      </View>
    </SafeAreaView>
  )
}


