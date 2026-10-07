/* =========================
   KLAERE WEBSITE JAVASCRIPT
========================= */


/* =========================
   CONTACT FORM
========================= */

const contactForm = document.getElementById("contactForm");

if (contactForm) {

    contactForm.addEventListener("submit", function (event) {

        event.preventDefault();

        const name = contactForm
            .querySelector('input[name="name"]')
            .value
            .trim();

        if (name === "") {
            alert("Please enter your name.");
            return;
        }

        alert(
            "Thank you, " +
            name +
            "! Your project enquiry has been received."
        );

        contactForm.reset();

    });

}


/* =========================
   SMOOTH SCROLL
========================= */

document.querySelectorAll('a[href^="#"]').forEach(function (link) {

    link.addEventListener("click", function (event) {

        const targetId = this.getAttribute("href");

        if (targetId === "#") {
            return;
        }

        const target = document.querySelector(targetId);

        if (target) {

            event.preventDefault();

            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        }

    });

});


/* =========================
   NAVBAR SCROLL EFFECT
========================= */

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", function () {

    if (window.scrollY > 50) {

        navbar.style.background =
            "rgba(5, 6, 6, 0.94)";

    } else {

        navbar.style.background =
            "rgba(8, 9, 9, 0.72)";

    }

});


/* =========================
   REVEAL ANIMATION
========================= */

const revealElements = document.querySelectorAll(
    ".product-card, .process-card, .value, .spec, .feature"
);

const revealObserver = new IntersectionObserver(
    function (entries) {

        entries.forEach(function (entry) {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

                revealObserver.unobserve(entry.target);

            }

        });

    },
    {
        threshold: 0.15
    }
);


revealElements.forEach(function (element) {

    element.classList.add("reveal");

    revealObserver.observe(element);

});


/* =========================
   BACK TO TOP
========================= */

const topButton = document.querySelector(".top-btn");

window.addEventListener("scroll", function () {

    if (window.scrollY > 600) {

        topButton.style.opacity = "1";
        topButton.style.pointerEvents = "auto";

    } else {

        topButton.style.opacity = "0.7";

    }

});