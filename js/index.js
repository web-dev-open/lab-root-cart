// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');

  const price = parseFloat(product.querySelector('.price span').textContent);
const quantity = parseInt(product.querySelector('.quantity input[type="number"]').value);


  //... your code goes here
  const priceVal = parseFloat(product.querySelector('.price span').textContent);
const quantVal = parseFloat(product.querySelector('.quantity input').value);

if (!isNaN(priceVal) && !isNaN(quantVal)) {
  const subtotalVal = priceVal * quantVal;
  const subtotal = product.querySelector('.subtotal span');
  subtotal.textContent = subtotalVal.toFixed(2);

  console.log(subtotalVal);
  return subtotalVal;
} else {
  // Handle the case where either the price or quantity is not a valid number
  console.error('Invalid price or quantity value');
  return 0;
}

}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  const singleProduct = document.querySelector('.product');
  updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  const productRows = Array.from(document.querySelectorAll('.product'));
console.log(productRows);

const productsSubtotal = productRows.map((row) => updateSubtotal(row));
console.log(productsSubtotal);

  //... your code goes here

  // ITERATION 3
  //... your code goes here
  const productRow = target.closest('tr'); // Find the closest <tr> parent element
if (productRow) {
  const priceElement = productRow.querySelector('.price span');
  const price = parseFloat(priceElement.textContent); // Extract the product price from the row
  const totalPriceElement = document.querySelector('#total-value span');

  if (!isNaN(price)) {
    // Check if the extracted price is a valid number
    const currentTotal = parseFloat(totalPriceElement.textContent);
    if (!isNaN(currentTotal)) {
      const newTotal = currentTotal - price;
      totalPriceElement.textContent = newTotal.toFixed(2);
    }
  }

  productRow.remove(); // Remove the product row from the DOM
  alert('Item Removed');
  calculateAll(); // Call the calculateAll function if it exists
}

}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
  const productRow = target.closest('tr'); 
if (productRow) {
  productRow.remove(); 
  alert('Item Removed');
  calculateAll(); 
}

}

// ITERATION 5

function createProduct() {
  //... your code goes here
    const productNameInput = document.querySelector('.create-product input[type="text"]');
    const priceInput = document.querySelector('.create-product input[type="number"]');
    
    const productName = productNameInput.value.trim();
    const price = parseFloat(priceInput.value);
  
    if (!productName || isNaN(price) || price <= 0) {
      alert('Please Enter a valid Product Name and Price');
      return;
    }
  
    const tableBody = document.querySelector('tbody');
    const tableRow = document.createElement('tr');
    tableRow.classList.add('product');
  
    tableRow.innerHTML = `
      <td class="name">
        <span>${productName}</span>
      </td>
      <td class="price">$<span>${price.toFixed(2)}</span></td>
      <td class="quantity">
        <input type="number" value="0" min="0" placeholder="Quantity" />
      </td>
      <td class="subtotal">$<span>0.00</span></td>
      <td class="action">
        <button class="btn btn-remove">Remove</button>
      </td>`;
  
    tableBody.appendChild(tableRow);
  
    const removeButton = tableRow.querySelector('.btn-remove');
    removeButton.addEventListener('click', removeProduct);
  
    // Clear input fields after adding the product
    productNameInput.value = '';
    priceInput.value = '';
  }
  


window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
  const createButton = document.getElementById('create');
  createButton.addEventListener('click', createProduct);


  const btn = document.querySelectorAll('.btn-remove')
  btn.forEach(removeBtn =>{
    removeBtn.addEventListener('click',removeProduct)
  })
});
