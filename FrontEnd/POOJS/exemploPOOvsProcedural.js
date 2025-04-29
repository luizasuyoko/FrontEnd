//diferença entre POO e Procedural(estrutural)

//procedural
// declaração de variável
let produto1 = {
    nome: "Celular",
    preco: 1000,
    desconto: function(){
        return this.preco *0.1;
    }
}//coleção 

let produto2 = {
    nome: "Camera Digital",
    preco: 5000,
    desconto: function(){
        return this.preco *0.1;
    }
}//coleção 




// POO - classe de produtos

class Produto{
    //atributos
    #nome; //ao colocar o # fica privado
    #preco;

    constructor(nome, preco){
        this.nome = nome;
        this.preco = preco;
    }
    //criar metodos getter e setter
    get getNome(){
        return this.#nome;
    }
    get getPreco(){
        return this.#preco;
    }
    desconto(){
        return this.getPreco *0.1; //erro ao chamar o this.preco, pois o atributo é privado
    }
}

// instânciar um objeto
let p1 = new Produto("Impessora", 2000);
let p2 = new Produto("Tablet", 1500);



//exemplos de uso de POO
class Pessoa{
    //atributos
    #nome;
    #idade;
    #cpf;

    //construtor
    constructor(nome, idade, cpf){
        this.#nome = nome;
        this.#idade = idade;
        this.#cpf = cpf;
    }
    //metodos publicos
    get getNome(){
        return this.#nome;
    }
    get getIdade(){
        return this.#idade;
    }
    get getCpf(){
        return this.#cpf;
    }

    set setIdade(idade){
        this.#idade = idade;
    }
    //metodos info
    exibirInfo(){
        console.log(`Nome: ${this.getNome} \nIdade: ${this.getIdade} \nCPF: ${this.getCpf}`)
    }
}

let pessoa1 = new Pessoa("João", 30, "123.456.789-00");
let pessoa2 = new Pessoa("maria", 35, "987.654.321-00");

pessoa1.exibirInfo();
pessoa2.exibirInfo();

pessoa1.setIdade = 31; //atualizar a idade da pessoa1
pessoa1.exibirInfo(); //exibir as informações atualizadas

//herança (extends)

class Funcionario extends Pessoa {
    //atributos
    #cargo;
    #salario;

    //construtor
    constructor(nome, idade, cpf, cargo, salario){
        super(nome, idade, cpf); //chama o construtor da superclasse
        this.#cargo = cargo;
        this.#salario = salario;
    }
    //metodos 
    get gatCargo(){
        return this.#cargo;
    }
    get getSalario(){
        return this.#salario;    
    }
    set setSalario(salario){
        this.#salario = salario;
    }
    set setCargo(cargo){
        this.#cargo = cargo;
    }

    exibirInfo(){
        super.exibirInfo(); //chama da superclasse
        console.log(`Cargo: ${this.getCargo} \nSalário: ${this.getSalario}`);
    }
}

let funcionario1 = new Funcionario("Pedro", 27, "321.654.987-00","Motorista", 3000);

funcionario1.exibirInfo(); 
funcionario1.setSalario = 3500;
funcionario1.exibirInfo(); //exibir as informações atualizadas 