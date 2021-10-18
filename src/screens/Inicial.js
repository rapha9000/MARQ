import React from 'react'
import { 
    StyleSheet,
    Text,
    View,
    SafeAreaView,
    SafeAreaViewBase, 
    Image,
    StatusBar
} from 'react-native'
import Botao from '../components/Botao'
import MaterialButtonViolet from '../components/MaterialButtonViolet'
import CupertinoButtonInfo from "../components/CupertinoButtonInfo"

export default props=>{
    return(
        <View style = {styles.container}>
        <StatusBar
        barStyle="dark-content" />
        <Image style= {styles.imgPhoto}  source={require('../../assets/icon.png')} />
        <View style={styles.componentes}>
                    
                    {/*<Botao titulo='Cadastro' />

                    {/* </View> */}
                    {/* <View style={{padding:10, */}
                        {/* width:30}}> */}

                <MaterialButtonViolet style={styles.botaoVoltar} titulo='Entrar' onPress={() => {
                        props.navigation.navigate(
                            "Login"
                        )
                    }}>
                </MaterialButtonViolet>
                <View style={styles.espaco}>

                </View>

                <MaterialButtonViolet style={styles.botaoVoltar} titulo='Cadastro' onPress={() => {
                        props.navigation.navigate(
                            "Cadastro"
                        )
                    }}>
                </MaterialButtonViolet>
                    
                    </View>
                </View>
    )
}






const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor: "#d8f6ff"
    },
    componentes:{
        padding:10,
        justifyContent:'space-around',
    },
    Texto:{
        justifyContent:'center',
        fontSize:50
    },
    espaco:{
        padding:10
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
        textDecorationColor: "#0073ba"
       
       
    },
    imgPhoto: {
        borderRightWidth:1,
        borderRadius:1,
        paddingTop:200,
        paddingBottom:10,
        width: 300,
        height: 300,
        alignContent:"center",
        alignSelf: "center"
    },
})