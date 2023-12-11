// Navbar js
let hamburger_menu = document.getElementById('hamburger_menu');
let responsive_header = document.getElementById('side-nav');
let closeside_nav = document.getElementById('close-side-nav');
hamburger_menu.addEventListener("click", () => {
    responsive_header.classList.add('active');

})
closeside_nav.addEventListener('click', () => {
    responsive_header.classList.remove('active');
});

// Auto type js
document.addEventListener('DOMContentLoaded', function(){
    var options = {
      strings: ["Gyne", "Derma", "Pharma"],
      typeSpeed: 150,
      backSpeed: 125,
      loop: true
    };

    var typed = new Typed('#typed-output', options);
  });