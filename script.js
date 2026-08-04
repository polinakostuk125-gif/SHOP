const cartButton = document.querySelector('.cart-btn');
const cartCountElement = document.querySelector('.cart-count');
const addButtons = document.querySelectorAll('.add-btn');
const cartSidebar = document.getElementById('cartSidebar');
const closeCartButton = document.querySelector('.close-cart');
const cartItems = document.getElementById('cartItems');
const scrollTopButton = document.getElementById('scrollTopBtn');
const productModalOverlay = document.getElementById('productModalOverlay');
const productModal = document.querySelector('.product-modal');
const modalTitle = document.getElementById('productModalTitle');
const modalDescription = document.getElementById('productModalDescription');
const modalIngredients = document.getElementById('productModalIngredients');
const modalMethod = document.getElementById('productModalMethod');
const modalPrice = document.getElementById('productModalPrice');
const modalImage = document.getElementById('productModalImage');
const modalOrderButton = document.getElementById('modalOrderButton');
const modalCloseButton = document.getElementById('modalCloseButton');
const productCards = document.querySelectorAll('.menu-card');

let cartCount = 0;
let cartProducts = [];

const productDetails = {
    'БІЛЯШ': {
        ingredients: 'Тісто, фарш яловичина/свинина, цибуля, спеції',
        method: 'Випікали у духовці до хрусткої скоринки з легким ароматом масла.'
    },
    'ПИРІЖОК З КАПУСТОЮ': {
        ingredients: 'Тісто, капуста, морква, цибуля, олія, спеції',
        method: 'Начинка тушкувалася перед випіканням, щоб була соковита й м’яка.'
    },
    'ПЕЧЕНИЙ': {
        ingredients: 'Тісто, сир, вершкове масло, яйце, спеції',
        method: 'Випікали до рум’яної зверху скоринки та ніжної текстури всередині.'
    },
    'СІНАБОНА': {
        ingredients: 'Тісто, кориця, цукор, вершкове масло, глазур',
        method: 'Тісто крутили в рулет, випікали та покривали кремовою глазур’ю.'
    },
    'КАРТОПЛЯНИЙ ПИРІЖОК': {
        ingredients: 'Тісто, картопля, смажена цибуля, спеції',
        method: 'Начинку попередньо відварювали та обсмажували для насиченого смаку.'
    },
    'ПИРІЖОК З М’ЯСОМ': {
        ingredients: 'Тісто, м’ясний фарш, цибуля, спеції',
        method: 'М’ясну начинку тушкували до готовності перед випіканням.'
    },
    'ПИРІЖОК З ВИШНЕЮ': {
        ingredients: 'Тісто, вишня, цукор, ваніль',
        method: 'Пиріжки випікали до м’якої начинки та золотистої скоринки.'
    },
    'ПИРІЖОК З ГОРОХОМ': {
        ingredients: 'Тісто, горох, зелень, спеції',
        method: 'Начинка готувалася ніжно й пікантно перед тим, як запекти пиріжок.'
    },
    'ПОНЧИК': {
        ingredients: 'Дріжджове тісто, цукор, масло',
        method: 'Формували та випікали пончик до золотистого кольору, потім обкачували в цукрі.'
    },
    'СИРНИК': {
        ingredients: 'Творог, яйце, цукор, ваніль, тісто',
        method: 'Запікали до ніжної текстури з легким підрум’яненням верху.'
    },
    'БУЛОЧКА З ВАНІЛЛЮ': {
        ingredients: 'Тісто, ванільний крем, молоко, яйце',
        method: 'Випікали свіжі булочки до м’якої серединки і ароматної скоринки.'
    },
    'МЕДОВИЙ ПИРІЖОК': {
        ingredients: 'Тісто, мед, горіхи, спеції',
        method: 'Випікали при низькій температурі, щоб зберегти медовий аромат.'
    },
    'ПИРІЖОК З ЯБЛУКОМ': {
        ingredients: 'Тісто, яблука, кориця, цукор',
        method: 'Яблучну начинку готували з корицею та запікали до ніжності.'
    },
    'ПИРІЖОК З ТИРОМ': {
        ingredients: 'Тісто, сир, яйце, цукор',
        method: 'Сирну начинку готували м’якою та випікали до золотистої скоринки.'
    },
    'ПИРІЖОК З ЧОРНИЦЕЮ': {
        ingredients: 'Тісто, чорниця, цукор, лимон',
        method: 'Чорницю змішували з цукром і випікали до соковитої, ароматної начинки.'
    },
    'АМЕРИКАНО': {
        ingredients: 'Еспресо, вода',
        method: 'Готували міцну каву з насиченим ароматом.'
    },
    'ЛАТЕ': {
        ingredients: 'Еспресо, молоко, пінка',
        method: 'Змішували еспресо з ніжним молоком та пінкою.'
    },
    'КАПУЧИНО': {
        ingredients: 'Еспресо, молоко, пінка, какао',
        method: 'Підігріте молоко поєднувалося з еспресо та какао зверху.'
    },
    'МАККІАТО': {
        ingredients: 'Еспресо, невелика порція молока',
        method: 'Подавали еспресо з тонким шаром молока зверху.'
    },
    'КАВА З КАРАМЕЛЬЮ': {
        ingredients: 'Еспресо, молоко, карамельний сироп',
        method: 'Карамель додавали в каву для солодкого смаку.'
    },
    'ГЛАСЕ': {
        ingredients: 'Кава, морозиво, вершки',
        method: 'Подають холодну каву з кулькою морозива зверху.'
    },
    'ЧАЙ ЛИПОВИЙ': {
        ingredients: 'Липовий цвіт, вода, мед',
        method: 'Заварювали липу в гарячій воді з медом.'
    },
    'ЧАЙ М’ЯТНИЙ': {
        ingredients: 'М’ята, вода, мед',
        method: 'Настоювали свіжу м’яту до охолоджуючого смаку.'
    },
    'ЧАЙ ІМБИРНИЙ': {
        ingredients: 'Імбир, лимон, мед, вода',
        method: 'Імбир варили з лимоном для пікантного чаю.'
    },
    'КАКАО': {
        ingredients: 'Какао-порошок, молоко, цукор',
        method: 'Молоко доводили до гарячого стану і розчиняли какао.'
    },
    'ФРЕШ АПЕЛЬСИНОВИЙ': {
        ingredients: 'Свіжі апельсини',
        method: 'Вичавлювали сік зі свіжих апельсинів перед подачею.'
    },
    'МОХІТО БЕЗАЛКОГОЛЬНИЙ': {
        ingredients: 'Лайм, м’ята, газована вода, цукор',
        method: 'Розтушували лайм з м’ятою і заливали газованою водою.'
    },
    'МОЛОЧНИЙ КОКТЕЙЛЬ': {
        ingredients: 'Молоко, морозиво, сироп',
        method: 'Змішували в блендері до однорідної кремової текстури.'
    },
    'ЧАЙ З МЕДОМ': {
        ingredients: 'Чай, мед, лимон',
        method: 'Заварювали чай і додавали мед для ніжного смаку.'
    },
    'ЛИМОНАД': {
        ingredients: 'Лимон, вода, цукор',
        method: 'Свіжовичавлений лимон змішували з водою та сиропом.'
    },
    'КАРАМЕЛЬНИЙ ЛАТЕ': {
        ingredients: 'Еспресо, молоко, карамельний сироп',
        method: 'Додавали карамель до лате для солодкого смаку.'
    },
    'КОЛЬД БРЮ': {
        ingredients: 'Кава, холодна вода',
        method: 'Настоювали каву у холодній воді кілька годин.'
    },
    'ЛАТЕ З МЕДОМ': {
        ingredients: 'Еспресо, молоко, мед',
        method: 'Лате підсолоджували медом для ніжної солодкості.'
    },
    'ЧАЙ З РОСИНОЮ': {
        ingredients: 'Чай, родзинки, мед',
        method: 'Родзинки додавали у чай для фруктового аромату.'
    }
};

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

