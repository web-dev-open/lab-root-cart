function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
// Get the price and quantity elements
const priceElement = product.querySelector('.price span');
const quantityElement = product.querySelector('.quantity input');

// Extract the values from the elements
const price = parseFloat(priceElement.textContent);
const quantity = parseInt(quantityElement.value);

// Calculate the subtotal
const subtotal = price * quantity;

// Update the subtotal in the DOM
const subtotalElement = product.querySelector('.subtotal span');
subtotalElement.textContent = subtotal.toFixed(2);

// Return the subtotal value
return subtotal;
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  const singleProduct = document.querySelector('.product');
  updateSubtotal(singleProduct);

  // end of test

  // ITERATION 2
  //... your code goes here
const products = document.querySelectorAll('.product');

let total = 0;

products.forEach((product)=>{
  total += updateSubtotal(product)
})

console.log(total)

  // ITERATION 3
  //... your code goes here
  document.querySelector('#total-value span').innerHTML=total;
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  target.closest('.product').remove()
  //... your code goes here

}

// ITERATION 5

function createProduct() {
  //... your code goes here
  const productNameInput = document.querySelector('.create-product input[type="text"]');
  const priceInput = document.querySelector('.create-product input[type="number"]');

  const name = productNameInput.value.trim();
  const price = parseFloat(priceInput.value);

  if(name===""){
    alert("Proudct name is required")
  }
  else if(price===0){
    alert("Product quantity is required")
  }
  else{
    let newProduct=document.createElement('tr')
    newProduct.classList='product';
    let html=`<td class="name">
                <span>${name}</span>
              </td>
              <td class="price">$<span>${price}</span></td>
              <td class="quantity">
                <input type="number" value="0" min="0" placeholder="Quantity" />
              </td>
              <td class="subtotal">$<span>0</span></td>
              <td class="action">
                <button class="btn btn-remove">Remove</button>
              </td>`
  newProduct.innerHTML=html
  document.querySelector('tbody').appendChild(newProduct)
  const removeButton = newProduct.querySelector('.btn-remove');
    removeButton.addEventListener('click', removeProduct);
  }

    // Clear input fields after adding the product
    productNameInput.value = '';
    priceInput.value = '';

}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  document.querySelectorAll('.btn-remove').forEach((btn)=>btn.addEventListener('click',removeProduct))

  calculatePricesBtn.addEventListener('click', calculateAll);

  document.querySelector('#create').addEventListener('click',createProduct)
  //... your code goes here
});