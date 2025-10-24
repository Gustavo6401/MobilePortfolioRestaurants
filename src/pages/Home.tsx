import { View, Text, Button } from 'react-native'

export default function Home({ navigation }: any) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Página Home</Text>
            <Button title='Ir para o Perfil' onPress={() => navigation.navigate('Profile')}></Button>
            <Button title='Ir para a Página do React' onPress={() => navigation.navigate('ReactInfoPage')}></Button>
            <Button title='Ir para o cardápio' onPress={() => navigation.navigate('Cardapio')}></Button>
        </View>
    )
}