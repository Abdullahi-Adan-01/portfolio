const navMenu = document.getElementById('nav-menu'),
    toggleMenu = document.getElementById('toggle-menu'),
    closeMenu = document.getElementById('close-menu')

toggleMenu.addEventListener('click', () => {
    navMenu.classList.toggle('show')


})
closeMenu.addEventListener('click', () => {
    navMenu.classList.remove('show')


})
// Scroll to section and hide navbar when a link is clicked
document.addEventListener('click', (event) => {
    if (event.target.matches('.nav__link')) {
        event.preventDefault();
        const targetId = event.target.getAttribute('href');
        document.querySelector(targetId).scrollIntoView({ behavior: 'smooth' });
        navMenu.classList.remove('show');
    }
});