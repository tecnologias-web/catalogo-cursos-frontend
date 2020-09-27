const dados = {
    usuario: 'usuario',
    senha: 'teste1'
}, erros = []

if(!dados.usuario) {
    erros.push('Usuário é de preenchimento obrigatório!')
}

if(!dados.senha) {
    erros.push('Senha é de preenchimento obrigatório!')
}
if(validarTamanho(dados.senha, 8, 5)){
    erros.push('Senhas devem ter entre 5 e 9 caracteres!')
}

if(!validarUsuarioSenha(dados.usuario, dados.senha)){
    erros.push('Usuário ou senha incorretos!')
}
if(erros.length > 0){
    imprimirErros(erros)
} else {
    console.log('Formulário preenchido com sucesso!')
}