// js/index.js

document.addEventListener('DOMContentLoaded', () => {
  // ITERATION 1

  function updateSubtotal(product) {
    // Step 1: Get DOM elements for price and quantity
    const priceElement = product.querySelector('.price span');
    const quantityElement = product.querySelector('.quantity input');

    // Step 2: Extract values from DOM elements
    const price = parseFloat(priceElement.innerText.replace('$', ''));
    const quantity = parseFloat(quantityElement.value);

    // Step 3: Calculate subtotal
    const subtotal = price * quantity;

    // Step 4: Get DOM element for subtotal
    const subtotalElement = product.querySelector('.subtotal span');

    // Step 5: Set subtotal value in the DOM
    subtotalElement.innerText = `$${subtotal.toFixed(2)}`;

    // Step 6: Return the subtotal value
    return subtotal;
  }

  // ITERATION 2

  function calculateAll() {
    const productRows = document.querySelectorAll('.product');
    let total = 0;

    // Iterate through all product rows
    productRows.forEach((product) => {
      total += updateSubtotal(product);
    });

    // Set total value in the DOM
    const totalElement = document.getElementById('total-value').querySelector('span');
    totalElement.innerText = `$${total.toFixed(2)}`;
  }

  // ITERATION 4

  function removeProduct(event) {
    const target = event.currentTarget;

    // Step 1: Get the parent row (tr) of the clicked Remove button
    const productRow = target.closest('.product');

    // Step 2: Get the total value before removing the product
    const totalBeforeRemoval = parseFloat(document.getElementById('total-value').querySelector('span').innerText.replace('$', ''));

    // Step 3: Get the subtotal value of the product being removed
    const subtotalToRemove = parseFloat(productRow.querySelector('.subtotal span').innerText.replace('$', ''));

    // Step 4: Update the total value by subtracting the subtotal of the removed product
    const totalAfterRemoval = totalBeforeRemoval - subtotalToRemove;

    // Step 5: Set the updated total value in the DOM
    document.getElementById('total-value').querySelector('span').innerText = `$${totalAfterRemoval.toFixed(2)}`;

    // Step 6: Remove the product row from the cart
    productRow.remove();
  }

  // ITERATION 5

  function createProduct() {
    // Step 1: Get the input values for the new product
    const productNameInput = document.querySelector('.create-product input[placeholder="Product Name"]');
    const productPriceInput = document.querySelector('.create-product input[placeholder="Product Price"]');

    // Step 2: Extract values from the input elements
    const productName = productNameInput.value;
    const productPrice = parseFloat(productPriceInput.value);

    // Step 3: Validate input values
    if (!productName || isNaN(productPrice)) {
      alert('Please enter valid product name and price.');
      return;
    }

    // Step 4: Create a new row for the product
    const newProductRow = document.createElement('tr');
    newProductRow.classList.add('product');
    newProductRow.innerHTML = `
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

    // Step 5: Append the new row to the table
    const tbody = document.querySelector('#cart tbody');
    tbody.appendChild(newProductRow);

    // Step 6: Clear input fields
    productNameInput.value = '';
    productPriceInput.value = '';

    // Step 7: Add event listener for the new Remove button
    const removeButton = newProductRow.querySelector('.btn-remove');
    removeButton.addEventListener('click', removeProduct);
  }

  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  const removeButtons = document.querySelectorAll('.btn-remove');
  removeButtons.forEach((button) => {
    button.addEventListener('click', removeProduct);
  });

  const createButton = document.getElementById('create');
  createButton.addEventListener('click', createProduct);
});
