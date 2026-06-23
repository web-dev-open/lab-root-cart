// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');

  //... your code goes here
  const priceElement = product.querySelector('.price span');
  const quantityElement = product.querySelector('.quantity input');

  const priceValue = parseFloat(priceElement.innerText);
  const quantityValue = parseInt(quantityElement.value) || 0;

  const subtotalValue = priceValue * quantityValue;

  const subtotalElement = product.querySelector('.subtotal span');
  subtotalElement.innerText = subtotalValue.toFixed(2);

  return subtotalValue;
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  
  // end of test

  // ITERATION 2
  //... your code goes here
  const allProducts = document.getElementsByClassName('product');
  let totalSum = 0;

  for (let product of allProducts) {
    totalSum += updateSubtotal(product);
  }

  // ITERATION 3
  //... your code goes here
  const totalElement = document.querySelector('#total-value span');
  totalElement.innerText = totalSum.toFixed(2);
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
  const productRow = target.parentNode.parentNode;
  productRow.parentNode.removeChild(productRow);

  calculateAll();
}

// ITERATION 5

function createProduct() {
  //... your code goes here
  const createProductRow = document.querySelector('.create-product');
  const nameInput = createProductRow.querySelector('input[type="text"]');
  const priceInput = createProductRow.querySelector('input[type="number"]');

  const productName = nameInput.value;
  const productPrice = parseFloat(priceInput.value) || 0;

  if (!productName || productPrice <= 0) {
    alert('Please enter a valid product name and price.');
    return;
  }

  const tbody = document.querySelector('#cart tbody');
  const newRow = document.createElement('tr');
  newRow.className = 'product';

  newRow.innerHTML = `
    <td class="name">
      <span>${productName}</span>
    </td>
    <td class="price">$<span>${productPrice.toFixed(2)}</span></td>
    <td class="quantity">
      <input type="number" value="0" min="0" placeholder="Quantity" />
    </td>
    <td class="subtotal">$<span>0.00</span></td>
    <td class="action">
      <button class="btn btn-remove">Remove</button>
    </td>
  `;

  tbody.appendChild(newRow);

  const newRemoveBtn = newRow.querySelector('.btn-remove');
  newRemoveBtn.addEventListener('click', removeProduct);

  nameInput.value = '';
  priceInput.value = 0;
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
  const removeButtons = document.querySelectorAll('.btn-remove');
  removeButtons.forEach(button => {
    button.addEventListener('click', removeProduct);
  });

  const createButton = document.getElementById('create');
  if (createButton) {
    createButton.addEventListener('click', createProduct);
  }
});