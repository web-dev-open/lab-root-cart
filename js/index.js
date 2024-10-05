// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
  let price = Number(product.querySelector('.price span').innerText);
  let quantity = Number(product.querySelector('.quantity input').value);
  let subtotal = price * quantity;
  product.querySelector('.subtotal span').innerText = subtotal;
  return subtotal;

}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  const singleProduct = document.querySelector('.product');
  updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  let products = document.getElementsByClassName('product');
  for (let i = 0; i < products.length; i++) {
    updateSubtotal(products[i]);
  }

  // ITERATION 3
  let total = 0;
  for (let i = 0; i < products.length; i++) {
    total += Number(products[i].querySelector('.subtotal span').innerHTML);
  }
  document.querySelector('#total-value span').innerHTML = total;

}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
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
  let target = event.currentTarget;
  let parentTarget = target.parentNode.parentNode;
  let proName = parentTarget
    .getElementsByTagName('td')[0]
    .getElementsByTagName('input')[0].value;
  let price = parseFloat(
    parentTarget.getElementsByTagName('td')[1].getElementsByTagName('input')[0]
      .value
  ).toFixed(2);

  let nameHolder = document.createElement('td');
  let nameTag = document.createElement('span');
  let nameText = document.createTextNode(proName);
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
  let Input = document.createElement('input');
  Input.type = 'number';
  Input.defaultValue = '0';
  Input.min = '0';
  Input.placeholder = 'Quantity';
  quantityHolder.appendChild(Input);
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

  let removeBtns = document.getElementsByClassName('btn-remove');
  for (let i = 0; i < removeBtns.length; i++) {
    removeBtns[i].addEventListener('click', removeProduct);
  }

  let createBtn = document.getElementById('create');
  createBtn.addEventListener('click', createProduct);
});

