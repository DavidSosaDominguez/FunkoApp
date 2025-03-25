let allProducts = []; // Variable global para almacenar los productos

fetch('../../json_files/funkos_data.json')
    .then(response => response.json())
    .then(products => {
        allProducts = products; // Guarda los productos en la variable global
        displayProducts(allProducts); // Muestra todos los productos al inicio
    })
    .catch(error => console.error('Error loading products:', error));

function displayProducts(products) {
    const container = document.getElementById('product_list_container');
    container.innerHTML = ''; // Limpia el contenedor antes de mostrar los productos
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

function searchProducts() {
    const query = document.getElementById('searchInput').value.toLowerCase();
    const filteredProducts = allProducts.filter(product =>
        product.name.toLowerCase().includes(query) ||
        product.series.toLowerCase().includes(query)
    );
    displayProducts(filteredProducts);
}
