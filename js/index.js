// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');

  //... your code goes here
  function updateSubtotal(product) {
    // Get the quantity input element and the price per unit element
    const quantityInput = product.querySelector('.quantity input');
    const pricePerUnit = product.querySelector('.price span');

    // Get the elements where you'll display the subtotal for this product
    const subtotalElement = product.querySelector('.subtotal span');

    // Get the quantity and price values as numbers
    const quantity = parseInt(quantityInput.value);
    const price = parseFloat(pricePerUnit.innerText);

    // Calculate the subtotal for this product
    const subtotal = quantity * price;

    // Update the subtotal element on the page with the calculated value
    subtotalElement.innerText = subtotal.toFixed(2); // Display it with two decimal places
    return subtotal;
  }
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  const singleProduct = document.querySelector('.product');
  updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  //... your code goes here
  function calculateAll() {
    // Get all product rows (DOM nodes) in the table with the ID 'cart'
    const productRows = document.getElementsByClassName('product');

    // Iterate through each product row and calculate its subtotal
    for (const product of productRows) {
      updateSubtotal(product);
    }

    
  }

  // ITERATION 3
  //... your code goes here
  function calculateAll() {
    // Get all product rows (DOM nodes) in the table with the ID 'cart'
    const productRows = document.getElementsByClassName('product');

    let total = 0; // Initialize the total variable

    // Iterate through each product row and calculate its subtotal
    for (const product of productRows) {
      total += updateSubtotal(product); // Update the total with each product's subtotal
    }

    // Set the total value to the DOM element for displaying the total price
    const totalElement = document.querySelector('#total-value span');
    totalElement.innerText = total.toFixed(2); // Display it with two decimal places
  }
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
  window.addEventListener('load', () => {
    const calculatePricesBtn = document.getElementById('calculate');
    calculatePricesBtn.addEventListener('click', calculateAll);
  
    // Query the document for all "Remove" buttons
    const removeButtons = document.querySelectorAll('.btn-remove');
  
    // Add a click event listener to each "Remove" button
    removeButtons.forEach(button => {
      button.addEventListener('click', removeProduct);
    });
  });
  
  function removeProduct(event) {
    // Get the parent node of the "Remove" button, which is the <tr> representing the product
    const productRow = event.currentTarget.parentNode.parentNode;
  
    // Remove the product row from the cart
    const cart = document.getElementById('cart');
    cart.removeChild(productRow);
  
    // Recalculate the total price
    calculateAll();
  }
}

// ITERATION 5

function createProduct() {
  //... your code goes here
  const nameInput = document.getElementById('new-product-name');
  const priceInput = document.getElementById('new-product-price');

  // Extract their values and clear the input fields
  const productName = nameInput.value;
  const productPrice = parseFloat(priceInput.value);
  nameInput.value = '';
  priceInput.value = '';

  // Get the table (cart) and create a new row
  const cart = document.getElementById('cart');
  const newRow = document.createElement('tr');
  newRow.classList.add('product');

  // Create the HTML content for the new product row
  newRow.innerHTML = `
    <td class="name">
      <span>${productName}</span>
    </td>
    <td class="price">$<span>${productPrice.toFixed(2)}</span></td>
    <td class="quantity">
      <input type="number" value="0" min="0" placeholder="Quantity" />
    </td>
    <td class="subtotal">$<span>0.00</span></td>
    <td class="action">
      <button class="btn btn-remove">Remove</button>
    </td>
  `;
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
  window.addEventListener('load', () => {
    const calculatePricesBtn = document.getElementById('calculate');
    calculatePricesBtn.addEventListener('click', calculateAll);
  
    const removeButtons = document.querySelectorAll('.btn-remove');
    removeButtons.forEach(button => {
      button.addEventListener('click', removeProduct);
    });
  
    // Add a click event handler to the "Create Product" button
    const createProductBtn = document.getElementById('create');
    createProductBtn.addEventListener('click', createProduct);
  });
});
