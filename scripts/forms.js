/**
 * Verifica a validade do e-mail de acordo com a sua forma.
 * 
 * @param {String} email endereço de e-mail a ser válidado.
 * @returns {Boolean} true se o e-mail estiver válido, false caso contrário.
 */
const validarEmail = function(email) {
    return /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email)
}

/**
 * Efetua a validação do formulário, devolvendo um vetor de erros caso algum problema de validação ocorra.
 * 
 * @param {HTMLFormElement} form formulário a ser validado.
 * @return {Array<String>} vetor com mensagens de erros (vazio se nenhum problema ocorrer).
 */
const validarFormulario = function(form) {
    let campos = form.querySelectorAll('input, select, textarea'),
        erros = []

    form.classList.add('validado')

    campos.forEach(function(campo){
        let valor = campo.value,
            nome = form.querySelector(`label[for="${campo.id}"]`).innerText.trim()
        if(campo.required && !valor){
            erros.push(`${nome} é de preenchimendo obrigatório!`)
        }
        if(campo.maxLength > 0 && valor.length > campo.maxLength){
            erros.push(`${nome} deve ter no máximo ${campo.maxLength} caracteres`)
        }
        if(campo.type === 'email' && !validarEmail(valor)){
            erros.push(`${nome} não é um e-mail válido!`)
        }
    })

    return erros
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

document.querySelectorAll('form')
    .forEach(function(form) {
        form.addEventListener('submit', function(event){
            let erros = validarFormulario(form),
                erroUL = form.querySelector('ul.erros')
            if(erros.length > 0){
                event.preventDefault()
                if(erroUL){
                    erroUL.innerHTML = ''
                    erros.forEach(function(erro){
                        erroUL.innerHTML += `<li>${erro}</li>`
                    })
                    erroUL.classList.add('mostrar')
                } else {
                    console.error(erros)
                }
            } else {
                erroUL.innerHTML = ''
                erroUL.classList.remove('mostrar')
            }
        }, false)
    })
