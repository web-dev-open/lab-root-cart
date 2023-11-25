// ITERATION 1

function updateSubtotal(product) {
  const price = product.querySelector('.price span');
  const quantity = product.querySelector('.quantity input');

  // Step 2
  const priceValue = parseFloat(price.innerHTML);
  const quantityValue = parseInt(quantity.value);

  // Step 3
  const subtotal = priceValue * quantityValue;

  // Step 4
  const subtotalElement = product.querySelector('.subtotal span');

  // Step 5
  subtotalElement.innerHTML = subtotal.toFixed(2);

  // Return the subtotal value
  return subtotal;
}




function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  //const singleProduct = document.querySelector('.product');
  //updateSubtotal(singleProduct);
  // end of test
  
  // ITERATION 2
  // Step 1
  const allProducts = document.getElementsByClassName('product');

  // Step 2
  let total = 0;

  // Loop through each product
  for (let product of allProducts) {
    // Call updateSubtotal for each product and add to the total
    total += updateSubtotal(product);
  }

  // ITERATION 3
  // Step 3
  const totalElement = document.getElementById('total-value');
  totalElement.innerHTML = total.toFixed(2);
}

// ITERATION 4
function removeProduct(event) {
  // Get the button that was clicked
  const clickedButton = event.currentTarget;

  // Get the parent row (tr) of the button
  const parentRow = clickedButton.parentNode.parentNode;

  // Remove the row from the table
  parentRow.parentNode.removeChild(parentRow);

  // Recalculate the total after removing the product
  calculateAll();
}
// ITERATION 5

function createProduct() {
  // Get input values for the new product
  const productNameInput = document.querySelector('.create-product td:nth-child(1) input');
  const productPriceInput = document.querySelector('.create-product td:nth-child(2) input');

  const productName = productNameInput.value;
  const productPrice = parseFloat(productPriceInput.value);

  // Check if the inputs are not empty
  if (productName && !isNaN(productPrice)) {
    // Create a new row
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
      <td class="subtotal">$<span>0.00</span></td>
      <td class="action">
        <button class="btn btn-remove">Remove</button>
      </td>
    `;

    // Add the new row to the tbody
    document.querySelector('tbody').appendChild(newRow);

    // Clear input fields
    productNameInput.value = '';
    productPriceInput.value = '';

    // Add event listener for the new remove button
    newRow.querySelector('.btn-remove').addEventListener('click', removeProduct);

    // Recalculate the total after adding the new product
    calculateAll();
  }
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);
const createButton = document.getElementById('create');
createButton.addEventListener('click', createProduct);
  const removeButtons = document.querySelectorAll(".btn-remove");
  removeButtons.forEach(button => {
    button.addEventListener("click", removeProduct);
  });
});