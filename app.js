'use strict'

// import imagens from buscarImagem with {type:'json'}

const btnBuscar = document.getElementById('botao')
const main = document.querySelector('main')
btnBuscar.addEventListener('click', criarImagens)


async function criarImagens(){
    const raca = document.getElementById('search').value
    const imagens = await buscarImagem(raca)
    main.replaceChildren()    
    imagens.forEach((url) => {
        const img = document.createElement('img')
        img.src = url

        main.appendChild(img)
    
    })
}

async function buscarImagem(raca){
    const url = `https://dog.ceo/api/breed/${raca}/images`
    const response = await fetch(url)
    const imagens = await response.json()
    return imagens.message
}