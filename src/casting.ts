//Técnicas de Conversão de Tipos no TypeScript

//No TypeScript, você pode converter tipos usando as seguintes técnicas:

//Conversão de Número para String: Você pode usar o método toString() para converter um número em uma string.


let num: number = 10;
let str: string = num.toString(); // '10'

//Conversão de String para Número: Você pode usar o operador + ou a função global Number() para converter uma string em um número.

let str: string = "10";
let num: number = +str; // 10
let num2: number = Number(str); // 10


//Conversão para Boolean: Você pode usar a função global Boolean() ou o operador !! para converter um valor em um booleano.

let str: string = "hello";
let bool: boolean = Boolean(str); // true
let bool2: boolean = !!str; // true


//Conversão usando Type Assertion: Você pode usar a asserção de tipo para dizer ao TypeScript que você sabe que um valor é de um tipo específico.


let valor: any = "hello";
let str: string = <string>valor; // 'hello'
let str2: string = valor as string; // 'hello'


//Evitando Erros de Conversão de Tipos e Problemas de Segurança

//Verifique Antes de Converter: Sempre verifique se um valor pode ser convertido com segurança antes de tentar a conversão.

let str: string = "10";
if (!isNaN(Number(str))) {
    let num: number = Number(str);
}


//Use Type Guards: Type guards podem ajudar a garantir que um valor é do tipo correto antes de tentar operações específicas de tipo.

function isString(test: any): test is string {
    return typeof test === "string";
}

let str: string = "hello";
if (isString(str)) {
    console.log(str.toUpperCase()); // HELLO
}


//Evite o Tipo any: O tipo any pode levar a erros de tempo de execução, pois ele desativa a verificação de tipo do TypeScript. Use tipos mais específicos sempre que possível.

let valor: unknown = "hello";
if (typeof valor === "string") {
    console.log(valor.toUpperCase()); // HELLO
}


//Use Type Assertion com Cuidado: A asserção de tipo pode ser útil, mas também pode levar a erros se usada incorretamente. Sempre verifique se uma asserção de tipo é segura antes de usá-la.

let valor: any = "hello";
if (typeof valor === "string") {
    let str: string = valor as string;
    console.log(str.toUpperCase()); // HELLO
}
