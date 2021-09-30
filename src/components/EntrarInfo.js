import React, { } from "react";
import { StyleSheet, View, Text, TextInput, SafeAreaView } from "react-native";

function EntrarInfo(props) {
    return (
        <View style={styles.margem}>
            <View style={styles.vertical}>
                <Text style={styles.loremIpsum}>{props.info}</Text>
                <TextInput
                    style={styles.textinput}
                    placeholder={props.place}
                    Value={props.Value}
                    onChangeText={props.onChangeText}
                ></TextInput>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    vertical: {
        flex:1,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "stretch",
        //borderWidth: 2,
        //width: '17.3vw'
    },
    margem: {
        marginBottom: 100
    },
    horizontal: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    loremIpsum: {
        //fontFamily: "roboto-regular",
        color: "#121212",
        fontSize: 20,
    },
    textinput: {
        height: 35,
        margin: 5,
        borderWidth: 1,
        padding: 10,
    },
});

export default EntrarInfo;
