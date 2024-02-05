// Abstração: Veículo
class Veiculo {
    constructor(marca, modelo) {
        this.marca = marca;
        this.modelo = modelo;
        this.velocidade = 0;
    }

    acelerar() {
        this.velocidade += 10;
        console.log(`${this.marca} ${this.modelo} está acelerando. Velocidade atual: ${this.velocidade} km/h`);
    }

    frear() {
        this.velocidade -= 5;
        console.log(`${this.marca} ${this.modelo} está freando. Velocidade atual: ${this.velocidade} km/h`);
    }
}

// Classe herdeira: Carro
class Carro extends Veiculo {
    constructor(marca, modelo, cor) {
        super(marca, modelo);
        this.cor = cor;
        this.numeroPortas = 4;
    }

    abrirPorta() {
        console.log(`${this.marca} ${this.modelo} abriu uma porta.`);
    }
}

// Classe herdeira: Bicicleta
class Bicicleta extends Veiculo {
    constructor(marca, modelo, tipo) {
        super(marca, modelo);
        this.tipo = tipo;
        this.numeroMarchas = 7;
    }

    trocarMarcha() {
        console.log(`${this.marca} ${this.modelo} trocou a marcha.`);
    }
}

// Criar instâncias
const carro1 = new Carro("Toyota", "Corolla", "Azul");
const bicicleta1 = new Bicicleta("Caloi", "Elite", "Mountain Bike");
const carro2 = new Carro("Honda", "Civic", "Prata");

// Usar métodos
carro1.acelerar();
bicicleta1.trocarMarcha();
carro2.frear();

// Verificar instância
console.log(carro1 instanceof Veiculo); // true
console.log(bicicleta1 instanceof Veiculo); // true
console.log(carro2 instanceof Bicicleta); // false
