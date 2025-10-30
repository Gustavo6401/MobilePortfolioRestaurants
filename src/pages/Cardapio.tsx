import { useEffect, useState } from "react";
import CardapioAPI from "../api/cardapioAPI";
import { StyleSheet, SectionList, Text, View } from "react-native";

type Cardapio = {
    category: string,
    data: {
        name: string,
        preco: number,
        descricao: string
    }[]
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 22
    },
    sectionHeader: {
        paddingTop: 2,
        paddingLeft: 10,
        paddingRight: 10,
        paddingBottom: 2,
        fontSize: 14,
        fontWeight: 'bold',
        backgroundColor: 'rgba(247,247,247,1.0)'
    },
    item: {
        padding: 10,
        fontSize: 18,
        height: 44
    },
    descricao: {
        padding: 15
    },
    tituloPreco: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    }
})

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
        <View style={styles.container}>
            <View>
                <SectionList
                    sections={cardapio}
                    keyExtractor={(item) => item.name}
                    renderSectionHeader={({ section }) => (
                        <Text style={styles.item}>{section.category}</Text>
                    )}
                    renderItem={({item}) => (
                        <View style={styles.descricao}>
                            <View style={styles.tituloPreco}>
                                <Text>{item.name}</Text>
                                <Text>R$ {item.preco}</Text>
                            </View>
                            <Text>{item.descricao}</Text>
                        </View>
                    )}
                 />
            </View>
        </View>
    )
}