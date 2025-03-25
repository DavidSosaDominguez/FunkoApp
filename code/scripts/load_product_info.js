// Obtener el ID del producto desde los parámetros de la URL
const urlParams = new URLSearchParams(window.location.search);
const productId = parseInt(urlParams.get('id'));

// Cargar los datos de los productos
fetch('../../json_files/funkos_data.json')
    .then(response => response.json())
    .then(products => {
        // Buscar el producto específico usando el ID
        const product = products.find(p => p.id === productId);

        if (product) {
            // Mostrar los detalles del producto
            document.getElementById('product_image').src = product.image;
            document.getElementById('product_title').textContent = product.name;
            document.getElementById('category_text').textContent = product.series || 'Categoría desconocida';
            document.getElementById('product_description').textContent = product.description;
            document.getElementById('buy_button').addEventListener('click', () => {
                alert('Producto añadido al carrito');
            });
        } else {
            console.error('Producto no encontrado');
        }
    })
    .catch(error => console.error('Error loading product:', error));