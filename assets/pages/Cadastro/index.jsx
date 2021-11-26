import React from 'react'
import {View} from "react-native"
import {globalStyle} from '../../style/globalStyle.js'
import {style} from './style.js'
import ConstructionScreen from "../../components/ConstructionScreen"
import ButtomGeneric from '../../components/ButtomGeneric.jsx'
import TextTitle from "../../components/TextTitle"
import {useNavigation} from "@react-navigation/native"


export default function Cadastro(){
  const navigation = useNavigation()
  return (
    <ConstructionScreen>
      <TextTitle title="Tela de Cadastro"/>

      <View style={style.containerButtons}>
        <ButtomGeneric buttonTitle="Cadastrar" onPress={() => navigation.navigate('TabBottomNavigation')}/>
      </View>
    </ConstructionScreen>
  )
}


