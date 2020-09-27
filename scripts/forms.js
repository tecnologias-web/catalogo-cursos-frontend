/**
 * Testa o tamanho máximo de uma string e retorna true ou false se estiver dentro dos limites passados.
 * 
 * Caso um dos limites não seja passado, será conisderado tamanho ilimitado para esse caso.
 * 
 * @param {String} conteudo conteúdo do campo texto.
 * @param {Number} tamanhoMax tamanho máximo a ser testado.
 * @param {Number} tamanhoMin tamanho mínimo a ser testado.
 * @returns {Boolean} true se valido, false caso contrário.
 */
const validarTamanho = function(conteudo, tamanhoMax, tamanhoMin) {
    let valido = true,
        tamanho = conteudo ? conteudo.length : 0;
    if(tamanhoMax) {
        valido &= tamanho <= tamanhoMax;
    }
    if(tamanhoMin) {
        valido &= tamanho >= tamanhoMin;
    }
    return valido;
}

/**
 * Imprime um vetor de erros em uma lista utilizando o console do JS
 * 
 * @param {Array<String>} erros vetor de erros para imprimir.
 */
const imprimirErros = function(erros) {
    console.error('Erros ao validar o formulário:');
    erros.forEach(function(erro){
        console.error(`-> ${erro}`)
    })
}

/**
 * Valida o nome do usuário e sua senha para pemitir a entrada na área administrativa.
 * 
 * @param {String} usuario nome de usuário.
 * @param {String} senha senha do usuário.
 * @returns {Boolean} true se validado, false caso contrário.
 */
const validarUsuarioSenha = function(usuario, senha){
    return usuario === 'admin' && senha === 'teste123*'
}