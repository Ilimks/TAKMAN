let popup = document.querySelector('.popup')

let popupToggle = ()=>{
    popup.classList.toggle('active')
}

let ul = document.querySelector('.header__nav__list')
let network = document.querySelector('.social__network')
let btn = document.querySelector('.header__nav__btn')
let bur = document.querySelector('.burger')

let showBurger = ()=>{
    ul.classList.toggle('active')
    network.classList.toggle('active')
    btn.classList.toggle('active')
    bur.classList.toggle('active')
}