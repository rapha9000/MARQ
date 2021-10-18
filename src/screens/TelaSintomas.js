import React, { Component,useState } from "react";
import { StyleSheet, View, Text, SafeAreaView, TextInput } from "react-native";
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

export default class TelaSintomas extends Component {
  constructor(props) {
    super(props);
    this.state = {
      senha:'',
      sintomas:'',
      especialidade:'',
      checado:  false,
      checado2: false,
      checado3: false,
      checado4: false,
      checado5: false,
      checado6: false,
      Email:this.context,
      elmState:'',
      Pagina:''
    };
    this.testaPreenchimento=this.testaPreenchimento.bind(this)
    this.useEffect=this.useEffect.bind(this)
    this.proximaPagina=this.proximaPagina.bind(this)
  }
  componentDidMount(){
    this.useEffect()
  }

  async testaPreenchimento() {
      if (this.state.especialidade=='' || this.state.sintomas==''){
        this.state.Pagina='Sintomas'
        // this.setState({Pagina:'Sintomas'})
      }else {
        this.state.Pagina='Hospitais'
        // this.setState({Pagina:'Hospitais'})
      }
  }
  async proximaPagina(){
    var newData={especialidade: this.state.especialidade, sintomas:this.state.sintomas}
                new usuarios().updateUser(this.state.elmState,newData)
   await this.props.navigation.navigate(
      this.state.Pagina
    )
  }
    
  useEffect(){
          new usuarios().getByEmail(this.context.Email).then((x)=>{
              this.setState({elmState:x})
          });
          }; //colocar cpf

  render(){
    return (
          <ScrollView contentContainerStyle={{flexGrow:1}} keyboardShouldPersistTaps='handled'>
            <View style={styles.container}> 
              <SafeAreaView>
                <View style={{}}>
                  <Text style={{fontSize:20,paddingTop:10,paddingLeft:15,paddingBottom:10}}>Especialidades *</Text>
                    <View style={{paddingLeft:-200}}>
                    <CheckBox
                      //style={styles.materialCheckboxWithLabel1Row}
                      title='Clinico Geral'
                      checked={this.state.checado}
                      onPress={() => { 
                        this.state.checado=!this.state.checado 
                        this.setState({especialidade:'Clinico Geral'})
                        console.log(this.state.checado);
                        console.log(this.state.especialidade);
                        }}
                    />
                    <CheckBox
                    //style={styles.materialCheckboxWithLabel4}
                    title='Ortopedia'
                    checked={this.state.checado5}
                    onPress={() => { 
                      this.state.checado5=!this.state.checado5  
                      this.setState({especialidade:'Ortopedia'})}}
                    />
                  </View>
                  <View style={{}}>
                    <CheckBox
                      //style={styles.materialCheckboxWithLabel2}
                      title='Otorrino'
                      checked={this.state.checado2}
                      onPress={() => { 
                      this.state.checado2=!this.state.checado2 
                      this.setState({especialidade:'Otorrino'})}}
                    />
                    <CheckBox
                      //style={styles.materialCheckboxWithLabel3}
                      title='Oftalmologia'
                      checked={this.state.checado4}
                      onPress={() => {  
                        this.state.checado4=!this.state.checado4  
                        this.setState({especialidade:'Oftalmologia'})}}
                    />
                  </View>
                  <View style={{}}>
                    <CheckBox
                    //style={styles.materialCheckboxWithLabel5}
                    title='Outros'
                    checked={this.state.checado6}
                    onPress={() => { 
                      this.state.checado6=!this.state.checado6 
                      this.setState({especialidade:'Outros'})}}
                    />
                  </View>
                  <View style={{paddingTop:50}}>
                      <Text style={{alignSelf:"center",fontSize:20}}>Descreva os seus sintomas abaixo:</Text>
                  <TextInput
                      style={styles.textinputNumero}
                      placeholder="Sintomas"
                      Value={this.state.sintomas}
                      onChangeText={(sintomas)=>this.setState({sintomas})}
                    //style={styles.placeholder2}
                  ></TextInput>
                  </View>
                <MaterialButtonViolet style={styles.botaoVoltar} titulo='Continuar' onPress={() => {
                    this.testaPreenchimento()
                    this.proximaPagina() }}>
                  </MaterialButtonViolet>
                </View>
              </SafeAreaView>
            </View>
          </ScrollView> 
      
        );
  }
}
TelaSintomas.contextType = EmailContext;


