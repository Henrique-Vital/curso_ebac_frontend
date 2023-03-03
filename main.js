let linhas = '';

$(document).ready(function() {
    $('#form-atividade').on('submit', function(e) {
        e.preventDefault();
        const inputTarefaFazer = $('#tarefa-fazer');
        
        let linha = '';
        linha += `<li>${inputTarefaFazer.val()}</li>`;
        
        linhas += linha;

        const corpoTabela = $('tbody');
        corpoTabela.html(linhas);

        inputTarefaFazer.val('');
        $('li').click(function() {
            $(this).addClass('item-completado');
        });
        
    });
});

