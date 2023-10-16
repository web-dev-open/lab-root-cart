function updateSubtotal(product) {
    const price = parseFloat(product.querySelector('.price span').textContent.replace('$', ''));
    const quantity = parseInt(product.querySelector('.quantity input').value);
    const subtotal = price * quantity;
  
    const subtotalElement = product.querySelector('.subtotal span');
    subtotalElement.textContent = `$${subtotal.toFixed(2)}`;
  
    return subtotal;
  }
  
  function calculateAll() {
//     const singleProduct = document.querySelector('.product');
//   updateSubtotal(singleProduct);
    const productElements = document.querySelectorAll('tr.product');
    let total = 0;
  
    productElements.forEach(product => {
      const subtotal = updateSubtotal(product);
      total += subtotal;
  
      const removeButton = product.querySelector('.btn-remove');
      removeButton.addEventListener('click', function(event) {
        removeProduct(event);
        total = calculateTotal();
      });
    });
  
    const totalValueElement = document.querySelector('#total-value span');
    totalValueElement.textContent = `$${total.toFixed(2)}`;
  }
  
  function removeProduct(event) {
    const target = event.currentTarget;
    const productRow = target.parentNode.parentNode;
    productRow.parentNode.removeChild(productRow);
  }
  
  function createProduct() {
    const productName = document.querySelector('.create-product input[type="text"]').value;
    const productPrice = parseFloat(document.querySelector('.create-product input[type="number"]').value);
  
    const cartTable = document.querySelector('#cart tbody');
    const productRow = document.createElement('tr');
    productRow.classList.add('product');
    productRow.innerHTML = `
      <td class="name">
        <span>${productName}</span>
      </td>
      <td class="price">$<span>${productPrice.toFixed(2)}</span></td>
      <td class="quantity">
        <input type="number" value="0" min="0" placeholder="Quantity" />
      </td>
      <td class="subtotal">$<span>0.00</span></td>
      <td class="action">
        <button class="btn btn-remove">Remove</button>
      </td>
    `;
  
    cartTable.appendChild(productRow);
  
    const removeButton = productRow.querySelector('.btn-remove');
    removeButton.addEventListener('click', function(event) {
      removeProduct(event);
    });
  }
  
  
  function calculateTotal() {
    const productElements = document.querySelectorAll('tr.product');
    let total = 0;
  
    productElements.forEach(product => {
      const subtotalElement = product.querySelector('.subtotal span');
      total += parseFloat(subtotalElement.textContent.replace('$', ''));
    });
  
    return total;
  }
  
  window.addEventListener('load', () => {
    const calculateButton = document.getElementById('calculate');
    calculateButton.addEventListener('click', calculateAll);
  
    const createButton = document.getElementById('create');
    createButton.addEventListener('click', createProduct);
  });
  