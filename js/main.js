"use strict";

// ---------- MENU ----------

const menuToggler = document.querySelector('.menu-toggler');

menuToggler.onclick = function () {
    menuToggler.classList.toggle('menu-toggler--active');
    document.body.classList.toggle('no-scroll');
};

// ---------- ABOUT ----------

// swiper

let swiper;
const pageWidth = 478;
let isSwiperActive = false;

function initSwiper() {
    if (window.innerWidth <= pageWidth && !swiper) {
        swiper = new Swiper('.swiper', {
            slidesPerView: 'auto',
            spaceBetween: 10,
            freeMode: true,
        });
        isSwiperActive = true;
    }
}

function destroySwiper() {
    if (window.innerWidth > pageWidth && swiper) {
        swiper.destroy(true, true);
        swiper = null;
        isSwiperActive = false;
    }
}

window.addEventListener('resize', () => {
    if (window.innerWidth <= pageWidth && !isSwiperActive) {
        initSwiper();
    } else if (window.innerWidth > pageWidth && isSwiperActive) {
        destroySwiper();
    }
});

initSwiper();

// ---------- MODAL ----------

const modal = new GraphModal();