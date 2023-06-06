const navbar = document.querySelector('.header');
window.onscroll = () => {
    if (window.scrollY > 100) {
        navbar.classList.add('header-bg');
    } else {
        navbar.classList.remove('header-bg');
    }
};