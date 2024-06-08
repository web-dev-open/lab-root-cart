// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
//... your code goes here
  //step 1:
  const price=product.querySelector('.price span')
  const quantity=product.querySelector('.quantity input')
  //step 2:
  const priceAmt=parseFloat(price.innerText);
  const quantityAmt=parseInt(quantity.value);
  // step 3:
  const subtotalAmt=priceAmt*quantityAmt;
  //step 4:
  const subtotal=product.querySelector('.subtotal span')
  //step 5:
  subtotal.innerText=subtotalAmt.toFixed(2);
  return subtotalAmt;

}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  const singleProduct = document.querySelector('.product');
  updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  //... your code goes here
  const products=document.getElementsByClassName('product')
  let total=0;
  for (let i=0;i<products.length;i++)
     total+=updateSubtotal(products[i]);
  
  // ITERATION 3
  //... your code goes here
  let totalElem=document.querySelector('#total-value span')
  totalElem.innerHTML=total.toFixed(2);
  
} 

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
  const productRow=target.closest('.product');
  productRow.remove();
  calculateAll();
}

// ITERATION 5

function createProduct() {
  //... your code goes here
  const nameInput=document.querySelector('.create-product input[type="Text"]');
  const priceInput=document.querySelector('.create-product input[type="number"]');

  const name=nameInput.value;
  const price=parseFloat(priceInput.value).toFixed(2);

  const newRow=document.createElement('tr');
  newRow.classList.add('product');
  newRow.innerHTML=`<td class="name">
      <span>${name}</span>
    </td>
    <td class="price">$<span>${price}</span></td>
    <td class="quantity">
      <input type="number" value="0" min="0" placeholder="Quantity" />
    </td>
    <td class="subtotal">$<span>0</span></td>
    <td class="action">
      <button class="btn btn-remove">Remove</button>
    </td>
  `;

  const cartBody = document.querySelector('#cart tbody');
  cartBody.appendChild(newRow);

  const removeButton = newRow.querySelector('.btn-remove');
  removeButton.addEventListener('click', removeProduct);

  nameInput.value = '';
  priceInput.value = 0;
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
  const removeButtons=document.querySelectorAll('.btn-remove')
  for (let button of removeButtons){
    button.addEventListener('click',removeProduct);
  }

  const createProductBtn=document.getElementById('create');
  createProductBtn.addEventListener('click',createProduct);
});
