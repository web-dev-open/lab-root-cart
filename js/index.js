// js/index.js

function updateSubtotal(product) {
  // Step 1: Get DOM elements that hold price and quantity
  const priceElement = product.querySelector('.price span');
  const quantityElement = product.querySelector('.quantity input');

  // Step 2: Extract values from the DOM elements
  const price = parseFloat(priceElement.innerHTML); // Using innerHTML to get the content as a string
  const quantity = parseInt(quantityElement.value); // Using value property to get the input value as a string

  // Step 3: Calculate the subtotal price
  const subtotal = price * quantity;

  // Step 4: Get the DOM element that should hold the subtotal
  const subtotalElement = product.querySelector('.subtotal span');

  // Step 5: Set the subtotal price to the corresponding DOM element
  subtotalElement.innerHTML = subtotal;

  // Return the subtotal value for later use
  return subtotal;
}

function calculateAll() {
  // Step 1: Get all the product rows
  const productRows = document.getElementsByClassName('product');

  // Step 2: Iterate over each product row and call updateSubtotal
  let total = 0;
  for (let i = 0; i < productRows.length; i++) {
    const productRow = productRows[i];
    total += updateSubtotal(productRow);
  }

  // Step 3: Update the total value in the DOM
  document.querySelector('#total-value span').innerHTML = total;
}

function calculateAll() {
  // Step 1: Get all the product rows
  const productRows = document.getElementsByClassName('product');

  // Step 2: Iterate over each product row and call updateSubtotal
  let total = 0;
  for (let i = 0; i < productRows.length; i++) {
    const productRow = productRows[i];
    total += updateSubtotal(productRow);
  }

  // Step 3: Update the total value in the DOM
  document.querySelector('#total-value span').innerHTML = total;
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  // Add event listeners to all "Remove" buttons
  const removeButtons = document.querySelectorAll('.btn-remove');
  removeButtons.forEach((btn) => {
    btn.addEventListener('click', removeProduct);
  });

  // Function to remove a product
  function removeProduct(event) {
    const target = event.currentTarget;
    const productRow = target.closest('.product'); // Get the closest parent with class 'product'
    productRow.remove(); // Remove the product row from the DOM
    calculateAll(); // Recalculate subtotals and total after removing the product
  }
});
// js/index.js

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  // Add event listeners to all "Remove" buttons
  const removeButtons = document.querySelectorAll('.btn-remove');
  removeButtons.forEach((btn) => {
    btn.addEventListener('click', removeProduct);
  });

  // Add event listener to the "Create Product" button
  const createProductBtn = document.getElementById('create');
  createProductBtn.addEventListener('click', createProduct);

  // ... (rest of your code)

  // Function to create a new product
  function createProduct() {
    // Get input values for name and unit price
    const nameInput = document.querySelector('.create-product td input[type="text"]');
    const priceInput = document.querySelector('.create-product td input[type="number"]');

    // Extract values
    const name = nameInput.value;
    const price = parseFloat(priceInput.value);

    // Check for valid input
    if (name === '' || isNaN(price) || price < 0) {
      alert('Please enter a valid product name and unit price.');
      return;
    }

    // Create a new product row
    const newProductRow = document.createElement('tr');
    newProductRow.classList.add('product');
    newProductRow.innerHTML = `
      <td class="name">
        <span>${name}</span>
      </td>
      <td class="price">$<span>${price.toFixed(2)}</span></td>
      <td class="quantity">
        <input type="number" value="0" min="0" placeholder="Quantity" />
      </td>
      <td class="subtotal">$<span>0.00</span></td>
      <td class="action">
        <button class="btn btn-remove" onclick="removeProduct(event)">Remove</button>
      </td>
    `;

    // Append the new product row to the table body
    document.querySelector('tbody').appendChild(newProductRow);

    // Clear input fields
    nameInput.value = '';
    priceInput.value = '0';

    // Add event listener to the new "Remove" button
    const newRemoveButton = newProductRow.querySelector('.btn-remove');
    newRemoveButton.addEventListener('click', removeProduct);

    // Recalculate prices
    calculateAll();
  }
});

