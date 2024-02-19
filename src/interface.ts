// Compreendendo o Conceito de Interfaces e Seu Uso na Programação

// 1. Interfaces são estruturas que definem contratos dentro do seu código. Elas definem a sintaxe que qualquer entidade deve aderir.

interface Pessoa {
    nome: string;
    idade: number;
}

// 2. Interfaces são usadas para definir tipos personalizados sem definir uma implementação.

interface Figura {
    cor: string;
    desenhar(): void;
}

// 3. Interfaces podem ser usadas para definir um tipo para arrays ou outros objetos complexos.

interface StringArray {
    [index: number]: string;
}

// 4. Interfaces podem ser usadas para definir um tipo para funções.

interface FuncaoSoma {
    (a: number, b: number): number;
}

// Implementando Interfaces em Classes

// 1. Uma classe implementa uma interface para garantir que ela adere ao contrato definido pela interface.

class Pessoa implements Pessoa {
    nome: string;
    idade: number;
}

// 2. Uma classe pode implementar várias interfaces.

interface Trabalhador {
    profissao: string;
}

class Pessoa implements Pessoa, Trabalhador {
    nome: string;
    idade: number;
    profissao: string;
}

// 3. Se uma classe não implementar todos os membros de uma interface, o TypeScript retornará um erro.

interface Animal {
    nome: string;
    fazerSom(): void;
}

class Cachorro implements Animal {
    nome: string;
    // O TypeScript retornará um erro porque a função 'fazerSom' não foi implementada
}

// 4. Uma classe pode implementar uma interface que define um tipo para funções.

interface Comparavel {
    comparar(a: any, b: any): number;
}

class ComparadorDeNumeros implements Comparavel {
    comparar(a: number, b: number): number {
        return a - b;
    }
}

// Entendendo a Flexibilidade das Interfaces

// 1. Interfaces podem estender outras interfaces, criando uma cadeia de interfaces.

interface Animal {
    nome: string;
}

interface Mamifero extends Animal {
    temPelos: boolean;
}

// 2. Uma interface pode estender várias interfaces.

interface SerVivo {
    idade: number;
}

interface Humano extends Animal, SerVivo {
    falar(): void;
}

// 3. Interfaces podem ter propriedades opcionais, marcadas com um '?'.

interface Carro {
    marca: string;
    modelo: string;
    ano?: number; // Propriedade opcional
}

// 4. Interfaces podem ter propriedades somente leitura, marcadas com 'readonly'.

interface Ponto {
    readonly x: number;
    readonly y: number;
}
