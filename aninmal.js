// Classe de uma abstração (Classe base)
class Animal {
    constructor(nome) {
        this.nome = nome;
    }

    emitirSom() {
        return "O animal está emitindo um som.";
    }
}

// Classes herdeiras da classe Animal
class Cachorro extends Animal {
    latir() {
        return this.nome + " está latindo.";
    }
}

class Gato extends Animal {
    miar() {
        return this.nome + " está miando.";
    }
}

// Criando instâncias de objetos
let cachorro1 = new Cachorro("Rex");
let gato1 = new Gato("Whiskers");
let cachorro2 = new Cachorro("Buddy");

// Testando os métodos
console.log(cachorro1.emitirSom()); // Saída: "O animal está emitindo um som."
console.log(gato1.emitirSom()); // Saída: "O animal está emitindo um som."
console.log(cachorro2.latir()); // Saída: "Buddy está latindo."
