import React, { useEffect, useState } from 'react'
import { StatusBar } from 'expo-status-bar'
import { Text, View, Alert, ScrollView, KeyboardAvoidingView, Platform } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import RegisterButtom from '../../components/RegisterInfo'
import DefButtom from '../../components/LoginButton'


import { style } from "./style"
import { globalStyle } from '../../style/globalStyle.js'
import { SafeAreaView } from 'react-native-safe-area-context'

import PerfilIMG from '../../img/icone-mascote-perfil.svg'


export default function Usuario() {

    const data = {
        name: stateName,
        cep: stateCep,
        email: stateEmail?.toLowerCase(),
        pass: statePass,
    }

    const [stateName, setStateName] = useState('')
    const [stateCep, setStateCep] = useState('')
    const [stateEmail, setStateEmail] = useState('')
    const [statePass, setStatePass] = useState('')
    const [stateConfirmPass, setStateConfirmPass] = useState('')

    const [passwordOdd, setPasswordOdd] = useState(false)

    const confirmPassword = () => {
        if (statePass == stateConfirmPass) {
            setPasswordOdd(true)
        }
        else {
            setPasswordOdd(false)
        }
    }

    return (
        <SafeAreaView style={globalStyle.safeContainer}>

            <ScrollView style={globalStyle.scrollContainer}>
                <StatusBar style="light" backgroundColor="#000" />

                <LinearGradient style={style.containerGradient} colors={['#019444', '#006A39']}>

                    {/* <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS == 'ios' ? 'padding' : 'height'}> */}

                        <View style={style.topContent}>
                            <Text style={{ color: '#fff', fontSize: 16, marginBottom: 10 }}>CONFIGURAÇÕES DE PERFIL</Text>
                            <View style={{ marginBottom: 10 }}>
                                <PerfilIMG />
                            </View>
                            <Text style={{ color: '#fff', textAlign: 'center' }}>Aqui é a tela onde você pode alterar seus dados cadastrados no início do acesso do Coleta Seletiva.</Text>
                        </View>

                        <View style={style.midContent}>
                            <RegisterButtom
                                inputTitle='Nome'
                                onChange={(value) => setStateName(value)} />

                            <RegisterButtom
                                inputTitle='E-mail'
                                onChange={(value) => setStateEmail(value)} />

                            <RegisterButtom
                                inputTitle='Senha'
                                onChange={(value) => setStatePass(value)}
                                passwordKeyboard={true}
                                pwdInput
                                onEnd={() => confirmPassword()} />

                            <RegisterButtom
                                inputTitle='Confirme a Senha'
                                onChange={(value) => setStateConfirmPass(value)}
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
                                        titulo='Meu CEP' />
                                </View>

                            </View>
                            <View style={{ width: '90%' }}>
                                <RegisterButtom
                                    inputTitle='CEP'
                                    onChange={(value) => setStateCep(value)}
                                    inputType='decimal-pad' />
                            </View>
                            <View style={{ width: '70%', marginBottom: 5 }}>
                                <DefButtom
                                    titulo='Salvar alterações'
                                />
                            </View>
                        </View>
                    {/* </KeyboardAvoidingView> */}
                </LinearGradient>
            </ScrollView>

        </SafeAreaView>
    );
}