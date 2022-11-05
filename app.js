const iconoMenu = document.querySelector("#icono-menu"),
    menu = document.querySelector("#menu")

iconoMenu.addEventListener("click", function () {
    menu.classList.toggle("active");
});


if (document.getElementById('navbar')) {
    window.addEventListener('scroll', function () {
        if (window.scrollY >= 50) {
            navbar.classList.add('scroll-header');
        } else {
            navbar.classList.remove('scroll-header');
        }
    })
}
