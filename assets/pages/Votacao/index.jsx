import React,{useEffect, useState} from 'react'
import {Text, 
        View, 
        ScrollView, 
        SafeAreaView, 
        ToastAndroid} from "react-native"
import { LinearGradient } from "expo-linear-gradient"
import { StatusBar } from 'expo-status-bar'
import {useNavigation} from "@react-navigation/native"

import api from '../../utils/api.js'

import {style} from './style.js'
import TextTitle from "../../components/TextTitle"
import Login from '../../components/LoginButton'
import ButtonOptionName from '../../components/ButtonOptionName.jsx'




export default function Votacao({route}){
  const navigation = useNavigation()
  const idUsuario = route?.params

  const [objetoVoto, setObjetoVoto] = useState({
    id:idUsuario,
    voto:''
  })

  useEffect(()=>{
    console.log(objetoVoto)
  },[objetoVoto])

  const showToast = () => {
    ToastAndroid.show('Voce ja votou!', ToastAndroid.SHORT)
  }

  function realizarVotacao(){
    api.post('/vote',objetoVoto)
    .then(() => {
      navigation.reset({
        index: 0,
        routes: [{name: "ThanksScreen"}]
        })
  
    }).catch(function (error) {
      console.error("Erro do Arthur>>>>>>>>>",error)
     showToast()
    })
  }

  return (
    <SafeAreaView style={style.containerSafeView}>
      <StatusBar style="light" backgroundColor='#000' translucent={false} />
      <ScrollView style={style.contrainerScrollView} showsVerticalScrollIndicator={false} >
        <LinearGradient colors={['#42D259', '#759DC8',]}
        style={style.background}
          >
            
            

            <View style={style.containerTextTitle}>
              <TextTitle title="Faça sua escolha!"/> 
            </View>
            
            <Text style={style.textInfo}>Olá! 
            Eu sou o novo mascote da Coleta Seletiva de {'\n'}Itapecerica e conto com a sua ajuda para escolher {'\n'} meu nome!
            VOTE!
            </Text>


      

            <View style={style.containerButtonsName}>
              <ButtonOptionName buttonTitle="Recicleiton" 
                                color={objetoVoto.voto === 'Recicleiton' 
                                  ? 'rgba(202, 48, 48, 0.4)' 
                                  : '#CA3030' } 
                                  onPress={(value) => {setObjetoVoto(prev => ({...prev, voto: value}))}} 
                                 />

              <ButtonOptionName buttonTitle="Leco-Treco" 
                                color={objetoVoto.voto === 'Leco-Treco' 
                                ? 'rgba(7, 7, 6, 0.4)' 
                                : '#CCC40F' } 
                                onPress={(value) => {setObjetoVoto(prev => ({...prev, voto: value}))}}/>

              <ButtonOptionName buttonTitle="Olavo" 
                                color={objetoVoto.voto === 'Olavo' ? 'rgba(92, 217, 72, 0.4)' : '#5CD948' } 
                                onPress={(value) => {setObjetoVoto(prev => ({...prev, voto: value}))}}/>

              <ButtonOptionName buttonTitle="Lixolino" 
                                color={objetoVoto.voto === 'Lixolino' ? 'rgba(15, 46, 113, 0.4)' : '#0F2E71' } 
                                onPress={(value) => {setObjetoVoto(prev => ({...prev, voto: value}))}}/>

              <ButtonOptionName buttonTitle="Recicláudio" 
                                color={objetoVoto.voto === 'Recicláudio' ? 'rgba(125, 81, 14, 0.4)' : '#7D510E' } 
                                onPress={(value) => {setObjetoVoto(prev => ({...prev, voto: value}))}}/>

            </View>

            <View style={{width:'90%', marginTop:39}}>
              <Login titulo="CONFIRMAR VOTO" onPress={() => realizarVotacao()}/>
            </View>

           
            

            <View style={style.containerLogos}>
              
            </View>


            <View style={{marginTop:2, marginBottom:3, width:"100%"}}>
              <Text style={{fontSize: 11, lineHeight: 35, color:'#FFF',textAlign:"center", fontFamily:'poppins-regular' }}>Desenvolvido por SEMEAR - Projetos Educacionais</Text>
            </View>
            
        </LinearGradient>
      </ScrollView>
    </SafeAreaView>
  )
}


