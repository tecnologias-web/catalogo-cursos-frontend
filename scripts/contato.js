const dados = {
    nome: 'Pessoa Contato',
    email: 'email@email.com',
    assunto: '',
    mensagem: 'bla-bla-bla-bla-bla-bla-bla-bla-bla-bla-'+
              'bla-bla-bla-bla-bla-bla-bla-bla-bla-bla-'+
              'bla-bla-bla-bla-bla-bla-bla-bla-bla-bla-'+
              'bla-bla-bla-bla-bla-bla-bla-bla-bla-bla-'+
              'bla-bla-bla-bla',
    conheceu: 'TV'
}, erros = []

if(!dados.nome){
    erros.push('Nome é de preenchimento obrigatório!')
}
if(!validarTamanho(dados.nome, 30)){
    erros.push('Nome deve ter no máximo 30 caracteres!')
}

if(!dados.email){
    erros.push('E-Mail é de preenchimento obrigatório!')
}
if(!dados.assunto){
    erros.push('Assunto é de preenchimento obrigatório!')
}
if(!dados.mensagem){
    erros.push('Mensagem é de preenchimento obrigatório!')
}
if(!validarTamanho(dados.mensagem, 120)){
    erros.push('Mensagem deve ter no máximo 120 caracteres!')
}

if(erros.length > 0){
    imprimirErros(erros)
} else {
    console.log('Formulário preenchido com sucesso!')
}