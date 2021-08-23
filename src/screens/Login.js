import React, { useState } from 'react'
import { 
    StyleSheet,
    Text,
    View,
    SafeAreaView,
    TextInput, 
} from 'react-native'
import Button from '../components/Botao'
import usuarios from '../../database/Usuarios'

  
export default props =>{
    const [Email,setEmail]= useState('MARQ')
    const [usuariosState, setUsuariosState] = React.useState([]);

    React.useEffect(() =>{
        new usuarios().getAll().then( (x) =>{
          setUsuariosState(x);
        });
      }, []);

      let lista = usuariosState.map( (u,idx) =>{
        return(
            <>
                <Text key={idx}>{u.email}</Text>
                <Text key={idx}>{u.nome}</Text>
            </>
        )
      });
    

    return (
        <SafeAreaView>
            <View>
                <Text>
                    E-mail:
                </Text>
                <TextInput
                    placeholder={"E-mail"}
                    Value={Email}
                    onChangeText={Email=>setEmail(Email)}
                    >
                </TextInput>
                <Text>
                    TESTE:
                </Text>
                {lista}

            </View>
        </SafeAreaView>
    )
}