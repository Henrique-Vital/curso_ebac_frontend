"use strict";
// number
let idade = 30;
let peso = 70.5;
// string
let nome = "João";
let cidade = "São Paulo";
// boolean
let isEstudante = true;
let isTrabalhando = false;
// array
let numeros = [1, 2, 3];
let nomes = ["João", "Maria", "Pedro"];
// tuple
let pessoa = ["João", 30];
let coordenadas = [10.5, 20.5];
// enum
var Cor;
(function (Cor) {
    Cor[Cor["Vermelho"] = 0] = "Vermelho";
    Cor[Cor["Verde"] = 1] = "Verde";
    Cor[Cor["Azul"] = 2] = "Azul";
})(Cor || (Cor = {}));
;
let corFavorita = Cor.Verde;
let corCarro = Cor.Azul;
// any
let valorDesconhecido = 4;
valorDesconhecido = "agora é uma string";
// void
function alerta() { alert("Alerta!"); }
function log(mensagem) { console.log(mensagem); }
// null e undefined
let u = undefined;
let n = null;
// never
function error(message) { throw new Error(message); }
function loopInfinito() { while (true) { } }
