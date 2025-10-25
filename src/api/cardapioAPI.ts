import axios, { AxiosInstance, AxiosResponse } from "axios";
import Prato from "../model/Prato";
import Section from "../model/Section";

export default class CardapioAPI {
    private api: AxiosInstance = axios.create({
        baseURL: 'https://gustavo6401.github.io/JSONFilePortfolio/Modelo.json'
    })

    async get(): Promise<Array<Prato>> {
        try {
            const resultado: AxiosResponse = await this.api.get('')
            const response: any = resultado.data

            const cardapio: Array<Prato> = response.map((json: any) => 
                new Prato(json.category, json.name, json.preco, json.descricao)
            )

            return cardapio
        } catch (error: any) {
            if (error.response) {
                console.error('Erro: ', error.response.data)
                console.log('Mensagem: ', error.response.message)
                console.log('Status: ', error.response.status)
                console.log('Headers: ', error.response.headers)

                if (error.response.status === 403) {
                    throw new Error('Erro 403, você não está autorizado a acessar esse grupo.')
                }
            } else if (error.request) {
                console.error('Nenhuma Resposta Recebida: ', error.request)
            } else {
                console.error('Erro na Configuração da Requisição')
            }

            throw error
        }
    }

    async index(): Promise<Array<Section>> {
        try {
            const resultado: AxiosResponse = await this.api.get('')
            const response: any = resultado.data

            const cardapio: Array<Prato> = response.map((json: any) => 
                new Prato(json.category, json.name, json.preco, json.descricao)
            )

            const grouped: Record<string, Array<Prato>> = {};

            // Dois loops mesmo, futuramente otimizo.
            cardapio.forEach((item: Prato) => {
                if (!grouped[item.getCategory()]) grouped[item.getCategory()] = []
                grouped[item.getCategory()].push(item)
            })

            const formatted: Array<Section> = Object.keys(grouped).map((key: string) => new Section(
                key.charAt(0).toUpperCase() + key.slice(1),
                grouped[key]
            ))

            return formatted
        } catch (error: any) {
            if (error.response) {
                console.error('Erro: ', error.response.data)
                console.log('Mensagem: ', error.response.message)
                console.log('Status: ', error.response.status)
                console.log('Headers: ', error.response.headers)

                if (error.response.status === 403) {
                    throw new Error('Erro 403, você não está autorizado a acessar esse grupo.')
                }
            } else if (error.request) {
                console.error('Nenhuma Resposta Recebida: ', error.request)
            } else {
                console.error('Erro na Configuração da Requisição')
            }

            throw error
        }
    }
}