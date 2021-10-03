import React, { Component,useState } from "react";
import { StyleSheet, View, Text, SafeAreaView, TextInput, Keyboard, TouchableWithoutFeedback} from "react-native";
import MaterialCheckboxWithLabel4 from "../components/MaterialCheckboxWithLabel4";
import MaterialFixedLabelTextbox from "../components/MaterialFixedLabelTextbox";
import MaterialCheckboxWithLabel6 from "../components/MaterialCheckboxWithLabel6";
import MaterialButtonViolet2 from "../components/MaterialButtonViolet2";
import MaterialButtonViolet from "../components/MaterialButtonViolet";
import { AuthContext } from '../Providers/AuthContext'
import { EmailContext } from '../Providers/EmailContext'
import Horizontal from '../styles/Horizontal'
import Vertical from '../styles/Vertical'
import { CheckBox } from 'react-native-elements'
import usuarios from '../database/Usuarios'
import { ScrollView } from "react-native-gesture-handler";
import CupertinoButtonInfo from "../components/CupertinoButtonInfo"


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
    // const {CPF} = React.useContext(AuthContext) // importando variavel global
    const {Email} = React.useContext(EmailContext) // importando variavel global
    const [elmState, setElmState] = React.useState([]);

    React.useEffect(() =>{
      new usuarios().getByEmail(Email).then((x)=>{
          setElmState(x)
      });
      },[]); //colocar cpf

      console.log('teste:'+especialidade)

  return (

    
      <View style={styles.container} > 
      <ScrollView contentContainerStyle={{flexGrow:1}} keyboardShouldPersistTaps='handled'>
      
        <SafeAreaView>
        
        {/* <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}></TouchableWithoutFeedback> */}
          <View style={{}}>
            <Text style={{fontSize:20,paddingTop:10,paddingLeft:15,paddingBottom:10}}>Especialidades *</Text>
            <View style={{paddingLeft:-200}}>
              <CheckBox
                style={{}}
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
              <View style={{}}>
              <CheckBox
                style={{marginTop:-50}}
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
            <View style={{}}>
              <CheckBox
              //style={styles.materialCheckboxWithLabel5}
              title='Outros'
              checked={checado6}
              onPress={() => { setChecado6(!checado6)
                  setEspecialidade('Outros') }}
              />
            </View>
            <View style={{paddingTop:50}}>
              <Text style={{alignSelf:"center",fontSize:20}}>Descreva os seus sintomas abaixo:</Text>
           
            <TextInput
                style={styles.textinputNumero}
                multiline={true}
                placeholder="Sintomas"
                Value={sintomas}
                onChangeText={(sintomas)=>setSintomas(sintomas)}
              //style={styles.placeholder2}
            ></TextInput>
            
          </View>
          <CupertinoButtonInfo style={styles.cupertinoButtonInfo} title='Continuar' onPress={() => {
              props.navigation.navigate(
                "Hospitais"
              )
                var newData={especialidade: especialidade, sintomas:sintomas}
                            new usuarios().updateUser(elmState,newData)
            }}>
            </CupertinoButtonInfo>
            
          </View>
          
        </SafeAreaView>
        </ScrollView>
      </View>
    

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#d8f6ff",
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
    height: 200,
    margin: 12,
    width:300,
    borderWidth: 1,

    //alignContent:"center",
    //paddingTop:50,
    alignSelf:"center"
  },
  cupertinoButtonInfo: {
    height: 61,
    width: 325,
    alignSelf:"center",
    backgroundColor: "rgba(80,227,194,1)",
    shadowColor: "rgba(155,155,155,1)",
    shadowOffset: {
        width: 3,
        height: 3
    },
},
});

export default Untitled1;
