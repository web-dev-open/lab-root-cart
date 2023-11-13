// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');

  // Step 1
  // Getting the price element
  const priceElement = product.querySelector(".price span");

  // Getting the quantity element
  const quantityElement = product.querySelector(".quantity input");

  // Step 2
  // Extracting the values
  const price = parseFloat(priceElement.textContent);
  const quantity = parseInt(quantityElement.value);

  // Step 3
  // Calculating the subtotal
  const subtotal = price * quantity;

  // Step 4
  // Getting the subtotal value
  const subtotalElement = product.querySelector(".subtotal span");

  // Step 5
  // Updating the subtotal value
  subtotalElement.textContent = subtotal.toFixed(2);

  // Returning the value
  return subtotal;

}


function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  
  /*
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  const singleProduct = document.querySelector('.product');
  updateSubtotal(singleProduct);
  // end of test
  */

  // ITERATION 2
  // Getting all products rows
  const allProducts = document.getElementsByClassName("product");

  // Looping througth each row
  for(let i = 0; i < allProducts.length; i++) {

    // current row
    const currentRow = allProducts[i];

    // Call updateSubtotal() to update current row
    const subtotal = updateSubtotal(currentRow);

    // Getting the subtotal value for the current row
    const subtotalElement = currentRow.querySelector(".subtotal span");

    // Updating the subtotal considering 2 decimals
    subtotalElement.textContent = subtotal.toFixed(2);

  }

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
