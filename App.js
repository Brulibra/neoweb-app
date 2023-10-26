import { useState } from "react";
import {
  Image,
  KeyboardAvoidingView,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import ProjectView from "./src/components/ProjectView";

export default function App() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <KeyboardAvoidingView style={styles.container}>
        <Text style={styles.title}>Olá Adriana</Text>

        <View style={styles.projectSlider}>
          <Text style={styles.title}>Seus projetos</Text>
          <Image source={require("./src/assets/images/profile-pic.png")} />
        </View>

        <Text style={styles.title}>Daily Review</Text>

        <View style={styles.projectList}>
          <ProjectView />
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
