import React, { useState } from 'react'
import {
    StyleSheet,
    Text,
    View,
    SafeAreaView,
    TextInput,
    Picker,
} from 'react-native'
import Button from '../components/Botao'
import usuarios from '../../database/Usuarios'
import CupertinoButtonInfo from "../components/CupertinoButtonInfo"


export default props => {
    const [Nome, setNome] = useState()
    const [CPF, setCPF] = useState()
    const [Data, setData] = useState()
    const [Senha, setSenha] = useState()
    const [Email, setEmail] = useState()
    const [Celular, setCelular] = useState()
    const [selectedValue, setSelectedValue] = useState("Masculino")
    const [usuariosState, setUsuariosState] = React.useState([]);

    // React.useEffect(() =>{
    //     new usuarios().getAll().then( (x) =>{
    //       setUsuariosState(x);
    //     });
    //   }, []);


    //   let lista = usuariosState.map( (u,idx) =>{
    //     return(
    //         <>
    //             <Text key={idx}>{u.email}</Text>
    //             <Text key={idx}>{u.nome}</Text>

    //         </>
    //     )
    //   });


    return (
        <SafeAreaView>
            <View>
                <Text>
                    Nome:
                </Text>
                <TextInput style={styles.input}
                    placeholder={"Nome"}
                    Value={Nome}
                    onChangeText={Nome => setNome(Nome)}
                >
                </TextInput>
                <Text>
                    Gênero:
                </Text>
                <Picker
                    selectedValue={selectedValue}
                    style={{ height: 50, width: 150 }}
                    onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
                >
                    <Picker.Item label="Masculino" value="Masculino" />
                    <Picker.Item label="Feminino" value="Feminino" />
                    <Picker.Item label="Prefiro não Identificar" value="Sem" />
                </Picker>
                <Text>
                    CPF:
                </Text>
                <TextInput style={styles.input}
                    placeholder={"CPF"}
                    Value={CPF}
                    onChangeText={CPF => setCPF(CPF)}
                >
                </TextInput>
                <Text>
                    Data de Nascimento:
                </Text>
                <TextInput style={styles.input}
                    placeholder={"Data de Nascimento"}
                    Value={Data}
                    onChangeText={Data => setData(Data)}
                >
                </TextInput>
                <Text>
                    Senha:
                </Text>
                <TextInput style={styles.input}
                    placeholder={"Senha"}
                    Value={Senha}
                    onChangeText={Senha => setSenha(Senha)}
                >
                </TextInput>
                <Text>
                    E-mail:*
                </Text>
                <TextInput style={styles.input}
                    placeholder={"E-mail"}
                    Value={Email}
                    onChangeText={Email => setEmail(Email)}
                >
                </TextInput>
                <Text>
                    Celular:
                </Text>
                <TextInput style={styles.input}
                    placeholder={"Celular"}
                    Value={Celular}
                    onChangeText={Celular => setCelular(Celular)}
                >
                </TextInput>

            </View>
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    background: {
        flex: 1,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        color: '#FFF',
        fontSize: 70,
        marginBottom: 10,
    },
    subtitle: {
        color: '#FFF',
        fontSize: 20,
    },
    formContainer: {
        backgroundColor: 'rgba(0,0,0,0.8)',
        padding: 20,
        width: '90%',
    },
    input: {
        marginTop: 10,
        backgroundColor: '#FFF',
        borderWidth: 2,
    },
    button: {
        backgroundColor: '#080',
        marginTop: 10,
        padding: 10,
        alignItems: 'center',
    },
    buttonText: {
        color: '#FFF',
        fontSize: 20
    }
})