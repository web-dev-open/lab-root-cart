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

  // Creating total variable and initialice to update total for Iteration 3
  let total = 0; // Pay close attention to make it with let not const since we need to update the value

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

    // Updating the total
    total += subtotal;

  }

  // ITERATION 3
  // Updating the DOM 
  const totalElement = document.getElementById("total-value").querySelector("span");
  totalElement.textContent = total.toFixed(2);

}

// ITERATION 4

// Getting all the remove buttons
const removeBtns = document.querySelectorAll(".btn-remove");

// Adding click event to each button
removeBtns.forEach(btn => {
  btn.addEventListener("click", removeProduct);
});

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  
  // Getting the button that was clicked
  const btn = event.currentTarget;

  // Getting its parent row
  const currentRow = btn.parentNode.parentNode;

  // Removing from the table
  currentRow.parentNode.removeChild(currentRow);

  // Calling calculateAll to recalculate the table
  calculateAll();

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
