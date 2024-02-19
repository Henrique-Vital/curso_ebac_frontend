//Tipos Customizados

//No TypeScript, além dos tipos básicos (number, string, boolean, etc.), você pode criar seus próprios tipos personalizados. Isso é útil quando você quer que um objeto siga uma estrutura específica ou quando quer reutilizar uma estrutura de tipo em vários lugares.

//Você pode criar tipos personalizados usando interface ou type. Aqui estão alguns exemplos:


interface Pessoa {
    nome: string;
    idade: number;
}
let joao: Pessoa = { nome: "João", idade: 21 };

//Neste exemplo, Pessoa é um tipo personalizado que representa um objeto com propriedades nome e idade.


type Ponto = {
    x: number;
    y: number;
}

let ponto1: Ponto = { x: 10, y: 20 };

//Neste exemplo, Ponto é um tipo personalizado que representa um objeto com propriedades x e y.
//Tipos Personalizados com União de Tipos


type StringOuNumero = string | number;

let valor: StringOuNumero = "teste"; // Pode ser uma string
valor = 10; // Ou um número

//Neste exemplo, StringOuNumero é um tipo personalizado que pode ser uma string ou um number.
//Tipos Personalizados com Tipos Literais


type Cor = "vermelho" | "verde" | "azul";
let corFavorita: Cor = "verde"; // Só pode ser "vermelho", "verde" ou "azul"

//Neste exemplo, Cor é um tipo personalizado que só pode ser “vermelho”, “verde” ou “azul”.