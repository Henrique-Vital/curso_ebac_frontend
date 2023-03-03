$(document).ready(function(){
    $('#telefone').mask('(00) 0000-0000')
    $('#celular').mask('(00) 00000-0000')
    $('#cpf').mask('000.000.000-00')
    $('#cep').mask('00000-000') 

    $('form').validate({
        rules: {
            nome: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            celular: {
                required: true
            },
            cpf: {
                required: true
            },
            endereco: {
                required: true
            },
            cep: {
                required: true
            }
        },
        messages: {
            nome: 'Por favor, insira o seu nome',
            email: 'Por favor, insira o seu e-mail',
            celular: 'Por favor, insira o numero do seu celular',
            cpf: 'Por favor, insira o numero do seu cpf',
            endereco: 'Por favor, insira o seu endereço',
            cep: 'Por favor, insira o numero do seu cep',
        },
        submitHandler: function(form) {
            console.log(form)
        },
        invalidHandler: function(evento, validador) {
            let camposIncorretos = validador.numberOfInvalids();
            if (camposIncorretos) {
                alert( `Existem ${camposIncorretos} campos incorretros ou não preenchidos.`)
            }
        }
    });
});


