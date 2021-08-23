import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import PassoStack from './PassoStack'
import Inicial from '../src/screens/Inicial'
import Login from '../src/screens/Login'

const Stack = createStackNavigator()

export default props => (
    <Stack.Navigator initialRouteName='Inicial' 
      screenOptions={{headerShown:false}}>
        <Stack.Screen name="Inicial">
          {props=> (
            <Inicial {...props} avancar="Login">
              <Inicial/>
            </Inicial>
          )}
        </Stack.Screen>
        <Stack.Screen name="Login"  >
          {props=> (
            <PassoStack {...props} voltar="Inicial">
              <Login/>
            </PassoStack>
          )}
        </Stack.Screen>
       
    </Stack.Navigator>
)