import { useLinkProps } from "@react-navigation/native";
import React from "react";
import { StyleSheet,View,Text, TouchableOpacity } from "react-native";
import { Button } from "react-native-elements";

export default props=>{
    return (
        <TouchableOpacity 
            onPress={props.onPress}>
            <View style ={styles.container}>
                <View style={styles.buttonContainer}>
                    <Text>
                        {props.titulo}
                    </Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent:'center',
        
        
      },
    buttonContainer:{
        margin:20,
        backgroundColor: "gray",
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 10,
        elevation: 3,
    },
})