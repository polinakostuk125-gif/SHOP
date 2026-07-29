const cartButton = document.querySelector('.cart-btn');
const cartCountElement = document.querySelector('.cart-count');
const addButtons = document.querySelectorAll('.add-btn');
const cartSidebar = document.getElementById('cartSidebar');
const closeCartButton = document.querySelector('.close-cart');
const cartItems = document.getElementById('cartItems');
const scrollTopButton = document.getElementById('scrollTopBtn');

let cartCount = 0;
let cartProducts = [];

function updateCart() {
    cartCountElement.textContent = cartCount;
    cartButton.setAttribute('aria-label', `Кошик, ${cartCount} товарів`);

    if (cartProducts.length === 0) {
        cartItems.innerHTML = '<p class="empty-cart">Поки що пусто</p>';
    } else {
        cartItems.innerHTML = cartProducts
            .map((item, index) => `
                <div class="cart-item">
                    <div class="cart-item-photo"></div>
                    <div class="cart-item-info">
                        <strong>${item.name}</strong>
                        <span>${item.price}</span>
                    </div>
                    <button class="remove-item-btn" data-index="${index}">×</button>
                </div>
            `)
            .join('');

        document.querySelectorAll('.remove-item-btn').forEach((button) => {
            button.addEventListener('click', () => {
                const index = Number(button.getAttribute('data-index'));
                cartProducts.splice(index, 1);
                cartCount = Math.max(cartCount - 1, 0);
                updateCart();
            });
        });
    }
}

addButtons.forEach((button) => {
    button.addEventListener('click', () => {
        const card = button.closest('.menu-card');
        const name = card.querySelector('h3').textContent.trim();
        const price = card.querySelector('.price').textContent.trim();

        cartCount += 1;
        cartProducts.push({ name, price });
        updateCart();
    });
});

cartButton.addEventListener('click', () => {
    cartSidebar.classList.toggle('open');
});

closeCartButton.addEventListener('click', () => {
    cartSidebar.classList.remove('open');
});

window.addEventListener('scroll', () => {
    if (window.scrollY > 400) {
        scrollTopButton.classList.add('show');
    } else {
        scrollTopButton.classList.remove('show');
    }
});

scrollTopButton.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

updateCart();
