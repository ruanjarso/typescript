export class Negociacao {
    constructor(_data, //|  Aqui simplificamos o código retirando os atributos e colocando-os dentro construtor e simplificamos mais ainda
    quantidade, //|  retirando os "getters" de cada um dos atributos porque colocamos o "readonly" assegurando que niguém
    valor //|  vai modificar os atributos pois estão somente como leitura. 
    ) {
        this._data = _data;
        this.quantidade = quantidade;
        this.valor = valor;
    }
    get Data() {
        const data = new Date(this._data.getTime()); //Aqui recriamos o "get Data" só que ultimlizamos o getTime() para evitar que alguém consiga modificar a data ultilizando o setDate(x) lá no nosso controller.
        return data;
    }
    get volume() {
        return this.quantidade * this.valor;
    }
}
