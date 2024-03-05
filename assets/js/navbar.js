let btnToggleNavbar = document.getElementById('small_png2');
let navbarAnimation =  document.getElementById('navbar');

function toggleNavbar() {   
    navbarAnimation.classList.toggle('open');
}

btnToggleNavbar.addEventListener('click',toggleNavbar);

