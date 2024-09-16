const formulario = document.querySelector('#formulario');
const campoA = document.querySelector('#campoA');
const campoB = document.querySelector('#campoB');
const mensagem = document.querySelector('#mensagem');

formulario.addEventListener('submit', function(evento) {
    evento.preventDefault();

    if (campoB.value > campoA.value) {
        mensagem.textContent = 'Formulário válido!';
        mensagem.style.color = 'green';
    } else {
        mensagem.textContent = 'Formulário invalido!';
        mensagem.style.color = 'red';
    }
});