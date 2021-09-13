import React, { Component } from "react";
import { StyleSheet, TouchableOpacity, Text } from "react-native";

function MaterialButtonViolet1(props) {
  return (
    <TouchableOpacity style={[styles.container, props.style]}>
      <Text style={styles.continuar}>Continuar</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgba(80,227,194,1)",
    alignItems: "center",
    flexDirection: "row",
    borderRadius: 2,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1
    },
    shadowOpacity: 0.35,
    shadowRadius: 5,
    elevation: 2,
    minWidth: 88,
    paddingLeft: 16,
    paddingRight: 16,
    justifyContent: "center"
  },
  continuar: {
    color: "#fff",
    fontSize: 14
  }
});

export default MaterialButtonViolet1;
