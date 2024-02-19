// number
let idade: number = 30;
let peso: number = 70.5;

// string
let nome: string = "João";
let cidade: string = "São Paulo";

// boolean
let isEstudante: boolean = true;
let isTrabalhando: boolean = false;

// array
let numeros: number[] = [1, 2, 3];
let nomes: string[] = ["João", "Maria", "Pedro"];

// tuple
let pessoa: [string, number] = ["João", 30];
let coordenadas: [number, number] = [10.5, 20.5];

// enum
enum Cor {Vermelho, Verde, Azul};
let corFavorita: Cor = Cor.Verde;
let corCarro: Cor = Cor.Azul;

// any
let valorDesconhecido: any = 4;
valorDesconhecido = "agora é uma string";

// void
function alerta(): void { alert("Alerta!"); }
function log(mensagem: string): void { console.log(mensagem); }

// null e undefined
let u: undefined = undefined;
let n: null = null;

// never
function error(message: string): never { throw new Error(message); }
function loopInfinito(): never { while (true) {} }
