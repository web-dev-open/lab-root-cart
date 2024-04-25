// ITERATION 1

function updateSubtotal(product) {
  
  console.log('Calculating subtotal, yey!');

  //... your code goes here

  // Extracting price and quantity
  const priceText = product.querySelector('.price span').textContent;
  const quantityText = product.querySelector('.quantity input').value;

  // Converting price and quantity to numerical values
  const unitPrice = parseFloat(priceText.replace('$', ''));
  const quantity = parseInt(quantityText);

  // Calculating subtotal
  const subtotal = unitPrice * quantity;

  // Displaying subtotal in the DOM
  const subtotalElement = product.querySelector('.subtotal span');
  subtotalElement.textContent = '$' + subtotal.toFixed(2);

  // Returning subtotal value
  return subtotal;
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  //const singleProduct = document.querySelector('.product');
 // updateSubtotal(singleProduct);
 const productRows = document.getElementsByClassName('product');
  // end of test
  let total = 0;
  // ITERATION 2
  //... your code goes here
  for (let i = 0; i < productRows.length; i++) {
    // Update subtotal for the current product and accumulate total
    total += updateSubtotal(productRows[i]);
}
  // ITERATION 3
  //... your code goes here
  const totalElement = document.getElementById('total-value');
    totalElement.textContent = '$' + total.toFixed(2);
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
  const productRow = target.closest('.product');
  if (productRow) {
    productRow.parentNode.removeChild(productRow);
    calculateAll(); // Recalculate total after removal
  }
}




// ITERATION 5

function createProduct() {
  //... your code goes here
  const productNameInput = document.querySelector('.create-product input[type="text"]');
  const productPriceInput = document.querySelector('.create-product input[type="number"]');

  // Get the table body where new products will be added
  const tableBody = document.querySelector('tbody');

  // Create a new row for the product
  const newRow = document.createElement('tr');
  newRow.classList.add('product');

  // Create cells for product name, price, quantity, subtotal, and action
  const nameCell = document.createElement('td');
  nameCell.classList.add('name');
  const nameSpan = document.createElement('span');
  nameSpan.textContent = productNameInput.value;
  nameCell.appendChild(nameSpan);

  const priceCell = document.createElement('td');
  priceCell.classList.add('price');
  priceCell.innerHTML = `<span>$${parseFloat(productPriceInput.value).toFixed(2)}</span>`;

  const quantityCell = document.createElement('td');
  quantityCell.classList.add('quantity');
  quantityCell.innerHTML = '<input type="number" value="0" min="0" placeholder="Quantity" />';

  const subtotalCell = document.createElement('td');
  subtotalCell.classList.add('subtotal');
  subtotalCell.innerHTML = '<span>$0</span>';

  const actionCell = document.createElement('td');
  actionCell.classList.add('action');
  const removeButton = document.createElement('button');
  removeButton.classList.add('btn', 'btn-remove');
  removeButton.textContent = 'Remove';
  actionCell.appendChild(removeButton);

  // Append cells to the new row
  newRow.appendChild(nameCell);
  newRow.appendChild(priceCell);
  newRow.appendChild(quantityCell);
  newRow.appendChild(subtotalCell);
  newRow.appendChild(actionCell);

  // Append the new row to the table body
  tableBody.appendChild(newRow);

  // Clear input fields
  productNameInput.value = '';
  productPriceInput.value = '0';
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
  const createProductBtn = document.getElementById('create');
  createProductBtn.addEventListener('click', createProduct);

  // Event listener for remove buttons
  const removeButtons = document.querySelectorAll('.btn-remove');
  removeButtons.forEach(button => {
    button.addEventListener('click', event => {
      const target = event.currentTarget;
      console.log('The target in remove is:', target);
      
      const productRow = target.closest('.product');
      if (productRow) {
        productRow.parentNode.removeChild(productRow);
        calculateAll(); // Recalculate total after removal
      }
    });
  });
});
 
