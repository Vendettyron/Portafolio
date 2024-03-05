(function () {

    let navbar = document.querySelector('#navbar');
    let main = document.querySelector('main');
    let navbarHeight = navbar.getBoundingClientRect().height;
    let breakpoint = main.offsetTop - navbarHeight;
    let windowPos;
    
    function updatePosition() {
                windowPos =  window.scrollY;
    }
    
    function onScroll() {

        updatePosition();
    
        if (windowPos >= breakpoint) {
                navbar.classList.remove('open');
        
                navbar.classList.add('navbar_fixed');
                 main.style.cssText = "margin-top:" + navbarHeight + 'px;';
        
        }else if (windowPos <= breakpoint) {
                navbar.classList.remove('navbar_fixed');
                main.style.cssText = "margin-top:" + 0;
        
        }
    }
    
    document.addEventListener('scroll', onScroll);    
})()
