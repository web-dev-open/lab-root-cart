window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  const createProductBtn = document.getElementById('create');
  createProductBtn.addEventListener('click', createProduct);

  const removeButtons = document.querySelectorAll('.btn-remove');
  removeButtons.forEach((button) => {
    button.addEventListener('click', removeProduct);
  });

  function updateSubtotal(product) {
    const price = parseFloat(product.querySelector('.price span').innerText);
    const quantity = parseInt(product.querySelector('.quantity input').value);
    const subtotal = price * quantity;
    const subtotalElement = product.querySelector('.subtotal span');
    subtotalElement.innerText = subtotal.toFixed(2);
    return subtotal;
  }

  function calculateAll() {
    const allProducts = document.querySelectorAll('.product');
    let total = 0;
    allProducts.forEach((product) => {
      total += updateSubtotal(product);
    });
    const totalElement = document.getElementById('total-value').querySelector('span');
    totalElement.innerText = total.toFixed(2);
  }

  function removeProduct(event) {
    const target = event.currentTarget;
    const productRow = target.parentNode.parentNode;
    productRow.parentNode.removeChild(productRow);
    calculateAll();
  }

  function createProduct() {
    const productNameInput = document.querySelector('.create-product input[placeholder="Product Name"]');
    const productPriceInput = document.querySelector('.create-product input[placeholder="Product Price"]');
    
    const productName = productNameInput.value;
    const productPrice = parseFloat(productPriceInput.value);

    if (!productName || isNaN(productPrice) || productPrice < 0) {
      alert('Invalid input. Please enter a valid product name and price.');
      return;
    }

    const newProductRow = document.createElement('tr');
    newProductRow.classList.add('product');

    newProductRow.innerHTML = `
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

    const removeButton = newProductRow.querySelector('.btn-remove');
    removeButton.addEventListener('click', removeProduct);

    const tbody = document.querySelector('#cart tbody');
    tbody.appendChild(newProductRow);

    productNameInput.value = '';
    productPriceInput.value = '0';
  }
});
