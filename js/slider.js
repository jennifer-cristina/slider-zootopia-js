'use strict'

const imagens = [
    {id: '1', url: '../img/zootopia-1.jpg'},
    {id: '2', url: '../img/zootopia-2.png'},
    {id: '3', url: '../img/zootopia-3.jpg'},
    {id: '4', url: '../img/zootopia-4.jpg'},
    {id: '5', url: '../img/zootopia-5.jpg'}
]

const criarSlider = (imagens) => {

    // Cria span anterior
    const slider = document.querySelector('.slider')
    const anteriorButton = document.createElement('span')
    anteriorButton.classList.add('slider-button')
    anteriorButton.id = 'anterior'
    anteriorButton.innerHTML = '&laquo;'

    // Cria a div das imagens
    const sliderContainer = document.createElement('div')
    sliderContainer.classList.add('slider-item-container')
    const slides = imagens.map( item => `
    <div class="slider-item">
        <img src="${item.url}">
    </div>
`)
    sliderContainer.innerHTML = slides.join("")

    // Cria o span proximo
    const proximoButton = document.createElement('span')
    proximoButton.classList.add('slider-button')
    proximoButton.id = 'proximo'
    proximoButton.innerHTML = '&raquo;'

    // Inserido os objetos HTML no DOM (página)
    slider.appendChild(anteriorButton)
    slider.appendChild(sliderContainer)
    slider.appendChild(proximoButton)
}


criarSlider(imagens)

const sliderItemContainer = document.querySelector('.slider-item-container')
let sliderItems = document.querySelectorAll('.slider-item')

const proximoItem = () => {
    const primeiroItem = sliderItems[0]
    sliderItemContainer.appendChild(primeiroItem)
    sliderItems = document.querySelectorAll('.slider-item')
}

const anteriorItem = () => {
    const ultimoItem = sliderItems[sliderItems.length - 1]
    sliderItemContainer.prepend(ultimoItem)
    sliderItems = document.querySelectorAll('.slider-item')
}




setInterval(() => {
    proximoItem()
}, 2500)

document.getElementById('proximo').addEventListener('click', proximoItem)
document.getElementById('anterior').addEventListener('click', anteriorItem)