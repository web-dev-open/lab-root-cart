// ITERATION 1

function updateSubtotal(product) {
  // console.log('Calculating subtotal, yey!');
  const price = parseFloat(product.querySelector('.price span').textContent);
  const quantity = parseInt(product.querySelector('.quantity input').value);
  const subtotal = price * quantity;
  const subtotalElement = product.querySelector('.subtotal span');
  subtotalElement.textContent = subtotal.toFixed(2);
  
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
  const products = document.querySelectorAll('.product');
    let total = 0;

    products.forEach((product) => {
        total += updateSubtotal(product);
    });

    document.querySelector('#total-value span').textContent = total.toFixed(2);

 
}

// ITERATION 4
function addRemoveEventListeners() {
  const removeButtons = document.querySelectorAll('.btn-remove');
  removeButtons.forEach((button) => {
      button.addEventListener('click', removeProduct);
  });
}

function removeProduct(event) {
  const productRow = event.currentTarget.parentNode.parentNode;
    productRow.parentNode.removeChild(productRow);
    calculateAll(); 
}

// ITERATION 5

function createProduct() {
  //... your code goes here
  const nameInput = document.querySelector('.create-product input[type="text"]');
  const priceInput = document.querySelector('.create-product input[type="number"]');
  
  const name = nameInput.value;
  const price = parseFloat(priceInput.value).toFixed(2);
  const tableBody = document.querySelector('#cart tbody');
const newRow = document.createElement('tr');
newRow.classList.add('product');
newRow.innerHTML = `
    <td class="name"><span>${name}</span></td>
    <td class="price">$<span>${price}</span></td>
    <td class="quantity"><input type="number" value="0" min="0" placeholder="Quantity" /></td>
    <td class="subtotal">$<span>0</span></td>
    <td class="action"><button class="btn btn-remove">Remove</button></td>
    `;
tableBody.appendChild(newRow);
const removeButton = newRow.querySelector('.btn-remove');
removeButton.addEventListener('click', removeProduct);
nameInput.value = '';
priceInput.value = 0;
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);
  addRemoveEventListeners();
    
    const createProductBtn = document.getElementById('create');
    createProductBtn.addEventListener('click', createProduct);


  //... your code goes here
});
