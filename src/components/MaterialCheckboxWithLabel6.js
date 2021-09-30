import React, { Component } from "react";
import { StyleSheet, TouchableOpacity, Text } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

function MaterialCheckboxWithLabel6(props) {
  return (
    <TouchableOpacity style={[styles.container, props.style]}>
      <Icon
        name={props.checked ? "checkbox-marked" : "checkbox-blank-outline"}
        style={styles.checkIcon}
      ></Icon>
      <Text style={styles.checkLabel}>
        {props.label || "Você que sera atentido ?"}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
    backgroundColor: "transparent",
    flexDirection: "row"
  },
  checkIcon: {
    color: "#3F51B5",
    fontSize: 28,
    lineHeight: 28,
    //borderBottomWidth:1,
  },
  checkLabel: {
    marginLeft: 2,
    fontSize: 25,
    color: "rgba(0,0,0,0.87)"
  }
});

export default MaterialCheckboxWithLabel6;
