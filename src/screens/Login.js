import React, { useState, useEffect } from 'react'
import {
    StyleSheet,
    Text,
    View,
    SafeAreaView,
    TextInput,
} from 'react-native'
import usuarios, { addUsu } from '../../database/Usuarios'
import Botao from '../components/Botao'
import { AuthContext } from '../Providers/AuthContext'


export default props => {
    const { CPF, setCPF } = React.useContext(AuthContext)
    const [nome, setNome] = useState('')
    const [Email, setEmail] = useState('')
    const [endereco, setEndereco] = useState('')
    const [elmState, setElmState] = React.useState(false);

    const [usuariosState, setUsuariosState] = React.useState([]);

    React.useEffect(() => {
        new usuarios().getAll().then((x) => {
            setUsuariosState(x);
        });
    }, []);
    function testeCPF() {
        new usuarios().getByCpf(CPF).then((x) => {
            setElmState(x)
        });
    }; //colocar cpf


    console.log('elmstate:' + elmState)
    console.log('CPF:' + CPF)


    let lista = usuariosState.map((u, idx) => {
        u = u.data()
        return (
            <View key={idx}>
                <Text>{u.cpf}</Text>
            </View>

        )
    });

    return (
        <SafeAreaView>
            <View>
                <Text>
                    E-mail:
                </Text>
                <TextInput
                    placeholder={"Nome Completo"}
                    Value={nome}
                    onChangeText={nome => setNome(nome)}
                >
                </TextInput>
                <TextInput
                    placeholder={"E-mail"}
                    Value={Email}
                    onChangeText={Email => setEmail(Email)}
                >
                </TextInput>
                <TextInput
                    placeholder={"Endereço"}
                    Value={endereco}
                    onChangeText={endereco => setEndereco(endereco)}
                >
                </TextInput>
                <TextInput
                    placeholder={"CPF"}
                    Value={CPF}
                    onChangeText={(e) => setCPF(e)}

                >
                </TextInput>
                {testeCPF()}

                {elmState ? <Text>CPF ja cadastrado</Text> : false}

                <Botao
                    titulo='confirmar'
                    onPress={() => {
                        addUsu({
                            nome: nome,
                            endereco: endereco,
                            email: Email,
                            cpf: CPF,
                            convenio: '',
                            fotoDocumento:'',
                        })
                        props.navigation.navigate(
                            'CadastroTeste',
                        )

                    }
                    }
                />



                <Text>{Email}</Text>
                <Text>
                    TESTE:
                </Text>
                {lista}

            </View>
        </SafeAreaView>
    )
}
