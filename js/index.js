// ITERATION 1

function updateSubtotal(product) {
  //console.log('Calculating subtotal, yey!');
  const price = product.querySelector('.price span');
  const quantity = product.querySelector('.quantity input');
  const subtotal = product.querySelector('.subtotal span');

  let priceValue = parseFloat(price.textContent);
  let quantityValue = parseFloat(quantity.value);

  let result = priceValue * quantityValue;
  subtotal.textContent = result;
  return result;
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  //const singleProduct = document.querySelector('.product');
  //updateSubtotal(singleProduct);

  // end of test

  // ITERATION 2
  const productRows = document.getElementsByClassName('product');

  for (let product of productRows) {
    updateSubtotal(product);
  }

  // ITERATION 3
  const totalValue = document.querySelector('#total-value span');
  let counter = 0;
  for (let product of productRows) {
    counter += updateSubtotal(product);
  }
  totalValue.textContent = counter;
}
calculateAll();

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
  const nameInput = document.querySelector('tfoot tr input[type="text"]');
  const priceInput = document.querySelector('tfoot tr input[type="number"]');

  const nameValue = nameInput.value;
  const priceValue = parseFloat(priceInput.value).toFixed(2);

  const tbody = document.querySelector('tbody');
  const tr = document.createElement('tr');
  tr.className = 'product';

  const tdName = document.createElement('td');
  tdName.className = 'name';
  const spanName = document.createElement('span');
  spanName.textContent = nameValue;
  tdName.appendChild(spanName);
  tr.appendChild(tdName);

  const tdPrice = document.createElement('td');
  tdPrice.className = 'price';
  const spanPrice = document.createElement('span');
  spanPrice.textContent = priceValue;
  tdPrice.appendChild(document.createTextNode('$'));
  tdPrice.appendChild(spanPrice);
  tr.appendChild(tdPrice);

  const tdQuantity = document.createElement('td');
  tdQuantity.className = 'quantity';
  const inputQuantity = document.createElement('input');
  inputQuantity.type = 'number';
  inputQuantity.value = 0;
  inputQuantity.min = 0;
  tdQuantity.appendChild(inputQuantity);
  tr.appendChild(tdQuantity);

  const tdSubtotal = document.createElement('td');
  tdSubtotal.className = 'subtotal';
  const spanSubtotal = document.createElement('span');
  spanSubtotal.textContent = '0';
  tdSubtotal.appendChild(document.createTextNode('$'));
  tdSubtotal.appendChild(spanSubtotal);
  tr.appendChild(tdSubtotal);

  const tdAction = document.createElement('td');
  tdAction.className = 'action';
  const btnRemove = document.createElement('button');
  btnRemove.className = 'btn btn-remove';
  btnRemove.textContent = 'Remove';
  tdAction.appendChild(btnRemove);
  tr.appendChild(tdAction);

  tbody.appendChild(tr);

  nameInput.value = '';
  priceInput.value = 0;

  btnRemove.addEventListener('click', removeProduct);
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
  const removeBtns = document.querySelectorAll('.btn-remove');
  removeBtns.forEach((btn) => btn.addEventListener('click', removeProduct));

  const btnCreate = document.getElementById('create');
  btnCreate.addEventListener('click', createProduct);
});
