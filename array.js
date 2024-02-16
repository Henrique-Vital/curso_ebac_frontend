// Array de objetos representando alunos
const alunos = [
    { nome: 'Andre', nota: 8 },
    { nome: 'Giba', nota: 5 },
    { nome: 'Zico', nota: 7 },
    { nome: 'Cleber', nota: 9 },
    { nome: 'Rosanna', nota: 4 },
    { nome: 'Fernando', nota: 6 },
    { nome: 'Gabriela', nota: 8 },
    { nome: 'Hugo', nota: 7 },
    { nome: 'Isabela', nota: 9 },
];

  // Função para filtrar alunos com nota maior ou igual a 6
function filtrarAlunos(aprovacaoMinima, listaAlunos) {
    return listaAlunos.filter(aluno => aluno.nota >= aprovacaoMinima);
}

  // Exemplo de uso da função
const notaMinima = 6;
const alunosAprovados = filtrarAlunos(notaMinima, alunos);

console.log('Alunos aprovados:');
alunosAprovados.forEach(aluno => {
    console.log(`${aluno.nome}: ${aluno.nota}`);
});
