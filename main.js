let popup = document.querySelector('.popup')

let popupToggle = ()=>{
    popup.classList.toggle('active')
}

let header__nav__list = document.querySelector('header__nav header__nav__list')
let burger = document.querySelector('.burger')

let ShowBurger = ()=>{
    header__nav__list.classList.toggle('active')
    burger.classList.toggle('active')
}