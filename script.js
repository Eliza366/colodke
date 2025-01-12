// Отримуємо елементи
const cartItems = document.getElementById('cart-items');
const totalPriceElement = document.getElementById('total-price');

// Масив для зберігання товарів
let cart = [];

// Додаємо обробник подій до кнопок
document.querySelectorAll('.product button').forEach(button => {
    button.addEventListener('click', () => {
        const name = button.dataset.name;
        const price = parseInt(button.dataset.price);

        // Додаємо товар до кошика
        cart.push({ name, price });

        // Оновлюємо відображення кошика
        updateCart();
    });
});

// Функція для оновлення відображення кошика
function updateCart() {
    // Очищаємо список товарів
    cartItems.innerHTML = '';

    // Оновлюємо список товарів
    cart.forEach((item, index) => {
        const li = document.createElement('li');
        li.textContent = `${item.name} - ${item.price} грн`;
        cartItems.appendChild(li);
    });

    // Рахуємо загальну суму
    const totalPrice = cart.reduce((sum, item) => sum + item.price, 0);
    totalPriceElement.textContent = `Загальна сума: ${totalPrice} грн`;
}