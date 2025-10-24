import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import Home from "../pages/Home";
import Profile from "../pages/Profile";
import ReactInfoPage from "../pages/ReactInfoPage";
import Cardapio from "../pages/Cardapio";

const Stack = createNativeStackNavigator()

export default function AppNavigator() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={Home}></Stack.Screen>
                <Stack.Screen name="Profile" component={Profile}></Stack.Screen>
                <Stack.Screen name="ReactInfoPage" component={ReactInfoPage}></Stack.Screen>
                <Stack.Screen name="Cardapio" component={Cardapio}></Stack.Screen>
            </Stack.Navigator>
        </NavigationContainer>
    )
}