import React, { useState } from 'react'
import Horizontal from '../styles/Horizontal'
import Vertical from '../styles/Vertical'
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Dimensions
} from 'react-native'
import { Picker } from '@react-native-community/picker'
import CupertinoButtonInfo from '../components/CupertinoButtonInfo'
import BotaoVoltar from '../components/BotaoVoltar'
import EntrarInfo from '../components/EntrarInfo'
import { AuthContext } from '../Providers/AuthContext'
import { ScrollView } from 'react-native-gesture-handler'


export default props => {

  const [selectedValue, setSelectedValue] = useState("bradesco");
  const [valCon,setValCon]=useState([''])
  const [numCon,setNumCon]=useState([''])
  const [plano,setPlano]=useState([''])
  const [convenio,setConvenio]=useState(['']);
  const {CPF} = React.useContext(AuthContext) // importando variavel global
  const [elmState, setElmState] = React.useState([]);
  

  React.useEffect(() =>{
    new usuarios().getByCpf(CPF).then((x)=>{
        setElmState(x)
    });
    },[]); //colocar cpf

    
  return (
    <SafeAreaView>
      <View style={Vertical}>
        <View style={styles.margem}>
          <BotaoVoltar
            style={styles.botaoVoltar}
            title='Voltar'
          ></BotaoVoltar>
        </View>

        <View style={styles.margem}>
          <Text style={styles.loremIpsum}>Convênio *</Text>
        </View>
        <Text>{CPF} </Text>

        <View style={styles.margem}>
          <Picker
            selectedValue={selectedValue}
            style={{ height: 50, width: 150 }}
            onValueChange={(itemValue, itemIndex) => setConvenio(itemValue)}
          >
            <Picker.Item label="Bradesco" value="bradesco" />
            <Picker.Item label="Porto Seguro" value="porto" />
            <Picker.Item label="Amil" value="amil" />
            <Picker.Item label="SulAmérica" value="sul" />
            <Picker.Item label="Porto Seguro" value="porto" />
            <Picker.Item label="Outros" value="outros" />
            <Picker.Item label="Nenhum" value="nenhum" />
          </Picker>
        </View>

        <EntrarInfo info='Se a opção "Outros" foi selecionada, qual é o convênio?' place='Insira seu Convênio' onChangeText={convenio=>setConvenio(convenio)}></EntrarInfo>
        <EntrarInfo info='Plano *' place='Insira seu plano' onChangeText={plano=>setPlano(plano)}></EntrarInfo>
        <EntrarInfo info='Número do plano *' place='Insira o número do plano' onChangeText={numCon=>setNumCon(numCon)}></EntrarInfo>
        <EntrarInfo info='Valido até *' place='Insira a validade' onChangeText={valCon=>setValCon(valCon)}></EntrarInfo>
        <View style={styles.margem}>
          <CupertinoButtonInfo
            style={styles.cupertinoButtonInfo}
            title='Cadastrar'
            onPress={ () => {var newData={convenio:convenio, plano: plano, numCon: numCon, valCon: valCon}
                          new usuarios().updateUser(elmState,newData)
                          props.navigation.navigate(
                              "Inicial"
                              )
                            }
                    } 
          ></CupertinoButtonInfo>
        </View>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({

  loremIpsum: {
    //fontFamily: "roboto-regular",
    color: "#121212",
    fontSize: 20,
  },
  margem: {
    marginBottom: 15
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
  botaoVoltar: {
    height: 30,
    width: 162,
    backgroundColor: "#ADD8E6",
    shadowColor: "rgba(155,155,155,1)",
    shadowOffset: {
      width: 3,
      height: 3
    },
  },
  horizontal: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

});
