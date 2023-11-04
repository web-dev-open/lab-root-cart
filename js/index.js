// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');

  //... your code goes here
  const price = product.querySelector('.price span').textContent;
  const quantity = product.querySelector('.quantity input').value;
  const subtotal = price * quantity;
  product.querySelector('.subtotal span').textContent = subtotal;
  return subtotal;
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // const singleProduct = document.querySelector('.product');
  // updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  //... your code goes here
  let total = 0;
  const products = document.querySelectorAll('.product');
  for (const product of products) {
    total += updateSubtotal(product);
  }

  // ITERATION 3
  //... your code goes here
  document.querySelector('#total-value span').textContent = total;
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
  const product = target.parentNode.parentNode;

  const price = product.querySelector('.price span').textContent;
  const quantity = product.querySelector('.quantity input').value;
  const subtotal = price * quantity;
  console.log(price, quantity, subtotal);

  const total = document.querySelector('#total-value span').textContent;
  document.querySelector('#total-value span').textContent = total - subtotal;

  product.remove();
}

// ITERATION 5

function createProduct(event) {
  const children = event.target.parentNode.parentNode.children;
  const nameParent = children[0];
  const priceParent = children[1];
  const inputElementName = nameParent.firstElementChild;
  const inputElementPrice = priceParent.firstElementChild;
  const price = inputElementPrice.value;
  const name = inputElementName.value;
  console.log(name);
  console.log(price);

  // Create a new product
  //... your code goes here
  const tr = document.createElement('tr');
  tr.classList.add('product');
  const td = document.createElement('td');
  td.classList.add('name');
  const span = document.createElement('span');
  span.textContent = name;
  td.appendChild(span);
  tr.appendChild(td);
  const td2 = document.createElement('td');
  td2.classList.add('price');
  const span2 = document.createElement('span');
  span2.textContent = price;
  td2.textContent = '$';
  td2.appendChild(span2);
  tr.appendChild(td2);
  const td3 = document.createElement('td');
  td3.classList.add('quantity');
  const input = document.createElement('input');
  input.type = 'number';
  input.value = '0';
  input.min = '0';
  input.placeholder = 'Quantity';
  td3.appendChild(input);
  tr.appendChild(td3);
  const td4 = document.createElement('td');
  td4.classList.add('subtotal');
  const span4 = document.createElement('span');
  span4.textContent = '0';
  td4.textContent = '$';
  td4.appendChild(span4);
  tr.appendChild(td4);
  const td5 = document.createElement('td');
  td5.classList.add('action');
  const button = document.createElement('button');
  button.classList.add('btn');
  button.classList.add('btn-remove');
  button.textContent = 'Remove';
  td5.appendChild(button);
  tr.appendChild(td5);

  const tbody = document.querySelector('#cart tbody');
  tbody.appendChild(tr);
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
  const removeButtons = document.querySelectorAll('.btn-remove');
  for (const removeButton of removeButtons) {
    removeButton.addEventListener('click', removeProduct);
  }

  // add product button
  const addProductBtn = document.querySelector('#create');
  addProductBtn.addEventListener('click', createProduct);
});
