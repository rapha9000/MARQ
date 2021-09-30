import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Inicial from '../src/screens/Inicial'
// import Login from '../src/screens/Login'
// import CadastroTeste from '../src/screens/CadastroTeste'
import TelaCadastro from '../src/screens/TelaCadastro'
import TelaSintomas from '../src/screens/TelaSintomas'
// import TelaConvenio from '../src/screens/TelaConvenio'
import TelaConvenio2 from '../src/screens/TelaConvenio2'
import Entrar from '../src/screens/Entrar'
import TelaHospitais from '../src/screens/TelaHospitais'
import AppAssinatura from '../src/screens/AppAssinatura'
import AppCamera from '../src/screens/AppCamera'
//import TelaMapa from '../src/screens/TelaMapa'
import AppMapa from '../src/screens/AppMapa'


const Stack = createStackNavigator()

export default props => (
  <Stack.Navigator initialRouteName='Inicial' 
  screenOptions={{headerShown:false}}>
      <Stack.Screen name="Inicial">
        {props=> (
          <Inicial {...props} >
            <Inicial/>
          </Inicial>
        )}
      </Stack.Screen>

      <Stack.Screen name="Login"  >
        {props=> (
          <Entrar {...props}>
            <Entrar/>
          </Entrar>
        )}
      </Stack.Screen>

      <Stack.Screen name="Cadastro"  >
        {props=> (
          <TelaCadastro {...props} voltar="Inicial">
            <TelaCadastro/>
          </TelaCadastro>
        )}
        
      </Stack.Screen>

      <Stack.Screen name="Sintomas"  >
        {props=> (
          <TelaSintomas {...props} voltar="Inicial">
            <TelaSintomas/>
          </TelaSintomas>
        )}
      </Stack.Screen>

      {/*<Stack.Screen name="Convenio"  >
        {props=> (
          <TelaConvenio {...props} voltar="Inicial">
            <TelaConvenio/>
          </TelaConvenio>
        )}
      </Stack.Screen>*/}

      <Stack.Screen name="Convenio"  >
        {props=> (
          <TelaConvenio2 {...props} voltar="Inicial">
            <TelaConvenio2/>
          </TelaConvenio2>
        )}
      </Stack.Screen>

      <Stack.Screen name="Hospitais"  >
        {props=> (
          <TelaHospitais {...props} voltar="Inicial">
            <TelaHospitais/>
          </TelaHospitais>
        )}
      </Stack.Screen>

      {/* <Stack.Screen name="Mapa"  >
        {props=> (
          <TelaMapa {...props} voltar="Inicial">
            <TelaMapa/>
          </TelaMapa>
        )}
      </Stack.Screen> */}

       <Stack.Screen name="Mapa"  >
        {props=> (
          <AppMapa {...props} voltar="Inicial">
            <AppMapa/>
          </AppMapa>
        )}
      </Stack.Screen>

      {<Stack.Screen name="Assinatura"  >
        {props=> (
          <AppAssinatura {...props} voltar="Inicial">
            <AppAssinatura/>
          </AppAssinatura>
        )}
      </Stack.Screen>}

      {<Stack.Screen name="Camera"  >
        {props=> (
          <AppCamera {...props} voltar="Inicial">
            <AppCamera/>
          </AppCamera>
        )}
      </Stack.Screen>}
      

  </Stack.Navigator>
)