import React, { Component } from "react";
import { StyleSheet, View, Text, TextInput } from "react-native";

function MaterialStackedLabelTextbox1(props) {
  return (
    <View style={[styles.container, props.style]}>
      <Text style={styles.stackedLabel}>
        {props.stackedLabel || "StackedLabel"}
      </Text>
      <TextInput
        placeholder={props.inputStyle || "Input"}
        dataDetector="none"
        secureTextEntry={false}
        editable={true}
        style={styles.inputStyle}
      ></TextInput>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "transparent"
  },
  stackedLabel: {
    fontSize: 15,
    textAlign: "left",
    color: "#000",
    opacity: 0.6,
    paddingTop: 16,
    marginRight: 0
  },
  inputStyle: {
    color: "#000",
    fontSize: 16,
    alignSelf: "stretch",
    flex: 1,
    //lineHeight: 16,
    //paddingTop: 8,
    //paddingBottom: 8,
    marginRight: 0,
    borderWidth: 1,
    borderColor: "#000000",
    shadowColor: "rgba(0,0,0,1)",
    // shadowOffset: {
    //   width: 3,
    //   height: 3
    // },
    // elevation: 5,
    // shadowOpacity: 1,
    // shadowRadius: 0
  }
});

export default MaterialStackedLabelTextbox1;
