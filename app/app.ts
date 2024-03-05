import { NegociacaoController } from "./controllers/negociacao-controller.js";
import { NegociaçõesView } from "./views/negociações-view.js";

const controller = new NegociacaoController();
const form = document.querySelector('.form');
form.addEventListener('submit', event => {
    event.preventDefault(); //para não atualizar a página ao alicar no botão que submete o formulário
    controller.adiciona();
});
