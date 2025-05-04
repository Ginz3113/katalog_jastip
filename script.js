const productContainer = document.getElementById("productContainer");
const cartCount = document.getElementById("cartCount");
const cartItems = document.getElementById("cartItems");
const totalPriceEl = document.getElementById("totalPrice");
const cartList = document.getElementById("cartList");
const checkoutBtn = document.getElementById("checkoutBtn");
const saveCartBtn = document.getElementById("saveCartBtn");

if (!productContainer || !cartCount || !cartItems || !totalPriceEl || !cartList) {
  console.error("Satu atau lebih elemen HTML tidak ditemukan.");
}

let cart = JSON.parse(localStorage.getItem("cart")) || [];

function updateCart() {
  cartCount.textContent = cart.reduce((sum, item) => sum + item.quantity, 0);
  cartItems.innerHTML = "";
  let total = 0;

  cart.forEach(item => {
    const itemTotal = item.price * item.quantity;
    total += itemTotal;

    const li = document.createElement("li");
    li.innerHTML = `
      <strong>${item.name}</strong> (x${item.quantity}) - Jpy ${itemTotal.toLocaleString("id-ID")}
      <button onclick="changeQty(${item.id}, 1)">+</button>
      <button onclick="changeQty(${item.id}, -1)">-</button>
      <button onclick="removeFromCart(${item.id})">🗑</button>
    `;
    cartItems.appendChild(li);
  });

  totalPriceEl.textContent = `Total Harga: Jpy ${total.toLocaleString("id-ID")}`;
  localStorage.setItem("cart", JSON.stringify(cart));
}

function addToCart(product) {
  const existing = cart.find(item => item.id === product.id);
  if (existing) {
    existing.quantity++;
  } else {
    cart.push({ ...product, quantity: 1 });
  }
  updateCart();
}

function removeFromCart(id) {
  cart = cart.filter(item => item.id !== id);
  updateCart();
}

function changeQty(id, delta) {
  const item = cart.find(i => i.id === id);
  if (item) {
    item.quantity += delta;
    if (item.quantity <= 0) {
      removeFromCart(id);
    } else {
      updateCart();
    }
  }
}

function saveCartToTxt() {
  if (cart.length === 0) return alert("Keranjang kosong.");

  let txt = "Isi Keranjang:\n";
  let total = 0;
  cart.forEach(item => {
    const subtotal = item.price * item.quantity;
    total += subtotal;
    txt += `${item.name} x${item.quantity} - Jpy ${subtotal.toLocaleString("id-ID")}\n`;
  });
  txt += `\nTotal Harga: Jpy ${total.toLocaleString("id-ID")}`;

  const blob = new Blob([txt], { type: "text/plain" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "keranjang.txt";
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
}

function checkout() {
  if (cart.length === 0) return alert("Keranjang kosong.");
  alert("Pembayaran berhasil. Terima kasih!");
  cart = [];
  updateCart();
}

function renderProducts() {
  if (!Array.isArray(products)) {
    console.error("products belum didefinisikan.");
    return;
  }

  productContainer.innerHTML = "";
  products.forEach(product => {
    const card = document.createElement("div");
    card.className = "product";
    card.innerHTML = `
      <img src="${product.image}" alt="${product.name}" />
      <h3>${product.name}</h3>
      <p>${product.description}</p>
      <p class="price">Jpy ${product.price.toLocaleString("id-ID")}</p>
      <button class="add-to-cart-btn">+ Keranjang</button>
    `;
    const btn = card.querySelector(".add-to-cart-btn");
    btn.addEventListener("click", () => addToCart(product));
    productContainer.appendChild(card);
  });
}

if (checkoutBtn) checkoutBtn.addEventListener("click", checkout);
if (saveCartBtn) saveCartBtn.addEventListener("click", saveCartToTxt);

renderProducts();
updateCart();