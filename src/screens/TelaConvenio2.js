import React, { useState,Component } from 'react'
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
import { ScrollView } from "react-native-gesture-handler";
import { AuthContext } from '../Providers/AuthContext'





export default class TelaConvenio2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      valCon:'',
      numCon: '',
      plano:'',
      convenio: "",
      CPF: this.context,
      elmState: "",
      selectedValue: "",
      itemValue:" ",
      marq:false
    };
    this.proximaPagina = this.proximaPagina.bind(this)
    this.checaconv = this.checaconv.bind(this)
    this.nenhum = this.nenhum.bind(this)
  }
  componentDidMount() {
    new usuarios().getByCpf(this.context.CPF).then((x)=>{
      this.setState({elmState: x})
      console.log('emlstate: '+this.state.elmState.data().nome)
  })
}

  async proximaPagina (newData){
await new usuarios().updateUser(this.state.elmState,newData)
     this.props.navigation.navigate(
      "Inicial"
    );
    }; //colocar cpf

    checaconv() {
      if (this.state.convenio == "outros" || this.state.marq==true) {
  
        return (<EntrarInfo info='Se a opção "Outros" foi selecionada, qual é o convênio?' place='Insira seu Convênio' onChangeText={convenio=> {this.setState({convenio});this.setState({marq:true})}}></EntrarInfo>)
      }
      if (this.state.convenio == "bradesco" || this.state.convenio =="amil" || this.state.convenio =="sul" || this.state.convenio =="porto" || this.state.convenio =="nenhum") {
        return (null)
      }
  
    }

    nenhum(){
      if (this.state.convenio=="nenhum"){
        return(<Text style={{ textAlign: "center", fontSize: 20, color: "red" }}>Nenhum convênio selecionado por favor clique no botão Cadastrar</Text>)
      }
      else{
        return([ <EntrarInfo info='Plano *' place='Insira seu plano' onChangeText={plano => setPlano(plano)} ></EntrarInfo>,
        <EntrarInfo info='Número do plano *' place='Insira o número do plano' onChangeText={numCon => setNumCon(numCon)} ></EntrarInfo>,
        <EntrarInfo info='Valido até *' place='Insira a validade' onChangeText={valCon => setValCon(valCon)}></EntrarInfo>])
      }
    }
  
    render(){
      return (
        <ScrollView>
          <SafeAreaView>
              <View style={Vertical}>

                {/* <View style={styles.margem}>
                    <BotaoVoltar
                      style={styles.botaoVoltar}
                      title='Voltar'
                    ></BotaoVoltar>
                  </View> */}
                  
                  <View style={styles.margem}>
                    <Text style={styles.loremIpsum}>Convênio *</Text>
                  </View>
                  <Text>{this.context.CPF}</Text>
          
                  <View style={styles.margem}>
                    <Picker
                      selectedValue={this.state.convenio == "bradesco" || this.state.convenio =="amil" || this.state.convenio =="sul" || this.state.convenio =="porto" || this.state.convenio =="nenhum" || this.state.convenio =="" ? this.state.convenio : "outros"}
                      style={{ height: 50, width: 500 }}
                      onValueChange={(itemValue, itemIndex) => {this.setState({convenio: itemValue})
                        this.setState({marq:false})}
                      }
                    >
                      <Picker.Item label="Selecione o convenio desejado" value="" />
                      <Picker.Item label="Bradesco" value="bradesco" />
                      <Picker.Item label="Porto Seguro" value="porto" />
                      <Picker.Item label="Amil" value="amil" />
                      <Picker.Item label="SulAmérica" value="sul" />
                      <Picker.Item label="Porto Seguro" value="porto" />
                      <Picker.Item label="Outros" value="outros" />
                      <Picker.Item label="Nenhum" value="nenhum" />
                    </Picker>
                  </View>
                  <View style={{flex:1,
                                  flexDirection:'column',
                                  // alignItems:'center',
                                  padding:10,
                                  marginTop:80}}>
                                  {this.checaconv()}
                                  {this.nenhum()}

                    {/* <EntrarInfo info='Se a opção "Outros" foi selecionada, qual é o convênio?' place='Insira seu Convênio' onChangeText={convenio=>this.setState({convenio})}></EntrarInfo> */}
                   
                    {/* <EntrarInfo info='Plano *' place='Insira seu plano' onChangeText={plano=>this.setState({plano})} ></EntrarInfo>
                    <EntrarInfo info='Número do plano *' place='Insira o número do plano' onChangeText={numCon=>this.setState({numCon}), console.log('teste: '+this.context.CPF)} ></EntrarInfo>
                    <EntrarInfo info='Valido até *' place='Insira a validade' onChangeText={valCon=>this.setState({valCon})}></EntrarInfo> */}
                    
                    <View style={styles.margem}>
                      <CupertinoButtonInfo
                        style={styles.cupertinoButtonInfo}
                        title='Cadastrar'
                        onPress={ () => {var newData={convenio:this.state.convenio, plano: this.state.plano, numCon: this.state.numCon, valCon: this.state.valCon}
                                    this.proximaPagina(newData)
                                    console.log('newdata: '+newData)
                                    }
                                    }
                      ></CupertinoButtonInfo>
                    </View>
                  </View>
                </View>
              </SafeAreaView>
            </ScrollView>
          )
    };
}
TelaConvenio2.contextType = AuthContext;




