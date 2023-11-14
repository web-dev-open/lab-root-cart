// ITERATION 1

// Function to update subtotal for a single product row
function updateSubtotal(productRow) {
  
  // Step 1
  // Getting the price and updating element
  const price = parseFloat(productRow.querySelector(".price span").textContent);
  
  // Step 2
  // Getting the quantity element and updating
  const quantity = parseInt(productRow.querySelector(".quantity input").value);
  
  // Step 3
  // Calculating the subtotal
  const subtotal = price * quantity;

  // Step 4
  // Getting the subtotal value
  const subtotalElement = productRow.querySelector(".subtotal span");
  
  // Step 5
  // Updating the subtotal value
  if (subtotalElement) {
    subtotalElement.textContent = subtotal.toFixed(2);
  }

  // Returning the value
  return subtotal;
}

// ITERATION 2

// Function to calculate the total for all products
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
  const allProductRows = document.querySelectorAll(".product");
  
  // Creating total variable and initialice to update total for Iteration 3 
  let total = 0;  // Pay close attention to make it with let not const since we need to update the value

  // Looping througth each row with ForEach
  allProductRows.forEach(productRow => {

    // Call updateSubtotal() to update current row
    const subtotal = updateSubtotal(productRow);

    /*
    // Updating the subtotal considering 2 decimals
    subtotalElement.textContent = subtotal.toFixed(2);
    */
  
    // Updating the total
    total += subtotal;
  });

  // ITERATION 3
  // Updating the DOM   
  const totalElement = document.getElementById("total-value").querySelector("span");
  
  /*
  totalElement.textContent = total.toFixed(2);
  */
  
  // Adding the Check for null before updating the total
  
  if (totalElement) {
    totalElement.textContent = total.toFixed(2);
  }
}

// ITERATION 4

// Getting all the remove buttons
function removeProduct(event) {
  
  // Getting the button that was clicked
  const btn = event.currentTarget;
  
  // Getting its parent row
  const productRow = btn.closest(".product");
  
  // Removing from the table
  productRow.parentNode.removeChild(productRow);
  
  // Calling calculateAll to recalculate the table
  calculateAll();
}

// ITERATION 5

// Function to create a new product row
function createProduct() {
  
  //... your code goes here

  // Get Input Values
  const productInput = document.querySelector("input[placeholder='Product Name']");
  const priceInput = document.querySelector("input[placeholder='Price']:last-child");

  // Getting the data
  const product = productInput.value;
  const price = priceInput.value;

  // Creating DOM Elements
  const newRow = document.createElement("tr");
  newRow.classList.add("product");

  // Adding the product
  const productCell = document.createElement("td");
  productCell.classList.add("name");
  productCell.textContent = product;
  newRow.appendChild(productCell);

  // Adding the price
  const priceCell = document.createElement("td");
  priceCell.classList.add("price");
  priceCell.innerHTML = `$<span>${parseFloat(price).toFixed(2)}</span>`;
  newRow.appendChild(priceCell);

  // Adding quantity, subtotal and remove elements
  const quantityCell = document.createElement("td");
  quantityCell.classList.add("quantity"); // This bad boy gave me a headhache
  const quantityInput = document.createElement("input");
  quantityInput.type = "number";
  quantityInput.min = 0;
  quantityInput.value = 0;
  quantityInput.placeholder = "Quantity";
  quantityCell.appendChild(quantityInput);
  newRow.appendChild(quantityCell);

  // Adding the Subtotal
  const subtotalCell = document.createElement("td");
  subtotalCell.classList.add("subtotal");
  subtotalCell.innerHTML = "$<span>0.00</span>";
  newRow.appendChild(subtotalCell);

  // Removing the Cell
  const removeCell = document.createElement("td");
  removeCell.classList.add("action");
  const removeButton = document.createElement("button");
  removeButton.textContent = "Remove";
  removeButton.classList.add("btn", "btn-remove");
  removeCell.appendChild(removeButton);
  newRow.appendChild(removeCell);
  removeButton.addEventListener("click", removeProduct);

  // Appending newRow to the Table
  const tBody = document.querySelector("tbody");
  tBody.appendChild(newRow);

  // Update Total if Any
  calculateAll();

  // Clear the imputs (very important)
  productInput.value = "";
  priceInput.value = "";
}

// Event listeners
window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  const createProductButton = document.getElementById("create");
  createProductButton.addEventListener('click', createProduct);

  const removeBtns = document.querySelectorAll(".btn-remove");
  removeBtns.forEach(btn => {
    btn.addEventListener("click", removeProduct);
  });
});

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
  
});