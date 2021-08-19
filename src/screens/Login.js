import React, { useState } from 'react'
import { 
    StyleSheet,
    Text,
    View,
    SafeAreaView,
    TextInput, 
} from 'react-native'
import Button from '../components/Button'

export default props =>{
    const [Email,setEmail]= useState('MARQ')
    return (
        <SafeAreaView>
            <View>
                <Text>
                    E-mail:
                </Text>
                <TextInput
                    placeholder={"E-mail"}
                    Value={Email}
                    onChangeText={Email=>setEmail(Email)}
                    >


                </TextInput>
            </View>
        </SafeAreaView>
    )
}