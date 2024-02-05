// Classe de uma abstração (Classe base)
class DispositivoEletronico {
    constructor(nome) {
        this.nome = nome;
        this.estaLigado = false;
    }

    ligar() {
        this.estaLigado = true;
        return this.nome + " está ligado.";
    }

    desligar() {
        this.estaLigado = false;
        return this.nome + " está desligado.";
    }
}

// Classes herdeiras da classe DispositivoEletronico
class Smartphone extends DispositivoEletronico {
    enviarMensagem() {
        return "Enviando mensagem do " + this.nome + ".";
    }
}

class SmartTV extends DispositivoEletronico {
    assistirPrograma(programa) {
        return "Assistindo " + programa + " na " + this.nome + ".";
    }
}

// Criando instâncias de objetos
let smartphone1 = new Smartphone("iPhone");
let smartTV1 = new SmartTV("Samsung Smart TV");

// Testando os métodos
console.log(smartphone1.ligar()); // Saída: "iPhone está ligado."
console.log(smartphone1.enviarMensagem()); // Saída: "Enviando mensagem do iPhone."
console.log(smartTV1.assistirPrograma("Netflix")); // Saída: "Assistindo Netflix na Samsung Smart TV."
console.log(smartTV1.desligar()); // Saída: "Samsung Smart TV está desligado."
