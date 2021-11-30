import React from 'react'
import {View} from "react-native"
import {globalStyle} from '../../style/globalStyle.js'
import {style} from './style.js'
import ConstructionScreen from "../../components/ConstructionScreen"
import TextTitle from "../../components/TextTitle"
import ButtomGeneric from '../../components/ButtomGeneric.jsx'
import {useNavigation} from "@react-navigation/native"

export default function Login(){
  const navigation = useNavigation()

  return (
    <ConstructionScreen>
      <TextTitle title="Tela de Login"/>
      <View style={style.containerButtons}>
        <ButtomGeneric buttonTitle="Entrar" onPress={() => navigation.navigate('TabBottomNavigation')}/>
        <ButtomGeneric buttonTitle="Cadastrar" onPress={() => navigation.navigate('Cadastro')}/>
      </View>
    </ConstructionScreen>
  )
}


