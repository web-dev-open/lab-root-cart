// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');

  let price = Number(product.querySelector('.price').innerText.split('$')[1]);
  console.log(price);

  const quantity = Number(
    product.querySelector('.quantity').querySelector('input').value
  );
  console.log(quantity);

  let sub = quantity * price;
  console.log(sub);
  product.querySelector('.subtotal span').innerText = `${sub.toFixed(2)}`;
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  const products = document.getElementsByClassName('product');
  console.log(products);
  for (let i = 0; i < products.length; i++) {
    updateSubtotal(products[i]);
  }
  let totalSum = 0;

  for (let i = 0; i < products.length; i++) {
    totalSum += Number(
      products[i].querySelector('.subtotal').innerText.split('$')[1]
    );
  }
  console.log(totalSum);
  document.querySelector('#total-value span').innerText = `${totalSum}`;
  // ;
  // end of test

  // ITERATION 2
  //... your code goes here

  // ITERATION 3
  //... your code goes here
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
  let tr = target.parentNode.parentNode;
  console.log(tr);
  let tbody = tr.parentNode;
  tbody.removeChild(tr);
  calculateAll();
}

// ITERATION 5

function createProduct() {
  //... your code goes here
  let name = document.querySelector('.create-product input[type=text]').value;
  console.log(name);
  let price = document.querySelector(
    '.create-product input[type=number]'
  ).value;
  console.log(price);
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
  const removebtns = document.getElementsByClassName('btn-remove');
  console.log(removebtns);
  for (let i = 0; i < removebtns.length; i++) {
    removebtns[i].addEventListener('click', removeProduct);
  }

  const createBtn = document.getElementById('create');
  createBtn.addEventListener('click', createProduct);
});
