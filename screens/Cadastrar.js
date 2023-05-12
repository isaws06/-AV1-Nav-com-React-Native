import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, Image, TextInput} from 'react-native';

export default function Cadastrar({ navigation }) {
  return (
    <View style={styles.container}>
      <Image source={require('../assets/face1.png')} style={styles.logo} />
      <Text style={styles.title}>Cadastre-se</Text>
    <TextInput
          style={styles.input}
          placeholder="Nome"
          keyboardType="email-address"
        />
        <TextInput
          style={styles.input}
          placeholder="Email"
          keyboardType="email-address"
        />
        <TextInput
          style={styles.input}
          placeholder="Senha"
          secureTextEntry={true}
        />
        
        <TextInput
          style={styles.input}
          placeholder="Confirmar senha"
          secureTextEntry={true}
        />
       <TouchableOpacity style={styles.cadastrarButton} onPress={() => navigation.popToTop()}>
        <Text style={styles.cadastarButtonText}>Cadastrar</Text>
      </TouchableOpacity>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
      },
    
      logo: {
        height: 100,
        width: 250,
        marginBottom: 20,
      },
    
      title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 32,
      },
    
      input: {
        width: '80%',
        height: 40,
        padding: 8,
        borderWidth: 1,
        borderColor: '#ccc',
        marginBottom: 17,
      },
      button: {
        backgroundColor: '#007AFF',
        padding: 12,
        borderRadius: 8,
        marginTop: 20,
      },
      buttonText: {
        color: '#fff',
        fontWeight: 'bold',
        textAlign: 'center',
      }
});