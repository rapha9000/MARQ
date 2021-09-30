import React, { Component, useState } from "react";
import { StyleSheet, TextInput, View,Text } from "react-native";
import MaterialButtonViolet from "../components/MaterialButtonViolet";
import { Picker } from '@react-native-community/picker';
import {AuthContext} from '../Providers/AuthContext'
import usuarios, { addUsu } from "../database/Usuarios";
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
    <Text style={styles.stackedLabel1}>
          Nome:*
      </Text>
     <TextInput
        //</View>placeholder={"Nome Completo"}
        placeholder="Insira seu nome completo"
        dataDetector="none"
        secureTextEntry={false}
        editable={true}
        style={styles.inputStyle1}
        Value={nome}
        onChangeText={nome => setNome(nome)}
        />

      <Text style={styles.stackedLabel1}>
          CPF:*
      </Text>
      <TextInput
        placeholder="Insira seu CPF"
        dataDetector="none"
        secureTextEntry={false}
        editable={true}
        style={styles.inputStyle1}
        Value={CPF}
        onChangeText={(e) => setCPF(e)}
        onBlur={()=>{
          testeCPF()
        }}
          >
        </TextInput>
        {elmState ? <Text> CPF ja cadastrado</Text> : false }

      <Text style={styles.stackedLabel1}>
        E-mail:*
      </Text>
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

      <Text style={styles.stackedLabel1}>
        Senha:*
      </Text>
      <TextInput
        placeholder="Insira sua senha"
        dataDetector="none"
        secureTextEntry={false}
        editable={true}
        style={styles.inputStyle1}
        Value={senha}
        onChangeText={senha => setSenha(senha)}
          >
        </TextInput>

      <Text style={styles.stackedLabel1}>
        Endereço:*
      </Text>
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

      <Text style={styles.stackedLabel1}>
        Celular:*
      </Text>
      <TextInput
        placeholder="Insira seu celular"
        dataDetector="none"
        secureTextEntry={false}
        editable={true}
        style={styles.inputStyle1}
        Value={celular}
        onChangeText={celular => setCelular(celular)}
          >
        </TextInput>

      <Text style={styles.stackedLabel1}>
        Data de Nascimento:*
      </Text>
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
          //alignItems: "center",
          justifyContent: "center",
          backgroundColor: "rgb(230,230,230)",
          borderRadius: 50,
          paddingLeft: 5,
          paddingRight: 12,
          width: 200,
          height: 32,
          marginTop: 28,
          marginLeft: 80,
        }}
        mode="dropdown"
        onValueChange={(selectedValue) => setSelectedValue(selectedValue)}
      > 
        

          <Picker.Item label="- Selecione o sexo -" />
          <Picker.Item label="Masculino" value="Masculino" />
          <Picker.Item label="Feminino" value="Feminino" />
          <Picker.Item label="Prefiro não Identificar" value="Sem" />
        
      </Picker>

      <View style={styles.rect}></View>

      <View style={styles.botaoVoltarRow}>
        <MaterialButtonViolet style={styles.botaoVoltar} titulo='Voltar' onPress={() => {
          props.navigation.navigate(
            "Inicial"
          )
        }}>
        </MaterialButtonViolet>

        <MaterialButtonViolet style={styles.botaoVoltar} titulo='Continuar' onPress={() => {
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
        </MaterialButtonViolet>

      </View>
    </View>
    </ScrollView>
// </>
  );
}

        

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  botaoVoltar: {
    height: 36,
    width: 100
  },
  botaoContinuar: {
    height: 36,
    width: 100,
    marginLeft: 88
  },
  botaoVoltarRow: {
    flexDirection: "row",
    marginTop: 10,
    marginLeft: 50,
    marginRight: 37
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
    marginTop: 11,
    marginLeft: 37
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
  inputStyle1: {
    color: "#000",
    fontSize: 16,
    alignSelf: "stretch",
    flex: 1,
    //lineHeight: 16,
    //paddingTop: 8,
    //paddingBottom: 8,
    margin:10,
    borderWidth: 1,
    borderColor: "#000000",
    shadowColor: "rgba(0,0,0,1)",
    // shadowOffset: {
    //   width: 3,
    //   height: 3
    // },
    // elevation: 5,
    // shadowOpacity: 1,
    // shadowRadius: 0
  },
 
});

