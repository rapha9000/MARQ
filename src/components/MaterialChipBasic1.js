import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";

function MaterialChipBasic1(props) {
  return (
    <View style={[styles.container, props.style]}>
      <Text style={styles.sexo}>SEXO</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgb(230,230,230)",
    borderRadius: 50,
    paddingLeft: 12,
    paddingRight: 12
  },
  sexo: {
    fontSize: 13,
    color: "rgba(0,0,0,0.87)"
  }
});

export default MaterialChipBasic1;
