import React, { Component, useState } from "react";
import { StyleSheet, TextInput, View, Text,Dimensions,TouchableOpacity } from "react-native";
import MaterialButtonViolet from "../components/MaterialButtonViolet";
import { Picker } from "@react-native-community/picker";
import { AuthContext } from "../Providers/AuthContext";
import usuarios, { addUsu } from "../database/Usuarios";
import CupertinoButtonInfo from "../components/CupertinoButtonInfo"
import { ScrollView } from "react-native-gesture-handler";

export default class TelaCadastro extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedValue:'',
      nome: '',
      CPF: this.context,
      CPFCadastrado: false,
      Email: "",
      EmailCadastrado: false,
      endereco: "",
      nascimento: "",
      senha: "",
      celular: "",
      pagina: "",
      elmState: "",
      sexo: "britinho",
      cpfOK: false,
      emailOK: false,
      flag: false,
    };

    this.validaCPF = this.validaCPF.bind(this);
    this.validaEMail = this.validaEMail.bind(this);
    this.cadastraUsuario = this.cadastraUsuario.bind(this);
  }

  async validaCPF() {
    await new usuarios().getByCpf(this.state.CPF).then((x) => {
      if (x!==null){
        this.setState({ CPFCadastrado: true });
        console.log(this.state.CPFCadastrado)
      }else{
        this.setState({ CPFCadastrado:false });
        console.log(this.state.CPFCadastrado)
      }
    });
  }

  validaEMail() {
    new usuarios().getByEmail(this.state.Email).then((x) => {
      if (x!==null){
        this.setState({ EmailCadastrado: true });
      }else{
        console.log(this.state.CPFCadastrado)
        this.setState({ EmailCadastrado: false });
      }
    });
  }


  async cadastraUsuario() {
    {this.state.selectedValue == "Masculino" ? this.state.sexo='Masculino' : console.log('deuruim')}
    {this.state.selectedValue == "Feminino" ? this.state.sexo="Feminino" : console.log('deuruim')}
    {this.state.selectedValue == "Sem" ? this.state.sexo="Sem" : console.log('deuruim')}
    if (!this.state.CPFCadastrado && !this.state.EmailCadastrado) {
      console.log("CPF"+this.state.CPF);
      console.log("sexo"+this.state.sexo);
      await addUsu({ 
        nome: this.state.nome,
        endereco: this.state.endereco,
        email: this.state.Email,
        cpf: this.state.CPF,
        convenio: "",
        nascimento: this.state.nascimento,
        senha: this.state.senha,
        celular: this.state.celular,
        plano: "",
        numCon: "",
        valCon: "",
        especialidade: "",
        sintomas: "",
        sexo: this.state.sexo,
        hospital: "",
        imagem: " ",
      });
      this.props.navigation.navigate('Convenio');
    }
  }

  render() {
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
            Value={this.state.nome}
            onChangeText={(nome) => this.setState({nome})}
          />

            <TextInput
            placeholder="Insira seu CPF"
            dataDetector="none"
            secureTextEntry={false}
            editable={true}
            style={styles.inputStyle1}
            Value={this.CPF}
            onChangeText={(e) => {
              this.setState({ CPF: e });
              this.context.setCPF(e);
              console.log(e);
            }}
            onBlur={() => {
              this.validaCPF();
            }}
          ></TextInput>
          {this.state.CPFCadastrado ? <Text> CPF ja cadastrado</Text> : null}

          
            <TextInput
            placeholder="Insira seu e-mail"
            dataDetector="none"
            secureTextEntry={false}
            editable={true}
            style={styles.inputStyle1}
            Value={this.Email}
            onChangeText={(Email) => this.setState({ Email })}
          ></TextInput>

            <TextInput
            placeholder="Insira sua senha"
            dataDetector="none"
            secureTextEntry={false}
            editable={true}
            style={styles.inputStyle1}
            Value={this.senha}
            onChangeText={(senha) => this.setState({senha})}
            secureTextEntry={true}
          ></TextInput>

          
          <TextInput
            placeholder="Insira seu endereço"
            dataDetector="none"
            secureTextEntry={false}
            editable={true}
            style={styles.inputStyle1}
            Value={this.endereco}
            onChangeText={(endereco) => this.setState({endereco})}
          ></TextInput>

          <TextInput
            placeholder="Insira seu celular"
            dataDetector="none"
            secureTextEntry={false}
            editable={true}
            style={styles.inputStyle1}
            Value={this.celular}
            onChangeText={(celular) => this.setState({celular})}
            keyboardType="phone-pad"
          ></TextInput>

          <TextInput
            placeholder="Insira sua data de nascimento"
            dataDetector="none"
            secureTextEntry={false}
            editable={true}
            style={styles.inputStyle1}
            Value={this.nascimento}
            onChangeText={(nascimento) => this.setState({nascimento})}
          ></TextInput>

          <Picker
            selectedValue={this.state.selectedValue}
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
            onValueChange={(selectedValue) => this.setState({selectedValue})}
          >
            <Picker.Item label="- Selecione o sexo -" />
            <Picker.Item label="Masculino" value="Masculino" />
            <Picker.Item label="Feminino" value="Feminino" />
            <Picker.Item label="Prefiro não Identificar" value="Sem" />
          </Picker>

          <TouchableOpacity>
            <View style={styles.rect}><Text style={{marginTop:55, textAlign:"center"}}>Clique para inserir a foto do seu documento</Text></View>
          </TouchableOpacity>

          <View style={styles.rect}></View>

          <View style={styles.botaoVoltarRow}>
            {/* <MaterialButtonViolet
              style={styles.botaoVoltar}
              titulo="Voltar"
              onPress={() => {
                this.props.navigation.navigate("Inicial");
              }}
            ></MaterialButtonViolet> */}

            <CupertinoButtonInfo style={styles.cupertinoButtonInfo} title='Continuar' onPress={() => {
              this.cadastraUsuario()
              console.log('entrou')}
              }
              
            ></CupertinoButtonInfo>
          </View>
        </View>
      </ScrollView>
    );
  }
}
TelaCadastro.contextType = AuthContext;

