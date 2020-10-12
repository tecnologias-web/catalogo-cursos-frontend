const drop = document.querySelector('.dropdown-menu')

document.addEventListener('click' , (event) => {
    let elemento = event.target
    if(elemento.classList.contains('dropdown-button')){
        drop.classList.add('ativo')
    } else {
        drop.classList.remove('ativo')
    }
})