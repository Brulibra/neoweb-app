import { StatusBar } from "expo-status-bar";
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

export default function App() {
  const [username, setUsername] = useState("");
  const [useremail, setUseremail] = useState("");

  function handleSingIn() {
    const data = {
      username,
      useremail
    };
    console.log(data);
  }

  return (
    <SafeAreaView style={styles.safeArea}>
    <KeyboardAvoidingView>
      <View>
        <Text style={styles.title}>Olá Adriana </Text>
        <Image source={require('./assets/images/profile-pic.png')}/>
      </View>

      <View>
      <TextInput
          style={styles.input}
          onChange={setUsername}
          value={username}
          autoCorrect= {false}
          placeholder="Seu username"
        />
        <TextInput
          style={styles.input}
          onChange={setUseremail}
          value={useremail}
          autoCorrect={false}
          placeholder="Seu email"
        />

        <TouchableOpacity>
          <Text>Acessar</Text>
        </TouchableOpacity>
        
        <TouchableOpacity>
          <Text>Criar conta</Text>
        </TouchableOpacity>
        
      </View>
    </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
