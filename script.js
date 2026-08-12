const cartButton = document.querySelector('.cart-btn');
const cartCountElement = document.querySelector('.cart-count');
const addButtons = document.querySelectorAll('.add-btn');
const cartSidebar = document.getElementById('cartSidebar');
const closeCartButton = document.querySelector('.close-cart');
const cartItems = document.getElementById('cartItems');
const scrollTopButton = document.getElementById('scrollTopBtn');
const productModalOverlay = document.getElementById('productModalOverlay');
const modalTitle = document.getElementById('productModalTitle');
const modalDescription = document.getElementById('productModalDescription');
const modalIngredients = document.getElementById('productModalIngredients');
const modalMethod = document.getElementById('productModalMethod');
const modalPrice = document.getElementById('productModalPrice');
const modalImage = document.getElementById('productModalImage');
const modalOrderButton = document.getElementById('modalOrderButton');
const modalCloseButton = document.getElementById('modalCloseButton');
const productCards = document.querySelectorAll('.menu-card');
const cookieBanner = document.getElementById('cookieBanner');
const acceptCookiesBtn = document.getElementById('acceptCookiesBtn');
const orderModalOverlay = document.getElementById('orderModalOverlay');
const orderForm = document.getElementById('orderForm');
const orderSummary = document.getElementById('orderSummary');
const orderSuccessMessage = document.getElementById('orderSuccessMessage');
const orderModalCloseButton = document.getElementById('orderModalCloseButton');
const orderButton = document.querySelector('.order-btn');
const customerPhoneInput = document.getElementById('customerPhone');

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
    },
    'БОРЩ': {
        ingredients: 'Буряк, капуста, картопля, морква, м’ясо, зелень',
        method: 'Суп варили на м’ясному бульйоні до насиченого смаку й ніжної текстури.'
    },
    'КУРКА З РИСОМ': {
        ingredients: 'Курка, рис, овочі, спеції, зелень',
        method: 'Курку обсмажували до золотистої скоринки, а рис готували окремо з овочами.'
    },
    'ЛОКШИНА З КУРКОЮ': {
        ingredients: 'Локшина, куряче м’ясо, гриби, цибуля, соус',
        method: 'Готували на сильному вогні, щоб локшина була м’яка, а соус насичений.'
    },
    'ПАСТА КАРБОНАРА': {
        ingredients: 'Паста, бекон, вершки, сир, спеції',
        method: 'Пасту готували до аль денте та подавали з вершковим соусом.'
    },
    'ГРИБНА ЛАПША': {
        ingredients: 'Лапша, гриби, цибуля, вершки, зелень',
        method: 'Гриби обсмажували з цибулею, після чого змішували з лапшою та соусом.'
    },
    'ГРЕЧКА З ОВОЧАМИ': {
        ingredients: 'Гречка, овочі, зелень, олія, спеції',
        method: 'Гречку варили до готовності та змішували з обсмаженими овочами.'
    },
    'САЛАТ ЦЕЗАРЬ': {
        ingredients: 'Салат, курка, сир, помідори, соус цезар',
        method: 'Усі інгредієнти збирали свіжими й подавали з ароматним соусом.'
    },
    'КАРТОПЛЯНЕ ПЮРЕ': {
        ingredients: 'Картопля, молоко, масло, спеції',
        method: 'Картоплю відварювали та збивали до ніжного пюре з молоком.'
    },
    'КУРКА ГРИЛЬ': {
        ingredients: 'Куряче філе, овочі, спеції, маринад',
        method: 'Курку маринували та готували на грилі до соковитої текстури.'
    },
    'ПІЦА МАРГАРИТА': {
        ingredients: 'Тісто, соус, сир, томати, базилік',
        method: 'Піцу запікали до золотистої скоринки та розплавленого сиру.'
    },
    'ПІЦА ПЕПЕРОНІ': {
        ingredients: 'Тісто, соус, сир, ковбаса, спеції',
        method: 'Піцу випікали до апетитної скоринки й рум’яного сиру.'
    },
    'ФОТУЧІ З ГРИБАМИ': {
        ingredients: 'Фотучіні, гриби, вершки, цибуля, сир',
        method: 'Фотучіні готували з грибним вершковим соусом до ніжної консистенції.'
    },
    'СУП-КРОСАТА': {
        ingredients: 'Овочі, бульйон, зелень, спеції, картопля',
        method: 'Суп варили на легкому бульйоні до м’яких овочів і аромату трав.'
    },
    'НАЛИСНИКИ З СИРОМ': {
        ingredients: 'Тісто, сир, масло, сметана',
        method: 'Налисники змащували сиром і запікали до золотистої скоринки.'
    },
    'КРОКЕТИ З КУРКОЮ': {
        ingredients: 'Курка, хлібні крихти, яйце, спеції',
        method: 'Котлети панірували й смажили до хрусткої скоринки.'
    }
};

