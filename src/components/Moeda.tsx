import { View, Text } from 'react-native'

interface MoedaExibitionProps {
    preco: number
}

const Moeda: React.FC<MoedaExibitionProps> = ({ preco }) => {
    return (
        <Text>
            {new Intl.NumberFormat('pt-BR', {
                style: 'currency',
                currency: 'BRL'
            }).format(preco)}
        </Text>
    )
}

export default Moeda