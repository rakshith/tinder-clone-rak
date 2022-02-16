import { NavigationContainer } from "@react-navigation/native";
import { View, Text } from "react-native";
import StackNavigator from "./components/StackNavigator";
import { AuthProvider } from "./hooks/useAuth";

export default function App() {
  return (
    <NavigationContainer>
      <AuthProvider>
        <StackNavigator />
      </AuthProvider>
    </NavigationContainer>
  );
}
