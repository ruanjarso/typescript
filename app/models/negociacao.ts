export class Negociacao{

    constructor(
        private _data: Date,          //|  Aqui simplificamos o código retirando os atributos e colocando-os dentro construtor e simplificamos mais ainda
        public readonly quantidade: number,  //|  retirando os "getters" de cada um dos atributos porque colocamos o "readonly" assegurando que niguém
        public readonly valor: number        //|  vai modificar os atributos pois estão somente como leitura. 
     ){}

    
    public get Data() : Date {
        const data = new Date(this._data.getTime()) //Aqui recriamos o "get Data" só que ultilizamos o getTime() para evitar que alguém consiga modificar a data ultilizando o setDate(x) lá no nosso controller.
        return data; 
    }
     

    get volume(): number{
        return this.quantidade * this.valor
    }
}
