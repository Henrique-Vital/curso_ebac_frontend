//Tipagem Implícita vs Explícita

//No TypeScript, a tipagem pode ser tanto implícita quanto explícita.

//Tipagem Implícita: O TypeScript é capaz de inferir o tipo de uma variável quando você a inicializa. Por exemplo:

let numero = 10; // TypeScript infere que 'numero' é do tipo 'number'
let nome = "João"; // TypeScript infere que 'nome' é do tipo 'string'
let isEstudante = true; // TypeScript infere que 'isEstudante' é do tipo 'boolean'
let itens = ["maçã", "banana"]; // TypeScript infere que 'itens' é do tipo 'string[]'

//Tipagem Explícita: Você também pode especificar explicitamente o tipo de uma variável no momento da declaração. Por exemplo:

let numero: number = 10; // 'numero' é explicitamente do tipo 'number'
let nome: string = "João"; // 'nome' é explicitamente do tipo 'string'
let isEstudante: boolean = true; // 'isEstudante' é explicitamente do tipo 'boolean'
let itens: string[] = ["maçã", "banana"]; // 'itens' é explicitamente do tipo 'string[]'

//Declarando Tipos de Argumentos e Retorno em Funções

//No TypeScript, você pode especificar os tipos de argumentos e o tipo de retorno de uma função. Isso torna o código mais legível e seguro. Por exemplo:

function saudacao(nome: string): string {
    return "Olá, " + nome;
}

function somar(a: number, b: number): number {
    return a + b;
}

function isMaiorIdade(idade: number): boolean {
    return idade >= 18;
}

function criarPessoa(nome: string, idade: number): {nome: string, idade: number} {
    return {nome, idade};
}

//Lidando com Diferentes Tipos de Argumentos e Retorno em Funções Às vezes, você pode querer que uma função aceite argumentos de diferentes tipos ou retorne diferentes tipos. Você pode fazer isso usando a união de tipos (|). Por exemplo:


function padrao(valor: string | number): string {
    return valor.toString().padStart(10, '0');
}

function getValor(chave: string | number): any {
    // Implementação da função
}

function processarEntrada(entrada: string | number): string | number {
    // Implementação da função
}

function buscarRegistro(id: string | number): string | null {
    // Implementação da função
}
