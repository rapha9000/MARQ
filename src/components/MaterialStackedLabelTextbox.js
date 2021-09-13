import React, { Component } from "react";
import { StyleSheet, View, TextInput } from "react-native";

function MaterialStackedLabelTextbox(props) {
  return (
    <View style={[styles.container1, props.style]}>
      <TextInput
        placeholder={props.d || "Nome:"}
        textBreakStrategy="simple"
        keyboardAppearance="default"
        defaultValue=""
        style={styles.d1}
      ></TextInput>

    </View>
  );
}

const styles = StyleSheet.create({
  container1: {
    borderBottomWidth: 1,
    borderColor: "#D9D5DC",
    backgroundColor: "transparent"
  },
  d1: {
    fontSize: 12,
    textAlign: "left",
    color: "#000",
    opacity: 0.6,
    paddingTop: 16,
    alignSelf: "flex-start",
    width: 72,
    height: 30
  },
  inputStyle1: {
    color: "#000",
    fontSize: 16,
    alignSelf: "stretch",
    flex: 1,
    lineHeight: 16,
    paddingTop: 8,
    paddingBottom: 8
  }
});

export default MaterialStackedLabelTextbox;
