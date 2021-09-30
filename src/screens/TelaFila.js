import React, { Component, useState } from "react";
import { StyleSheet, View, Text, SafeAreaView, Dimensions } from "react-native";
import CupertinoButtonInfo from "../components/CupertinoButtonInfo"
import BotaoVoltar from "../components/BotaoVoltar"
import FilaInfo from "../components/FilaInfo";

export default props => {

    const listaUsuarios = [
        {
            id: 26734,
            ehApp: false,
            ehODeus: true, //usuário que está esperando na fila
            //criar uma variável para quando chegar a vez da pessoa, ela sumir da tela de fila
            //da pra criar também uma variável do tipo desistiuDaFila: true
            ChegouAVez: false

        },
        {
            id: 299234,
            ehApp: true,
            ehODeus: false,
            chegouAVez: false
        },
        {
            id: 237734,
            ehApp: false,
            ehODeus: false,
            ChegouAVez: false
        },
        {
            id: 23664,
            ehApp: true,
            ehODeus: false,
            ChegouAVez: false
        },
        {
            id: 234554,
            ehApp: true,
            ehODeus: false,
            ChegouAVez: false
        },
        {
            id: 234344,
            ehApp: false,
            ehODeus: false,
            ChegouAVez: true
        }
    ]

    // const listaUsuarios = [
    // {
    //     id: 26734,
    //     ehApp:  false
    // },
    // {
    //     id: 299234,
    //     ehApp:  true
    // },
    // {
    //     id: 237734,
    //     ehApp:  false
    // },
    // {
    //     id: 23664,
    //     ehApp:  true
    // },
    // {
    //     id: 234554,
    //     ehApp:  true
    // },
    // {
    //     id: 234344,
    //     ehApp:  false
    // }
    // ]

    // let usuarios = listaUsuarios.map(
    //     (elem, key) => {
    //         return <FilaInfo key={key} cor={elem.ehApp==true ? "blue" : "red" }></FilaInfo>
    //     }
    // )
    let marq = 0

    let usuarios = listaUsuarios.map(
        (elem, key) => {
            if (elem.ehODeus === true) {
                if (elem.ChegouAVez === false) {
                    return (
                        <FilaInfo key={key} cor="black" />
                    )
                }
                else {
                    return marq = 1
                }
            }
            else if (elem.ehApp === true) {
                if (elem.ChegouAVez === false) {
                    return <FilaInfo key={key} cor="blue" />
                }
                else {
                    return null
                }
            }
            else {
                if (elem.ChegouAVez === false) {
                    return <FilaInfo key={key} cor="red" />
                }
                else {
                    return null
                }
            }
        }
    )

    return (

        <SafeAreaView>
            <View style={styles.container}>
                <View style={styles.horizontal}>
                    {usuarios}
                </View>
                {marq == 1 ? 
                <View style={styles.margem}>
                    <CupertinoButtonInfo
                        style={styles.cupertinoButtonInfo}
                        title='Continuar'
                    ></CupertinoButtonInfo>
                </View> 
                : null}
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