import Prato from "./Prato"

export default class Section {
    private title: string
    private item: Array<Prato>

    constructor(title: string, item: Array<Prato>) {
        this.title = title
        this.item = item
    }

    // Getters
    public getTitle(): string {
        return this.title;
    }

    public getItem(): Array<Prato> {
        return this.item;
    }

    // Setters
    public setTitle(title: string): void {
        this.title = title;
    }

    public setItem(item: Array<Prato>): void {
        this.item = item;
    }
}