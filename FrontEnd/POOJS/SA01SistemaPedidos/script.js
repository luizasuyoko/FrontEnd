// Criar a lógica do sistema de pedidos 

//modelar classe

class clientes{
    //atributos encapsulado
    #nome
    #cpf
    #id
    constructor(id, nome, cpf){
        this.#id = id;
        this.#nome = nome;
        this.#cpf = cpf;
    }
    //metodos getters and setters
    getId(){
        return this.#id;
    }
    getNome(){
        return this.#nome;
    }
    getCpf(){
        return this.#cpf;
    }
}

class Produto{
    //atributos encapsulados
    #id 
    #nome 
    #preco
    constructor(id, nome, preco){
        this.#id = id;
        this.#nome = nome;
        this.#preco = preco;
    }

    //metodos publicos
    getId(){
        return this.#id;
    }
    getNome(){
        return this.#nome;
    }
    getCpf(){
        return this.#preco;
    }
}

class Pedido{
    //atributos encapsulados
    #id 
    #cliente
    #itens
    #desconto
    #valor

    constructor(id, cliente, itens, desconto){
        this.#id = id;
        this.#cliente - cliente;
        this.#itens = itens;
        this.#desconto = desconto;
        this.valor = this.calcularValorTotal();
    }
    //metodos publicos
    getId(){
        return this.#id;
    }
    getCliente(){
        return this.#cliente;
    }
    getItens(){
        return this.#itens;
    }
    getDesconto(){
        return this.#desconto;
    }
    getValor(){
        return this.#valor;
    }

    calcularValorTotal(){
        let total = this.#itens.reduce((acc, item) => acc + item.produto.getPreco() * item.quantidade);
        total -= ((this.#desconto/100) * total);
    }
}

//criar a classe controller //gerenciar os pedidos 

class sistemaPedidos{
    constructor(){
        this.clientes = [];
        this.produtos = [];
        this.pedidos = [];
    }


    cadastrarCliente(){
        const nome = document.getElementById("nomeCliente").value;
        const cpf = document.getElementById("cpfCliente").value;
        if (!nome.trim() || !cpf.trim()) {
            alert("Preencha todos os campos!");
            return;
        }
        const cliente =  new Cliente(this.clientes.length + 1, nome, cpf);
        //adicionar o cliente ao array de clientes
        this.clientes.push(clientes);
        //limpar form
        document.getElementById("nomeCliente").value = "";
        document.getElementById("cpfCliente").value = "";
        //atualizar a lista de clientes
        this.atualizarListaClientes();
    }
    atualizarListaClientes(){
        const lista = document.getElementById("listaClientes");
        lista.innerHTML = "";
        const select = document.getElementById("selectCliente");
        select.innerHTML = "<option value=''>Selecione um cliente</option>";
        //percorrer o meu array de clientes
        this.clientes.forEach(cliente => {
            const li = document.createElement("li");
            li.textContent = cliente.getNome();
            lista.appendChild(li);
            const option = document.createElement("option");
            option.value = cliente.getId();
            option.textContent = cliente.getNome();
            select.appendChild(option);
        });
    }
}

const sistema = new sistemaPedidos();
//adicionar o evento de click no botao