const productImageMap = {
    'БІЛЯШ': 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=900&q=80',
    'ПИРІЖОК З КАПУСТОЮ': 'https://images.unsplash.com/photo-1517433670267-08bbd4be890f?auto=format&fit=crop&w=900&q=80',
    'ПЕЧЕНИЙ': 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=900&q=80',
    'СІНАБОНА': 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=900&q=80',
    'КАРТОПЛЯНИЙ ПИРІЖОК': 'https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=900&q=80',
    'ПИРІЖОК З М’ЯСОМ': 'https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&w=900&q=80',
    'ПИРІЖОК З ВИШНЕЮ': 'https://images.unsplash.com/photo-1521305916504-4a1121188589?auto=format&fit=crop&w=900&q=80',
    'ПИРІЖОК З ГОРОХОМ': 'https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=900&q=80',
    'ПОНЧИК': 'https://images.unsplash.com/photo-1551024601-bec78aea704b?auto=format&fit=crop&w=900&q=80',
    'СИРНИК': 'https://images.unsplash.com/photo-1483695028939-5bb13f8648b0?auto=format&fit=crop&w=900&q=80',
    'БУЛОЧКА З ВАНІЛЛЮ': 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=900&q=80',
    'МЕДОВИЙ ПИРІЖОК': 'https://images.unsplash.com/photo-1517433670267-08bbd4be890f?auto=format&fit=crop&w=900&q=80',
    'ПИРІЖОК З ЯБЛУКОМ': 'https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?auto=format&fit=crop&w=900&q=80',
    'ПИРІЖОК З ТИРОМ': 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=900&q=80',
    'ПИРІЖОК З ЧОРНИЦЕЮ': 'https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?auto=format&fit=crop&w=900&q=80',
    'АМЕРИКАНО': 'https://images.unsplash.com/photo-1497636577773-f1231844b336?auto=format&fit=crop&w=900&q=80',
    'ЛАТЕ': 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=900&q=80',
    'КАПУЧИНО': 'https://images.unsplash.com/photo-1442512595331-e89e73853f31?auto=format&fit=crop&w=900&q=80',
    'МАККІАТО': 'https://images.unsplash.com/photo-1511920170033-f8396924c348?auto=format&fit=crop&w=900&q=80',
    'КАВА З КАРАМЕЛЬЮ': 'https://images.unsplash.com/photo-1461010083953-1b1d5d449e8f?auto=format&fit=crop&w=900&q=80',
    'ГЛАСЕ': 'https://images.unsplash.com/photo-1521017432531-fbd92d768814?auto=format&fit=crop&w=900&q=80',
    'ЧАЙ ЛИПОВИЙ': 'https://images.unsplash.com/photo-1515823064-d6e0c04616a7?auto=format&fit=crop&w=900&q=80',
    'ЧАЙ М’ЯТНИЙ': 'https://images.unsplash.com/photo-1470337458703-46ad1756a187?auto=format&fit=crop&w=900&q=80',
    'ЧАЙ ІМБИРНИЙ': 'https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&w=900&q=80',
    'КАКАО': 'https://images.unsplash.com/photo-1541167760496-1628856ab772?auto=format&fit=crop&w=900&q=80',
    'ФРЕШ АПЕЛЬСИНОВИЙ': 'https://images.unsplash.com/photo-1613478223719-2ab802602423?auto=format&fit=crop&w=900&q=80',
    'МОХІТО БЕЗАЛКОГОЛЬНИЙ': 'https://images.unsplash.com/photo-1536935338788-84688d0c6d10?auto=format&fit=crop&w=900&q=80',
    'МОЛОЧНИЙ КОКТЕЙЛЬ': 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=900&q=80',
    'ЧАЙ З МЕДОМ': 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=900&q=80',
    'ЛИМОНАД': 'https://images.unsplash.com/photo-1546173159-315724a31696?auto=format&fit=crop&w=900&q=80',
    'КАРАМЕЛЬНИЙ ЛАТЕ': 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=900&q=80',
    'КОЛЬД БРЮ': 'https://images.unsplash.com/photo-1442512595331-e89e73853f31?auto=format&fit=crop&w=900&q=80',
    'ЛАТЕ З МЕДОМ': 'https://images.unsplash.com/photo-1497636577773-f1231844b336?auto=format&fit=crop&w=900&q=80',
    'ЧАЙ З РОСИНОЮ': 'https://images.unsplash.com/photo-1515823064-d6e0c04616a7?auto=format&fit=crop&w=900&q=80',
    'БОРЩ': 'https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&w=900&q=80',
    'КУРКА З РИСОМ': 'https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&w=900&q=80',
    'ЛОКШИНА З КУРКОЮ': 'https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=900&q=80',
    'ПАСТА КАРБОНАРА': 'https://images.unsplash.com/photo-1555949258-eb67b1ef0ceb?auto=format&fit=crop&w=900&q=80',
    'ГРИБНА ЛАПША': 'https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=900&q=80',
    'ГРЕЧКА З ОВОЧАМИ': 'https://images.unsplash.com/photo-1546793665-c74683f339c1?auto=format&fit=crop&w=900&q=80',
    'САЛАТ ЦЕЗАРЬ': 'https://images.unsplash.com/photo-1546793665-c74683f339c1?auto=format&fit=crop&w=900&q=80',
    'КАРТОПЛЯНЕ ПЮРЕ': 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=900&q=80',
    'КУРКА ГРИЛЬ': 'https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?auto=format&fit=crop&w=900&q=80',
    'ПІЦА МАРГАРИТА': 'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=900&q=80',
    'ПІЦА ПЕПЕРОНІ': 'https://images.unsplash.com/photo-1534308983496-4fabb1a015ee?auto=format&fit=crop&w=900&q=80',
    'ФОТУЧІ З ГРИБАМИ': 'https://images.unsplash.com/photo-1555949258-eb67b1ef0ceb?auto=format&fit=crop&w=900&q=80',
    'СУП-КРОСАТА': 'https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&w=900&q=80',
    'НАЛИСНИКИ З СИРОМ': 'https://images.unsplash.com/photo-1513442542250-854d436a73f2?auto=format&fit=crop&w=900&q=80',
    'КРОКЕТИ З КУРКОЮ': 'https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&w=900&q=80'
};

