import React from "react";
import { Text, StyleSheet } from "react-native";

export default function Diviser() {
  return <Text style={styles.diviser}> • </Text>;
}

const styles = StyleSheet.create({
  diviser: {
    fontWeight: "bold",
    color: '#9B9B9B',  },
});
