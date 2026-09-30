/* =========================================
   MENU MOBILE
========================================= */

const menuToggle = document.getElementById("menuToggle");
const mainNav = document.getElementById("mainNav");


menuToggle.addEventListener("click", function () {

    mainNav.classList.toggle("open");

});



/* =========================================
   MENUTUP MENU SETELAH LINK DIKLIK
========================================= */

const navLinks = document.querySelectorAll("#mainNav a");


navLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        mainNav.classList.remove("open");

    });

});



/* =========================================
   TAHUN OTOMATIS DI FOOTER
========================================= */

const yearElement = document.getElementById("year");


yearElement.textContent = new Date().getFullYear();
