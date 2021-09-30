import React, { Component, useState } from "react";
import { StyleSheet,SafeAreaView, View, Text, Dimensions } from "react-native";
import { CheckBox } from 'react-native-elements'
//import {  SafeAreaView } from "react-native-safe-area-context";
import EntrarInfo from '../components/EntrarInfo'
import CupertinoButtonInfo from "../components/CupertinoButtonInfo"
import BotaoVoltar from "../components/BotaoVoltar"
import { EmailContext } from "../Providers/EmailContext";
import { Picker } from "@react-native-community/picker";
import usuarios, { addUsu } from '../database/Usuarios'
import { ScrollView } from "react-native-gesture-handler";

export default props => {
    const {Email,setEmail} = React.useContext(EmailContext) // importando variavel global
    const [checado, setChecado] = useState(false);
    const [elmState, setElmState] = React.useState(false);
    const [senha,setSenha]= useState(false)
    const [senhaTeste,setSenhaTeste]= useState(false)
    const [Teste,setTeste]= useState(false)

    function testeEmail() {
        new usuarios().getByEmail(Email).then((x) => {
            setElmState(x)
        });
    }; //colocar cpf
    function testeSenha() {
        new usuarios().getBySenha(senha).then((x) => {
            setSenhaTeste(x)
        });
    }; //colocar cpf

    

    return (
        // <View style={{flex:1}}>
        <SafeAreaView style={{flex:1}}>
            <ScrollView>
                <View style={styles.container}>
                    <View style={styles.margem}>
                        <BotaoVoltar
                            style={styles.botaoVoltar}
                            title='Voltar'
                            onPress={()=>{
                                props.navigation.navigate(
                                    "Inicial"
                                )
                            }}
                        ></BotaoVoltar>
                    </View>
                    <EntrarInfo info='E-mail *' place='Insira seu e-mail' onChangeText={(e)=>setEmail(e)}
                            onBlur={()=>testeEmail()}
                    ></EntrarInfo>
                    {elmState ? <Text> Email cadastrado</Text> : false }
                    {/* <EntrarInfo info='E-mail *' place='Insira seu e-mail'></EntrarInfo> */}
                    {/* <EntrarInfo info='Senha *' place='Insira sua senha'></EntrarInfo> */}
                    <EntrarInfo info='Senha *' place='Insira sua senha' onChangeText={(e)=>setSenha(e)} 
                        onBlur={()=> testeSenha()}
                    ></EntrarInfo>     
                    {senhaTeste ? <Text> Senha cadastrado</Text> : false }

                    <View style={styles.margem}>
                        <CheckBox
                            title='Esqueceu a senha?'
                            checked={checado}
                            onPress={() => { setChecado(!checado)
                                props.navigation.navigate(
                                    "EsqueciSenha"
                                ) }}
                            style={styles.materialCheckboxWithLabel}
                        ></CheckBox>
                    </View>
                    <View style={styles.margem}>
                        <CupertinoButtonInfo
                            style={styles.cupertinoButtonInfo}
                            title='Continuar'
                            onPress={()=>{
                                // testaLogin()
                                props.navigation.navigate(
                                    'Sintomas'
                                )}
                            }
                        ></CupertinoButtonInfo>
                    </View>

                </View>
            </ScrollView>
        </SafeAreaView>
        // </View>
        
    );
}

let windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
        alignContent: "stretch",
        height: Dimensions.get("window").height,
        
       //borderWidth: 5
    },

    materialCheckboxWithLabel: {
        height: 44,
        width: 348,
    },

    loremIpsum: {
        //fontFamily: "roboto-regular",
        color: "#121212",
        fontSize: 21,
    },
    margem: {
        marginBottom: 15
    },
    cupertinoButtonInfo: {
        height: 61,
        width: 325,
        backgroundColor: "rgba(80,227,194,1)",
        shadowColor: "rgba(155,155,155,1)",
        shadowOffset: {
            width: 3,
            height: 3
        },
    },
    botaoVoltar: {
        height: 30,
        width: 162,
        backgroundColor: "#ADD8E6",
        shadowColor: "rgba(155,155,155,1)",
        shadowOffset: {
            width: 3,
            height: 3
        },
    },

});

/*
<View style={styles.margem}>
                    <BotaoVoltar
                        style={styles.botaoVoltar}
                        title='Voltar'
                    ></BotaoVoltar>
                </View>
                <EntrarInfo info='E-mail *' place='Insira seu e-mail'></EntrarInfo>
                <EntrarInfo info='Senha *' place='Insira sua senha'></EntrarInfo>
                <View style={styles.margem}>
                    <CheckBox
                        title='Esqueceu a senha?'
                        checked={checado}
                        onPress={() => { setChecado(!checado) }}
                        style={styles.materialCheckboxWithLabel}
                    ></CheckBox>
                </View>
                <View style={styles.margem}>
                    <CupertinoButtonInfo
                        style={styles.cupertinoButtonInfo}
                        title='Continuar'
                    ></CupertinoButtonInfo>
                </View>

                */