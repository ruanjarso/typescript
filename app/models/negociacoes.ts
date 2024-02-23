import { Negociacao } from "./negociacao.js";

export class Negociacoes{
    private negociacoes: Negociacao[] = []; //Fazer Negociacao[] é a mesma coisa que Array<Negociacao>, É um atalho que o TypeScript oferece para escrevermos menos.

    adiciona(negociacao: Negociacao) {
        this.negociacoes.push(negociacao);
    }

    lista(): ReadonlyArray<Negociacao>{ // o "ReadonlyArray" siginifica que estamos pasando um array somente de leitura, para assegurar que niguem vai modificar a Array principal;  
        return this.negociacoes; 
    }
}

