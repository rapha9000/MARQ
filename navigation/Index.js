import React from "react";
import { SafeAreaProvider, SafeAreaView,Text } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import Stack from "./Stack";

export default props=>(
    <SafeAreaProvider>
        <SafeAreaView style={{flex:1}}>
            <NavigationContainer>
                <Stack />
            </NavigationContainer>
        </SafeAreaView>

    </SafeAreaProvider>
)