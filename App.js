import Home from "./screens/Home";
import Entrar from "./screens/Entrar";
import Cadastrar from "./screens/Cadastrar";
import SenhaRec from "./screens/SenhaRec";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name="Home"
          component={Home}
          options={{title: "Home"}}
        />
        <Stack.Screen 
          name="Entrar"
          component={Entrar}
          options={{title: "Entrar"}}
        />
        <Stack.Screen 
          name="Cadastrar"
          component={Cadastrar}
          options={{title: "Cadastrar-se"}}
          
        />
        <Stack.Screen 
          name="SenhaRec"
          component={SenhaRec}
          options={{title: "Recuperação de senha"}}
          
        />
      </Stack.Navigator>
    </NavigationContainer>
    
  );
}