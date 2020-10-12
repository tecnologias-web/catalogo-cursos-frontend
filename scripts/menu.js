const drop = document.querySelector('.dropdown-menu'),
      nav = document.querySelector('nav')

document.addEventListener('click' , (event) => {
    let elemento = event.target
    if(elemento.classList.contains('dropdown-button')){
        drop.classList.toggle('ativo')
    } else {
        drop.classList.remove('ativo')
    }

    if(elemento.classList.contains('menu-icone')){
        event.preventDefault()
        nav.classList.toggle('ativo')
    }
})