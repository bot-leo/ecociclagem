import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { Text, View, Alert, SafeAreaView, ScrollView } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import RegisterButtom from '../../components/RegisterInfo'
import DefButtom from '../../components/LoginButton'

import { style } from "./style"
import { globalStyle } from '../../style/globalStyle.js'

import PerfilIMG from '../../img/icone-mascote-perfil.svg'


export default function Usuario() {

    return (
        <SafeAreaView style={globalStyle.safeContainer}>
            <StatusBar style="light" backgroundColor="#000" />

            <LinearGradient style={style.containerGradient} colors={['#019444', '#006A39']}>

                <View style={style.topContent}>
                    <Text style={{ color: '#fff', fontSize: 16, marginBottom: 10 }}>CONFIGURAÇÕES DE PERFIL</Text>
                    <View style={{ marginBottom: 10 }}>
                        <PerfilIMG />
                    </View>
                    <Text style={{ color: '#fff', textAlign: 'center' }}>Aqui é a tela onde você pode alterar seus dados cadastrados no início do acesso do Coleta Seletiva.</Text>
                </View>

                <View style={style.midContent}>
                    <RegisterButtom
                        inputTitle='Nome' />

                    <RegisterButtom
                        inputTitle='E-mail' />

                    <RegisterButtom
                        inputTitle='Senha'
                        passwordKeyboard={true}
                        pwdInput />

                    <RegisterButtom
                        inputTitle='Confirme a Senha'
                        passwordKeyboard={true}
                        pwdInput />

                    <Text style={{ color: '#fff', textAlign: 'center' }}>Sobre sua localização, qual dessas opções você prefere utilizar como padrão de ponto de partida na tela do mapa?</Text>

                </View>

                <View style={style.botContent}>
                    <View style={style.doubleButtom}>
                        <View style={style.buttomStyle}>
                            <DefButtom
                                titulo='Minha Localização'
                            />
                        </View>
                        <View style={style.buttomStyle}>
                            <DefButtom
                                titulo='Meu CEP'
                            />
                        </View>

                    </View>
                    <View style={{ width: '90%' }}>
                        <RegisterButtom
                            inputTitle='CEP' />
                    </View>
                    <View style={{ width: '60%', marginBottom:15 }}>
                        <DefButtom
                            titulo='Salvar alterações'
                        />
                    </View>

                </View>



            </LinearGradient>
        </SafeAreaView>
    );
}