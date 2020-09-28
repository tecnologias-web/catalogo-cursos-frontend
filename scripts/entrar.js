const form = document.querySelector('form')

form.addEventListener('submit', function(event){
    let erroUL = form.querySelector('ul.erros'),
        usuario = form.querySelector('input[name="usuario"]').value,
        senha = form.querySelector('input[name="senha"]').value
    
    if(erroUL.innerHTML) {
        event.preventDefault()
        return
    } 

    if(usuario === 'admin' && senha === 'teste123*') {
        alert('Você logou com sucesso!');
    } else {
        erroUL.innerHTML += `<li>Usuário e/ou senha incorretos!</li>`
        erroUL.classList.add('mostrar')
        event.preventDefault()
    }
})