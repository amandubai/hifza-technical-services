// Hifza Technical Services
// Mobile menu + current year

document.addEventListener("DOMContentLoaded", function () {

    // ================================
    // MOBILE MENU
    // ================================

    const menuBtn = document.querySelector(".menu-btn");
    const nav = document.querySelector("#nav");

    if (menuBtn && nav) {

        menuBtn.addEventListener("click", function () {
            nav.classList.toggle("active");

            if (nav.classList.contains("active")) {
                menuBtn.textContent = "✕";
                menuBtn.setAttribute("aria-label", "Close menu");
            } else {
                menuBtn.textContent = "☰";
                menuBtn.setAttribute("aria-label", "Open menu");
            }
        });


        // Close menu after clicking a link
        const navLinks = nav.querySelectorAll("a");

        navLinks.forEach(function (link) {

            link.addEventListener("click", function () {

                nav.classList.remove("active");

                menuBtn.textContent = "☰";
                menuBtn.setAttribute("aria-label", "Open menu");

            });

        });

    }


    // ================================
    // CURRENT YEAR
    // ================================

    const year = document.getElementById("year");

    if (year) {
        year.textContent = new Date().getFullYear();
    }


    // ================================
    // CLOSE MENU WHEN CLICKING OUTSIDE
    // ================================

    document.addEventListener("click", function (event) {

        if (!nav || !menuBtn) {
            return;
        }

        if (
            nav.classList.contains("active") &&
            !nav.contains(event.target) &&
            !menuBtn.contains(event.target)
        ) {

            nav.classList.remove("active");

            menuBtn.textContent = "☰";
            menuBtn.setAttribute("aria-label", "Open menu");

        }

    });

});const menuBtn=document.querySelector('.menu-btn');const nav=document.querySelector('nav');menuBtn.addEventListener('click',()=>nav.classList.toggle('open'));document.querySelectorAll('nav a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('open')));document.getElementById('year').textContent=new Date().getFullYear();
