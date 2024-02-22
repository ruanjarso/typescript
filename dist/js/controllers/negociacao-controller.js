import { Negociacao } from "../models/negociacao.js";
import { Negociacoes } from "../models/negociacoes.js";
export class NegociacaoController {
    constructor() {
        this.negociacoes = new Negociacoes();
        this.inputData = document.querySelector("#data");
        this.inputQuantidade = document.querySelector("#quantidade");
        this.inputValor = document.querySelector("#valor");
    }
    adiciona() {
        const negociacao = this.criaNegociacao();
        this.negociacoes.adiciona(negociacao);
        console.log(this.negociacoes.lista());
        this.limparFormulario();
    }
    criaNegociacao() {
        const exp = /-/g; //expressão regular: é basicamente o que eu quero que seja substituido pela "," que no caso é o '-' 
        const date = new Date(this.inputData.value.replace(exp, ',')); // o replace vai trocar o que tem na minha expressão regular(exp) pela proximo vslor do parametro. 
        const quantidade = parseInt(this.inputQuantidade.value); // convertendo o valor de "quantidade" para Inteiro
        const valor = parseFloat(this.inputValor.value); // convertendo o valor de "valor" para Float
        return new Negociacao(date, quantidade, valor);
    }
    limparFormulario() {
        this.inputData.value = '';
        this.inputQuantidade.value = '';
        this.inputValor.value = '';
        this.inputData.focus();
    }
}
