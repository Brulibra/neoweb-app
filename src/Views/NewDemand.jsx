import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import ProjectView from "../components/ProjectView.jsx";

export default function NewDemand() {
  <SafeAreaView style={style.container}>
    <TextInput></TextInput>
    <View>
      <Text style={style.titles}>Tipo do Projeto</Text>
      <ProjectView projectTitle={"Campanha de marketing"} />
    </View>
    <View>
      <Text style={style.titles}>Urgência & Tempo esperado</Text>
      <View style={style.rowContainer}>
        <ProjectView projectTitle={"Urgência"} />
        <ProjectView projectTitle={"30 dias"} />
      </View>
    </View>
    <View>
      <Text style={style.titles}>Necessidades</Text>
      <View style={style.rowContainer}>
        <ProjectView />
        <ProjectView />
        <ProjectView />
      </View>
    </View>
    <View>
      <Text style={style.titles}>Notificações</Text>
      <View style={style.rowContainer}>
        <ProjectView projectTitle={"10 AM"} />
        <ProjectView projectTitle={"10 AM"} />
      </View>
    </View>
  </SafeAreaView>;
}
const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-evenly",
    alignContent: "center",
    margin: 28,
  },
  rowContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  titles: {
    fontSize: 15,
    fontStyle: "normal",
    fontWeight: "bold",
  },
});
