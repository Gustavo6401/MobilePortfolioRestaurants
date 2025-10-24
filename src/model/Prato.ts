export default class Prato {
    private category: string
    private name: string
    private preco: number
    private descricao: string

    constructor(category: string, name: string, preco: number, descricao: string) {
        this.category = category
        this.name = name
        this.preco = preco
        this.descricao = descricao
    }

    // Getters
    public getCategory(): string {
        return this.category;
    }

    public getName(): string {
        return this.name;
    }

    public getPreco(): number {
        return this.preco;
    }

    public getDescricao(): string {
        return this.descricao;
    }

    // Setters
    public setCategory(category: string): void {
        this.category = category;
    }

    public setName(name: string): void {
        this.name = name;
    }

    public setPreco(preco: number): void {
        this.preco = preco;
    }

    public setDescricao(descricao: string): void {
        this.descricao = descricao;
    }
}