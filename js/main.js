"use strict";

// ---------- MENU ----------

const menuToggler = document.querySelector('.menu-toggler');

menuToggler.onclick = function () {
    menuToggler.classList.toggle('menu-toggler--active');
    document.body.classList.toggle('no-scroll');
};

// ---------- MODAL ----------

const modal = new GraphModal();