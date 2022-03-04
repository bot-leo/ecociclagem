import React from 'react'
import { StyleSheet, View, } from 'react-native'
import Logo1 from '../img/logo-prefeitura-itapecerica22.svg'
import Logo2 from '../img/logo-secretaria-meio-ambiente-22.svg'
import Logo3 from '../img/logo-fehidro-background.svg'


export default function Footer(props) {
  return (
    <View style={styles.container}>
      <Logo1 width={85} height={85} margin={10} />
      <Logo2 width={85} height={85} margin={10} />
      <Logo3 width={85} height={45} margin={10} />
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