// function Untitled1(props) {
//   const [senha, setSenha] = useState('')
//     const [sintomas,setSintomas]=useState([''])
//     const [especialidade,setEspecialidade]=useState(['']);
//     const [checado, setChecado] = useState(false);
//     const [checado2, setChecado2] = useState(false);
//     const [checado3, setChecado3] = useState(false);
//     const [checado4, setChecado4] = useState(false);
//     const [checado5, setChecado5] = useState(false);
//     const [checado6, setChecado6] = useState(false);
//     // const {CPF} = React.useContext(AuthContext) // importando variavel global
//     const {Email} = React.useContext(EmailContext) // importando variavel global
//     const [elmState, setElmState] = React.useState([]);
//     const [Pagina, setPagina] = useState('Sintomas');


//     React.useEffect(() =>{
//       new usuarios().getByEmail(Email).then((x)=>{
//           setElmState(x)
//       });
//       },[]); //colocar cpf

//       console.log('teste:'+especialidade)

//     function testaPreenchimento() {
//         if (especialidade=='' || sintomas==''){
//             setPagina('Sintomas')
//         }else {
//           setPagina('Hospitais')
//         }
//     }
//     console.log('especialidade: '+especialidade)
//     console.log('sintomas: '+sintomas)
//     console.log('pagina: '+Pagina)
//   return (

//     <ScrollView>
//       <View style={styles.container}> 
//         <SafeAreaView>
//           <View style={Vertical}>
//             <Text style={styles.convenio5}>Especialidades *</Text>
//             <View style={Horizontal}>
//               <CheckBox
//                 //style={styles.materialCheckboxWithLabel1Row}
//                 title='Clinico Geral'
//                 checked={checado}
//                 onPress={() => { setChecado(!checado) 
//                   setEspecialidade('Clinico Geral')}}
//               />
//               <CheckBox
//               //style={styles.materialCheckboxWithLabel4}
//               title='Ortopedia'
//               checked={checado5}
//               onPress={() => { setChecado5(!checado5) 
//                   setEspecialidade('Ortopedia')}}
//               />
//             </View>
//             <View style={Horizontal}>
//               <CheckBox
//                 //style={styles.materialCheckboxWithLabel2}
//                 title='Otorrino'
//                 checked={checado2}
//                 onPress={() => { setChecado2(!checado2) 
//                   setEspecialidade('Otorrino')}}
//               />
//               <CheckBox
//                 //style={styles.materialCheckboxWithLabel3}
//                 title='Oftalmologia'
//                 checked={checado4}
//                 onPress={() => { setChecado4(!checado4) 
//                   setEspecialidade('Oftalmologia')}}
//               />
//             </View>
//             <View style={Horizontal}>
//               <CheckBox
//               //style={styles.materialCheckboxWithLabel5}
//               title='Outros'
//               checked={checado6}
//               onPress={() => { setChecado6(!checado6)
//                   setEspecialidade('Outros') }}
//               />
//             </View>
//             <TextInput
//                 style={styles.textinputNumero}
//                 placeholder="Sintomas"
//                 Value={sintomas}
//                 onChangeText={(sintomas)=>setSintomas(sintomas)}
//               //style={styles.placeholder2}
//             ></TextInput>
            
//           <MaterialButtonViolet style={styles.botaoVoltar} titulo='Continuar' onPress={() => {
//               testaPreenchimento()
//               props.navigation.navigate(
//                 Pagina
//               )
//                 var newData={especialidade: especialidade, sintomas:sintomas}
//                             new usuarios().updateUser(elmState,newData)
//             }}>
//             </MaterialButtonViolet>
//           </View>
//         </SafeAreaView>
//       </View>
//     </ScrollView> 

//   );
// }

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