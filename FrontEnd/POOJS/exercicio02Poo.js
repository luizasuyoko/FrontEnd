
//Atividade 2: Criar uma classe representando um veículo
//atributos: marca, modelo, ano
//métodos exibirInfo()

class veiculo{
    #marca
    #modelo
    #ano

    constructor(marca, modelo, ano){
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
    }
    exibirInfo(){
        console.log(`Marca: ${this.#marca}, Modelo: ${this.#modelo}, Ano: ${this.#ano}`)
    }
}
class carro extends veiculo {
    #Portas

    constructor(marca, modelo, ano, Portas){
        super(marca, modelo, ano);
        this.#Portas = Portas;
    }
    exibirInfo(){
        super.exibirInfo();
        console.log(`Quantidade de portas: ${this.#Portas}`)
    }
}

let carro1 = new carro("toyota", "fusca", 1990, 4);
carro1.exibirInfo();