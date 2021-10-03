import React, { useState } from 'react'
import Horizontal from '../styles/Horizontal'
import Vertical from '../styles/Vertical'
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
} from 'react-native'
import { Picker } from '@react-native-community/picker'
import CupertinoButtonInfo from '../components/CupertinoButtonInfo'
import BotaoVoltar from '../components/BotaoVoltar'
import EntrarInfo from '../components/EntrarInfo'
import usuarios from '../database/Usuarios'
import { AuthContext } from '../Providers/AuthContext'


export default props => {
  const [valCon, setValCon] = useState([''])
  const [numCon, setNumCon] = useState([''])
  const [plano, setPlano] = useState([''])
  const [convenio, setConvenio] = useState(['']);
  const { CPF } = React.useContext(AuthContext) // importando variavel global
  const [elmState, setElmState] = React.useState([]);
  const [selectedValue, setSelectedValue] = useState("");
  const [marq, setMarq] = useState(false);

  React.useEffect(() => {
    new usuarios().getByCpf(CPF).then((x) => {
      setElmState(x)
    });
  }, []); //colocar cpf
  function checaconv() {
    if (convenio == "outros" || marq==true) {

      return (<EntrarInfo info='Se a opção "Outros" foi selecionada, qual é o convênio?' place='Insira seu Convênio' onChangeText={convenio=> {setConvenio(convenio);setMarq(true)}}></EntrarInfo>)
    }
    if (convenio == "bradesco" || convenio =="amil" || convenio =="sul" || convenio =="porto" || convenio =="nenhum") {
      return (null)
    }

  }
  function nenhum(){
    if (convenio=="nenhum"){
      return(<Text style={{ textAlign: "center", fontSize: 20, color: "red" }}>Nenhum convênio selecionado por favor clique no botão Cadastrar</Text>)
    }
    else{
      return([ <EntrarInfo info='Plano *' place='Insira seu plano' onChangeText={plano => setPlano(plano)} ></EntrarInfo>,
      <EntrarInfo info='Número do plano *' place='Insira o número do plano' onChangeText={numCon => setNumCon(numCon)} ></EntrarInfo>,
      <EntrarInfo info='Valido até *' place='Insira a validade' onChangeText={valCon => setValCon(valCon)}></EntrarInfo>])
    }
  }


  console.log('teste:' + convenio)

  return (
    <SafeAreaView>
      <View style={Vertical}>


        <View style={styles.margem}>
          <Picker
            selectedValue={convenio == "bradesco" || convenio =="amil" || convenio =="sul" || convenio =="porto" || convenio =="nenhum" || convenio =="" ? convenio : "outros"}
            style={{ height: 50, width: 500 }}
            onValueChange={(itemValue) => {setConvenio(itemValue);setMarq(false)}}

          >
            <Picker.Item label="Selecione o convenio desejado" value="" />
            <Picker.Item label="Bradesco" value="bradesco" />
            <Picker.Item label="Amil" value="amil" />
            <Picker.Item label="SulAmérica" value="sul" />
            <Picker.Item label="Porto Seguro" value="porto" />
            <Picker.Item label="Outros" value="outros" />
            <Picker.Item label="Nenhum" value="nenhum" />
          </Picker>
        </View>
        <View style={{
          flex: 1,
          flexDirection: 'column',
          // alignItems:'center',
          padding: 10,
          marginTop: 80
        }}>
          {checaconv()}
          {nenhum()}
          {/* <EntrarInfo info='Se a opção "Outros" foi selecionada, qual é o convênio?' place='Insira seu Convênio' onChangeText={convenio=>setConvenio(convenio)}></EntrarInfo> */}
         
          
          <View style={styles.margem}>
            <CupertinoButtonInfo
              style={styles.cupertinoButtonInfo}
              title='Cadastrar'
              onPress={() => {
                var newData = { convenio: convenio, plano: plano, numCon: numCon, valCon: valCon }
                new usuarios().updateUser(elmState, newData)
                props.navigation.navigate(
                  "Inicial"
                )
              }
              }
            ></CupertinoButtonInfo>
          </View>
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
    marginBottom: 15,
    alignItems: 'center'
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
