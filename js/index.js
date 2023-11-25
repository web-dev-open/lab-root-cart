// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');

  if(!product){
    console.log("Product is null or undefined.");
    return;
  }

  //... your code goes here
  var price = product.querySelector('.price span');
  var quantity = product.querySelector('.quantity input');

  //extract values using innerHTML
  const priceValue = parseFloat(price.innerHTML);
  const quantityValue = parseFloat(quantity.value);

  const subtotal = priceValue * quantityValue;

  //update subtotal in DOM
  const subtotalElement = product.querySelector('.subtotal span');
  subtotalElement.innerHTML = subtotal;

  //var subtotal = document.getElementsByClassName('.total-value');

  return subtotal;
  
}


function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  const singleProduct = document.querySelector('.product');
  updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  //... your code goes here
  
  const products = document.getElementsByClassName('product');
  let total = 0;
  for (let i = 0; i < products.length; i++) {
    const subtotal = updateSubtotal(products[i]);
    total += subtotal;
  }

  // ITERATION 3
  //... your code goes here
  const totalValue = document.getElementById('total-value');
  if (totalValue) {
    totalValue.innerHTML = "Total: $" + total; // Fix: Ensure to format the total as a currency
  } else {
    console.log("Total value element not found.");
  }

  return total;
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here

  const product = target.parentNode.parentNode;
  //product.parentNode.removeChild(product);

  // const tableBody = document.getElementsByTagName('tbody')[0];
  // tableBody.removeChild(product);
  // calculateAll();

  if(product){
    product.parentNode.removeChild(product);
    calculateAll();
  }else{
    console.log("Product is null or undefined.");
  }

  
}

var removeButtons = document.getElementsByClassName('btn-remove');

for (var i=0; i<removeButtons.length; i++) {
  removeButtons[i].addEventListener('click', removeProduct);
}
// ITERATION 5


function createProduct() {

  //... your code goes here
  // Get the input values for the new product
  const nameInput = document.querySelector('.create-product input[type="text"]');
  const priceInput = document.querySelector('.create-product input[type="number"]');

  const name = nameInput.value;
  const price = parseFloat(priceInput.value);

  // Validate input values
  if (!name || isNaN(price)) {
    alert('Please enter valid product name and unit price.');
    return;
  }

  // Create a new row for the new product
  const cartTable = document.getElementById('cart');
  const newRow = cartTable.insertRow(cartTable.rows.length - 1);

  // Insert cells with product details
  const nameCell = newRow.insertCell(0);
  nameCell.innerHTML = '<span class="name">' + name + '</span>';

  const priceCell = newRow.insertCell(1);
  priceCell.innerHTML = '$<span class="price">' + price + '</span>';

  const quantityCell = newRow.insertCell(2);
  quantityCell.innerHTML = '<input type="number" value="1" class="quantity">';

  const subtotalCell = newRow.insertCell(3);
  subtotalCell.innerHTML = '$<span class="subtotal">0.00</span>'; // Initial subtotal is 0

  const removeCell = newRow.insertCell(4);
  removeCell.innerHTML = '<button class="btn-remove">Remove</button>';

  // Add event listener to the new "Remove" button
  const removeButton = removeCell.querySelector('.btn-remove');
  removeButton.addEventListener('click', removeProduct);

  // Clear input fields
  nameInput.value = '';
  priceInput.value = '';

  // Recalculate the total after adding the new product
  calculateAll();
}

// Add click event listener to the "Create Product" button
const createButton = document.getElementById('create');
createButton.addEventListener('click', createProduct);

const quantityInputs = document.getElementsByClassName('quantity');
for (var i = 0; i < quantityInputs.length; i++) {
  quantityInputs[i].addEventListener('input', calculateAll);
}


window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
  const createProductBtn = document.getElementById('create');
  createProductBtn.addEventListener('click', createProduct);

});