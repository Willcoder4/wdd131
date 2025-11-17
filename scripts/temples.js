const nav = document.querySelector('.menu-toggle');
const menuItem = document.querySelector('.menu')

nav.addEventListener('click', () => {
    nav.classList.toggle('active');
    menuItem.classList.toggle('active');
});
