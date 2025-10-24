import { NewAppScreen } from "@react-native/new-app-screen";
import { View, StyleSheet, useColorScheme, StatusBar } from "react-native";
import { SafeAreaProvider, useSafeAreaInsets } from "react-native-safe-area-context";

function AppContent() {
    const safeAreaInsets = useSafeAreaInsets()

    return (
        <View style={styles.container}>
            <NewAppScreen 
                templateFileName="App.tsx"
                safeAreaInsets={safeAreaInsets}
            />
        </View>
    )
}

export default function ReactInfoPage() {
    const isDarkMode = useColorScheme() === 'dark'

    return (
        <SafeAreaProvider>
            <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
            <AppContent />
        </SafeAreaProvider>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})