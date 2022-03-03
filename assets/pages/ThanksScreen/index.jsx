import React from 'react'
import {Text, View, ScrollView, SafeAreaView} from "react-native"
import { LinearGradient } from "expo-linear-gradient"
import { StatusBar } from 'expo-status-bar'

import {style} from './style.js'




1


export default function ThanksScreen(){
  return (
    <SafeAreaView style={style.containerSafeView}>
      <StatusBar style="light" backgroundColor='#000' translucent={false} />
      <ScrollView style={style.contrainerScrollView} showsVerticalScrollIndicator={false} >
        <LinearGradient colors={['#42D259', '#28496D']}
        style={style.background}>
            
           

            <View style={style.containerTextTitle}>
              
            </View>
            
            <Text style={style.textInfo}>Depois de escolher o nome para o nosso mascote, está na hora de aguardar até o momento da oficialização do nome.{'\n'}
              Fiquem atentos para qualquer novidade! {'\n'}
              Até breve!
            </Text>


            

      
         
          
          

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


