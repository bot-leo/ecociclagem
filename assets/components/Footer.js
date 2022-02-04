import React from 'react'
import { StyleSheet, text, View, } from 'react-native'
import Logo1 from '../imgs/PrefeituraLogoSVG.svg'
import Logo2 from '../imgs/PMALogoSVG.svg'
import Logo3 from '../imgs/FehindroLogoSVG.svg'


export default function Componente(props) {
  return (
    <View style={styles.container}>
      <Logo1 width={85} height={85} margin={10} />
      <Logo2 width={85} height={85} margin={10} />
      <Logo3 width={85} height={85} margin={10} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#035129',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    height: 50,
    flexDirection: 'row'
  },
});