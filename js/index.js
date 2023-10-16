// ITERATION 1

function updateSubtotal(allProducts) {  
  // console.log('Calculating subtotal, yey!');
  let subtotal = 0;
  let total = 0;

  for(let product of allProducts ){
    let price = product.querySelector('.price span').textContent;
    price = Number(price);
    let quantity = product.querySelector('.quantity input[type=number]').value;
    quantity = Number(quantity);
    
    subtotal = quantity * price;
    product.querySelector('.subtotal span').textContent = subtotal;
    total = total+subtotal;    
  } 
  return total;
}



function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // const singleProduct = document.querySelector('.product');
  // updateSubtotal(singleProduct);
  // end of test

  
  // ITERATION 2
  const allProducts = document.getElementsByClassName('product')
  let subtotal= updateSubtotal(allProducts);
  

  // ITERATION 3
  let totalValue = document.querySelector('#total-value span');
  totalValue.textContent = subtotal;  
}




// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  // console.log('The target in remove is:', target);

  const targetRootParent = target.parentNode.parentNode.parentNode;
  const targetContainerParent = target.parentNode.parentNode;
  targetRootParent.removeChild(targetContainerParent)

  calculateAll();
}



// ITERATION 5

function createProduct() {
  let newProduct = document.querySelector('.create-product');
  let productName = newProduct.querySelector('input[type="text"]').value;
  let productQuantity = newProduct.querySelector('input[type="number"]').value;

  let tr = document.createElement('tr');
  tr.classList.add('product');
 

  tr.innerHTML = `<td class="name"> <span>${productName}</span></td>  <td class="price">$<span>${productQuantity}</span></td>  
    <td class="quantity">
    <input type="number" value="0" min="0" placeholder="Quantity" />  
    <td class="subtotal">$<span>0</span></td>
    <td class="action">
    <button class="btn btn-remove">Remove</button>
    </td>
  </td>`  
  
  document.querySelector('tbody').append(tr)
  
  // tr.querySelector('.btn-remove').addEventListener('click', removeProduct);

  let newElement = document.querySelector('tbody tr:last-child');
  newElement.querySelector('.btn-remove').addEventListener('click', removeProduct);

  newProduct.querySelector('input[type="text"]').value = "";
  newProduct.querySelector('input[type="number"]').value = 0;
}




window.addEventListener('load', () => { 
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  let allRemoveBtns = document.getElementsByClassName('btn-remove');
  for(let eachRemoveBtns of allRemoveBtns){
    eachRemoveBtns.addEventListener('click', removeProduct)
  }

  let createProductBtn = document.getElementById('create');
  createProductBtn.addEventListener('click', createProduct)

});


