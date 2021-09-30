import React, { useState } from 'react'
import Horizontal from '../styles/Horizontal'
import Vertical from '../styles/Vertical'
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TextInput,
} from 'react-native'
import { CheckBox } from 'react-native-elements'
import Button from '../components/Botao'
import usuarios from '../database/Usuarios'
import MaterialButtonViolet from '../components/MaterialButtonViolet'
//import MaterialCheckboxWithLabel from '../components/MaterialCheckboxWithLabel'
import { AuthContext } from '../Providers/AuthContext'
import { ScrollView } from 'react-native-gesture-handler'


export default props => {
    
  const [checado, setChecado] = useState(false);
  const [checado2, setChecado2] = useState(false);
  const [checado3, setChecado3] = useState(false);
  const [checado4, setChecado4] = useState(false);
  const [checado5, setChecado5] = useState(false);
  const [checado6, setChecado6] = useState(false);
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

  console.log('teste:'+valCon)

  return (
    <SafeAreaView>
    <ScrollView>
      <View style={Vertical}>
        <Text style={styles.convenio5}>Convênio *</Text>
        <View style={Horizontal}>
        <CheckBox
          //style={styles.materialCheckboxWithLabel1Row}
          title='Bradesco'
          checked={checado}
          onPress={() => { setChecado(!checado) 
            setConvenio('Bradesco')}}
        />
        <CheckBox
        //style={styles.materialCheckboxWithLabel4}
        title='Porto Seguro'
        checked={checado5}
        onPress={() => { setChecado5(!checado5) 
            setConvenio('Porto Seguro')}}
      />
        </View>
        <View style={Horizontal}>
        <CheckBox
          //style={styles.materialCheckboxWithLabel2}
          title='Amil'
          checked={checado2}
          onPress={() => { setChecado2(!checado2) 
            setConvenio('Amil')}}
        />
        <CheckBox
          //style={styles.materialCheckboxWithLabel3}
          title='SulAmerica'
          checked={checado4}
          onPress={() => { setChecado4(!checado4) 
            setConvenio('SulAmerica')}}
        />
        </View>
        <View style={Horizontal}>
        <CheckBox
          //style={styles.materialCheckboxWithLabel2}
          title='Nenhum'
          checked={checado3}
          onPress={() => { setChecado3(!checado3) 
            setConvenio('Nenhum')}}
        />
        <CheckBox
        //style={styles.materialCheckboxWithLabel5}
        title='Outros'
        checked={checado6}
        onPress={() => { setChecado6(!checado6)
            setConvenio('Outros') }}
      />
      </View>
        <Text style={styles.plano}>Plano *</Text>
        <TextInput
          style={styles.textinputPlano}
          placeholder="Insira seu plano"
          Value={plano}
          onChangeText={(plano)=>setPlano(plano)}
        //style={styles.placeholder}
        ></TextInput>
        <Text style={styles.n6}>Nº *</Text>
        <TextInput
          style={styles.textinputNumero}
          placeholder="Insira o número do convênio"
          Value={numCon}
          onChangeText={(numCon)=>setNumCon(numCon)}
        //style={styles.placeholder2}
        ></TextInput>
        <Text style={styles.validoAte}>Valido até *</Text>
        <TextInput
          style={styles.textinputValidade}
          placeholder="Insira a validade do plano"
          Value={valCon}
          onChangeText={(valCon)=>setValCon(valCon)}
        //style={styles.placeholder3}
        ></TextInput>
         <MaterialButtonViolet style={styles.botaoVoltar} titulo='Continuar' onPress={() => {
          props.navigation.navigate(
            "Inicial"
          )
          var newData={convenio:convenio, plano: plano, numCon: numCon, valCon: valCon}
                        new usuarios().updateUser(elmState,newData)
        }}></MaterialButtonViolet>
      </View>
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  convenio5: {
    fontFamily: "helvetica-regular",
    color: "rgba(0,0,0,1)",
    fontSize: 23,
    marginTop: 122,
    marginLeft: 30
  },
  plano: {
    fontFamily: "helvetica-regular",
    color: "#121212",
    height: 28,
    width: 102,
    fontSize: 23,
    marginTop: 189,
    marginLeft: 30
  },
  n6: {
    fontFamily: "helvetica-regular",
    color: "#121212",
    fontSize: 23,
    marginTop: 58,
    marginLeft: 30
  },
  validoAte: {
    fontFamily: "helvetica-regular",
    color: "#121212",
    fontSize: 23,
    marginTop: 43,
    marginLeft: 30
  },
  textinputPlano: {
    height: 20,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  textinputNumero: {
    height: 20,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  textinputValidade: {
    height: 20,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  }

});
