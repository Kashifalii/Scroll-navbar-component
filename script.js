let navbar = document.getElementById("navbar");

let scrolling = 200;

window.onscroll = function () {
    if (scrolling < scrollY) {
        navbar.style.opacity = 1;

    } else if (scrolling > scrollY) {
        navbar.style.opacity = 0;
    }
}
