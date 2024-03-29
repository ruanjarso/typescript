import { Negociacao } from "../models/negociacao.js";
import { Negociacoes } from "../models/negociacoes.js";
import { NegociaçõesView } from "../views/negociações-view.js";

export class NegociacaoController {

    private inputData: HTMLInputElement; //        |    para solucionarmos o problema de tipagem
    private inputQuantidade: HTMLInputElement; //  |    resolvemos colocar esses atributos com o tipo 
    private inputValor: HTMLInputElement; //       |    "HTMLInputElement".
    private negociacoes: Negociacoes = new Negociacoes();
    private negociacoesView = new NegociaçõesView('#negociacoesView')

    constructor() {
        this.inputData = document.querySelector("#data")
        this.inputQuantidade = document.querySelector("#quantidade")
        this.inputValor = document.querySelector("#valor")
        this.negociacoesView.update(this.negociacoes)
    }

    adiciona(): void{
        const negociacao =  this.criaNegociacao();
        this.negociacoes.adiciona(negociacao);
        this.negociacoesView.update(this.negociacoes)
        this.limparFormulario();
    }
    
    criaNegociacao(): Negociacao{
        const exp = /-/g;     //expressão regular: é basicamente o que eu quero que seja substituido pela "," que no caso é o '-' 
        const date = new Date(this.inputData.value.replace(exp, ','))    // o replace vai trocar o que tem na minha expressão regular(exp) pela proximo vslor do parametro. 
        const quantidade = parseInt(this.inputQuantidade.value);    // convertendo o valor de "quantidade" para Inteiro
        const valor = parseFloat(this.inputValor.value)    // convertendo o valor de "valor" para Float
    
        return new Negociacao(date,quantidade,valor);
    }

    limparFormulario(): void{
        this.inputData.value = '';
        this.inputQuantidade.value = '';
        this.inputValor.value = '';
        this.inputData.focus();
    }
}