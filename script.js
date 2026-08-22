// ================================
// Smooth scrolling
// ================================

document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", function (event) {

        event.preventDefault();

        const targetId = this.getAttribute("href");
        const targetSection = document.querySelector(targetId);

        if (targetSection) {
            targetSection.scrollIntoView({
                behavior: "smooth"
            });
        }

    });

});


// ================================
// Project button
// ================================

function viewProject(projectName) {

    alert(
        projectName +
        " project will be available soon!"
    );

}


// ================================
// Contact Form
// ================================

document
    .getElementById("contactForm")
    .addEventListener("submit", function (event) {

        event.preventDefault();

        const name =
            document.getElementById("name").value.trim();

        const email =
            document.getElementById("email").value.trim();

        const message =
            document.getElementById("message").value.trim();

        if (name === "" || email === "" || message === "") {

            alert("Please fill in all fields.");

            return;
        }

        alert(
            "Thank you, " +
            name +
            "! Your message has been submitted."
        );

        this.reset();

    });


// ================================
// Active navigation link
// ================================

const sections =
    document.querySelectorAll("section");

const navLinks =
    document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop =
            section.offsetTop - 100;

        const sectionHeight =
            section.clientHeight;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight
        ) {
            current = section.getAttribute("id");
        }

    });

    navLinks.forEach(link => {

        link.style.color = "";

        if (
            link.getAttribute("href") === "#" + current
        ) {
            link.style.color = "#287cff";
        }

    });

});