import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Inicial from '../src/screens/Inicial'
import Login from '../src/screens/Login'
import CadastroTeste from '../src/screens/CadastroTeste'
import TelaCadastro from '../src/screens/TelaCadastro'
import TelaSintomas from '../src/screens/TelaSintomas'
import TelaConvenio from '../src/screens/TelaConvenio'


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
          <Login {...props}>
            <Login/>
          </Login>
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

      <Stack.Screen name="Convenio"  >
        {props=> (
          <TelaConvenio {...props} voltar="Inicial">
            <TelaConvenio/>
          </TelaConvenio>
        )}
      </Stack.Screen>

  </Stack.Navigator>
)