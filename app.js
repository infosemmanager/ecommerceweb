
function toggleMenu() {
    document.getElementById("navMenu").classList.toggle("show");
}




// Scroll reveal animation
function revealElements() {
    const reveals = document.querySelectorAll(".reveal");

    reveals.forEach(el => {
        const windowHeight = window.innerHeight;
        const elementTop = el.getBoundingClientRect().top;

        if (elementTop < windowHeight - 80) {
            el.classList.add("active");
        }
    });
}

window.addEventListener("scroll", revealElements);
window.addEventListener("load", revealElements);

