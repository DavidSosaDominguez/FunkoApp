// filters-box-handler.js
document.addEventListener("DOMContentLoaded", function() {
    // Cargar el contenido del modal
    fetch("../templates/filters_box.html")
        .then(response => response.text())
        .then(html => {
            document.getElementById("popup-container").innerHTML = html;
            initializeModal();
        })
        .catch(error => console.error("Error loading filters modal:", error));
});

function initializeModal() {
    // Configurar botón de apertura (debe estar en tu header/nav)
    document.getElementById("filter-button")?.addEventListener("click", function(e) {
        e.preventDefault();
        document.getElementById("filters-modal").style.display = "flex";
        console.log("Modal opened"); // Para depuración
    });

    // Configurar botón de cierre
    document.querySelector("#filters-modal .close")?.addEventListener("click", function() {
        document.getElementById("filters-modal").style.display = "none";
    });

    // Cerrar al hacer clic fuera del contenido
    document.getElementById("filters-modal")?.addEventListener("click", function(e) {
        if (e.target === this) {
            this.style.display = "none";
        }
    });

    // Configurar slider de precio
    const priceSlider = document.getElementById("price");
    if (priceSlider) {
        priceSlider.addEventListener("input", function() {
            document.getElementById("price-value").textContent = this.value + " €";
        });
        // Inicializar valor
        document.getElementById("price-value").textContent = priceSlider.value + " €";
    }
}