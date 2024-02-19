"use strict";
// Compreendendo a Integração do TypeScript com o DOM
// 1. Você pode usar TypeScript para manipular o DOM, assim como faria com JavaScript.
// Selecionando um elemento
let elemento = document.getElementById('meuElemento');
// 2. TypeScript tem tipos específicos para diferentes tipos de nós do DOM.
// O tipo HTMLElement representa qualquer elemento HTML
let elementoHtml = document.getElementById('meuElemento');
// 3. Você pode usar a asserção de tipo para especificar um tipo mais específico de elemento.
// Aqui estamos dizendo ao TypeScript que 'meuBotao' é um HTMLButtonElement
let meuBotao = document.getElementById('meuBotao');
// 4. Você pode usar TypeScript para adicionar manipuladores de eventos aos elementos do DOM.
// Adicionando um ouvinte de evento de clique a um botão
meuBotao.addEventListener('click', (event) => {
    console.log('Botão clicado!');
});
// Aplicando Tipos e Interfaces para Elementos do DOM
// 1. Você pode usar o tipo 'Element' para representar um elemento genérico do DOM.
let elemento = document.querySelector('.minhaClasse');
// 2. Para elementos específicos, você pode usar tipos como 'HTMLDivElement', 'HTMLSpanElement', etc.
let div = document.querySelector('.minhaDiv');
let span = document.querySelector('.meuSpan');
let meuElemento = {
    id: 'meuId',
    elemento: document.getElementById('meuId')
};
// 4. Você pode usar a interface 'EventListener' para definir a estrutura de um manipulador de eventos.
let meuManipulador = (event) => {
    console.log('Evento disparado!');
};
// 3. Você pode usar comentários JSDoc para documentar funções, classes, etc.
/**
 * Esta função soma dois números.
 * @param a O primeiro número.
 * @param b O segundo número.
 * @returns A soma de a e b.
 */
function somar(a, b) {
    return a + b;
}
// 4. Você pode usar 'TODO' em um comentário para marcar algo que precisa ser feito no futuro.
// TODO: Adicionar manipulação de erro
