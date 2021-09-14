import React, { Component,useState } from "react";
import { StyleSheet, View, Text, SafeAreaView, TextInput } from "react-native";
import MaterialCheckboxWithLabel4 from "../components/MaterialCheckboxWithLabel4";
import MaterialFixedLabelTextbox from "../components/MaterialFixedLabelTextbox";
import MaterialCheckboxWithLabel6 from "../components/MaterialCheckboxWithLabel6";
import MaterialButtonViolet2 from "../components/MaterialButtonViolet2";
import MaterialButtonViolet from "../components/MaterialButtonViolet";
import { AuthContext } from '../Providers/AuthContext'
import Horizontal from '../styles/Horizontal'
import Vertical from '../styles/Vertical'
import { CheckBox } from 'react-native-elements'
import usuarios from '../database/Usuarios'


function Untitled1(props) {
  const [senha, setSenha] = useState('')


    

    const [sintomas,setSintomas]=useState([''])
    const [especialidade,setEspecialidade]=useState(['']);
    const [checado, setChecado] = useState(false);
    const [checado2, setChecado2] = useState(false);
    const [checado3, setChecado3] = useState(false);
    const [checado4, setChecado4] = useState(false);
    const [checado5, setChecado5] = useState(false);
    const [checado6, setChecado6] = useState(false);
    const {CPF} = React.useContext(AuthContext) // importando variavel global
    const [elmState, setElmState] = React.useState([]);

    React.useEffect(() =>{
      new usuarios().getByCpf(CPF).then((x)=>{
          setElmState(x)
      });
      },[]); //colocar cpf

      console.log('teste:'+especialidade)

  return (

    <View style={styles.container}>
 <SafeAreaView>
      <View style={Vertical}>
        <Text style={styles.convenio5}>Especialidades *</Text>
        <View style={Horizontal}>
        <CheckBox
          //style={styles.materialCheckboxWithLabel1Row}
          title='Clinico Geral'
          checked={checado}
          onPress={() => { setChecado(!checado) 
            setEspecialidade('Clinico Geral')}}
        />
        <CheckBox
        //style={styles.materialCheckboxWithLabel4}
        title='Ortopedia'
        checked={checado5}
        onPress={() => { setChecado5(!checado5) 
            setEspecialidade('Ortopedia')}}
      />
        </View>
        <View style={Horizontal}>
        <CheckBox
          //style={styles.materialCheckboxWithLabel2}
          title='Otorrino'
          checked={checado2}
          onPress={() => { setChecado2(!checado2) 
            setEspecialidade('Otorrino')}}
        />
        <CheckBox
          //style={styles.materialCheckboxWithLabel3}
          title='Oftalmologia'
          checked={checado4}
          onPress={() => { setChecado4(!checado4) 
            setEspecialidade('Oftalmologia')}}
        />
        </View>
        <View style={Horizontal}>
      
        <CheckBox
        //style={styles.materialCheckboxWithLabel5}
        title='Outros'
        checked={checado6}
        onPress={() => { setChecado6(!checado6)
            setEspecialidade('Outros') }}
      />
      </View>
      <TextInput
          style={styles.textinputNumero}
          placeholder="Sintomas"
          Value={sintomas}
          onChangeText={(sintomas)=>setSintomas(sintomas)}
        //style={styles.placeholder2}
        ></TextInput>
        
      </View>
    </SafeAreaView>
 
   
      
      <MaterialButtonViolet style={styles.botaoVoltar} titulo='Continuar' onPress={() => {
          props.navigation.navigate(
            "Convenio"
          )
            var newData={especialidade: especialidade, sintomas:sintomas}
                        new usuarios().updateUser(elmState,newData)
        }}>
        </MaterialButtonViolet>
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  materialCheckboxWithLabel6: {
    height: 78,
    width: 347,
    marginTop: 205,
    marginLeft: 14
  },
  materialCheckboxWithLabel4: {
    height: 28,
    width: 105,
    marginLeft: 89,
    marginTop: 2
  },
  materialCheckboxWithLabel6Row: {
    height: 33,
    flexDirection: "row",
    marginTop: 146,
    marginLeft: 32,
    marginRight: 56
  },
  materialCheckboxWithLabel7: {
    height: 28,
    width: 105
  },
  materialCheckboxWithLabel8: {
    height: 28,
    width: 95,
    marginLeft: 88
  },
  materialCheckboxWithLabel7Row: {
    height: 28,
    flexDirection: "row",
    marginTop: 45,
    marginLeft: 26,
    marginRight: 61
  },
  materialCheckboxWithLabel9: {
    height: 22,
    width: 102
  },
  materialCheckboxWithLabel10: {
    height: 29,
    width: 95,
    marginLeft: 90
  },
  materialCheckboxWithLabel9Row: {
    height: 29,
    flexDirection: "row",
    marginTop: 46,
    marginLeft: 27,
    marginRight: 61
  },
  especialidades: {
    fontFamily: "roboto-regular",
    color: "#121212",
    lineHeight: 20,
    fontSize: 27,
    marginTop: -253,
    marginLeft: 15
  },
  materialFixedLabelTextbox: {
    height: 151,
    width: 343,
    borderWidth: 1,
    borderColor: "#000000",
    marginTop: 312,
    marginLeft: 15
  },
  sintomas: {
    fontFamily: "roboto-regular",
    color: "#121212",
    lineHeight: 20,
    fontSize: 27,
    marginTop: -203,
    marginLeft: 15
  },
  materialButtonViolet2: {
    height: 36,
    width: 100,
    marginTop: 64,
    marginLeft: 137
  },

  textinputNumero: {
    height: 100,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});

export default Untitled1;
