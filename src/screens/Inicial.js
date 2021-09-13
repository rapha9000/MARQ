import React from 'react'
import { 
    StyleSheet,
    Text,
    View,
    SafeAreaView,
    SafeAreaViewBase, 
} from 'react-native'
import Botao from '../components/Botao'

export default props=>{
    return(
        <View style = {styles.container}>
                    <Text style={styles.Texto}>
                        Fila Virtual!
                    </Text>
                    <View style={styles.componentes}>
                    {/*<Botao titulo='Cadastro' />

                    {/* </View> */}
                    {/* <View style={{padding:10, */}
                        {/* width:30}}> */}
                        
                    {<Botao
                                titulo='Entrar'
                                onPress={() => {
                                    props.navigation.navigate(
                                        "Sintomas",
                                        props.avancarParams
                                    )
                                }}
                                />
                        
                    }
                                        {
                           <Botao
                                titulo='Cadastro'
                                onPress={() => {
                                    props.navigation.navigate(
                                        "Cadastro",
                                        props.avancarParams
                                    )
                                }}
                            />
                            }
                    
                    </View>
                </View>
    )
}






const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    componentes:{
        padding:10,
        justifyContent:'space-around',
    },
    Texto:{
        justifyContent:'center',
        fontSize:50
    }
})