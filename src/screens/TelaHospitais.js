import React, { Component, useState } from "react";
import { StyleSheet, View, Text, SafeAreaView } from "react-native";
import { CheckBox } from 'react-native-elements'
// import HospitalInfo from '../components/HospitalInfo'
import BotaoVoltar from "../components/BotaoVoltar"
// import { AuthContext } from '../Providers/AuthContext'
import { EmailContext } from '../Providers/EmailContext'
import usuarios from '../database/Usuarios'

export default props => {

  

  const [checado, setChecado] = useState(false);
  const [hospital, setHospital] = useState();
  const {Email} = React.useContext(EmailContext) // importando variavel global
  const [elmState, setElmState] = React.useState([]);
  var Hospital='britinho'

  const listaHosp = [{
    nome: "Hospital Assunção",
    estrelas: 4,
    distancia: "2.5 km",
    tempo: "00:25",
  },
  {
    nome: "Hospital SBC",
    estrelas: 4,
    distancia: "3 km",
    tempo: "00:25",
  },
  {
    nome: "Hospital São Camilo",
    estrelas: 4,
    distancia: "5 km",
    tempo: "00:25",
  },
  {
    nome: "Hospital Virginia",
    estrelas: 5,
    distancia: "7 km",
    tempo: "00:25",
  },
  {
    nome: "Hospital Pericles",
    estrelas: 6,
    distancia: "8 km",
    tempo: "00:25",
  }
  ]

  React.useEffect(() =>{
    new usuarios().getByEmail(Email).then((x)=>{
        setElmState(x)
    });
    },[]); //colocar cpf

  // let hospitais = listaHosp.map(
  //   (elem,idx) => {
  //     return <HospitalInfo key={idx} nome={elem.nome} estrelas={elem.estrelas} distancia={elem.distancia} tempo={elem.tempo} onPress={()=>{ 
  //       // setHospital(elem.nome)
  //       // {hospital == elem.nome ? Hospital=elem.nome : console.log('deuruim')}
  //       Hospital=elem.nome
  //       props.navigation.navigate(
  //       "Assinatura"
  //     )
  //       var newData={hospital: Hospital}
  //                       new usuarios().updateUser(elmState,newData)
        
  //     }} ></HospitalInfo>
  //   }
  // )

  console.log('teste:'+hospital)

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View style={styles.margem}>
          <BotaoVoltar
            style={styles.botaoVoltar}
            title='Continuar'
            onPress={()=> props.navigation.navigate(
        "Assinatura"
      )}
          ></BotaoVoltar>
        </View>
        <View style={styles.margem}>
          <CheckBox
            title='Deseja utilizar o convênio?'
            checked={checado}
            onPress={() => { setChecado(!checado) }}
            style={styles.materialCheckboxWithLabel}
          ></CheckBox>
        </View>
        <View style={styles.margem}>
          <Text style={styles.loremIpsum}>Selecione o marcos desejado:</Text>
        </View>
        {/* {hospitais} */}

      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop:20
    //borderWidth: 5
  },

  materialCheckboxWithLabel: {
    height: 44,
    width: 348,
  },

  loremIpsum: {
    //fontFamily: "roboto-regular",
    color: "#121212",
    fontSize: 21,
  },
  margem: {
    marginBottom: 50
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

});