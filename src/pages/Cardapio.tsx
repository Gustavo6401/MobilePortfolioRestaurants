import { useEffect, useState } from "react";
import Prato from "../model/Prato";
import CardapioAPI from "../api/cardapioAPI";
import { FlatList, Text, View } from "react-native";

export default function Cardapio() {
    const [cardapio, setCardapio] = useState<Array<Prato>>(new Array<Prato>())
    const [api] = useState<CardapioAPI>(new CardapioAPI())

    useEffect(() => {
        const getCardapio = async () => {
            const pratos = await api.get()
            setCardapio(pratos)
        }

        getCardapio()
    }, [])

    return (
        <View>
            <FlatList data={cardapio} renderItem={({item}) => <Text>{item.getName()}</Text>} />
        </View>
    )
}