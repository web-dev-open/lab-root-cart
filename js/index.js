// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');

  // Step 1: Get the price and quantity elements from the product row
  const priceElement = product.querySelector('.price span');
  const quantityElement = product.querySelector('.quantity input');

  // Step 2: Extract the values (price as a float, quantity as an integer)
  const price = parseFloat(priceElement.textContent);
  const quantity = parseInt(quantityElement.value) || 0;

  // Step 3: Calculate the subtotal
  const subtotal = price * quantity;

  // Step 4: Get the element where the subtotal will be displayed
  const subtotalElement = product.querySelector('.subtotal span');

  // Step 5: Update the subtotal in the DOM
  subtotalElement.textContent = subtotal.toFixed(2); // Format subtotal to 2 decimal places

  // Return the subtotal value
  return subtotal;

  //... your code goes here
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // ITERATION 2
  // Get all the product rows in the cart
  const allProducts = document.querySelectorAll('.product');
  
  // Variable to store the total price
  let total = 0;

  // Iterate through all products and update their subtotals
  allProducts.forEach(product => {
    total += updateSubtotal(product); // Sum the subtotals
  });

  // ITERATION 3
  // Update the total price in the DOM
  const totalElement = document.querySelector('#total-value span');
  totalElement.textContent = total.toFixed(2);  // Set total with 2 decimal places
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);


  // Remove the product row from the DOM
  const productRow = target.closest('.product');
  productRow.parentNode.removeChild(productRow);

  // After removing, recalculate the total
  calculateAll();
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  // ITERATION 4: Add event listeners to all "Remove" buttons
  const removeButtons = document.querySelectorAll('.btn-remove');
  
  removeButtons.forEach(button => {
    button.addEventListener('click', removeProduct);
  });
  //... your code goes here
});
