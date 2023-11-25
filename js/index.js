// ITERATION 1

function updateSubtotal(product) {
  const priceString = product.querySelector('.price span').innerHTML;
  const quantityString = product.querySelector('.quantity input').value;
  const subtotal = product.querySelector('.subtotal span');

  const subtotalValue = parseFloat(priceString) * parseFloat(quantityString); // Multiply price and quantity as numbers
  subtotal.innerHTML = subtotalValue.toFixed(2);

  return subtotalValue;
}





// ITERATION 2
function calculateAll() {
  const allProducts = document.querySelectorAll('.product');
  let totalValue = 0;

  allProducts.forEach((product) => {
    totalValue += updateSubtotal(product);
  });

  const cartTotalElement = document.querySelector('#total-value span');
  cartTotalElement.innerHTML = totalValue.toFixed(2);
}



// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  const product = target.parentNode.parentNode;
  product.parentNode.removeChild(product);
  calculateAll();

}

// ITERATION 5

function createProduct() {
  const newProductName = document.querySelector('.create-product input[type="text"]');
  const newProductPrice = document.querySelector('.create-product input[type="number"]');
  const newProduct = document.createElement('tr');
  newProduct.classList.add('product');
   newProduct.innerHTML = `
    <td class="name">
      <span></span>
    </td>
    <td class="price">$<span></span></td>
    <td class="quantity">
      <input type="number" value="0" min="0" placeholder="Quantity" />
    </td>
    <td class="subtotal">$<span></span></td>
    <td class="action">
      <button class="btn btn-remove">Remove</button>
    </td>
  `;   
  newProduct.querySelector('.name span').innerHTML = newProductName.value;
  newProduct.querySelector('.price span').innerHTML = newProductPrice.value;
  newProduct.querySelector('.subtotal span').innerHTML = 0;

  newProduct.querySelector('.btn-remove').addEventListener('click', removeProduct);
  document.querySelector('tbody').appendChild(newProduct);
  newProductName.value = '';
  newProductPrice.value = 0;

  calculateAll();
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);
  
  const removeButtons = document.querySelectorAll('.btn-remove');
  removeButtons.forEach((button) => {
    button.addEventListener('click', removeProduct);
  });

  const createButton = document.getElementById('create');
  createButton.addEventListener('click', createProduct);


});
