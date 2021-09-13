import React from "react";
import { SafeAreaProvider, SafeAreaView,Text } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import Stack from "./Stack";
import { AuthProvider } from "../src/Providers/AuthContext";
import { usuariosContext, usuariosProvider } from "../src/Providers/usuariosContext";
import { registerRootComponent } from 'expo';

export default function Index (){
    return(
        <SafeAreaProvider>
        <AuthProvider>
            <NavigationContainer>
                <Stack />
            </NavigationContainer>
        </AuthProvider>
    </SafeAreaProvider>
    )
}

registerRootComponent(Index);