import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native';

export default function Cadastrar({ navigation }) {
    
  return (
    <View style={styles.container}>
    <Image source={require('../assets/face1.png')} style={styles.logo} />
    <TextInput
          style={styles.input}
          placeholder="Email ou número de telefone"
          keyboardType="email-address"
        />
        <TextInput
          style={styles.input}
          placeholder="Senha"
          secureTextEntry={true}
        />
       <TouchableOpacity style={styles.loginButton} onPress={() => navigation.popToTop()}>
        <Text style={styles.loginButtonText}>Entrar</Text>
      </TouchableOpacity>
      
      <Text style={styles.forgotPassword}
        onPress={() => navigation.navigate("SenhaRec", { language: "french" })}
        >Esqueceu a senha?</Text>
      
      
      <TouchableOpacity style={styles.createAccountButton}>
        <Text style={styles.createAccountButtonText}onPress={() => navigation.popToTop()} >Criar nova conta</Text>
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
        padding: 20,
      },
      logo: {
        height: 100,
        width: 250,
        marginBottom: 90,
      },
      input: {
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 5,
        padding: 10,
        marginBottom: 20,
        width: '100%',
        fontSize: 16,
      },
      loginButton: {
        backgroundColor: '#1877f2',
        borderRadius: 5,
        padding: 10,
        width: '100%',
        alignItems: 'center',
        marginBottom: 150,
      },
      loginButtonText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 16,
        
      },
      forgotPassword: {
        color: '#1877f2',
        fontSize: 16,
        marginBottom: 20,
      },
      createAccountButton: {
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 5,
        padding: 10,
        width: '100%',
        alignItems: 'center',
      },
      createAccountButtonText: {
        color: '#1877f2',
        fontWeight: 'bold',
        fontSize: 16,
      }
});