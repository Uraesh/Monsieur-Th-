document.addEventListener('DOMContentLoaded', () => {
    const cartItemsContainer = document.getElementById('cart-items');
    const cartCount = document.getElementById('cart-count');
    const cartTotal = document.getElementById('cart-total');
    const addToCartButtons = document.querySelectorAll('.add-to-cart-btn');

    let cart = JSON.parse(localStorage.getItem('cart')) || {};

    const updateCart = () => {
        if (cartItemsContainer) {
            cartItemsContainer.innerHTML = '';
            let total = 0;
            for (const productId in cart) {
                const item = cart[productId];
                const product = products[productId];
                const itemTotal = parseInt(product.price) * item.quantity;
                total += itemTotal;
                cartItemsContainer.innerHTML += `
                    <div class="flex items-center justify-between p-4 bg-white rounded-lg shadow-lg">
                        <div class="flex items-center">
                            <img src="${product.image}" alt="${product.name}" class="w-24 h-24 object-cover rounded-lg mr-4">
                            <div>
                                <h2 class="text-xl font-bold">${product.name}</h2>
                                <p class="text-gray-700">${product.price}</p>
                            </div>
                        </div>
                        <div class="flex items-center">
                            <button class="quantity-btn" data-product-id="${productId}" data-change="-1">-</button>
                            <span class="mx-4">${item.quantity}</span>
                            <button class="quantity-btn" data-product-id="${productId}" data-change="1">+</button>
                        </div>
                        <p class="text-xl font-bold">${itemTotal} FCFA</p>
                        <button class="remove-btn" data-product-id="${productId}">
                            <i class="fas fa-trash"></i>
                        </button>
                    </div>
                `;
            }
            if (cartTotal) {
                cartTotal.innerText = `${total} FCFA`;
            }
        }
        const count = Object.values(cart).reduce((acc, item) => acc + item.quantity, 0);
        if (cartCount) {
            cartCount.innerText = count;
        }
        localStorage.setItem('cart', JSON.stringify(cart));
    };

    addToCartButtons.forEach(button => {
        button.addEventListener('click', () => {
            const productId = button.dataset.productId;
            if (cart[productId]) {
                cart[productId].quantity++;
            } else {
                cart[productId] = { quantity: 1 };
            }
            updateCart();
        });
    });

    if (cartItemsContainer) {
        cartItemsContainer.addEventListener('click', (e) => {
            if (e.target.closest('.quantity-btn')) {
                const button = e.target.closest('.quantity-btn');
                const productId = button.dataset.productId;
                const change = parseInt(button.dataset.change);
                cart[productId].quantity += change;
                if (cart[productId].quantity <= 0) {
                    delete cart[productId];
                }
                updateCart();
            }
            if (e.target.closest('.remove-btn')) {
                const button = e.target.closest('.remove-btn');
                const productId = button.dataset.productId;
                delete cart[productId];
                updateCart();
            }
        });
    }

    updateCart();
});
