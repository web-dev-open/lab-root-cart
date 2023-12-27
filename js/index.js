function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');

  //... your code goes here
  const price = product.querySelector('.price span');
  const quantity = product.querySelector('.quantity input'); 

  const priceValue = parseFloat(price.textContent.replace('$', '').trim()); 
  const quantityValue = parseInt(quantity.value.trim()); 

  const subtotalValue = priceValue * quantityValue; 
  const subtotal = product.querySelector('.subtotal span');

  subtotal.textContent = subtotalValue.toFixed(2); 
  console.log(`${subtotalValue}`); 
  return subtotalValue;
}




function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  const singleProduct = document.querySelector('.product');
  updateSubtotal(singleProduct);
  //const singleProduct = document.querySelector('.product');
  //updateSubtotal(singleProduct);
  // end of test

  
  // ITERATION 2
  //... your code goes here

  const productRows = Array.from(document.getElementsByClassName("product"));
  const productsSubtotal = productRows.map(productRow => updateSubtotal(productRow));

  // ITERATION 3
  //... your code goes here
  const totalValueElement = document.querySelector("#total-value span");
  const totalPrice = productsSubtotal.reduce((acc, subtotal) => acc + subtotal, 0);
  totalValueElement.innerHTML = totalPrice.toFixed(2);
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
  const productRow = target.closest(".product");

  if (productRow) {
    productRow.parentNode.removeChild(productRow);
    calculateAll();
  }
}


// ITERATION 5

const addButton = document.getElementById("create");


function createProduct() {
  //... your code goes here

  const productNameInput = document.querySelector("#product-name");
  const unitPriceInput = document.querySelector("#unit-price"); 

  const productName = productNameInput.value;
  const unitPrice = parseFloat(unitPriceInput.value);

  const tableBody = document.querySelector("tbody");
  const newRow = document.createElement("tr");
  newRow.classList.add("product");

  newRow.innerHTML = `
  <td class="name">
    <span>${productName}</span>
  </td>
  <td class="price">$<span>${unitPrice.toFixed(2)}</span></td>
    <td class="quantity">
      <input type="number" value="0" min="0" placeholder="Quantity" />
    </td>
    <td class="subtotal">$<span>0.00</span></td>
    <td class="action">
      <button class="btn btn-remove">Remove</button>
    </td>
  `;

  tableBody.appendChild(newRow);

  const removeButton = newRow.querySelector(".btn-remove");
  removeButton.addEventListener("click", removeProduct);


  productNameInput.value = "";
  unitPriceInput.value = "";
}


window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
});
  const removeButtons = document.querySelectorAll(".btn-remove");
  removeButtons.forEach(button => {
    button.addEventListener("click", removeProduct);
  });
