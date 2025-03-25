document.addEventListener('DOMContentLoaded', async () => {
    try {
        // Obtener el ID del producto desde la URL
        const urlParams = new URLSearchParams(window.location.search);
        const productId = parseInt(urlParams.get('id'));

        // Cargar JSON de productos
        const response = await fetch('../../json_files/funkos_data.json');
        if (!response.ok) throw new Error('Couldn\'t load JSON');
        const products = await response.json();

        // Buscar el producto actual
        const funko = products.find(element => element.id === productId);
        if (!funko) {
            alert('Couldn\'t find funko in JSON');
            throw new Error('No such funko');
        }

        // Insertar info del producto en la página
        loadProductInfo(funko);

        // Cargar productos relacionados
        await loadRelatedProducts(products, funko);
    } catch (error) {
        console.error(error);
    }
});

// Función para cargar la info del producto actual
function loadProductInfo(funko) {
    document.getElementById('product_image').src = funko.image;
    document.getElementById('product_title').textContent = funko.name;
    document.getElementById('category_text').textContent = funko.series || 'Categoría desconocida';
    document.getElementById('product_description').textContent = funko.description;
}

// Función para cargar productos relacionados
async function loadRelatedProducts(products, funko) {
    try {
        const navSection = document.querySelector('#related_items_container');

        // Cargar el template del HTML
        const fileAside = await fetch('../templates/aside_item.html');
        if (!fileAside.ok) throw new Error('Couldn\'t load HTML template');
        const htmlTemp = await fileAside.text();

        // Filtrar los productos relacionados
        products
            .filter(item => item.series === funko.series && item.id !== funko.id)
            .forEach(product => {
                const element = document.createElement('section');
                element.innerHTML = htmlTemp;
                loadRelatedInfo(element, product);
                navSection.appendChild(element);
            });
    } catch (error) {
        console.error(error);
    }
}

// Función para cargar info en cada producto relacionado
function loadRelatedInfo(element, product) {
    const image = element.querySelector('.related_images');
    const title = element.querySelector('.related_titles');
    const button = element.querySelector('.related_item_button');

    image.src = product.image;
    title.innerText = product.name;

    button.addEventListener('click', (event) => {
        event.preventDefault();
        window.open('../pages/product_page.html?id=' + product.id.toString(), '_self');
    });
}

// Botón de compra
document.getElementById('buy_button').addEventListener('click', () =>
    alert('Producto añadido al carrito')
);
