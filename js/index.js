// ITERATION 1
function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');

  const price = parseFloat(product.querySelector('.price span').innerText);
  const quantity = product.querySelector('.quantity input').value;
  const subtotal = price * quantity;

  product.querySelector('.subtotal span').innerText = subtotal.toFixed(2);
  return subtotal;
}

// ITERATION 2
function calculateAll() {
  const products = document.querySelectorAll('.product');
  let total = 0;

  products.forEach(product => {
    total += updateSubtotal(product);
  });

  document.querySelector('#total-value span').innerText = total.toFixed(2);
}

// ITERATION 4
function removeProduct(event) {
  const target = event.currentTarget;
  const productRow = target.closest('.product');
  
  productRow.remove(); 
  calculateAll(); 
}

// ITERATION 5
function createProduct() {
  const nameInput = document.querySelector('input[placeholder="Product Name"]');
  const priceInput = document.querySelector('input[placeholder="Product Price"]');
  
  if (nameInput.value && priceInput.value) {
    const cartTableBody = document.querySelector('#cart tbody');
    const newRow = document.createElement('tr');
    newRow.classList.add('product');
    
    newRow.innerHTML = `
      <td class="name"><span>${nameInput.value}</span></td>
      <td class="price">$<span>${parseFloat(priceInput.value).toFixed(2)}</span></td>
      <td class="quantity"><input type="number" value="0" min="0" placeholder="Quantity" /></td>
      <td class="subtotal">$<span>0</span></td>
      <td class="action"><button class="btn btn-remove">Remove</button></td>
    `;
    
    cartTableBody.appendChild(newRow);
    
    newRow.querySelector('.btn-remove').addEventListener('click', removeProduct);

    nameInput.value = '';
    priceInput.value = '0';
    
    calculateAll();
  }
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  const removeButtons = document.querySelectorAll('.btn-remove');
  removeButtons.forEach(button => {
    button.addEventListener('click', removeProduct);
  });

  const createProductBtn = document.getElementById('create');
  createProductBtn.addEventListener('click', createProduct);
});