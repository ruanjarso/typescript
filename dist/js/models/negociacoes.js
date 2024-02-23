export class Negociacoes {
    constructor() {
        this.negociacoes = []; //Fazer Negociacao[] é a mesma coisa que Array<Negociacao>, É um atalho que o TypeScript oferece para escrevermos menos.
    }
    adiciona(negociacao) {
        this.negociacoes.push(negociacao);
    }
    lista() {
        return this.negociacoes;
    }
}
