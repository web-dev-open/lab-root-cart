// Function to update the subtotal for a single product
function updateSubtotal(product) {
  // Step 1: Get DOM Elements for Price and Quantity
  const price = product.querySelector('.price span');
  const quantityInput = product.querySelector('.quantity input');

  // Step 2: Extract Values from DOM Elements
  const priceValue = parseFloat(price.innerHTML.slice(1)); // Remove the '$' symbol
  const quantityValue = parseFloat(quantityInput.value);

  // Step 3: Calculate the Subtotal
  const subtotal = priceValue * quantityValue;

  // Step 4: Get the DOM Element for Subtotal
  const subtotalElement = product.querySelector('.subtotal span');

  // Step 5: Update the Subtotal Value in the DOM
  subtotalElement.textContent = `$${subtotal.toFixed(2)}`;

  // Step 6: Return the Subtotal Value (optional)
  return subtotal;
}

// Function to calculate all subtotals for each product
function calculateAll() {
  // Get all product rows using querySelectorAll
  const productRows = document.querySelectorAll('.product');

  let total = 0; // Initialize total to zero

  // Iterate through each product row and update its subtotal
  productRows.forEach((product) => {
    total += updateSubtotal(product); // Accumulate subtotal values to calculate the total
  });

  // Get the DOM element for the total value
  const totalElement = document.getElementById('total-value');

  // Update the DOM with the total price
  totalElement.querySelector('span').textContent = `$${total.toFixed(2)}`;
}

// Function to remove a product
function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);

  // Access the parent node of the button (which is the product row) and remove it from the DOM
  const productRow = target.parentNode.parentNode;
  productRow.parentNode.removeChild(productRow);

  // Calculate and update the total after removing the product
  calculateAll();
}

// Add event listeners to "Remove" buttons
document.querySelectorAll('.btn-remove').forEach((button) => {
  button.addEventListener('click', removeProduct);
});

// Add click event handler to "Create Product" button
const createProductButton = document.getElementById('create');
createProductButton.addEventListener('click', createProduct);

// Function to create a new product
function createProduct() {
  // Get DOM nodes for name and unit price inputs
  const nameInput = document.querySelector('.create-product input[placeholder="Product Name"]');
  const priceInput = document.querySelector('.create-product input[placeholder="Product Price"]');

  // Extract values from inputs
  const productName = nameInput.value;
  const productPrice = parseFloat(priceInput.value);

  // Check if the inputs are not empty and the price is valid
  if (productName && !isNaN(productPrice) && productPrice >= 0) {
    // Create a new product row
    const cart = document.getElementById('cart').getElementsByTagName('tbody')[0];
    const newRow = cart.insertRow(-1);
    newRow.className = 'product';

    // Add cells for product name, price, quantity, subtotal, and remove button
    const nameCell = newRow.insertCell(0);
    const priceCell = newRow.insertCell(1);
    const quantityCell = newRow.insertCell(2);
    const subtotalCell = newRow.insertCell(3);
    const actionCell = newRow.insertCell(4);

    nameCell.className = 'name';
    nameCell.innerHTML = `<span>${productName}</span>`;

    priceCell.className = 'price';
    priceCell.innerHTML = `$<span>${productPrice.toFixed(2)}</span>`;

    quantityCell.className = 'quantity';
    quantityCell.innerHTML = '<input type="number" value="0" min="0" placeholder="Quantity" />';

    subtotalCell.className = 'subtotal';
    subtotalCell.innerHTML = '$<span>0</span>';

    actionCell.className = 'action';
    actionCell.innerHTML = '<button class="btn btn-remove">Remove</button>';

    // Clear input fields in the creation form
    nameInput.value = '';
    priceInput.value = '';

    // Add event listener to the new "Remove" button
    newRow.querySelector('.btn-remove').addEventListener('click', removeProduct);

    // Recalculate the total after adding the new product
    calculateAll();
  }
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
});
