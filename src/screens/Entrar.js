import React, { Component, useState } from "react";
import { StyleSheet,SafeAreaView, View, Text, Dimensions,Image } from "react-native";
import { CheckBox } from 'react-native-elements'
//import {  SafeAreaView } from "react-native-safe-area-context";
import EntrarInfo from '../components/EntrarInfo'
import CupertinoButtonInfo from "../components/CupertinoButtonInfo"
import BotaoVoltar from "../components/BotaoVoltar"
import { EmailContext } from "../Providers/EmailContext";
import { Picker } from "@react-native-community/picker";
import usuarios, { addUsu } from '../database/Usuarios'
import { ScrollView } from "react-native-gesture-handler";




export default class Entrar extends Component {
    constructor(props) {
        super(props);
        this.state = {
          email:'',
          Email:this.context,
          EmailCadastrado:false,
          checado: '',
          elmState:'',
          senha: "",
          senhaBD: '',
          senhaCadastrada: false,
          Teste: ""
        };
        this.validaEmail=this.validaEMail.bind(this)
        this.validaSenha=this.validaSenha.bind(this)
        this.validaLogin=this.validaLogin.bind(this)
      }
      async validaEMail() {
       await new usuarios().getByEmail(this.context.Email).then((x) => {
           if (x!==null){
               this.setState({ EmailCadastrado: true });
           }
        });
        console.log('EmailCadastrado: '+this.state.EmailCadastrado)
      }

      async validaSenha() {
        if (this.state.EmailCadastrado){
            await new usuarios().getByEmail(this.context.Email).then((x) => {
              this.setState({ senhaBD: x.data().senha });
            });
        }
          if (this.state.senhaBD==this.state.senha){
              this.setState({senhaCadastrada: true})
          }else{
            this.setState({senhaCadastrada: false})
          }
          console.log('senhaBD: '+this.state.senhaBD)
      }

      validaLogin(){
          if (this.state.EmailCadastrado==true && this.state.senhaCadastrada==true){
            this.props.navigation.navigate('Sintomas')
          }
      }

    render(){
        return(
            <ScrollView>
         <View style={{flex:1}}>
            <SafeAreaView style={{flex:1}}>
                <View style={styles.container}>
                    {/* <View style={styles.margem}>
                        <BotaoVoltar
                            style={styles.botaoVoltar}
                            title='Voltar'
                            onPress={()=>{
                                this.props.navigation.navigate(
                                    "Inicial"
                                )
                            }}
                        ></BotaoVoltar>
                    </View> */}
                    <Image style= {styles.imgPhoto}  source={require('../../assets/marq.png')} />
                    <View style={{marginTop:200}}>
                    <EntrarInfo info='E-mail *' place='Insira seu e-mail' onChangeText={(e)=>{this.setState({email:e})
                        this.context.setEmail(e);}}
                            onBlur={()=>{
                                this.validaEmail()
                        {this.state.EmailCadastrado ? <Text> Email cadastrado</Text> : null }
                                }}
                    ></EntrarInfo>
                    </View>
                    {/* <EntrarInfo info='E-mail *' place='Insira seu e-mail'></EntrarInfo> */}
                    {/* <EntrarInfo info='Senha *' place='Insira sua senha'></EntrarInfo> */}
                    <View style={{marginTop:-20}}>
                    <EntrarInfo info='Senha *' place='Insira sua senha' onChangeText={(e)=>this.setState({senha:e})} 
                        onBlur={()=>{ this.validaSenha()
                            {this.state.senhaCadastrada ? <Text> Senha cadastrado</Text> :null }}}
                    ></EntrarInfo>     
                    </View>

                    <View style={styles.margem}>
                        <CheckBox
                            title='Esqueceu a senha?'
                            checked={this.state.checado}
                            onPress={() => { setChecado(!checado)
                                this.props.navigation.navigate(
                                    "EsqueciSenha"
                                ) }}
                            style={styles.materialCheckboxWithLabel}
                        ></CheckBox>
                    </View>
                    <View style={styles.margem}>
                        <CupertinoButtonInfo
                            style={styles.cupertinoButtonInfo}
                            title='Continuar'
                            onPress={()=>{
                                this.validaLogin()}
                            }
                        ></CupertinoButtonInfo>
                    </View>
                </View>
            </SafeAreaView>
        </View>
            </ScrollView>
        )

    }

}
Entrar.contextType = EmailContext;


