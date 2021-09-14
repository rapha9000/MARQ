import React, { useState,useEffect, useContext } from 'react'
import { 
    StyleSheet,
    Text,
    View,
    SafeAreaView,
    TextInput, 
} from 'react-native'
// import usuarios,{addUsu,getByCpf,updateUser} from '../../database/Usuarios'
import Botao from '../components/Botao'
import { AuthContext } from '../Providers/AuthContext'

  
export default props =>{
    const {CPF} = React.useContext(AuthContext) // importando variavel global
    const [convenio,setConvenio]= useState('')
    const [elmState, setElmState] = React.useState([]);

    React.useEffect(() =>{
        new usuarios().getByCpf(CPF).then((x)=>{
            setElmState(x)
        });
        },[]); //colocar cpf

    
        console.log('elemento:'+elmState)
    return (
        <SafeAreaView>
            <View>
                <Text>
                    E-mail:
                </Text>
                <TextInput
                    placeholder={"Convênio"}
                    Value={convenio}
                    onChangeText={convenio=>setConvenio(convenio)}
                    >
                </TextInput>

                <Botao
                    titulo='confirmar'
                    onPress={()=>{
                        var newData={convenio:convenio}
                        new usuarios().updateUser(elmState,newData)
                        console.log("teste:"+elmState)
                    }
                }
                />
                <Text>
                    TESTE:
                </Text>
            </View>
        </SafeAreaView>
    )
}