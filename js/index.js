// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
  console.log(product);

  const price = product.querySelector('.price span');
  const quantity = product.querySelector('.quantity input');

  const priceValue = price.innerHTML;
  const quantityValue = quantity.value;

  const subtotalValue = priceValue*quantityValue;

  const subtotal = product.querySelector('.subtotal span');
  subtotal.innerHTML = subtotalValue;

  return subtotalValue;
}

function calculateAll() {

  // ITERATION 2
  const products = document.getElementsByClassName('product');
  // updateSubtotal(products[0]);
  // updateSubtotal(products[1]);
  let total = 0;
  for(let i=0; i<products.length; i++){
    let sub = updateSubtotal(products[i]);
    total+=sub;
  }

  // ITERATION 3
  // console.log(total);
  document.querySelector('#total-value span').innerHTML = total;
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  
  //to remove a DOM node (the product)
  //access the product
  let product = target.parentNode.parentNode;

  //access its parent
  let parent = product.parentNode;

  //remove the product from its parent
  parent.removeChild(product);

  //recalculate the total
  calculateAll();
}

// ITERATION 5

function createProduct() {
  //#1. get the tbody
  const tbody = document.querySelector('tbody');
  
  //#2. create the product row and add the class
  const productRow = document.createElement('tr');
  productRow.classList.add('product');

  //#3. create columns in the row and set their attributes and contents
  //name td
  const nameTd = document.createElement('td');
  nameTd.classList.add('name');
  const nameSpan = document.createElement('span');
  const productName = document.querySelector('input[placeholder="Product Name"]').value;
  nameSpan.innerHTML = productName;
  nameTd.appendChild(nameSpan);

  //price td
  const priceTd = document.createElement('td');
  priceTd.classList.add('price');
  priceTd.innerHTML = '$';
  const priceSpan = document.createElement('span');
  const productPrice = document.querySelector('input[placeholder="Product Price"]').value;
  priceSpan.innerHTML = productPrice;
  priceTd.appendChild(priceSpan);

  //quantity td
  const quantityTd = document.createElement('td');
  quantityTd.classList.add('quantity');
  const quantityInput = document.createElement('input');
  quantityInput.type = 'number';
  quantityInput.value = '0';
  quantityInput.min = '0';
  quantityInput.placeholder = 'Quantity';
  quantityTd.appendChild(quantityInput);

  //subtotal td
  const subtotalTd = document.createElement('td');
  subtotalTd.classList.add('subtotal');
  subtotalTd.innerHTML = '$';
  const subtotalSpan = document.createElement('span');
  subtotalSpan.innerHTML = 0;
  subtotalTd.appendChild(subtotalSpan);

  //remove td
  const removeTd = document.createElement('td');
  removeTd.classList.add('action');
  const removeBtn = document.createElement('button');
  removeBtn.classList.add('btn', 'btn-remove');
  removeBtn.innerHTML = 'Remove';
  removeTd.appendChild(removeBtn);

  //#4. append all the tds to the row
  productRow.appendChild(nameTd);
  productRow.appendChild(priceTd);
  productRow.appendChild(quantityTd);
  productRow.appendChild(subtotalTd);
  productRow.appendChild(removeTd);

  //#5. append the row to the tbody
  tbody.appendChild(productRow);

}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  const removeBtns = document.querySelectorAll('.btn-remove');
  for(let i=0; i<removeBtns.length; i++){
    removeBtns[i].addEventListener('click', removeProduct);
  }

  const createBtn = document.querySelector('#create');
  createBtn.addEventListener('click', createProduct);
});