function openProductModal(card) {
    const name = card.querySelector('h3').textContent.trim();
    const price = card.querySelector('.price').textContent.trim();
    const description = card.querySelector('p')?.textContent.trim() || '';
    const details = productDetails[name] || {
        ingredients: 'Свіжі інгредієнти та традиційний рецепт.',
        method: 'Готували на замовлення за домашньою рецептурою.'
    };

    modalTitle.textContent = name;
    modalDescription.textContent = description;
    modalIngredients.textContent = details.ingredients;
    modalMethod.textContent = details.method;
    modalPrice.textContent = price;
    modalOrderButton.dataset.name = name;
    modalOrderButton.dataset.price = price;
    modalImage.src = createProductPlaceholderImage(name);
    modalImage.alt = `Фото ${name}`;

    productModalOverlay.classList.add('open');
}

function createProductPlaceholderImage(name) {
    const svg = `<?xml version="1.0" encoding="UTF-8"?><svg xmlns="http://www.w3.org/2000/svg" width="760" height="520"><defs><linearGradient id="g" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#fff1c1"/><stop offset="100%" stop-color="#ffd46a"/></linearGradient></defs><rect width="100%" height="100%" fill="url(%23g)" rx="32" ry="32"/><text x="50%" y="48%" dominant-baseline="middle" text-anchor="middle" font-family="Segoe UI, sans-serif" font-size="38" fill="#3f2600">${name}</text><text x="50%" y="60%" dominant-baseline="middle" text-anchor="middle" font-family="Segoe UI, sans-serif" font-size="20" fill="#6b4c18">Фото продукту</text></svg>`;
    return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`;
}

function closeProductModal() {
    productModalOverlay.classList.remove('open');
}

addButtons.forEach((button) => {
    button.addEventListener('click', (event) => {
        event.stopPropagation();
        const card = button.closest('.menu-card');
        const name = card.querySelector('h3').textContent.trim();
        const price = card.querySelector('.price').textContent.trim();

        cartCount += 1;
        cartProducts.push({ name, price });
        updateCart();
    });
});

productCards.forEach((card) => {
    card.addEventListener('click', (event) => {
        if (event.target.closest('.add-btn') || event.target.closest('a')) {
            return;
        }
        openProductModal(card);
    });
});

modalCloseButton.addEventListener('click', closeProductModal);
productModalOverlay.addEventListener('click', (event) => {
    if (event.target === productModalOverlay) {
        closeProductModal();
    }
});

modalOrderButton.addEventListener('click', () => {
    const name = modalOrderButton.dataset.name;
    const price = modalOrderButton.dataset.price;
    if (name && price) {
        cartCount += 1;
        cartProducts.push({ name, price });
        updateCart();
        closeProductModal();
    }
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
