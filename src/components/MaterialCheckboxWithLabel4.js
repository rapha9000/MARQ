import React, { Component } from "react";
import { StyleSheet, TouchableOpacity, Text } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

function MaterialCheckboxWithLabel4(props) {
  return (
    <TouchableOpacity style={[styles.container, props.style]}>
      <Icon
        name={props.checked ? "checkbox-marked" : "checkbox-blank-outline"}
        style={styles.checkIcon}
      ></Icon>
      <Text style={styles.clinicoGeral}>{props.label || "Clinico Geral"}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
    backgroundColor: ",1,0.97,1)",
    flexDirection: "row"
  },
  checkIcon: {
    color: "rgba(0,0,0,1)",
    fontSize: 32,
    lineHeight: 28
  },
  clinicoGeral: {
    marginLeft: 2,
    fontSize: 21,
    color: "rgba(0,0,0,0.87)",
    padding: 0,
    lineHeight: 20
  }
});

export default MaterialCheckboxWithLabel4;
