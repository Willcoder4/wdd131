const nav = document.querySelector('.navigation');
const button = document.querySelector('#menu');

nav.addEventListener('click', () => {
    nav.classList.toggle('show');
    button.classList.toggle('show');
});
