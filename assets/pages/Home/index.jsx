import React from 'react'
import { useNavigation } from '@react-navigation/native'
import {globalStyle, height, width} from '../../style/globalStyle.js'
import {style} from './style.js'

import {View, SafeAreaView} from "react-native"
import { DoubtButton } from '../../components/DoubtButton/index.jsx'



import IconReciclagem from '../../img/icon-reciclagem.svg'
import IconColetaHome from '../../img/icon-coleta-home.svg'
import IconPontoColeta from '../../img/icone-ponto-de-entrega.svg'
import Mascote from '../../img/mascote-home.svg'
import { Text } from 'react-native'

export default function Home(){

  const navigation = useNavigation()

  return (
    <SafeAreaView style={style.containerView}>
      <View style={style.containerContentMain}>
        <Text style={style.textInfo}>Olá pessoal! Eu sou o Recicleiton, vou ajudá-los com o uso do aplicativo e com possíveis dúvidas sobre o Programa de Coleta Seletiva Municipal.</Text>
        
        <View style={style.containerMascote}>
          <Mascote width={285} height={372}/>
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


