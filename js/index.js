// ITERATION 1
function updateSubtotal(product) {
  const price = product.querySelector('.price span');
  const quantity = product.querySelector('.quantity input');
  const subtotal = product.querySelector('.subtotal span');

  const priceValue = parseFloat(price.textContent);
  const quantityValue = parseInt(quantity.value);

  const subtotalPrice = priceValue * quantityValue;

  subtotal.textContent = subtotalPrice || 0;

  return subtotalPrice;
}

function updateProductSubtotal(event) {
  const quantity = event.currentTarget;
  const product = quantity.closest('.product');
  updateSubtotal(product);
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // const singleProduct = document.querySelector('.product');
  // updateSubtotal(singleProduct);
  // end of test
  // ITERATION 2
  //... your code goes here
  const products = document.querySelectorAll('.product');
  const totalValue = [...products].reduce((acc, product) => {
    acc += updateSubtotal(product);
    return acc;
  }, 0);

  // ITERATION 3
  //... your code goes here
  const total = document.querySelector('#total-value span');
  total.textContent = totalValue;
}

// ITERATION 4

function removeProduct(event) {
  if (!event.target.closest('.btn-remove')) return;
  const removeButton = event.target;
  const product = removeButton.closest('.product');
  product.remove();
  calculateAll();
}

// ITERATION 5

function createNewProduct(productName, productPrice) {
  const product = document.createElement('tr');
  product.classList.add('product');
  product.innerHTML = `
    <td class="name">
      <span>${[productName]}</span>
    </td>
    <td class="price">$<span>${productPrice.toFixed(2)}</span></td>
    <td class="quantity">
      <input type="number" oninput="updateProductSubtotal(event)" value="0" min="0" placeholder="Quantity" />
    </td>
    <td class="subtotal">$<span>0</span></td>
    <td class="action">
      <button class="btn btn-remove">Remove</button>
    </td>
  `;
  return product;
}

function createProduct(event) {
  const createButton = event.currentTarget;
  const createProductRow = createButton.closest('.create-product');

  const productName = createProductRow.querySelector('input[type="text"]');
  const productPrice = createProductRow.querySelector('input[type="number"]');

  const productNameValue = productName.value;
  const productPriceValue = parseFloat(productPrice.value);

  if (!productNameValue) {
    alert('Please enter the product name');
    return;
  }

  const newProduct = createNewProduct(productNameValue, productPriceValue);
  const cartBody = document.querySelector('#cart tbody');
  cartBody.appendChild(newProduct);

  productName.value = '';
  productPrice.value = 0;
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);
  const cart = document.getElementById('cart');
  const createBtn = cart.querySelector('#create');
  cart.addEventListener('click', removeProduct);
  createBtn.addEventListener('click', createProduct);
});