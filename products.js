// Initialize or load cart from localStorage
let cart = JSON.parse(localStorage.getItem('cart')) || [];

// Add to Cart button click
document.querySelectorAll('.product-card button').forEach((btn, index) => {
  btn.addEventListener('click', () => {
    const productCard = btn.parentElement;
    const name = productCard.querySelector('h3').innerText;
    const price = parseFloat(productCard.querySelector('span').innerText.replace('₹', ''));
    const image = productCard.querySelector('img').src;

    const item = { name, price, image, quantity: 1 };

    // Check if already in cart
    const existingItem = cart.find(p => p.name === name);
    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      cart.push(item);
    }

    localStorage.setItem('cart', JSON.stringify(cart));
    alert(`${name} added to cart!`);
  });
});
document.querySelectorAll('.product-card button').forEach((button, index) => {
  button.addEventListener('click', () => {
    const productCard = button.parentElement;
    const name = productCard.querySelector('h3').textContent;
    const price = parseInt(productCard.querySelector('span').textContent.replace('₹', ''));
    const image = productCard.querySelector('img').getAttribute('src');

    const item = { name, price, image };

    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.push(item);
    localStorage.setItem('cart', JSON.stringify(cart));

    alert(`${name} added to cart!`);
  });
});
