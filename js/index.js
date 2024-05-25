// ITERATION 1

function updateSubtotal(product) {const price = product.querySelector('.price span').innerText;
    const quantity = product.querySelector('.quantity input').value;
    const subtotal = price * quantity;
    const subtotalElement = product.querySelector('.subtotal span');
    subtotalElement.innerText = subtotal;
    return subtotal;
  console.log('Calculating subtotal, yey!');

  //... your code goes here
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  const singleProduct = document.querySelector('.product');
  updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  function calculateAll() {
    const products = document.getElementsByClassName('product');
    let total = 0;
    for (let product of products) {
        total += updateSubtotal(product);
    }
    document.querySelector('#total-value span').innerText = total;
}

  //... your code goes here

  // ITERATION 3
 // already handled in iteration 2//
  //... your code goes here
}

// ITERATION 4
window.addEventListener('load', () => {
    const calculatePricesBtn = document.getElementById('calculate');
    calculatePricesBtn.addEventListener('click', calculateAll);
    const removeButtons = document.querySelectorAll('.btn-remove');
    for (let button of removeButtons) {
        button.addEventListener('click', removeProduct);
    }
});
function removeProduct(event) {
  const target = event.currentTarget;
   target.remove();
    calculateAll();
  console.log('The target in remove is:', target);
}
  //... your code goes here

// ITERATION 5
window.addEventListener('load', () => {
    const calculatePricesBtn = document.getElementById('calculate');
    calculatePricesBtn.addEventListener('click', calculateAll);
    const removeButtons = document.querySelectorAll('.btn-remove');
    for (let button of removeButtons) {
        button.addEventListener('click', removeProduct);
    }
    const createProductBtn = document.getElementById('create');
    createProductBtn.addEventListener('click', createProduct);
});
function createProduct() {
  const nameInput = document.querySelector('.create-product input[type="text"]');
    const priceInput = document.querySelector('.create-product input[type="number"]');
    const name = nameInput.value;
    const price = priceInput.value;

    const newRow = document.createElement('tr');
    newRow.classList.add('product');
    newRow.innerHTML = `
        <td class="name"><span>${name}</span></td>
        <td class="price">$<span>${price}</span></td>
        <td class="quantity"><input type="number" value="0" min="0" placeholder="Quantity" /></td>
        <td class="subtotal">$<span>0</span></td>
        <td class="action"><button class="btn btn-remove">Remove</button></td>
    `;

    document.querySelector('#cart tbody').appendChild(newRow);
    newRow.querySelector('.btn-remove').addEventListener('click', removeProduct);

    nameInput.value = '';
    priceInput.value = 0;
  //... your code goes here
}

  //... your code goes here
