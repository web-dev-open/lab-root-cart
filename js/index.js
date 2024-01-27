// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
  const price = product.querySelector('.price span');
  const quantity = product.querySelector('.quantity input');
  const priceValue = parseFloat(price.innerHTML);
  const quantityValue = parseFloat(quantity.value);
  const subtotal = priceValue * quantityValue;
  const subtotalElement = product.querySelector('.subtotal span');
  subtotalElement.innerHTML = subtotal.toFixed(2); // Formatting to two decimal places
  return subtotal;

  //... your code goes here
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  const singleProduct = document.querySelector('.product');
  updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  const productRows = document.querySelectorAll('#cart .product');
  let total = 0;
  for (const row of productRows) {
    total += updateSubtotal(row);
  }
  const totalElement = document.querySelector('#total-value span');
  totalElement.innerHTML = total.toFixed(2);



  // ITERATION 3
  
}

const removeButtons = document.querySelectorAll('.btn-remove');
removeButtons.forEach(button => {
  button.addEventListener('click', removeProduct);
});

// ITERATION 4

function removeProduct(event) {
  // Step 1: Access the element that the event was fired on
  const buttonClicked = event.currentTarget;
  console.log('The target in remove is:', buttonClicked);

  // Step 2: Access the parent node (product row) and remove it from the DOM
  const rowToRemove = buttonClicked.parentNode.parentNode;
  rowToRemove.parentNode.removeChild(rowToRemove);

  // Step 3: Update total after removing the product
  calculateAll();

// ITERATION 5
// Add this code to your existing script

// Get the "Create Product" button and add click event listener
const createButton = document.getElementById('create');
createButton.addEventListener('click', createProduct);

// Function to create a new product
function createProduct() {
  // Step 1: Target name and unit price input DOM nodes
  const nameInput = document.querySelector('tfoot input[placeholder="Product Name"]');
  const priceInput = document.querySelector('tfoot input[placeholder="Product Price"]');

  // Step 2: Extract values from the input nodes
  const productName = nameInput.value;
  const productPrice = parseFloat(priceInput.value);

  // Step 3: Get the table body to append a new row
  const tableBody = document.querySelector('#cart tbody');

  // Step 4: Create a new row
  const newRow = document.createElement('tr');
  newRow.className = 'product';

  // Step 5: Create cells for name, price, quantity, subtotal, and remove button
  const nameCell = document.createElement('td');
  nameCell.innerHTML = `<span>${productName}</span>`;
  newRow.appendChild(nameCell);

  const priceCell = document.createElement('td');
  priceCell.innerHTML = `$<span>${productPrice.toFixed(2)}</span>`;
  newRow.appendChild(priceCell);

  const quantityCell = document.createElement('td');
  quantityCell.innerHTML = '<input type="number" class="quantity" value="0" min="0">';
  newRow.appendChild(quantityCell);

  const subtotalCell = document.createElement('td');
  subtotalCell.innerHTML = '$<span>0.00</span>';
  newRow.appendChild(subtotalCell);

  const removeCell = document.createElement('td');
  removeCell.innerHTML = '<button class="btn btn-remove">Remove</button>';
  newRow.appendChild(removeCell);

  // Step 6: Append the new row to the table body
  tableBody.appendChild(newRow);

  // Step 7: Add click event listener to the new "Remove" button
  const removeButton = newRow.querySelector('.btn-remove');
  removeButton.addEventListener('click', removeProduct);

  // Step 8: Clear input fields
  nameInput.value = '';
  priceInput.value = '';

  // Step 9: Update total after adding a new product
  calculateAll();
}


window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  // Set up event listeners for "Remove" buttons
  const removeButtons = document.querySelectorAll('.btn-remove');
  removeButtons.forEach(button => {
    button.addEventListener('click', removeProduct);
  });

  // Set up event listener for "Create Product" button
  const createButton = document.getElementById('create');
  createButton.addEventListener('click', createProduct);
});
