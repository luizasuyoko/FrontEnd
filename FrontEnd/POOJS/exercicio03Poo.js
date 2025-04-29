//Atividade 3: Criar uma classe representando uma conta bancária
//aributos: titular, saldo
//métodos depositar, sacar, exibirSaldo

class Conta{
    #titular
    #saldo
    constructor(titular){
        this.#titular = titular;
        this.#saldo = 0; //começa com 0 saldo
    }
    depositar(quantidade){
    if(quantidade>0){
        this.#saldo += quantidade; 
        console.log(`Deposito realizado! Saldo atual: ${this.#saldo}`)
    }else{
        console.log(`Valor inválido!`)
    }
    }
    sacar(quantidade){
        if(quantidade > 0 && quantidade <= this.#saldo){
            this.#saldo -= quantidade;
            console.log(`Saque realizado! Saldo atual: ${this.#saldo}`)
        }else if (quantidade > this.#saldo){ //if else encadeado
            console.log(`Saldo insuficiente!`)
        } else{
            console.log(`Valor inválido!`)
        }
    }
    exibirSaldo(){
        console.log(`titular: ${this.#titular}, Saldo: ${this.#saldo}`)
    }
}

let conta1 = new Conta("João");
conta1.depositar(1000);
conta1.exibirSaldo();
conta1.sacar(500);
conta1.exibirSaldo();
conta1.sacar(600); //erro
conta1.exibirSaldo();