"use strict";
//Técnicas de Conversão de Tipos no TypeScript
//No TypeScript, você pode converter tipos usando as seguintes técnicas:
//Conversão de Número para String: Você pode usar o método toString() para converter um número em uma string.
let num = 10;
let str = num.toString(); // '10'
//Conversão de String para Número: Você pode usar o operador + ou a função global Number() para converter uma string em um número.
let str = "10";
let num = +str; // 10
let num2 = Number(str); // 10
//Conversão para Boolean: Você pode usar a função global Boolean() ou o operador !! para converter um valor em um booleano.
let str = "hello";
let bool = Boolean(str); // true
let bool2 = !!str; // true
//Conversão usando Type Assertion: Você pode usar a asserção de tipo para dizer ao TypeScript que você sabe que um valor é de um tipo específico.
let valor = "hello";
let str = valor; // 'hello'
let str2 = valor; // 'hello'
//Evitando Erros de Conversão de Tipos e Problemas de Segurança
//Verifique Antes de Converter: Sempre verifique se um valor pode ser convertido com segurança antes de tentar a conversão.
let str = "10";
if (!isNaN(Number(str))) {
    let num = Number(str);
}
//Use Type Guards: Type guards podem ajudar a garantir que um valor é do tipo correto antes de tentar operações específicas de tipo.
function isString(test) {
    return typeof test === "string";
}
let str = "hello";
if (isString(str)) {
    console.log(str.toUpperCase()); // HELLO
}
//Evite o Tipo any: O tipo any pode levar a erros de tempo de execução, pois ele desativa a verificação de tipo do TypeScript. Use tipos mais específicos sempre que possível.
let valor = "hello";
if (typeof valor === "string") {
    console.log(valor.toUpperCase()); // HELLO
}
//Use Type Assertion com Cuidado: A asserção de tipo pode ser útil, mas também pode levar a erros se usada incorretamente. Sempre verifique se uma asserção de tipo é segura antes de usá-la.
let valor = "hello";
if (typeof valor === "string") {
    let str = valor;
    console.log(str.toUpperCase()); // HELLO
}
