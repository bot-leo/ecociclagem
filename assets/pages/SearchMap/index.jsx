import React,{useState, useRef } from 'react'
import MapView from 'react-native-maps'
import {ScrollView, View, Text} from 'react-native'

import {globalStyle, width} from '../../style/globalStyle.js'
import {style} from './style.js'
import ConstructionScreen from "../../components/ConstructionScreen"
import TextTitle from "../../components/TextTitle"

export default function Login(){
  // const [latitude, setLatitude] = useState(-23.7341936)
  // const [longitude, setLongitude] = useState(-46.9215211)

  const [local, setLocal] = useState({
    longitude:-23.7341936,
    latitude:-46.9215211,
    latitudeDelta:0.0222,
    longitudeDelta:0.0121,
  })
  
  const mapRef = useRef(null)

  const pontos = [
    {
      id:1,
      titulo:"Retirada reciclagem",
      materialDeRecebimento:"Plastico, Papel, Metal",
      latitude:-23.728857,
      longitude:-46.860945,
    },
    {
      id:2,
      titulo:"Retirada reciclagem",
      materialDeRecebimento:"Plastico, Papel, Metal, Vidro",
      latitude:-23.731522,
      longitude:-46.841012,
    },
    {
      id:3,
      titulo:"Retirada reciclagem",
      materialDeRecebimento:"Plastico, Papel",
      latitude:-23.748493,
      longitude:-46.868478,
    },
    {
      id:4,
      titulo:"Retirada reciclagem",
      materialDeRecebimento:"Plastico, Papel, Metal,",
      latitude:-23.724608,
      longitude:-46.844445,
    },
    {
      id:5,
      titulo:"Retirada reciclagem",
      materialDeRecebimento:"Metal",
      latitude:-23.700718,
      longitude:-46.880494,
    },
    {
      id:6,
      titulo:"Retirada reciclagem",
      materialDeRecebimento:"Plastico, Papel, Metal",
      latitude:-23.752264,
      longitude:-46.879464,
    },
    {
      id:7,
      titulo:"Retirada reciclagem",
      materialDeRecebimento:"Plastico, Papel, Metal, Vidro",
      latitude:-23.732779,
      longitude:-46.857148,
    },
  ]


  return (
    <View style={style.containerTeste}>
      <MapView style={style.map}
              ref={mapRef}
              initialRegion={{
                latitude:-23.7341936,
                longitude:-46.9215211,
                latitudeDelta:0.0422,
                longitudeDelta:0.0121,
              }}
              showsPointsOfInterest={false}
              showsBuildings={false}
      
      >

        {pontos.map( ponto =>{
          return(
            <MapView.Marker
            key={ponto.id}
          coordinate={{
            latitude:ponto.latitude,
            longitude:ponto.longitude,
          }}
          pinColor="#95FA4E"
        />
          )
        })}
        
      </MapView>

      
      <ScrollView style={style.placesContainer}
                  showsHorizontalScrollIndicator={false}
                  pagingEnabled
                  horizontal
                  onMomentumScrollEnd={e => {
                    const scrolled = e.nativeEvent.contentOffset.x

                    const place = (scrolled > 0)
                      ? Math.round(scrolled / width)
                      : 0 ;
                      
                      const {longitude,latitude} = pontos[place]

                      mapRef.current.animateToCoordinate({
                        latitude,
                        longitude
                      })
                     
                      
                      console.log( "@@@@@>>>>>>>>", Math.round(scrolled / width) )
                      
                  }}
                  >
      {
        pontos.map(ponto =>{
          return(
              <View style={style.place} key={ponto.id}>
                <Text style={style.textMaterial}>Materiais: {ponto.materialDeRecebimento}</Text>
              </View> 
            
          )
        })
      }
      </ScrollView>

    </View>
  )
}


