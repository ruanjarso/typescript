import { Negociacao } from "./negociacao.js";

export class Negociacoes{
    private negociacoes: Array<Negociacao> = [];

    adiciona(negociacao: Negociacao) {
        this.negociacoes.push(negociacao);
    }

    lista(): ReadonlyArray<Negociacao>{ // o "ReadonlyArray" siginifica que estamos pasando um array somente de leitura, para assegurar que niguem vai modificar a Array principal;  
        return this.negociacoes; 
    }
}

