// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');

  //... your code goes here
  let price = Number(product.querySelector('.price span').innerHTML);
  let quantity = Number(product.querySelector('.quantity input').value);
  let subtotal = price * quantity;
  product.querySelector('.subtotal span').innerHTML = subtotal;
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
  let products = document.getElementsByClassName('product');
  for (let i = 0; i < products.length; i++) {
    updateSubtotal(products[i]);
  }
  // ITERATION 3
  //... your code goes here
  let total = 0;
  for (let j = 0; j < products.length; j++) {
    total += Number(products[j].querySelector('.subtotal span').innerHTML);
  }
  document.querySelector('#total-value span').innerHTML = total;
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
  let targetProduct = target.parentNode.parentNode;
  let targetCart = targetProduct.parentNode;
  console.log(targetCart);
  document.querySelector('#total-value span').innerHTML =
    Number(document.querySelector('#total-value span').innerHTML) -
    Number(targetProduct.querySelector('.subtotal span').innerHTML);
  targetCart.removeChild(targetProduct);
}

// ITERATION 5

function createProduct(event) {
  //... your code goes here
  let target = event.currentTarget;
  let parentTarget = target.parentNode.parentNode;
  let prodName = parentTarget
    .getElementsByTagName('td')[0]
    .getElementsByTagName('input')[0].value;
  let price = parseFloat(
    parentTarget.getElementsByTagName('td')[1].getElementsByTagName('input')[0]
      .value
  ).toFixed(2);

  let nameHolder = document.createElement('td');
  let nameTag = document.createElement('span');
  let nameText = document.createTextNode(prodName);
  nameTag.appendChild(nameText);
  nameHolder.appendChild(nameTag);
  nameHolder.className = 'name';

  let priceHolder = document.createElement('td');
  priceHolder.innerHTML = '$';
  let priceTag = document.createElement('span');
  let priceText = document.createTextNode(price);
  priceTag.appendChild(priceText);
  priceHolder.appendChild(priceTag);
  priceHolder.className = 'price';

  let quantityHolder = document.createElement('td');
  let qInput = document.createElement('input');
  qInput.type = 'number';
  qInput.defaultValue = '0';
  qInput.min = '0';
  qInput.placeholder = 'Quantity';
  quantityHolder.appendChild(qInput);
  quantityHolder.className = 'quantity';

  let subtotalHolder = document.createElement('td');
  subtotalHolder.innerHTML = '$';
  let subtotalTag = document.createElement('span');
  subtotalTag.innerHTML = 0;
  subtotalHolder.appendChild(subtotalTag);
  subtotalHolder.className = 'subtotal';

  let actionHolder = document.createElement('td');
  let buttonTag = document.createElement('button');
  buttonTag.innerHTML = 'Remove';
  actionHolder.appendChild(buttonTag);
  actionHolder.className = 'action';
  buttonTag.className = 'btn btn-remove';
  buttonTag.addEventListener('click', removeProduct);

  let productHolder = document.createElement('tr');
  productHolder.appendChild(nameHolder);
  productHolder.appendChild(priceHolder);
  productHolder.appendChild(quantityHolder);
  productHolder.appendChild(subtotalHolder);
  productHolder.appendChild(actionHolder);
  productHolder.className = 'product';

  let prodList = document.getElementsByTagName('tbody')[0];
  prodList.appendChild(productHolder);
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
  let removeBtns = document.getElementsByClassName('btn-remove');
  for (let k = 0; k < removeBtns.length; k++) {
    removeBtns[k].addEventListener('click', removeProduct);
  }

  let createBtn = document.getElementById('create');
  createBtn.addEventListener('click', createProduct);
});
