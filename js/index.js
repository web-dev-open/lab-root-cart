// ITERATION 1

function updateSubtotal(product) {
  const priceElement = product.querySelector('.price span');
  const quantityElement = product.querySelector('.quantity input');

  const price = parseFloat(priceElement.innerHTML);
  const quantity = parseFloat(quantityElement.value);

  const subtotal = price * quantity;

  const subtotalElement = product.querySelector('.subtotal span');

  subtotalElement.textContent = `${subtotal.toFixed(2)}`;

  return subtotal;
}

function calculateAll() {
  // ITERATION 2
  let total = 0;
  const productRows = document.getElementsByClassName('product');
  for (let i = 0; i < productRows.length; i++) {
    const product = productRows[i];
    total += updateSubtotal(product);
  }

  // ITERATION 3
  const totalElement = document.querySelector('#total-value span');
  totalElement.textContent = `${total.toFixed(2)}`;
}

// ITERATION 4

function removeProduct(event) {
  // Get the parent row of the clicked 'Remove' button
  const productRow = event.currentTarget.parentNode.parentNode;

  // Get the table body element that contains all the product rows
  const tableBody = document.querySelector('tbody');

  // Remove the product row from the table
  tableBody.removeChild(productRow);

  // Recalculate the total after removal
  calculateAll();
}

// ITERATION 5

function createProduct() {
  // Get the product name and price inputs
  const productNameInput = document.querySelector(
    'tfoot input[placeholder="Product Name"]'
  );
  const productPriceInput = document.querySelector(
    'tfoot input[placeholder="Product Price"]'
  );

  // Get the values entered by the user
  const productName = productNameInput.value;
  const productPrice = parseFloat(productPriceInput.value);

  // Create a new product row
  const newProductRow = document.createElement('tr');
  newProductRow.className = 'product';

  // Add the product information to the new row
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

  // Append the new row to the table body
  const tableBody = document.querySelector('tbody');
  tableBody.appendChild(newProductRow);

  // Clear the input fields
  productNameInput.value = '';
  productPriceInput.value = '0';

  // Add event listeners for the new "Remove" button
  const newRemoveButton = newProductRow.querySelector('.btn-remove');
  newRemoveButton.addEventListener('click', removeProduct);

  // Recalculate the total after adding the new product
  calculateAll();
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  const removeBtns = document.getElementsByClassName('btn-remove');
  for (let i = 0; i < removeBtns.length; i++) {
    removeBtns[i].addEventListener('click', removeProduct);
  }

  const createProductBtn = document.getElementById('create');
  createProductBtn.addEventListener('click', createProduct);
});