function applyMenuPhotos() {
    productCards.forEach((card) => {
        const name = card.querySelector('h3')?.textContent.trim();
        const photo = card.querySelector('.menu-photo');
        if (!name || !photo) {
            return;
        }

        const image = getProductImage(name);
        photo.style.background = `linear-gradient(135deg, rgba(255,255,255,0.15), rgba(60,140,255,0.12)), url('${image}') center/cover no-repeat`;
        photo.style.borderColor = 'rgba(60, 140, 255, 0.35)';
    });
}

function setCookie(name, value, days = 30) {
    const date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    document.cookie = `${name}=${encodeURIComponent(value)}; expires=${date.toUTCString()}; path=/`;
}

function getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) {
        return decodeURIComponent(parts.pop().split(';').shift());
    }
    return '';
}

function getProductImage(name) {
    return productImageMap[name] || 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=900&q=80';
}

function updateCart() {
    cartCountElement.textContent = cartCount;
    cartButton.setAttribute('aria-label', `Кошик, ${cartCount} товарів`);
    setCookie('bistroCart', JSON.stringify(cartProducts), 14);

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

    const imageSource = getProductImage(name);
    modalImage.src = imageSource;
    modalImage.alt = `Фото ${name}`;
    modalImage.style.display = 'block';

    productModalOverlay.classList.add('open');
}

function closeProductModal() {
    productModalOverlay.classList.remove('open');
}

function showOrderSummary() {
    if (!cartProducts.length) {
        orderSummary.innerHTML = '<p class="empty-cart">Кошик порожній</p>';
        return;
    }

    const total = cartProducts.reduce((sum, item) => {
        const numericPrice = Number(String(item.price).replace(/[^\d.]/g, '')) || 0;
        return sum + numericPrice;
    }, 0);

    orderSummary.innerHTML = `
        ${cartProducts.map((item) => `
            <div class="order-item">
                <span>${item.name}</span>
                <span>${item.price}</span>
            </div>
        `).join('')}
        <div class="order-total">
            <span>Разом</span>
            <span>${total.toFixed(0)} грн</span>
        </div>
    `;
}

function openOrderModal() {
    if (!cartProducts.length) {
        alert('Спочатку додайте хоча б один продукт в кошик.');
        return;
    }

    showOrderSummary();
    orderSuccessMessage.classList.remove('visible');
    orderSuccessMessage.textContent = '';
    orderModalOverlay.classList.add('open');
}

function closeOrderModal() {
    orderModalOverlay.classList.remove('open');
    orderForm.reset();
}

function loadCartFromCookie() {
    const savedCart = getCookie('bistroCart');
    if (!savedCart) {
        cartProducts = [];
        cartCount = 0;
        return;
    }

    try {
        const parsed = JSON.parse(savedCart);
        if (Array.isArray(parsed)) {
            cartProducts = parsed;
            cartCount = parsed.length;
        }
    } catch (error) {
        cartProducts = [];
        cartCount = 0;
    }
}

