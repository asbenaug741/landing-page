const menu = document.querySelector('.menu input');
const nav = document.querySelector('nav ul');

menu.addEventListener('click', () => {
    nav.classList.toggle('slide');
    menu.classList.toggle('slide');
});




