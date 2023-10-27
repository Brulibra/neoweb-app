import React from "react";
import {
  Image,
  KeyboardAvoidingView,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import ProjectView from "../components/ProjectView";
import ProjectSlider from "../components/ProjectSlider";
export default function App() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <KeyboardAvoidingView style={styles.container}>
        <View>
          <Text style={styles.title}>Olá Adriana</Text>
        </View>

        <ProjectSlider />

        <View>
          <Text style={styles.title}>Daily Review</Text>
        </View>

        <View style={styles.projectList}>
          <ProjectView
            projectTitle={"Projeto1"}
            notification={"10:00 AM"}
            status={"Finalizado"}
          />
          <ProjectView
            projectTitle={"Projeto2"}
            notification={"04:00 PM"}
            status={"Adiado"}
          />
          <ProjectView
            projectTitle={"Projeto3"}
            notification={"10:00 AM"}
            status={"Finalizado"}
          />
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#ffff",
    borderWidth: 30,
    borderColor: "#FFF",
  },
  projectSlider: {
    flex: 1,
    justifyContent: "space-evenly",
    alignContent: "flex-start",
    alignItems: "center",
    backgroundColor: "#87E4A7C7",
  },
  projectList: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "blue",
  },
});