function handleCookieConsent() {
    if (!getCookie('bistroCookieConsent')) {
        cookieBanner.classList.add('visible');
    }

    acceptCookiesBtn.addEventListener('click', () => {
        setCookie('bistroCookieConsent', 'accepted', 365);
        cookieBanner.classList.remove('visible');
    });
}

if (customerPhoneInput) {
    customerPhoneInput.addEventListener('focus', () => {
        if (!customerPhoneInput.value.startsWith('+380')) {
            customerPhoneInput.value = '+380';
        }
    });

    customerPhoneInput.addEventListener('input', () => {
        let value = customerPhoneInput.value.replace(/[^0-9+]/g, '');

        if (!value.startsWith('+380')) {
            value = '+380' + value.replace(/\+/g, '').slice(0, 9);
        } else {
            value = '+380' + value.slice(4).replace(/\+/g, '').slice(0, 9);
        }

        customerPhoneInput.value = value;
    });

    customerPhoneInput.addEventListener('keydown', (event) => {
        const cursorPos = customerPhoneInput.selectionStart;
        if (cursorPos <= 4 && (event.key === 'Backspace' || event.key === 'Delete')) {
            event.preventDefault();
        }
    });
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
        openOrderModal();
    }
});

cartButton.addEventListener('click', () => {
    cartSidebar.classList.toggle('open');
});

closeCartButton.addEventListener('click', () => {
    cartSidebar.classList.remove('open');
});

orderButton.addEventListener('click', openOrderModal);
orderModalCloseButton.addEventListener('click', closeOrderModal);
orderModalOverlay.addEventListener('click', (event) => {
    if (event.target === orderModalOverlay) {
        closeOrderModal();
    }
});

orderForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const name = document.getElementById('customerName').value.trim();
    const phone = document.getElementById('customerPhone').value.trim();
    const email = document.getElementById('customerEmail').value.trim();
    const address = document.getElementById('customerAddress').value.trim();
    const comment = document.getElementById('customerComment').value.trim();

    if (!name || !phone || !email || !address) {
        orderSuccessMessage.textContent = 'Будь ласка, заповніть усі обов’язкові поля: ім’я, телефон, пошта та адреса.';
        orderSuccessMessage.classList.add('visible');
        return;
    }

    const orderData = {
        customerName: name,
        customerPhone: phone,
        customerEmail: email,
        customerAddress: address,
        customerComment: comment,
        products: cartProducts,
        createdAt: new Date().toISOString()
    };

    setCookie('bistroLastOrder', JSON.stringify(orderData), 30);

    orderSuccessMessage.textContent = `Дякуємо, ${name}! Ваше замовлення на ${cartProducts.length} позицій оформлене. Ми зв’яжемося з вами найближчим часом.`;
    orderSuccessMessage.classList.add('visible');

    cartProducts = [];
    cartCount = 0;
    updateCart();
    setTimeout(() => {
        closeOrderModal();
    }, 2000);
});

const productSearch = document.getElementById('productSearch');

if (productSearch) {
    const productSections = document.querySelectorAll('section[id], .food-section, .coffee-section, .menu-section');

    const applyProductSearch = () => {
        const query = productSearch.value.trim().toLowerCase();
        let hasVisibleSection = false;

        productSections.forEach((section) => {
            const cards = section.querySelectorAll('.menu-card');
            if (!cards.length) {
                return;
            }

            let sectionHasMatch = false;

            cards.forEach((card) => {
                const title = card.querySelector('h3')?.textContent.toLowerCase() || '';
                const description = card.querySelector('p')?.textContent.toLowerCase() || '';
                const match = !query || title.includes(query) || description.includes(query);
                card.style.display = match ? '' : 'none';

                if (match) {
                    sectionHasMatch = true;
                }
            });

            const sectionTitle = section.querySelector('.section-title');
            if (sectionTitle) {
                sectionTitle.style.display = query && !sectionHasMatch ? 'none' : '';
            }

            section.style.display = query && !sectionHasMatch ? 'none' : '';

            if (sectionHasMatch) {
                hasVisibleSection = true;
            }
        });

        if (query && !hasVisibleSection) {
            const emptyMessage = document.getElementById('searchEmptyState');
            if (!emptyMessage) {
                const notice = document.createElement('p');
                notice.id = 'searchEmptyState';
                notice.className = 'empty-search';
                notice.textContent = 'Нічого не знайдено за вашим запитом.';
                document.querySelector('.page')?.appendChild(notice);
            }
        } else {
            const emptyMessage = document.getElementById('searchEmptyState');
            if (emptyMessage) {
                emptyMessage.remove();
            }
        }
    };

    productSearch.addEventListener('input', applyProductSearch);
    applyProductSearch();
}

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

loadCartFromCookie();
handleCookieConsent();
applyMenuPhotos();
updateCart();
