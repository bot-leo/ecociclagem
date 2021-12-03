import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View} from 'react-native';
import Navigation from "./assets/navigation"


import Login from "./assets/pages/Login"


export default function App() {
  return (
    // <View style={styles.container}>
    //   <Text>Ola App!!</Text>
    //   <StatusBar style="auto" />
    // </View>

    // <Login/>
    <Navigation/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
