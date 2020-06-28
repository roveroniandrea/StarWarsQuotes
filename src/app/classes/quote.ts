export class QuoteClass {
    public text: string;
    public characters: string[];
    public likes: number = 0;

    constructor({ text, characters, likes }: { text: string, characters: string[], likes?: number }) {
        this.text = text;
        this.characters = characters;
        this.likes = likes || 0;
    }
}
