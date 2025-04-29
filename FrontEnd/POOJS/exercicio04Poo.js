//Atividade 4: Criar um sistema de funcionários
//atributos: nome, cargo, salario
//métodos: aumentarSalario, exibirInfo

class  func{
    #nome
    #cargo
    #salario
    constructor(nome, cargo, salario){
        this.#nome = nome;
        this.#cargo = cargo;
        this.#salario = salario;
    }
    aumentarSalario(porcentagem){
        if(porcentagem > 0){
            this.#salario += this.#salario * (porcentagem / 100); //aumentar o salario
            console.log(`aumento de ${porcentagem}%!`)
        }else{
            console.log(`Valor inválido!`)
        }
    }

    // getters and setters 
    set setCargo(cargo){
        this.#cargo = cargo;
    }

    exibirInfo(){
        console.log(`Nome: ${this.#nome}, Cargo: ${this.#cargo}, Salario: ${this.#salario}`)
    }
}

let func1 = new func("João", "Gerente", 5000);
func1.exibirInfo();
func1.setCargo = "Diretor"; //atualizar o cargo 
func1.aumentarSalario(30);
func1.exibirInfo();