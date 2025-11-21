document.getElementById("year").textContent = new Date().getFullYear();


// Mobile navigation toggle
const mobileMenu = document.getElementById("mobile-menu");
const navLinks = document.getElementById("nav-links");

if (mobileMenu) {
  mobileMenu.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });
}

document.querySelectorAll(".nav-link").forEach(link => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("active");
  });
});

// SERVICE BUTTON TOGGLE LOGIC
const serviceButtons = document.querySelectorAll(".service-btn");
const servicesInput = document.getElementById("servicesInput");

serviceButtons.forEach(btn => {
    btn.addEventListener("click", () => {
        btn.classList.toggle("selected");

        // Get selected values
        const selected = [...serviceButtons]
            .filter(b => b.classList.contains("selected"))
            .map(b => b.dataset.value);

        // Save to hidden input for Formspree
        servicesInput.value = selected.join(", ");
    });
});


