
/* ==============================
   PREMIUM DETAIL STUDIO
   Funcionalidades do site
================================ */

const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav");
const navLinks = document.querySelectorAll(".nav a");

// Menu para celulares
if (menuToggle && nav) {
    menuToggle.addEventListener("click", () => {
        const isOpen = nav.classList.toggle("active");

        menuToggle.setAttribute("aria-expanded", String(isOpen));
        menuToggle.setAttribute(
            "aria-label",
            isOpen ? "Fechar menu" : "Abrir menu"
        );

        menuToggle.textContent = isOpen ? "✕" : "☰";
    });

    // Fecha o menu ao selecionar uma seção
    navLinks.forEach((link) => {
        link.addEventListener("click", () => {
            nav.classList.remove("active");

            menuToggle.setAttribute("aria-expanded", "false");
            menuToggle.setAttribute("aria-label", "Abrir menu");
            menuToggle.textContent = "☰";
        });
    });

    // Fecha o menu ao pressionar Escape
    document.addEventListener("keydown", (event) => {
        if (event.key === "Escape") {
            nav.classList.remove("active");

            menuToggle.setAttribute("aria-expanded", "false");
            menuToggle.setAttribute("aria-label", "Abrir menu");
            menuToggle.textContent = "☰";
        }
    });
}

// Atualiza o ano automaticamente no rodapé
const yearElement = document.querySelector("#year");

if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
}

// Rolagem suave para os links internos
document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener("click", (event) => {
        const targetId = link.getAttribute("href");

        if (!targetId || targetId === "#") {
            return;
        }

        const target = document.querySelector(targetId);

        if (target) {
            event.preventDefault();

            target.scrollIntoView({
                behavior: window.matchMedia(
                    "(prefers-reduced-motion: reduce)"
                ).matches ? "auto" : "smooth",
                block: "start"
            });
        }
    });
});

console.log("Premium Detail Studio carregado com sucesso!");