// export default props => {
//   const [valCon,setValCon]=useState([''])
//   const [numCon,setNumCon]=useState([''])
//   const [plano,setPlano]=useState([''])
//   const [convenio,setConvenio]=useState(['']);
//   const {CPF} = React.useContext(AuthContext) // importando variavel global
//   const [elmState, setElmState] = React.useState([]);
//   const [selectedValue, setSelectedValue] = useState("");
  

//   React.useEffect(() =>{
//     new usuarios().getByCpf(CPF).then((x)=>{
//         setElmState(x)
//     });
//     },[]); //colocar cpf

// console.log('teste:'+convenio)

//   return (
//     <SafeAreaView>
//       <View style={Vertical}>
//         <View style={styles.margem}>
//           <BotaoVoltar
//             style={styles.botaoVoltar}
//             title='Voltar'
//           ></BotaoVoltar>
//         </View>
        
//         <View style={styles.margem}>
//           <Text style={styles.loremIpsum}>Convênio *</Text>
//         </View>
//         <Text>{CPF}</Text>

//         <View style={styles.margem}>
//           <Picker
//             selectedValue={selectedValue}
//             style={{ height: 50, width: 150 }}
//             onValueChange={(itemValue, itemIndex) => setConvenio(itemValue)}
//           >
//             <Picker.Item label="Selecione o convenio desejado" value="" />
//             <Picker.Item label="Bradesco" value="bradesco" />
//             <Picker.Item label="Porto Seguro" value="porto" />
//             <Picker.Item label="Amil" value="amil" />
//             <Picker.Item label="SulAmérica" value="sul" />
//             <Picker.Item label="Porto Seguro" value="porto" />
//             <Picker.Item label="Outros" value="outros" />
//             <Picker.Item label="Nenhum" value="nenhum" />
//           </Picker>
//         </View>
//         <View style={{flex:1,
//                         flexDirection:'column',
//                         // alignItems:'center',
//                         padding:10}}>
//           <EntrarInfo info='Se a opção "Outros" foi selecionada, qual é o convênio?' place='Insira seu Convênio' onChangeText={convenio=>setConvenio(convenio)}></EntrarInfo>
//           <EntrarInfo info='Plano *' place='Insira seu plano' onChangeText={plano=>setPlano(plano)} ></EntrarInfo>
//           <EntrarInfo info='Número do plano *' place='Insira o número do plano' onChangeText={numCon=>setNumCon(numCon)} ></EntrarInfo>
//           <EntrarInfo info='Valido até *' place='Insira a validade' onChangeText={valCon=>setValCon(valCon)}></EntrarInfo>
//           <View style={styles.margem}>
//             <CupertinoButtonInfo
//               style={styles.cupertinoButtonInfo}
//               title='Cadastrar'
//               onPress={ () => {var newData={convenio:convenio, plano: plano, numCon: numCon, valCon: valCon}
//                           new usuarios().updateUser(elmState,newData)
//                           props.navigation.navigate(
//               "Inicial"
//             )}
//                           }
//             ></CupertinoButtonInfo>
//           </View>
//         </View>
//       </View>
//     </SafeAreaView>
//   )
// }

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