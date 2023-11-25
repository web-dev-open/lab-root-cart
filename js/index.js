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
  var price = price.innerHTML;
  var quantity = quantity.value;

  var subtotal = price * quantity;

  //update subtotal in DOM
  var subtotalElement = product.querySelector('.subtotal span');
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
  var total = 0;
  var products = document.getElementsByClassName('product');
  for (var i = 0; i < products.length; i++) {
    total += updateSubtotal(products[i]);
  }

  // ITERATION 3
  //... your code goes here
  var totalValue = document.getElementById('total-value');
  totalValue.innerHTML = "Total: $" +total;

  return total;
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here

  var product = target.parentNode.parentNode;
  product.parentNode.removeChild(product);

  if(product){
    product.parentNode.removeChild(product);
    calculateAll();
  }else{
    console.log("Product is null or undefined.");
  }

  
}

var removeButtons = document.getElementsByClassName('btn btn-remove');

for (var i=0; i<removeButtons.length; i++) {
  removeButtons[i].addEventListener('click', removeProduct);
}
// ITERATION 5


function createProduct() {

  //... your code goes here
  // Get the input values for the new product
  var nameInput = document.querySelector('.create-product input[type="text"]');
  var priceInput = document.querySelector('.create-product input[type="number"]');

  var name = nameInput.value;
  var price = parseFloat(priceInput.value);

  // Validate input values
  if (!name || isNaN(price)) {
    alert('Please enter valid product name and unit price.');
    return;
  }

  // Create a new row for the new product
  var cartTable = document.getElementById('cart');
  var newRow = cartTable.insertRow(cartTable.rows.length - 1);

  // Insert cells with product details
  var nameCell = newRow.insertCell(0);
  nameCell.innerHTML = '<span class="name">' + name + '</span>';

  var priceCell = newRow.insertCell(1);
  priceCell.innerHTML = '$<span class="price">' + price.toFixed(2) + '</span>';

  var quantityCell = newRow.insertCell(2);
  quantityCell.innerHTML = '<input type="number" value="1" class="quantity">';

  var subtotalCell = newRow.insertCell(3);
  subtotalCell.innerHTML = '$<span class="subtotal">0.00</span>'; // Initial subtotal is 0

  var removeCell = newRow.insertCell(4);
  removeCell.innerHTML = '<button class="btn btn-remove">Remove</button>';

  // Add event listener to the new "Remove" button
  var removeButton = removeCell.querySelector('.btn-remove');
  removeButton.addEventListener('click', removeProduct);

  // Clear input fields
  nameInput.value = '';
  priceInput.value = '';

  // Recalculate the total after adding the new product
  calculateAll();
}

// Add click event listener to the "Create Product" button
var createButton = document.getElementById('create');
createButton.addEventListener('click', createProduct);



window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
  const createProductBtn = document.getElementById('create');
  createProductBtn.addEventListener('click', createProduct);

});
