/* =========================
   MOBILE MENU
========================= */

const menuButton = document.getElementById("menuButton");
const navMenu = document.getElementById("navMenu");

menuButton.addEventListener("click", () => {

    navMenu.classList.toggle("mobile-open");

});


/* =========================
   CLOSE MOBILE MENU
========================= */

const navLinks = document.querySelectorAll("nav a");

navLinks.forEach(link => {

    link.addEventListener("click", () => {

        navMenu.classList.remove("mobile-open");

    });

});


/* =========================
   SCROLL ANIMATION
========================= */

const animatedElements = document.querySelectorAll(
    ".project-card, .skill-card, .service-card, .detail-card, .timeline-content"
);

const observer = new IntersectionObserver(
    entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

                observer.unobserve(entry.target);

            }

        });

    },
    {
        threshold: 0.12
    }
);


animatedElements.forEach(element => {

    observer.observe(element);

});


/* =========================
   ACTIVE NAVIGATION
========================= */

const sections = document.querySelectorAll("section[id]");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;

        if (window.scrollY >= sectionTop) {

            current = section.getAttribute("id");

        }

    });


    navLinks.forEach(link => {

        link.style.color = "";

        if (
            link.getAttribute("href") === `#${current}`
        ) {

            link.style.color = "#2563eb";

        }

    });

});