// export default props => {
//     const {Email,setEmail} = React.useContext(EmailContext) // importando variavel global
//     const [checado, setChecado] = useState(false);
//     const [elmState, setElmState] = React.useState(false);
//     const [senha,setSenha]= useState(false)
//     const [senhaBD,setSenhaBD]= useState(false)
//     const [senhaTeste,setSenhaTeste]= useState(false)
//     const [Teste,setTeste]= useState('Login')

//     function testeEmail() {
//         new usuarios().getByEmail(Email).then((x) => {
//             if (x !==null){
//                 setElmState(x.data().email)
//             }
//         });
//     }; //colocar cpf
//     function testeSenha() {
//         new usuarios().getBySenha(senha).then((x) => {
//             if (x !== null){
//                 setSenhaTeste(x)
//                 setSenhaBD(x.data().senha)
//             }
//         });
//     }; //colocar cpf

//     function testaLogin(){
//         if (elmState===Email && senha===senhaBD){
//             setTeste('Sintomas')
//         }else{
//             setTeste('Login')
//         }
// }    

// console.log('email: '+elmState)
// console.log('senha: '+senhaBD)
// console.log('proximaPagina: '+Teste)

//     return (
//         // <View style={{flex:1}}>
//         <SafeAreaView style={{flex:1}}>
//             <ScrollView>
//                 <View style={styles.container}>
//                     <View style={styles.margem}>
//                         <BotaoVoltar
//                             style={styles.botaoVoltar}
//                             title='Voltar'
//                             onPress={()=>{
//                                 props.navigation.navigate(
//                                     "Inicial"
//                                 )
//                             }}
//                         ></BotaoVoltar>
//                     </View>
//                     <EntrarInfo info='E-mail *' place='Insira seu e-mail' onChangeText={(e)=>setEmail(e)}
//                             onBlur={()=>testeEmail()}
//                     ></EntrarInfo>
//                     {elmState ? <Text> Email cadastrado</Text> : false }
//                     {/* <EntrarInfo info='E-mail *' place='Insira seu e-mail'></EntrarInfo> */}
//                     {/* <EntrarInfo info='Senha *' place='Insira sua senha'></EntrarInfo> */}
//                     <EntrarInfo info='Senha *' place='Insira sua senha' onChangeText={(e)=>setSenha(e)} 
//                         onBlur={()=> testeSenha()}
//                     ></EntrarInfo>     
//                     {senhaTeste ? <Text> Senha cadastrado</Text> : false }

//                     <View style={styles.margem}>
//                         <CheckBox
//                             title='Esqueceu a senha?'
//                             checked={checado}
//                             onPress={() => { setChecado(!checado)
//                                 props.navigation.navigate(
//                                     "EsqueciSenha"
//                                 ) }}
//                             style={styles.materialCheckboxWithLabel}
//                         ></CheckBox>
//                     </View>
//                     <View style={styles.margem}>
//                         <CupertinoButtonInfo
//                             style={styles.cupertinoButtonInfo}
//                             title='Continuar'
//                             onPress={()=>{
//                                 testaLogin()
//                                 props.navigation.navigate(
//                                     Teste
//                                 )}
//                             }
//                         ></CupertinoButtonInfo>
//                     </View>

//                 </View>
//             </ScrollView>
//         </SafeAreaView>
//         // </View>
        
//     );
// }

let windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
        alignContent: "stretch",
        height: Dimensions.get("window").height,
        backgroundColor: "#d8f6ff",
        
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
        marginBottom: 100
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
    imgPhoto: {
        borderRightWidth:1,
        borderRadius:1,
        marginTop:200,
        marginBottom:-300,
        paddingTop:20,
        paddingBottom:20,
        width: 400,
        height: 200,
        alignContent:"center",
        alignSelf: "center"
    },

});

/*
<View style={styles.margem}>
                    <BotaoVoltar
                        style={styles.botaoVoltar}
                        title='Voltar'
                    ></BotaoVoltar>
                </View>
                <EntrarInfo info='E-mail *' place='Insira seu e-mail'></EntrarInfo>
                <EntrarInfo info='Senha *' place='Insira sua senha'></EntrarInfo>
                <View style={styles.margem}>
                    <CheckBox
                        title='Esqueceu a senha?'
                        checked={checado}
                        onPress={() => { setChecado(!checado) }}
                        style={styles.materialCheckboxWithLabel}
                    ></CheckBox>
                </View>
                <View style={styles.margem}>
                    <CupertinoButtonInfo
                        style={styles.cupertinoButtonInfo}
                        title='Continuar'
                    ></CupertinoButtonInfo>
                </View>
                */