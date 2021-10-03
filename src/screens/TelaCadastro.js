import React, { Component, useState } from "react";
import { StyleSheet, TextInput, View,Text, TouchableOpacity, Dimensions } from "react-native";
import MaterialButtonViolet from "../components/MaterialButtonViolet";
import { Picker } from '@react-native-community/picker';
import {AuthContext} from '../Providers/AuthContext'
import usuarios, { addUsu } from "../database/Usuarios";
import CupertinoButtonInfo from "../components/CupertinoButtonInfo"
import { ScrollView } from "react-native-gesture-handler";

export default function Untitled(props) {
  const [selectedValue, setSelectedValue] = useState(["Masculino", "Feminino", "Prefiro não identificar"])
  const { CPF, setCPF } = React.useContext(AuthContext)
  const [nome, setNome] = useState('')
  const [Email, setEmail] = useState('')
  const [endereco, setEndereco] = useState('')
  const [nascimento, setNascimento] = useState('')
  const [senha, setSenha] = useState('')
  const [celular, setCelular] = useState('')
  const [elmState, setElmState] = React.useState(false);
  var sexo = 'britinho'

function testeCPF() {
    new usuarios().getByCpf(CPF).then((x) => {
        setElmState(x)
    });
}; //colocar cpf

console.log('teste:'+elmState)

  return (
    // <>
    <ScrollView>
    <View style={styles.container}>
    
     <TextInput
        //</View>placeholder={"Nome Completo"}
        placeholder="Insira seu nome completo"
        dataDetector="none"
        secureTextEntry={false}
        editable={true}
        style={styles.inputStyle2}
        Value={nome}
        onChangeText={nome => setNome(nome)}
        />

      
      <TextInput
        placeholder="Insira seu CPF"
        dataDetector="none"
        secureTextEntry={false}
        editable={true}
        style={styles.inputStyle1}
        Value={CPF}
       // keyboardType="phone-pad"
        onChangeText={(e) => setCPF(e)}
        onBlur={()=>{
          testeCPF()
        }}
          >
        </TextInput>
        {elmState ? <Text> CPF ja cadastrado</Text> : false }

     
      <TextInput
        placeholder="Insira seu e-mail"
        dataDetector="none"
        secureTextEntry={false}
        editable={true}
        style={styles.inputStyle1}
        Value={Email}
        onChangeText={Email => setEmail(Email)}
          >
        </TextInput>

    
      <TextInput
        placeholder="Insira sua senha"
        dataDetector="none"
        secureTextEntry={false}
        editable={true}
        style={styles.inputStyle1}
        Value={senha}
        onChangeText={senha => setSenha(senha)}
        secureTextEntry={true}
          >
        </TextInput>

     
      <TextInput
        placeholder="Insira seu endereço"
        dataDetector="none"
        secureTextEntry={false}
        editable={true}
        style={styles.inputStyle1}
          Value={endereco}
          onChangeText={endereco => setEndereco(endereco)}
            >
          </TextInput>

     
      <TextInput
        placeholder="Insira seu celular"
        dataDetector="none"
        secureTextEntry={false}
        editable={true}
        style={styles.inputStyle1}
        Value={celular}
        onChangeText={celular => setCelular(celular)}
        keyboardType="phone-pad"
          >
        </TextInput>

     
      <TextInput
        placeholder="Insira sua data de nascimento"
        dataDetector="none"
        secureTextEntry={false}
        editable={true}
        style={styles.inputStyle1}
        Value={nascimento}
        onChangeText={nascimento => setNascimento(nascimento)}
        
          >
        </TextInput>
      
      
      <Picker
        selectedValue={selectedValue}
        style={{
          //alignSelf: "center",
          justifyContent: "center",
          backgroundColor: "rgb(230,230,230)",
          borderRadius: 50,
          paddingLeft: 5,
          paddingRight: 12,
          width: 200,
          height: 32,
          marginTop: 20,
          marginBottom:20,
          marginLeft: 80,
        }}
        
        mode="dropdown"
        onValueChange={(selectedValue) => setSelectedValue(selectedValue)}
      > 
        

          <Picker.Item color = "black" label="- Selecione o sexo -" />
          <Picker.Item label="Masculino" value="Masculino" />
          <Picker.Item label="Feminino" value="Feminino" />
          <Picker.Item label="Prefiro não Identificar" value="Sem" />
        
      </Picker>
      <TouchableOpacity>
      <View style={styles.rect}><Text style={{marginTop:55, textAlign:"center"}}>Clique para inserir a foto do seu documento</Text></View>
        </TouchableOpacity>
      <View style={styles.botaoVoltarRow}>
        {/* <MaterialButtonViolet style={styles.botaoVoltar} titulo='Voltar' onPress={() => {
          props.navigation.navigate(
            "Inicial"
          )
        }}>
        </MaterialButtonViolet> */}

        <CupertinoButtonInfo style={styles.cupertinoButtonInfo} title='Continuar' onPress={() => {
          {selectedValue == "Masculino" ? sexo='Masculino' : console.log('deuruim')}
          {selectedValue == "Feminino" ? sexo="Feminino" : console.log('deuruim')}
          {selectedValue == "Sem" ? sexo="Sem" : console.log('deuruim')}
          addUsu({
            nome: nome,
            endereco: endereco,
            email: Email,
            cpf: CPF,
            convenio: '',
            nascimento:nascimento,
            senha:senha,
            celular:celular,
            plano: '',
            numCon: '',
            valCon:'',
            especialidade: '',
            sintomas: '',
            sexo:sexo,
            hospital:'',
            imagem:''
        })
          props.navigation.navigate(
            "Convenio"
          )
        }}>
        </CupertinoButtonInfo>

      </View>
    </View>
    </ScrollView>
// </>
  );
}

        

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //marginTop:40,
    backgroundColor: "#d8f6ff",
    //height: Dimensions.get("window").height,
    //paddingTop:10,
  },
  botaoVoltar: {
    height: 36,
    width: 100
  },
  // botaoContinuar: {
  //   height: 36,
  //   width: 100,
  //   marginLeft: 88
  // },
  botaoVoltarRow: {
    flexDirection: "row",
    marginTop: 10,
    //marginLeft: 50,
    //marginRight: 37,
    marginBottom:20,
    alignSelf:"center",
  },
  materialStackedLabelTextbox1: {
    height: 60,
    width: 375,
    marginTop: -726
  },
  materialStackedLabelTextbox2: {
    height: 60,
    width: 375
  },
  materialStackedLabelTextbox3: {
    height: 60,
    width: 375
  },
  materialStackedLabelTextbox4: {
    height: 60,
    width: 375
  },
  materialStackedLabelTextbox5: {
    height: 60,
    width: 375
  },
  materialStackedLabelTextbox6: {
    height: 60,
    width: 375
  },
  materialStackedLabelTextbox7: {
    height: 60,
    width: 375
  },
  materialChipBasic1: {
    width: 150,
    height: 32,
    marginTop: 28,
    marginLeft: 100
  },
  rect: {
    width: 301,
    height: 123,
    backgroundColor: "#E6E6E6",
    //marginTop: 11,
    //marginLeft: 37,
    alignSelf:"center"
  },
  cupertinoButtonGrey1: {
    height: 44,
    width: 100,
    marginTop: 16,
    marginLeft: 138
  },
  container1: {
    backgroundColor: "transparent"
  },
  stackedLabel1: {
    fontSize: 15,
    textAlign: "left",
    color: "#000",
    opacity: 0.6,
    paddingTop: 16,
    marginLeft: 10
  },
   inputStyle2: {
    color: "#000",
    fontSize: 16,
    alignSelf: "center",
    backgroundColor:"#fff",
    flex: 1,
    width:350,
    marginTop:40,
    padding:20,
    //lineHeight: 16,
    //paddingTop: 8,
    //paddingBottom: 8,
    margin:5,
    //borderBottomWidth:1,
    borderWidth: 1,
    borderColor: "gray",
    borderRadius:80,
    shadowColor: "rgba(0,0,0,1)",
    // shadowOffset: {
    //   width: 3,
    //   height: 3
    // },
    // elevation: 5,
    // shadowOpacity: 1,
    // shadowRadius: 0
  },
  inputStyle1: {
    color: "#000",
    fontSize: 16,
    alignSelf: "center",
    backgroundColor:"#fff",
    flex: 1,
    width:350,

    padding:20,
    //lineHeight: 16,
    //paddingTop: 8,
    //paddingBottom: 8,
    margin:5,
    //borderBottomWidth:1,
    borderWidth: 1,
    borderColor: "gray",
    borderRadius:80,
    shadowColor: "rgba(0,0,0,1)",
    // shadowOffset: {
    //   width: 3,
    //   height: 3
    // },
    // elevation: 5,
    // shadowOpacity: 1,
    // shadowRadius: 0
  },
  cupertinoButtonInfo: {
    height: 50,
    width: 250,
    backgroundColor: "rgba(80,227,194,1)",
    shadowColor: "rgba(155,155,155,1)",
    shadowOffset: {
        width: 3,
        height: 3
    },
    
},
  
 
});

