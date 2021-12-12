import React from 'react'
import {View} from "react-native"
import {globalStyle} from '../../style/globalStyle.js'
import {style} from './style.js'
import ConstructionScreen from "../../components/ConstructionScreen"
import ButtomGeneric from '../../components/ButtomGeneric.jsx'
import TextTitle from "../../components/TextTitle"
import {useNavigation} from "@react-navigation/native"

export default function Status(){
  const navigation = useNavigation()
  return (
    <ConstructionScreen>
      <TextTitle title="Tela de Status"/>

      <View style={style.containerButtons}>
        <ButtomGeneric buttonTitle="Projeto Ambiental" onPress={() => navigation.navigate('EnvironmentalProjectScreen')}/>
        <ButtomGeneric buttonTitle="ReciclaArtes" onPress={() => navigation.navigate('Votacao')}/>
      </View>
    </ConstructionScreen>
  )
}


