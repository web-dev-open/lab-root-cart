// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
  const price = product.querySelector('.price span');
  const quantity = product.querySelector('.quantity input');

  const priceValue = parseFloat(price.innerHTML);
  const quantityValue = parseInt(quantity.value);

  const subtotal = priceValue * quantityValue;

  const subtotalElement = product.querySelector('.subtotal span');
  subtotalElement.innerHTML = subtotal.toFixed(2);

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
  //... your code goes here
  const allProducts = document.getElementsByClassName('product');
  let total = 0;

  for (let product of allProducts) {
    // Call updateSubtotal for each product and add to the total
    total += updateSubtotal(product);
  }

  // ITERATION 3
  //... your code goes here
  const totalElement = document.getElementById('total-value');
  totalElement.innerHTML = total.toFixed(2);
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here

  const clickedButton = event.currentTarget;
  const parentRow = clickedButton.parentNode.parentNode;

  parentRow.parentNode.removeChild(parentRow);
  calculateAll();
}

// ITERATION 5

function createProduct() {
  //... your code goes here
  const productNameInput = document.querySelector('.create-product td:nth-child(1) input');
  const productPriceInput = document.querySelector('.create-product td:nth-child(2) input');

  const productName = productNameInput.value;
  const productPrice = parseFloat(productPriceInput.value);

  
  if (productName && !isNaN(productPrice)) {
  
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

    
    document.querySelector('tbody').appendChild(newRow);

    
    productNameInput.value = '';
    productPriceInput.value = '';

   
    newRow.querySelector('.btn-remove').addEventListener('click', removeProduct);

    calculateAll();
  }
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
  const createButton = document.getElementById('create');
createButton.addEventListener('click', createProduct);
  const removeButtons = document.querySelectorAll(".btn-remove");
  removeButtons.forEach(button => {
    button.addEventListener("click", removeProduct);
  });
});
