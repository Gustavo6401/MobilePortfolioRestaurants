import { useEffect, useState } from "react";
import CardapioAPI from "../api/cardapioAPI";
import { StyleSheet, SectionList, Text, View } from "react-native";
import Moeda from "../components/Moeda";

type Cardapio = {
    category: string,
    data: {
        name: string,
        preco: number,
        descricao: string
    }[]
}

const styles = StyleSheet.create({
    titulo: {
        color: 'white',
        textAlign: 'center',
        fontSize: 32
    },
    container: {
        flex: 1,
        paddingTop: 22,
        backgroundColor: '#332D2D'
    },
    sectionHeader: {
        paddingTop: 2,
        paddingLeft: 10,
        paddingRight: 10,
        paddingBottom: 2,
        fontSize: 14,
        fontWeight: 'bold',
        backgroundColor: 'rgba(247,247,247,1.0)',
        marginBottom: 10,
        marginLeft: 10,
        marginRight: 10
    },
    item: {
        padding: 10,
        fontSize: 18,
        height: 44,
        color: '#754141'
    },
    descricao: {
        padding: 15,
        backgroundColor: 'rgba(247,247,247,1.0)',
        rowGap: 10,
        marginBottom: 10,
        marginLeft: 10,
        marginRight: 10
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
                <Text style={styles.titulo}>Cardápio</Text>
                <SectionList
                    sections={cardapio}
                    keyExtractor={(item) => item.name}
                    renderSectionHeader={({ section }) => (
                        <View style={styles.sectionHeader}>
                            <Text style={styles.item}>{section.category}</Text>
                        </View>
                    )}
                    renderItem={({item}) => (
                        <View style={styles.descricao}>
                            <View style={styles.tituloPreco}>
                                <Text>{item.name}</Text>
                                <Moeda preco={item.preco} />
                            </View>
                            <Text>{item.descricao}</Text>
                        </View>
                    )}
                 />
            </View>
        </View>
    )
}