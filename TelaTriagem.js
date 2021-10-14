import React, { useState } from 'react'
import {
    StyleSheet,
    Text,
    View,
    SafeAreaView,
    TextInput,
    Dimensions
} from 'react-native'
import usuarios from '../database/Usuarios'
import Botao from '../components/Botao'
import QRCode from 'react-native-qrcode-svg';
import CupertinoButtonInfo from '../components/CupertinoButtonInfo';

export default props => {

    const [qrValue, setQrValue] = useState('');
    const [elmState, setElmState] = useState('');

    function testeCPF() {
        new usuarios().getByCpf('284.728.334-32').then((x) => {
            setElmState(x.data().nome)
        });
    }; //colocar cpf


    return (
        <SafeAreaView>
            <View style={styles.container}>
                {testeCPF()}
                <View style={styles.containerQr}>
                    <QRCode
                        value={qrValue ? qrValue : 'NA'}
                        size={250}
                        color="black"
                        backgroundColor="white"
                        logoSize={30}
                        logoMargin={2}
                        logoBorderRadius={15}
                        logoBackgroundColor="yellow"
                    />
                </View>
                <View style={styles.margem}>
                    <Text style={styles.loremIpsum}>Dirija-se à sala 05 e mostre o QR Code quando chegar!</Text>
                </View>
                <View style={styles.margem}>
                    <CupertinoButtonInfo
                        style={styles.cupertinoButtonInfo}
                        onPress={() => setQrValue(elmState)}
                        title="Gerar QR Code"
                    />
                </View>
                
            </View>
        </SafeAreaView>
    )

}

const styles = StyleSheet.create({
    container: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-evenly",
        alignItems: "center",
        alignContent: "stretch",
        backgroundColor: "#d8f6ff",
        height: Dimensions.get("window").height,
        //borderWidth: 5
    },

    containerQr: {
        display: "flex",
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 5
    },

    margem: {
        marginBottom: 15
    },

    loremIpsum: {
        //fontFamily: "roboto-regular",
        color: "#121212",
        fontSize: 21,
        textAlign: "center"
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