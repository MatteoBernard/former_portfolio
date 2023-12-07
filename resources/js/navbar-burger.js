document.addEventListener('DOMContentLoaded', function() {
    const navbarBurger = document.querySelector('.navbar-burger');
    const navbarMenu = document.querySelector('.navbar-menu');

    let ouvert = false;

    navbarBurger.addEventListener('click', function() {
        ouvert = !ouvert;

        navbarBurger.classList.toggle('is-active', ouvert);
        navbarMenu.classList.toggle('is-active', ouvert);
        navbarMenu.classList.toggle('is-hidden-mobile', !ouvert);
        navbarMenu.classList.toggle('is-hidden-tablet-only', !ouvert);
    });
});



