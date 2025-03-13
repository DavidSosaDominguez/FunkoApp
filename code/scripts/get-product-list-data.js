// Cargar datos desde el JSON y generar los productos dinámicamente
fetch('../../json_files/example.json')
    .then(response => {
        console.log(response);  // Verifica si la respuesta está correcta
        return response.json();
    })
    .then(products => {
        const container = document.getElementById('product_list_container');
        products.forEach(product => {
            const productSection = document.createElement('section');
            productSection.classList.add('product_holder');
            productSection.innerHTML = `
                <section class="product_info">
                    <img class="product_image" src="${product.image}" alt="${product.name}"/>
                    <section class="product_details">
                        <h2 class="product_name">${product.name}</h2>
                        <h3 class="product_description">${product.series}</h3>
                        <!-- Añadido el id del producto en el enlace -->
                        <a href="no_log_product_page.html?id=${product.id}" class="product_button">View</a>
                    </section>
                </section>
                <p>${product.price}€</p>
            `;
            container.appendChild(productSection);
        });
    })
    .catch(error => console.error('Error loading products:', error));
