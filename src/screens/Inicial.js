import React from 'react'
import { 
    StyleSheet,
    Text,
    View,
    SafeAreaView, 
} from 'react-native'
import PassoStack from '../../navigation/PassoStack'
import Botao from '../components/Botao'

export default props=>{
    return(
            <SafeAreaView>
                <View style = {styles.container}>
                    <Text style={styles.Texto}>
                        Fila Virtual!
                    </Text>
                    <View style={styles.componentes}>
                    <Botao titulo='Cadastro' />
                    {/* </View> */}
                    {/* <View style={{padding:10, */}
                        {/* width:30}}> */}
                        
                    {props.avancar
                        ?   <Botao
                                titulo='Entrar'
                                onPress={() => {
                                    props.navigation.navigate(
                                        props.avancar,
                                        props.avancarParams
                                    )
                                }}
                            />
                        : false
                    }
                    </View>
                </View>
            </SafeAreaView>  
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
        fontSize:50
    }
})