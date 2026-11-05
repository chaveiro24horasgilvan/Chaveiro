
// Abrir e fechar menu mobile
function toggleMenu() {
    const menu = document.getElementById("menu");

    menu.classList.toggle("active");
}

// Fechar menu ao clicar em um link
document.querySelectorAll("#menu a").forEach(link => {

    link.addEventListener("click", function() {

        document.getElementById("menu")
            .classList.remove("active");

    });

});

// Atualizar ano automaticamente
document.getElementById("copyright").textContent =
    "© " + new Date().getFullYear() +
    " Chaveiro 24h Aracaju. Todos os direitos reservados.";
