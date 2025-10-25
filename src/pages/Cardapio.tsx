import { useEffect, useState } from "react";
import CardapioAPI from "../api/cardapioAPI";
import { SectionList, Text, View } from "react-native";

type Cardapio = {
    category: string,
    data: {
        name: string,
        preco: number,
        descricao: string
    }[]
}

export default function Cardapio() {
    const [cardapio, setCardapio] = useState<Array<Cardapio>>(new Array<Cardapio>())
    const [api] = useState<CardapioAPI>(new CardapioAPI())

    useEffect(() => {
        const getCardapio = async () => {
            const pratos = await api.index()

            const model: Array<Cardapio> = pratos.map(section => ({
                category: section.getTitle(),
                data: section.getItem().map(prato => ({
                    name: prato.getName(),
                    preco: prato.getPreco(),
                    descricao: prato.getDescricao()
                }))
            }))

            setCardapio(model)
        }

        getCardapio()
    }, [])

    return (
        <View>
            <SectionList 
                sections={cardapio}
                keyExtractor={(item) => item.name}
                renderSectionHeader={({ section }) => (
                    <Text>{section.category}</Text>
                )}
                renderItem={({item}) => (
                    <View>
                        <Text>{item.name}</Text>
                        <Text>R$ {item.preco}</Text>
                        <Text>{item.descricao}</Text>
                    </View>
                )}
             />
        </View>
    )
}