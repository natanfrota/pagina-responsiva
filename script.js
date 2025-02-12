let menuIcon = document.querySelector('.material-symbols-outlined');
let menu = document.querySelector('.menu');

menuIcon.addEventListener('click', () => {
    menu.classList.toggle('menu-display-visible');
})