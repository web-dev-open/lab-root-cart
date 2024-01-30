function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');

  const price = product.querySelector('.price span');
  const quantity = product.querySelector('.quantity input[type="number"]');

  const priceVal = parseFloat(price.innerHTML);
  const quantVal = parseInt(quantity.value);

  //... your code goes here

  const subtotalVal = priceVal * quantVal;
  const subtotal = product.querySelector('.subtotal span');
  subtotal.innerHTML = subtotalVal.toFixed(2);

  console.log(`${subtotalVal}`);
  return subtotalVal;
}

//updateSubtotal(document)

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // end of test

  // ITERATION 2
  //... your code goes here
  const productRowsElement = document.getElementsByClassName('product');
  const productRows = [...productRowsElement];
  console.log(productRows);

  const productsSubtotal = productRows.map((val) => updateSubtotal(val));
  console.log(productsSubtotal);

  // ITERATION 3
  //... your code goes here

  const totalValue = document.querySelector('#total-value span');
  const totalPrice = productsSubtotal.reduce(
    (accumulator, sum) => accumulator + sum,
    0
  );
  totalValue.innerHTML = totalPrice.toFixed(2);

  console.log(totalPrice);
}
//calculateAll()

// ITERATION 4


function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);

  //... your code goes here

  const productRow = target.parentNode.parentNode;
  if (productRow) {
    productRow.parentNode.removeChild(productRow);
    alert('Item Removed')
    calculateAll();
  }
}

// ITERATION 5


function createProduct() {
  //... your code goes here

  const productName = document.querySelector(
    '.create-product input[type="text"]'
  ).value;

  const Price = parseFloat(
    document.querySelector('.create-product input[type="number"]').value
  );

  if(!productName || Price===0){
    alert('Please Enter Product Name and Price')
    return;
  }

  const Tablebody = document.querySelector('tbody');
  const Tablerow = document.createElement('tr');

  Tablerow.classList.add('product');

  Tablerow.innerHTML = `
    <td class="name">
      <span>${productName}</span>
    </td>
    <td class="price">$<span>${Price.toFixed(2)}</span></td>
    <td class="quantity">
      <input type="number" value="0" min="0" placeholder="Quantity" />
    </td>
    <td class="subtotal">$<span>0.00</span></td>
    <td class="action">
       <button class="btn btn-remove">Remove</button>
    </td>`;

    Tablebody.appendChild(Tablerow)

    const btn = Tablerow.querySelector('.btn-remove')
    btn.addEventListener('click',removeProduct)


    productName.innerHTML = " "
    Price.innerHTML = " "
  }




window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
  const createButton = document.getElementById('create');
  createButton.addEventListener('click', createProduct);


  const btn = document.querySelectorAll('.btn-remove')
  btn.forEach(removeBtn =>{
    removeBtn.addEventListener('click',removeProduct)
  })

});