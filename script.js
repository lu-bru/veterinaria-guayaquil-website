const navbarLinks = document.getElementById('navbar-links');

function showNavbar(){
    navbarLinks.classList.toggle('navbar--active');
}


const nav = document.getElementById('nav');
const heroText = document.getElementById('hero__text');
const main = document.getElementById('main');

function fixNavbarSurroundings(){
    nav.classList.toggle('nav--fixed');
    heroText.classList.toggle('hero__text--nav-active');
    main.classList.toggle('main--no-scroll');
}


const openMenuIcon = document.getElementById('open-menu-icon');
const closeMenuIcon = document.getElementById('close-menu-icon');

function toggleNavbarIcon(){
    openMenuIcon.classList.toggle('navbar-toggler--hidden');
    openMenuIcon.classList.toggle('navbar-toggler--block');
    closeMenuIcon.classList.toggle('navbar-toggler--block');
    closeMenuIcon.classList.toggle('navbar-toggler--hidden'); 
}


function toggleNavbar() {
    showNavbar();
    fixNavbarSurroundings();
    toggleNavbarIcon();  
}


openMenuIcon.addEventListener('click', toggleNavbar);
closeMenuIcon.addEventListener('click', toggleNavbar);


const navbarLink = document.querySelectorAll('.navbar__link--mobile');
const numNavbarLink = navbarLink.length;

for (var link = 0; link < numNavbarLink; link++) {
    navbarLink[link].addEventListener('click', toggleNavbar);
}