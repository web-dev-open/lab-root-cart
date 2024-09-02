// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');

  //... your code goes here
  const price = product.querySelector('.price span').innerHTML;
  const quantity = product.querySelector('.quantity input').value;
  let total = quantity * price;
  const subTotal = product.querySelector('.subtotal span');
  subTotal.innerHTML = total;
  return subTotal.innerHTML;
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  const singleProduct = document.querySelector('.product');
  updateSubtotal(singleProduct);
  // const singleProduct = document.querySelector('.product');
  // updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  //... your code goes here
  const products = Array.from(document.querySelectorAll('.product'));
  let sum = 0;
  products.forEach((product) => {
    sum += parseInt(updateSubtotal(product));
  });

  // ITERATION 3
  //... your code goes here
  const total = document.querySelector('#total-value span');
  total.innerHTML = sum;
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  console.log('The target in remove is:', target.parentElement.parentElement);
  //... your code goes here

  target.parentElement.parentElement.remove();
  calculateAll(); // recalculate total after removing product
}

// ITERATION 5

function createProduct() {
  //... your code goes here
  console.log("PRODUCT CREATED");

  // creating new row and cells
  const tableBody = document.querySelector('tbody');
  let row = tableBody.insertRow(-1);
  row.classList.add("product");
  let nameCell = row.insertCell(0);
  nameCell.classList.add("name");
  let priceCell = row.insertCell(1);
  priceCell.classList.add("price");
  let quantityCell = row.insertCell(2);
  let input = document.createElement("input");
  input.setAttribute('type', 'number');
  input.setAttribute('min', '0');
  input.setAttribute('placeholder', 'Quantity');
  input.setAttribute('value', '0');
  quantityCell.appendChild(input);
  quantityCell.classList.add('quantity');
  let subTotalCell = row.insertCell(3);
  subTotalCell.classList.add("subtotal");
  let actionCell = row.insertCell(4);
  actionCell.classList.add("action");
  let btn = document.createElement("button");
  btn.classList.add("btn", "btn-remove");
  btn.innerHTML = "Remove";
  actionCell.appendChild(btn);

  // adding the values dynamically from the form
  let inputName = document.querySelector('.name-input');
  nameCell.innerHTML = `<span>${inputName.value}</span>`;
  let inputPrice = document.querySelector('.price-input');
  priceCell.innerHTML = `$<span>${inputPrice.value}</span>`;
  subTotalCell.innerHTML = "$<span>0</span>";

  // clear the form fields
  inputName.value = '';
  inputPrice.value = '';
  calculateAll(); // recalculate total after adding new product

  btn.addEventListener('click', removeProduct);
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here

  // create Product
  const createProductBtn = document.getElementById('create');
  createProductBtn.addEventListener('click', createProduct);

  // remove product
  const removeButtonArray = Array.from(document.querySelectorAll('.btn-remove'));
  removeButtonArray.forEach((button) => {
    button.addEventListener('click', removeProduct);
  });
});