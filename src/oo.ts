// Conceitos Fundamentais de Orientação a Objetos

// 1. Classes: São os "moldes" para criar objetos. Elas definem as propriedades e métodos que um objeto deve ter.

class Carro {
    marca: string;
    modelo: string;

    constructor(marca: string, modelo: string) {
        this.marca = marca;
        this.modelo = modelo;
    }

    acelerar() {
        console.log(this.modelo + ' está acelerando...');
    }
}

// 2. Objetos: São instâncias de uma classe. Eles têm propriedades e métodos definidos pela classe.

let meuCarro = new Carro("Toyota", "Corolla");
meuCarro.acelerar();

// 3. Propriedades: São variáveis associadas a um objeto. Elas mantêm o estado do objeto.

console.log(meuCarro.marca); // Toyota
console.log(meuCarro.modelo); // Corolla

// 4. Métodos: São funções associadas a um objeto. Eles definem o comportamento do objeto.

meuCarro.acelerar(); // Corolla está acelerando...

// Aplicando Modificadores de Acesso e Encapsulamento

// 1. Modificadores de Acesso: São usados para controlar a visibilidade das propriedades e métodos de uma classe.
// Existem três modificadores de acesso: public, private e protected.

class Pessoa {
    public nome: string; // Pode ser acessado de qualquer lugar
    private idade: number; // Só pode ser acessado dentro da classe
    protected cpf: string; // Pode ser acessado dentro da classe e suas subclasses

    constructor(nome: string, idade: number, cpf: string) {
        this.nome = nome;
        this.idade = idade;
        this.cpf = cpf;
    }
}

// 2. Encapsulamento: É o conceito de ocultar os detalhes de implementação de uma classe e permitir o acesso através de métodos.

class ContaBancaria {
    private saldo: number;

    constructor(saldoInicial: number) {
        this.saldo = saldoInicial;
    }

    depositar(valor: number) {
        this.saldo += valor;
    }

    sacar(valor: number) {
        if (valor <= this.saldo) {
            this.saldo -= valor;
            return valor;
        } else {
            return 0;
        }
    }

    consultarSaldo() {
        return this.saldo;
    }
}

// Utilizando Herança e Polimorfismo

// 1. Herança: É o conceito de criar uma nova classe a partir de uma classe existente.

class Animal {
    nome: string;

    constructor(nome: string) {
        this.nome = nome;
    }

    mover(distancia: number) {
        console.log(this.nome + " se moveu " + distancia + " metros.");
    }
}

class Cachorro extends Animal {
    latir() {
        console.log(this.nome + " está latindo...");
    }
}

// 2. Polimorfismo: É o conceito de redefinir métodos em uma subclasse.

class Peixe extends Animal {
    mover(distancia = 0) {
        console.log(this.nome + " nadou " + distancia + " metros.");
    }
}
