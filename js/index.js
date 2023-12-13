// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');

  //... your code goes here
  let quantity=parseInt(product.querySelector('.quantity input').value);
  let price=parseFloat(product.querySelector('.price span').innerHTML)
  let subtotal=quantity*price;
  product.querySelector('.subtotal span').innerHTML=subtotal;
  return subtotal;
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // end of test

  // ITERATION 2
  //... your code goes here
  let total = 0;
  const products = document.querySelectorAll('.product');
  products.forEach((product) => {
    total += updateSubtotal(product);
  });
  document.querySelector('#total-value span').innerHTML = total;
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  target.closest('.product').remove();
}

// ITERATION 5


function createProduct() {
  //... your code goes here
  let inputField = document.querySelectorAll('.create-product input');

  let name = inputField[0].value;
  let price = inputField[1].value;
  inputField[0].value = '';
  inputField[1].value = 0;

  if (name === '') {
    alert('Product name is required');
  } else if (price == 0) {
    alert('Product price is required');
  } else {
    let newProduct = document.createElement('tr');
    newProduct.classList = 'product';
    let html = `<td class="name">
                  <span>${name}</span>
                </td>
                <td class="price">$<span>${price}</span></td>
                <td class="quantity">
                  <input type="number" value="0" min="0" placeholder="Quantity" />
                </td>
                <td class="subtotal">$<span>0</span></td>
                <td class="action">
                  <button class="btn btn-remove" onclick="removeProduct(event)">Remove</button>
                </td>`;
    newProduct.innerHTML = html;
    document.querySelector('tbody').appendChild(newProduct);
    calculateAll(); // Recalculate total after adding a new product
  }
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  const removeButtons = document.querySelectorAll('.btn-remove');
  removeButtons.forEach((btn) => btn.addEventListener('click', removeProduct));

  const createButton = document.getElementById('create');
  createButton.addEventListener('click', createProduct);

  //... your code goes here
});