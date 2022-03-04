import React from 'react'
import { TouchableOpacity, View } from 'react-native'
import { style } from './style'
import LogoColetaSeletiva from '../../img/logo-coleta-seletiva.svg'
import MenuToggle from '../../img/icone-menu-toggle.svg'
import IconeAjuda from '../../img/icone-ajuda.svg'
import IconeSeta from '../../img/icone-seta-esquerda.svg'
import { useNavigation } from '@react-navigation/native'


export function HeaderApp({goBack, onPressAjuda}){
  const navigation = useNavigation()

  const ButtonAjuda = ({onPressAjuda}) =>{
    return(
      <TouchableOpacity onPress={onPressAjuda}>
        <IconeAjuda />
      </TouchableOpacity>
    )
  }
  const ButtonToggle = () =>{
    return(
      <TouchableOpacity onPress={() => navigation.openDrawer()}>
        <MenuToggle/>
      </TouchableOpacity>
    )
  }

  const ButtonBack = ({onPressBack}) =>{
    return(
      <TouchableOpacity onPress={onPressBack}>
        <IconeSeta/>
      </TouchableOpacity>
    )
  }


  return (
    <View style={style.containerHeader}>
      {goBack ? (
        <View style={{ marginLeft: 24 }}>
          <ButtonBack onPressBack={()=> navigation.goBack()}/>
        </View>
      ) : (
        <></>
      )}
      <View style={{ position: "absolute", left: 165 }}>
        <LogoColetaSeletiva />
      </View>

      <View
        style={{
          flexDirection: "row",
          width: 60,
          alignItems: "center",
          justifyContent: "space-between",
          position: "absolute",
          left: 325,
        }}
      >
        <ButtonAjuda onPressAjuda={onPressAjuda} />
        <ButtonToggle  />
      </View>
    </View>
  );
}