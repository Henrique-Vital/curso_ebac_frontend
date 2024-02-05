// Classe de uma abstração (Classe base)
class Funcionario {
    constructor(nome, cargo) {
        this.nome = nome;
        this.cargo = cargo;
    }

    apresentar() {
        return "Olá, meu nome é " + this.nome + " e eu trabalho como " + this.cargo + ".";
    }
}

// Classes herdeiras da classe Funcionario
class Gerente extends Funcionario {
    administrar() {
        return "Estou administrando as operações da empresa.";
    }
}

class Desenvolvedor extends Funcionario {
    codificar() {
        return "Estou codificando uma nova funcionalidade.";
    }
}

// Criando instâncias de objetos
let gerente1 = new Gerente("João", "Gerente de Projetos");
let desenvolvedor1 = new Desenvolvedor("Maria", "Desenvolvedora Front-end");

// Testando os métodos
console.log(gerente1.apresentar()); // Saída: "Olá, meu nome é João e eu trabalho como Gerente de Projetos."
console.log(desenvolvedor1.apresentar()); // Saída: "Olá, meu nome é Maria e eu trabalho como Desenvolvedora Front-end."
console.log(gerente1.administrar()); // Saída: "Estou administrando as operações da empresa."
console.log(desenvolvedor1.codificar()); // Saída: "Estou codificando uma nova funcionalidade."
