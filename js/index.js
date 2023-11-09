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
  // it runs when only iteration 1 is completed. at later point, it can be removed
  // end of test

  // ITERATION 2
  //... your code goes here
  const products = document.querySelectorAll('.product');
  let total=0;
  products.forEach((product)=>{
    total+=updateSubtotal(product)
  })
  // ITERATION 3
  //... your code goes here
  document.querySelector('#total-value span').innerHTML=total
}

// ITERATION 4

function removeProduct(event) {
    event.target.closest('.product').remove();
  //... your code goes here
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
});
