import React from 'react'
import { View, Text, Button } from 'react-native'
import Botao from '../src/components/Botao'

export default props => (
    <View style={{flex: 1}}>
        <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
            {props.voltar
                ?   <Botao
                        titulo='Voltar'
                        onPress={() => {
                            props.navigation.goBack()
                        }}
                    />
                : false
            }
            {props.avancar
                ?   <Botao
                        titulo='Avançar'
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
        <View style={{flex: 1}}>
            {props.children}
        </View>
    </View>
)