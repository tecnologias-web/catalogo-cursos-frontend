document.querySelectorAll('ul.matriz-curricular > li')
    .forEach(function(li){
        li.addEventListener('click', function(event){
            if(li.classList.contains('ativo')){
                li.classList.remove('ativo')
            } else {
                let liAtivo = li.parentNode.querySelector('li.ativo')
                if(liAtivo)
                    liAtivo.classList.remove('ativo')
                li.classList.add('ativo')
            }
        })
    })