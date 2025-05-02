
const productContainer = document.getElementById("productContainer");
const cartCount = document.getElementById("cartCount");
const cartItems = document.getElementById("cartItems");
const totalPriceEl = document.getElementById("totalPrice");
const cartList = document.getElementById("cartList");

let cart = JSON.parse(localStorage.getItem("cart")) || [];

function updateCart() {
  cartCount.textContent = cart.reduce((sum, item) => sum + item.quantity, 0);
  cartItems.innerHTML = "";

  let total = 0;
  cart.forEach(item => {
    total += item.price * item.quantity;
    const li = document.createElement("li");
    li.innerHTML = `
      ${item.name} (x${item.quantity}) - Rp ${item.price * item.quantity}
      <button onclick="removeFromCart(${item.id})">Hapus</button>
    `;
    cartItems.appendChild(li);
  });
  totalPriceEl.textContent = `Total Harga: Rp ${total}`;
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

function checkout() {
  alert("Pembayaran berhasil! Terima kasih telah berbelanja.");
  cart = [];
  updateCart();
}

function saveCartToTxt() {
  if (cart.length === 0) {
    alert("Keranjang kosong!");
    return;
  }
  let text = "Isi Keranjang:\n";
  let total = 0;
  cart.forEach(item => {
    const subtotal = item.price * item.quantity;
    total += subtotal;
    text += `${item.name} (x${item.quantity}) - Rp ${subtotal}\n`;
  });
  text += `\nTotal Harga: Rp ${total}`;

  const blob = new Blob([text], { type: "text/plain" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = "keranjang.txt";
  link.click();
  URL.revokeObjectURL(url);
}

function renderProducts() {
  productContainer.innerHTML = "";
  products.forEach(product => {
    const card = document.createElement("div");
    card.className = "product";
    card.innerHTML = `
      <img src="${product.image}" alt="${product.name}" />
      <h3>${product.name}</h3>
      <p>${product.description}</p>
      <p class="price">Rp ${product.price}</p>
      <button onclick='addToCart(${JSON.stringify(product)})'>+ Keranjang</button>
    `;
    productContainer.appendChild(card);
  });

  if (!document.getElementById("saveCartBtn")) {
    const saveBtn = document.createElement("button");
    saveBtn.id = "saveCartBtn";
    saveBtn.textContent = "Simpan Keranjang";
    saveBtn.onclick = saveCartToTxt;
    cartList.appendChild(saveBtn);
  }
}

renderProducts();
updateCart();