/*
export default (props) => {
  const [selectedValue, setSelectedValue] = useState(["Masculino", "Feminino", "Prefiro não identificar"])
  const { CPF, setCPF } = React.useContext(AuthContext)
  const [CPFBD, setCPFBD] = useState('')
  const [nome, setNome] = useState('')
  const [EmailBD, setEmailBD] = useState('')
  const [Email, setEmail] = useState('')
  const [endereco, setEndereco] = useState('')
  const [nascimento, setNascimento] = useState('')
  const [senha, setSenha] = useState('')
  const [celular, setCelular] = useState('')
  const [pagina, setPagina] = useState('Cadastro')
  const [elmState, setElmState] = React.useState(false);
  var sexo = 'britinho'
  var cpfOK=false
  var emailOK=false
  var flag=false

  function testeCPF() {
      new usuarios().getByCpf(CPF).then((x) => {
        if (x!==null){
          setCPFBD(x.data().cpf)
        }else{
          setEmailBD('')
        }
      });
    }; //colocar cpf
  
  function testeEmail() {
    new usuarios().getByCpf(CPF).then((x) => {
      if (x!==null){
        setEmailBD(x.data().email)
      }else{
        setEmailBD('')
      }
    });
}; //colocar cpf


  function testaCPF(){
    if (CPF==CPFBD){
      // <Text>
      //   CPF ja cadastrado
      // </Text>
    }else{
      cpfOK=true
    }
  }

  function testaEmail(){
    if (EmailBD==Email){
      // <Text>
      //   Email ja cadastrado
      // </Text>
    }else{
      emailOK=true
    }
  }

  function testaCPFEmail(emailOK,cpfOK) {
    flag=true
    if (emailOK===true && cpfOK===true){
      setPagina('Convenio')
    }else{
      setPagina('Cadastro')
    }
    return [emailOK, cpfOk];
  }


console.log('emailBD:'+EmailBD)
console.log('cpfBD:'+CPFBD)
console.log('cpf:'+CPF)
console.log('pagina:'+pagina)
console.log('cpfOK:'+cpfOK)
console.log('emailOK:'+emailOK)
console.log('flag:'+flag)

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
          testaCPF(cpfOK)
        }}
          >
        </TextInput>
        {// {elmState ? <Text> CPF ja cadastrado</Text> : false } }

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
        onBlur={()=>{
          testeEmail()
          testaEmail(emailOK)}
        }
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
          [emailOK, cpfOK] = testaCPFEmail()
          // setCPFBD('')
          // {selectedValue == "Masculino" ? sexo='Masculino' : console.log('deuruim')}
          // {selectedValue == "Feminino" ? sexo="Feminino" : console.log('deuruim')}
          // {selectedValue == "Sem" ? sexo="Sem" : console.log('deuruim')}
        //   addUsu({
        //     nome: nome,
        //     endereco: endereco,
        //     email: Email,
        //     cpf: CPF,
        //     convenio: '',
        //     nascimento:nascimento,
        //     senha:senha,
        //     celular:celular,
        //     plano: '',
        //     numCon: '',
        //     valCon:'',
        //     especialidade: '',
        //     sintomas: '',
        //     sexo:sexo,
        //     hospital:'',
        //     imagem:''
        // })
          props.navigation.navigate(
            pagina
          )
        }}>
        </MaterialButtonViolet>

      </View>
    </View>
    </ScrollView>
// </>
  );
}*/

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