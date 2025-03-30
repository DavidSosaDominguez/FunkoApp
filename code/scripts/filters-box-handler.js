document.addEventListener("DOMContentLoaded", function() {
    fetch("../templates/filters_box_template.html")
        .then(response => response.text())
        .then(html => {
            document.getElementById("popup-container").innerHTML = html;
            initializeModal();
        })
        .catch(error => console.error("Error loading filters modal:", error));
});

function initializeModal() {
    document.getElementById("filter-button")?.addEventListener("click", function(e) {
        e.preventDefault();
        document.getElementById("filters-modal").style.display = "flex";
    });

    document.querySelector("#filters-modal .close")?.addEventListener("click", function() {
        document.getElementById("filters-modal").style.display = "none";
    });
    document.getElementById("filters-modal")?.addEventListener("click", function(e) {
        if (e.target === this) {
            this.style.display = "none";
        }
    });
    const priceSlider = document.getElementById("price");
    if (priceSlider) {
        priceSlider.addEventListener("input", function() {
            document.getElementById("price-value").textContent = this.value + " €";
        });
        document.getElementById("price-value").textContent = priceSlider.value + " €";
    }
}