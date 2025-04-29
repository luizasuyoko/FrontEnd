//Atividad 1:Criar uma classe representando um produto
//atributos: nome, preco, estoque
//métodos Vender, repor, exibirInfo()

class Prod{
    //encapsulamento dos atributos 
    #nome
    #preco
    #estoque
    //construtor
    constructor(nome, preco, estoque){
        this.#nome = nome;
        this.#preco = preco;
        this.#estoque = estoque
    }
    //metodos
    vender(quantidade){
        if(this.#estoque>+ quantidade){
            this.#estoque -= quantidade; //(-=)estoque = estoque - quantidade
            console.log(`Venda realizada com sucesso! Estoque atual: ${this.#estoque}`);
        }else{
            console.log(`Estoque insuficiente!, Estoque atual: ${this.#estoque}`);
        }
    }
    repor(quantidade){
        this.#estoque += quantidade; //(+=) estoque = estoque + quantidade
        console.log(`Estoque Reposto! Estoque atual: ${this.#estoque}`);
    }
    exibirInfo(){
        console.log(`Nome: ${this.#nome}, Preco: ${this.#preco}, Estoque: ${this.#estoque}`);
    }
}
//instanciar os objetos 
let prod1 = new Prod("Arroz", 30, 100);
prod1.exibirInfo();
prod1.vender(10);
prod1.exibirInfo();
prod1.vender(200);
prod1.repor(50);
prod1.exibirInfo();
