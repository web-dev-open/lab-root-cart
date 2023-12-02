// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');

  let quantity = product.querySelector('.quantity input').value;
  let price = product.querySelector('.price span').innerHTML;
  let subtotal = product.querySelector('.subtotal span');

  let total = quantity * price;

  // parseInt(subtotal);
  subtotal.textContent = total;

  return total;

  //... your code goes here
}

function calculateAll() {
  const allProducts = document.querySelectorAll('.product');
  let totalPrice = 0;

  // ITERATION 2
  //... your code goes here
  allProducts.forEach((product) => {
    totalPrice += updateSubtotal(product);
  });
  console.log(totalPrice);
  const totalValue = document.querySelector('#total-value span');
  totalValue.innerHTML = totalPrice;
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
  const productRow = target.closest('.product');

  if (productRow) {
    productRow.parentNode.removeChild(productRow);
    calculateAll();
  }
}

// ITERATION 5

function createProduct() {
  //... your code goes here
  const newProductName = document.querySelector(
    '.create-product input[type="text"]'
  );
  const newProductPrice = document.querySelector(
    '.create-product input[type="number"]'
  );
  const newProduct = document.createElement('tr');
  newProduct.classList.add('product');
  newProduct.innerHTML = `
    <td class="name">
      <span></span>
    </td>
    <td class="price">$<span></span></td>
    <td class="quantity">
      <input type="number" value="0" min="0" placeholder="Quantity" />
    </td>
    <td class="subtotal">$<span></span></td>
    <td class="action">
      <button class="btn btn-remove">Remove</button>
    </td>
  `;
  newProduct.querySelector('.name span').innerHTML = newProductName.value;
  newProduct.querySelector('.price span').innerHTML = newProductPrice.value;
  newProduct.querySelector('.subtotal span').innerHTML = 0;

  newProduct
    .querySelector('.btn-remove')
    .addEventListener('click', removeProduct);
  document.querySelector('tbody').appendChild(newProduct);
  newProductName.value = '';
  newProductPrice.value = 0;

  calculateAll();
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
  const removeButtons = document.querySelectorAll('.btn-remove');
  removeButtons.forEach((button) => {
    button.addEventListener('click', removeProduct);
  });

  const createButton = document.getElementById('create');
  createButton.addEventListener('click', createProduct);
});
