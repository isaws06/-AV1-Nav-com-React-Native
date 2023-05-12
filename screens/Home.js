import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Button, View, Text, Image, TouchableOpacity } from 'react-native';

export default function Home({ navigation }) {
  return (
    <View style={styles.container}>
     <Text style={styles.title}>Bem-vindo ao </Text>

     <Image source={require('../assets/face1.png')} style={styles.logo} />
     
     <TouchableOpacity style={styles.button} onPress={() => 
        navigation.navigate("Entrar", { language: "french" })} >
        <Text style={styles.buttonText}>Entrar</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() =>  navigation.navigate("Cadastrar", { language: "english" })}>
        <Text style={styles.buttonText}>Cadraste-se</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  logo: {
    width: 250,
    height: 100,
    marginBottom: 200,
  },

  tittle: {
    paddingVertical: 15,
    paddingHorizontal: 30,
    backgroundColor: "#4f58c4"
  },
  button: {
    backgroundColor: '#1877f2',
    borderRadius: 5,
    padding: 10,
    marginBottom: 20,
    width: 300,
    alignItems: 'center',
  },
  
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  }
});