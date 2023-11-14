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
    const price = priceElement ? parseFloat(priceElement.textContent) : 0; // Ternary function to handle index.js:15 Uncaught TypeError: Cannot read properties of null (reading 'textContent') at updateSubtotal (index.js:15:41) at calculateAll (index.js:60:22) at HTMLButtonElement.createProduct (index.js:167:3)
    const quantity = quantityElement ? parseInt(quantityElement.value) : 0;
  
    // Step 3
    // Calculating the subtotal
    const subtotal = price * quantity;
  
    // Step 4
    // Getting the subtotal value
    const subtotalElement = product.querySelector(".subtotal span");
  
    // Step 5
    // Updating the subtotal value
  
    if(subtotalElement) {
      subtotalElement.textContent = subtotal.toFixed(2);
    }
  
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
    const allProducts = document.querySelectorAll(".product");
  
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
  
      // Adding a check for null before updating the subtotal 
      if(subtotalElement) {
        subtotalElement.textContent = subtotal.toFixed(2);
      }
  
      /*
      // Updating the subtotal considering 2 decimals
      subtotalElement.textContent = subtotal.toFixed(2);
      */
  
      // Updating the total
      total += subtotal;
  
    }
  
    // ITERATION 3
    // Updating the DOM 
    const totalElement = document.getElementById("total-value").querySelector("span");
    
    /*
    totalElement.textContent = total.toFixed(2);
    */
  
    // Adding the Check for null before updating the total
    if(totalElement) {
      totalElement.textContent = total.toFixed(2);
    }
  
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
    priceCell.textContent = `$${parseFloat(price).toFixed(2)}`;
    newRow.appendChild(priceCell);
  
    // Adding quantity, subtotal and remove elements
    const quantityCell = document.createElement("td");
    const quantityInput = document.createElement("input");
    quantityCell.classList.add("quantity");
    quantityInput.type = "number";
    quantityInput.min = 0;
    quantityInput.value = 0;
    quantityInput.placeholder = "Quantity";
    quantityCell.appendChild(quantityInput);
    newRow.appendChild(quantityCell);
  
    const subtotalCell = document.createElement("td");
    subtotalCell.classList.add("subtotal");
    subtotalCell.textContent= "$0.00";
    newRow.appendChild(subtotalCell);
  
    const removeCell = document.createElement("td");
    const removeButton = document.createElement("button");
    removeCell.classList.add("action");
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
  
    calculateAll();
  
  }
  
  
  
    // Adding the event listening
    const createProductButton = document.getElementById("create");
  
    // Now the click Event
    createProductButton.addEventListener("click", createProduct);
  
  
  
  
  
  window.addEventListener('load', () => {
    const calculatePricesBtn = document.getElementById('calculate');
    calculatePricesBtn.addEventListener('click', calculateAll);
  
    //... your code goes here
    
  });