import React, { Component } from "react";
import { StyleSheet, TouchableOpacity, Text } from "react-native";

function CupertinoButtonInfo(props) {
  return (
    <TouchableOpacity style={[styles.container, props.style]}
    onPress={props.onPress}>
      <Text style={styles.titulo}>{props.title}</Text>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#007AFF",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    borderRadius: 20,
    paddingLeft: 16,
    paddingRight: 16
  },
  titulo: {
    color: "#0073ba",
    fontSize: 25
    
  }
});

export default CupertinoButtonInfo;
