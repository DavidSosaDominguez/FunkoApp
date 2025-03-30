let allProducts = [];

fetch('../../json_files/funkos_data.json')
    .then(response => response.json())
    .then(products => {
        allProducts = products; // 1. Guarda todos los productos

        // 2. Verifica si hay una búsqueda previa guardada
        const savedSearch = localStorage.getItem('lastSearch');
        if (savedSearch) {
            document.getElementById('searchInput').value = savedSearch; // Rellena el input
            const filteredProducts = allProducts.filter(product =>
                product.name.toLowerCase().includes(savedSearch) ||
                product.series.toLowerCase().includes(savedSearch)
            );
            displayProducts(filteredProducts); // Muestra resultados filtrados
        } else {
            displayProducts(allProducts); // Muestra todos los productos
        }
    })
    .catch(error => console.error('Error loading products:', error));

function displayProducts(products) {
    const container = document.getElementById('product_list_container');
    container.innerHTML = ''; // Limpia el contenedor
    products.forEach(product => {
        const productSection = document.createElement('section');
        productSection.classList.add('product_holder');
        productSection.innerHTML = `
            <section class="product_info">
                <img class="product_image" src="${product.image}" alt="${product.name}"/>
                <section class="product_details">
                    <h2 class="product_name">${product.name}</h2>
                    <h3 class="product_description">${product.series}</h3>
                    <a href="product_page.html?id=${product.id}" class="product_button">View</a>
                </section>
            </section>
            <p>${product.price}€</p>
        `;
        container.appendChild(productSection);
    });
}

function searchProducts(event) {
    event.preventDefault();
    const query = document.getElementById('searchInput').value.toLowerCase();

    // Guarda la búsqueda en localStorage
    localStorage.setItem('lastSearch', query);

    const filteredProducts = allProducts.filter(product =>
        product.name.toLowerCase().includes(query) ||
        product.series.toLowerCase().includes(query)
    );

    // Redirige a index.html si no estamos allí
    if (!window.location.pathname.includes('index.html')) {
        window.location.href = '../pages/index.html';
    } else {
        displayProducts(filteredProducts);
    }
}
