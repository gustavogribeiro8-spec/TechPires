// main.js
// Contém a inicialização do Swiper e o toggle do menu mobile.
// Coloque este arquivo na mesma pasta do HTML (ou altere o src no HTML).

// Inicialização do Swiper (aguarda o carregamento do bundle via CDN)
var swiper = new Swiper(".mySwiper", {
  effect: "slide",
  grabCursor: true,
  centeredSlides: false,
  slidesPerView: 1,
  loop: true,
  speed: 650,
  spaceBetween: 0,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// Mobile menu toggle
document.addEventListener("DOMContentLoaded", function () {
  const menuBtn = document.querySelector(".rb-menu-btn");
  const navMenu = document.querySelector(".rb-menu");

  if (menuBtn && navMenu) {
    menuBtn.addEventListener("click", () => {
      navMenu.classList.toggle("open");
    });

    window.addEventListener("resize", () => {
      if (window.innerWidth > 700) navMenu.classList.remove("open");
    });
  }
});