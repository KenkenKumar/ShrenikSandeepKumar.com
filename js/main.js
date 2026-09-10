/* =========================================================
   SCROLL REVEAL
   ========================================================= */

const animatedElements = document.querySelectorAll(
    ".section-heading, " +
    ".profile-text, " +
    ".profile-details, " +
    ".interest-card, " +
    ".project-card, " +
    ".timeline-item, " +
    ".contact-content"
);


const observer = new IntersectionObserver(
    (entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                entry.target.classList.add("visible");

                observer.unobserve(entry.target);

            }

        });

    },
    {
        threshold: 0.15
    }
);


animatedElements.forEach((element) => {

    element.classList.add("reveal");

    observer.observe(element);

});
