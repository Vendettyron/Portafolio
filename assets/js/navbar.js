// hacer que la pagina siempre cargue desde arriba
window.onload = function() {
    window.scrollTo(0, 0);
  };

//ABRIR Y CERRAR NAVBAR
let btnToggleNavbar = document.getElementById('small_png2');
let navbarAnimation =  document.getElementById('navbar');

function toggleNavbar() {   
    navbarAnimation.classList.toggle('open');
}
btnToggleNavbar.addEventListener('click',toggleNavbar);

// Anclar navbar al cielo de la pagina y animacion de hamburguesa
// para que la hamburguesa cambie al mismo tiempo que se cierra la navbar

var hamburger = document.querySelector(".hamburger");
(function () {
    let navbar = document.querySelector('#navbar');
    let main = document.querySelector('main');
    let breakpoint = main.offsetTop - navbar.getBoundingClientRect().height;
    let isFixed = false;

    function onScroll() {
        let windowPos = window.scrollY;
        let navbarHeight = navbar.getBoundingClientRect().height;

        navbar.classList.remove('open');
        hamburger.classList.remove("is-active");

        if (windowPos >= breakpoint && !isFixed) {
            navbar.classList.add('navbar_fixed');
            main.style.marginTop = navbarHeight + 'px';
            isFixed = true;
        } else if (windowPos <= breakpoint && isFixed) {
            navbar.classList.remove('navbar_fixed');
            main.style.cssText = "margin-top:" + 0;
            isFixed = false;
        }
    }

    document.addEventListener('scroll', () => {
        requestAnimationFrame(onScroll);
    });
    
})();
