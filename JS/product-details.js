document.addEventListener('DOMContentLoaded', () => {
    const productDetailsContainer = document.getElementById('product-details');
    const params = new URLSearchParams(window.location.search);
    const productId = params.get('product');

    const product = products[productId];

    if (product) {
        productDetailsContainer.innerHTML = `
            <div>
                <img src="${product.image}" alt="${product.name}" class="w-full rounded-lg shadow-lg">
            </div>
            <div>
                <h1 class="text-3xl font-bold mb-4">${product.name}</h1>
                <p class="text-lg text-gray-700 mb-4">${product.description}</p>
                <p class="text-2xl font-bold text-accent-orange mb-4">${product.price}</p>
                <button class="bubble-btn rounded-full text-lg flex items-center add-to-cart-btn" data-product-id="${productId}">
                    <i class="fas fa-cart-plus mr-2"></i>Ajouter au panier
                </button>
            </div>
        `;
    } else {
        productDetailsContainer.innerHTML = '<p>Produit non trouvé.</p>';
    }
});
