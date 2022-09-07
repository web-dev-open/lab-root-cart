// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
  let price = product.querySelector(".price span")
  let quantity = product.querySelector('.quantity input')
  let priceValue = price.innerText
  let quantityValue = quantity.value
  console.log(price)
  let subTotal = priceValue * quantityValue 
  let innerSub = document.querySelector(".subtotal span")
  innerSub.innerText = subTotal
  return subTotal
  //... your code goes here
}


function calculateAll() {
   
  document.querySelectorAll('.product').forEach((product) => {
    let sum = 0
    updateSubtotal(product)
      sum = sum + updateSubtotal(product)
  })

  let subTotalDom = document.querySelector('#total-value span')
  subTotalDom.innerText
  // updateSubtotal(singleProduct);
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
