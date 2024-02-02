// ITERATION 1

function updateSubtotal(product) {
  // Extract values from DOM elements
  const price = parseFloat(product.querySelector('.price span').innerHTML);
  const quantity = parseFloat(product.querySelector('.quantity input').value);
  
  // Calculate the subtotal price
  const subtotal = price * quantity;
  
  // Get the DOM element that should hold the subtotal
  const subtotalElement = product.querySelector('.subtotal span');
  
  // Set the subtotal price to the corresponding DOM element
  subtotalElement.innerHTML = subtotal.toFixed(2);

  return subtotal;
  //... your code goes here
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // const singleProduct = document.querySelector('.product');
  // updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  // Get all the product rows
  const productRows = document.getElementsByClassName('product');

  let total = 0;
  // Call updateSubtotal for each product and sum the subtotals
  for(let i = 0; i < productRows.length; i++){
    total += updateSubtotal(productRows[i]);
  }

  // ITERATION 3
  const totalElement = document.getElementById('total-value');
  totalElement.querySelector('span').innerHTML = total.toFixed(2);
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  const productRow = target.parentNode.parentNode; // Get the parent of the "Remove" button, which is product row

  // Remove the product row from the cart
  productRow.parentNode.removeChild(productRow);

  //Recalculate the total price
  calculateAll();  
}

// ITERATION 5

function createProduct() {
  // Target the name and unit price input DOM nodes
  const nameInput = document.querySelector('.create-product input[type="text"]');
  const PriceInput = document.querySelector('.create-product input[type="number"]');

  // Extract the values from the input fields
  const productName = nameInput.value;
  const productPrice = parseFloat(PriceInput.value);

  // Check if both the inputs have valid values
  if(productName.trim() === '' || isNaN(productPrice) || productPrice <= 0) {
    alert('Please enter a valid product name and price.');
    return;
  }

  // Crete a new product row
  const cart = document.getElementById('cart');
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
  <td class="subtotal">$<span>0</span></td>
  <td class="action">
    <button class="btn btn-remove">Remove</button>
  </td>
  `;

  // Add new row to the cart
  cart.querySelector('tbody').appendChild(newRow);

  // Clear the input fields
  nameInput.value = '';
  PriceInput.value = '';

  // Add a click event listener to the new "Remove button"
  const removeButton = newRow.querySelector('.btn-remove');
  removeButton.addEventListener('click', removeProduct);

  // Add an input event listener to the new quantity input for dynamic subtotal updates
  const quantityInput = newRow.querySelector('.quantity input');
  quantityInput.addEventListener('click', calculateAll);
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

// Add a click event listener to each "Remove" button
const removeButtons = document.querySelectorAll('.btn-remove');
removeButtons.forEach(button => {
  button.addEventListener('click', removeProduct);
});

const createButton = document.getElementById('create');
createButton.addEventListener('click', createProduct);
});
