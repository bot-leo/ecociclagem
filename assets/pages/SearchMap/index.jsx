import React,{useState, useRef, useEffect } from 'react'
import MapView from 'react-native-maps'
import { View, Text, TouchableOpacity, SafeAreaView} from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'

import api from '../../utils/api'

import {HeaderApp} from '../../components/HeaderApp/index'
import LoginButton from '../../components/LoginButton'

import {globalStyle} from '../../style/globalStyle.js'
import {style} from './style.js'
import TitleRegular from '../../components/TitleRegular'

import SetaEsquerda from '../../img/icone-seta-esquerda.svg'
import SetaDireita from '../../img/icone-seta-direita.svg'

export default function Login(){
  const [pontos, setPontos] = useState([])

  const mapRef = useRef(null)

  const [nomePev, setNomePev] = useState()
  const [nomeRuaPev, setRuaPev] = useState()

  const [currentIndex, setCurrentIdex] = useState(0)
  
 
  const [local, setLocal] = useState({
    latitude:-23.7341936,
    longitude:-46.9215211,
    latitudeDelta:0.0422,
    longitudeDelta:0.0121,
  })
  
 
  useEffect(()=>{
    getPontosPvs()
    
  },[])

  const fisrtrender = useRef(true)
  useEffect(()=>{
    if (fisrtrender.current){
      fisrtrender.current = false
      return;
    }
      
    setCamera(pontos[currentIndex]?.coordenadas[0],pontos[currentIndex]?.coordenadas[1])
    
  },[currentIndex])
  

  
  function getPontosPvs(){
    api.get('/pontos').then(function ({data:{pontosDeColeta :{listPevs}}}) {
      console.log('Listab de Pontos>>>>>>',listPevs);
      
      setPontos(listPevs)
      setNomePev(listPevs[0].nome)
      setRuaPev(listPevs[0].rua)
    })
    .catch(function (error) {
      console.log(error);
    })
  }

  
  function setCamera(lati,long){
    mapRef.current.animateCamera({center: {
      latitude: lati,
      longitude: long,
        },
        pitch: 9,
        heading: 1,
    })

    console.log(lati,long)
  }

  function nextPev(){
    move()
  }

  function previousPev(){
    move(false)
  }

  function move(advance = true){
  
    setCurrentIdex(prev => (prev + (advance ? 1 : -1) + pontos.length) % pontos.length)
    
    setNomePev(pontos[currentIndex]?.nome)
    setRuaPev(pontos[currentIndex]?.rua)

  }



  const ButtonArrow = ({iconArrowLeft, iconArrowRight, onPress}) => {
    return(
      <TouchableOpacity onPress={onPress}>
          {iconArrowLeft ? <SetaEsquerda/>: null}
          {iconArrowRight ? <SetaDireita/>: null}
      </TouchableOpacity>
    )
  }


  return (
    <SafeAreaView style={globalStyle.safeContainer}>
      <HeaderApp/>
      <LinearGradient style={style.containerGradient} colors={['#019444', '#006A39']}>
      
      <View style={style.containerTop}>
          <TitleRegular title={'MAPA DE COLETA'}/>
          <View style={{width:'50%'}}>
            <LoginButton titulo={'Encontre o PEV mais próximo'}/>
          </View>
          <Text style={style.textRegularSimple}>Ponto de Partida:</Text>
          <TouchableOpacity style={{backgroundColor:"#EEEEEE", width:286, height:36,borderRadius:20,marginTop:13, justifyContent:"center", alignItems:"center", borderWidth:3, borderColor:"#055C30"}}>
            <Text style={{fontFamily:"poppins-regular", fontSize:11, color:"#414143"}}>Prefeitura de Itapecerica da Serra</Text>
          </TouchableOpacity>
      </View>



     
      <MapView style={style.map}
              ref={mapRef}
              region={local}
              showsPointsOfInterest={false}
              showsBuildings={false}
              
              
      >

        {pontos.map( ponto =>{
          return(
            <MapView.Marker
              key={ponto.id}
              coordinate={{
                latitude:ponto.coordenadas[0],
                longitude:ponto.coordenadas[1],
              }}
              pinColor="#95FA4E"
            />
          )
        })}


        
      </MapView>
      
        <View style={style.containerCard}>

          <View style={style.headerContainerCard}>
            <ButtonArrow  iconArrowLeft  onPress={previousPev}/>
            <View style={style.containerSelectPev}>
              <Text style={[style.textBold,style.textFont12]}>Pev Selecionado</Text>
            </View>
            <ButtonArrow  iconArrowRight onPress={nextPev}/>
          </View>
          
          <Text style={[style.textBold,style.textFont12]}>{nomePev}</Text>    
              
          <View style={style.containerCardFooter}>
            <Text style={[style.textBold,style.textFont12]}>Endereco:</Text>    
            <Text style={[style.textRegularSimple,style.textFont12]}>{nomeRuaPev}</Text>
          </View>    

        </View>

     

      <View style={style.containerBottom}>
          <Text style={style.textRegularSimple}>Clique no botão abaixo para ver todas as ruas que participam
            da campanha <Text style={style.textBold}>Coleta Porta a Porta.</Text></Text>
          <View style={{width:'55  %', marginTop:10,}}>
            <LoginButton titulo={'Endereços Coleta Porta a Porta'}/>
          </View>
          
      </View>


    </LinearGradient>
    </SafeAreaView>
  )
}


