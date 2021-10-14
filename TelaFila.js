import React, { Component, useState } from "react";
import { StyleSheet, View, Text, SafeAreaView, Dimensions, Button } from "react-native";
import CupertinoButtonInfo from "../components/CupertinoButtonInfo"
import BotaoVoltar from "../components/BotaoVoltar"
import FilaInfo from "../components/FilaInfo";

export default props => {

    const [fila, setFila] = useState([{
        ehApp: false
    }, {
        ehApp: false
    }, {
        ehApp: false
        //aqui será vazio e a partir do setFila ele vai pegar o CPF e as informações
    },
    {
        ehApp: true
    },
    {
        ehApp: true
    },
    {
        ehApp: true
    },
    {
        ehApp: false
    },]);





    if (fila.length == 1) {
        props.navigation.navigate('Triagem');

    }
    // anima as pessoas
    else {
        setTimeout(
            () => {
                let x = [...fila];
                //os 3 pontos quer dizer que ele vai criar um vetor novo, clonar pra nao dar erro de render
                x.pop();
                //setFila(getFilaByCPF(cpf)) 
                setFila(x);
            }, 1000
        );
    }


    let marq = 0

    let usuarios = fila.map(
        (elem, key) => {
            if (key == 0) {
                return <View key={key} style={styles.containerPessoa}><FilaInfo cor="black" /><Text>{fila.length - key}</Text></View>
            }
            if (elem.ehApp) {
                return <View key={key} style={styles.containerPessoa}><FilaInfo cor="blue" /><Text>{fila.length - key}</Text></View>
            } else {
                return <View key={key} style={styles.containerPessoa}><FilaInfo cor="red" /><Text>{fila.length - key}</Text></View>
            }
        }
    )

    return (

        <SafeAreaView>
            <View style={styles.container}>
                <View style={styles.horizontal}>
                    {usuarios}
                </View>
                <View style={styles.margem}>
                </View>


            </View>
        </SafeAreaView>

    );
}


const styles = StyleSheet.create({

    horizontal: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",

        flexWrap: "wrap",
        //borderWidth: 5,
        //borderColor: 'red'
    },

    loremIpsum: {
        //fontFamily: "roboto-regular",
        color: "#121212",
        fontSize: 21,
    },

    margem: {
        marginBottom: 15
    },

    container: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        alignContent: "stretch",
        height: Dimensions.get("window").height,
        //borderWidth: 5
    },
    containerPessoa: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        alignContent: "stretch",
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

})