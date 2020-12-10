require("bootstrap")

import hello from "./js/test.js"

hello()
let containerCenter = document.querySelector(".container");
let navbarContent = document.querySelector(".navbar-nav");
let navToggler = document.querySelector(".navbar-toggler")

window.addEventListener("scroll", () => {
    console.log(window.scrollY);
    if (window.scrollY != 0) {
        navToggler.classList.remove("d-none")
        containerCenter.classList.remove("container-center")
        navbarContent.classList.remove("hidden")
    } else {
        navToggler.classList.add("d-none")
        containerCenter.classList.add("container-center")
        navbarContent.classList.add("hidden")
    }


});