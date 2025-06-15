const cartItemsContainer = document.getElementById('cartItems');
const totalPriceEl = document.getElementById('totalPrice');

let cart = JSON.parse(localStorage.getItem('cart')) || [];

function renderCart() {
  cartItemsContainer.innerHTML = '';
  let total = 0;

  cart.forEach(item => {
    total += item.price;

    const card = document.createElement('div');
    card.className = 'cart-item';
    card.innerHTML = `
      <img src="${item.image}" alt="${item.name}" />
      <div>
        <h3>${item.name}</h3>
        <p>Price: ₹${item.price}</p>
      </div>
    `;
    cartItemsContainer.appendChild(card);
  });

  totalPriceEl.textContent = total;
}

function clearCart() {
  localStorage.removeItem('cart');
  cart = [];
  renderCart();
}

renderCart();
function checkout() {
  alert("Thank you for your purchase!");
  localStorage.removeItem('cartItems');
  document.querySelector('.cart-items').innerHTML = '';
  document.getElementById('cartTotal').textContent = '₹0';
}
document.getElementById("deliveryForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const name = document.getElementById("customerName").value;
  const phone = document.getElementById("phoneNumber").value;
  const address = document.getElementById("deliveryAddress").value;

  if (name && phone && address) {
    alert(`Thank you ${name}, your order will be delivered to:\n${address}\nContact: ${phone}`);
    localStorage.removeItem('cartItems');
    document.querySelector('.cart-items').innerHTML = '';
    document.getElementById('cartTotal').textContent = '₹0';
  } else {
    alert("Please fill all delivery details.");
  }
});
