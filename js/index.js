// ITERATION 1

function updateSubtotal(product) {
  const price1= product.querySelector('.price span');
  const quantity1= product.querySelector('.quantity input');
  const price= parseFloat(price1.innerHTML);
  const quantity= parseInt(quantity1.value);
  const subtotal= price*quantity;
  const subtotal1= product.querySelector('.subtotal span');
  subtotal1.innerHTML=subtotal.toFixed(2);
  return subtotal;
}

function calculateAll() {
  // ITERATION 2
  //... your code goes here
  const productList= document.getElementsByClassName('product');
  for(let product of productList){
    updateSubtotal(product);
  }

  // ITERATION 3
  //... your code goes here
  let total=0;
  for(let product of productList){
    total+= updateSubtotal(product);
  }
  const totalVal = document.querySelector('#total-value span');
  totalVal.innerHTML=total.toFixed(2);
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
  const productList= target.parentNode.parentNode;
  productList.parentNode.removeChild(productList);
  calculateAll();
}

// ITERATION 5

function createProduct() {
  //... your code goes here
  const name= document.querySelector('.new-product-name input');
  const price= document.querySelector('.new-product-price input');
  const productName= name.value;
  const productPrice= parseFloat(price.value);
  if (!productName || isNaN(productPrice)) {
    alert('Please enter valid values for name and unit price.');
    return;
  }

  const tbody = document.querySelector('#cart tbody');
  const newRow = document.createElement('tr');
  newRow.classList.add('product');

  const nameCell = document.createElement('td');
  nameCell.classList.add('name');
  nameCell.innerHTML = `<span>${productName}</span>`;

  const priceCell = document.createElement('td');
  priceCell.classList.add('price');
  priceCell.innerHTML = `$<span>${productPrice.toFixed(2)}</span>`;

  const quantityCell = document.createElement('td');
  quantityCell.classList.add('quantity');
  quantityCell.innerHTML = '<input type="number" value="0" min="0" placeholder="Quantity" />';

  const subtotalCell = document.createElement('td');
  subtotalCell.classList.add('subtotal');
  subtotalCell.innerHTML = '$<span>0.00</span>';

  const actionCell = document.createElement('td');
  actionCell.classList.add('action');
  actionCell.innerHTML = '<button class="btn btn-remove">Remove</button>';

  newRow.appendChild(nameCell);
  newRow.appendChild(priceCell);
  newRow.appendChild(quantityCell);
  newRow.appendChild(subtotalCell);
  newRow.appendChild(actionCell);

  tbody.appendChild(newRow);

  name.value = '';
  price.value = '';

  const removeButton = newRow.querySelector('.btn-remove');
  removeButton.addEventListener('click', removeProduct);

  calculateAll();
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
  const removeButtons = document.getElementsByClassName('btn-remove');
  for (let removeButton of removeButtons) {
    removeButton.addEventListener('click', removeProduct);
  }
  const createProductBtn = document.getElementById('create');
  createProductBtn.addEventListener('click', createProduct);
});
