const menuBurger = document.querySelector('i')
const menu = document.querySelector('.modal')

menuBurger.addEventListener('click', (e) => {
    menu.classList.toggle('change-modal');
    menuBurger.classList.toggle('fa-times');
})