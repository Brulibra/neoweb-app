import React from "react";
import { View, StyleSheet, Text, Image } from "react-native";

export default function ProjectSlider() {
  return (
    <View style={style.container}>
      <View style={style.text}>
        <Text style={style.title}>Seus projetos</Text>
        <Text style={style.subTitle}>2 de 4 Completos</Text>
        <Text style={style.seeMore}>Veja mais</Text>
      </View>

      <View style={style.image}>
        <Image source={require("../assets/images/profile-pic.png")} />
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignContent: "center",
    alignItems: "center",
    backgroundColor: "#87E4A7C7",
    padding: 20,
    borderRadius: 28,
  },
  text: {
    flexDirection: "column",
    flex: 1,

  },
  title: {
    flex: 3,
    fontSize: 18,
    fontStyle: "normal",
    fontWeight: "bold",
  },
  subTitle: {
    flex:2,
    opacity: 0.4,
    fontSize: 11,
    fontStyle: "normal",
    fontWeight: 400,
  },
  seeMore:{
    
  },
  image: {
    flexDirection: "column",
    flex: 1,
  },
});
