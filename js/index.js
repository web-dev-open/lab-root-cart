// ITERATION 1

function updateSubtotal(product) {
  const price = parseFloat(product.querySelector('.price span').textContent)
  const quantity = parseInt(product.querySelector('.quantity input').value)
  
  const total = price * quantity
  const subtotal = product.querySelector('.subtotal span')
  subtotal.textContent = total
  return total

}

function calculateAll() {
  // ITERATION 2
  const products = document.getElementsByClassName('product');
  let total = 0
  Array.from(products).forEach(product => {
    updateSubtotal(product)
    total += updateSubtotal(product)
  });
  
  // ITERATION 3
  let totalValue = document.querySelector('#total-value span')
  totalValue.textContent = total
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  const product = target.closest('.product')
  // Total to discount
  const price = parseFloat(product.querySelector('.price span').textContent)
  const quantity = parseInt(product.querySelector('.quantity input').value)
  const total = price * quantity
  // Discount
  const totalValue = document.querySelector('#total-value span')
  totalValue.textContent -= total
  // Remove
  target.closest('.product').remove()
}

// ITERATION 5

function createProduct() {
  const newProduct = document.querySelector('.new-product').value
  const newProductPrice = parseFloat(document.querySelector('.new-product-quantity').value)
  // Adding product
  const cart = document.querySelector('#cart-items')
  const newProductElement = document.createElement('tr')
  newProductElement.classList.add('product')
  newProductElement.innerHTML = `<td class="name">
            <span>${newProduct}</span>
          </td>
          <td class="price">$<span>${newProductPrice}.00</span></td>
          <td class="quantity">
            <input type="number" value="0" min="0" placeholder="Quantity" />
          </td>
          <td class="subtotal">$<span>0</span></td>
          <td class="action">
            <button class="btn btn-remove">Remove</button>
          </td>`
  cart.appendChild(newProductElement)

  const removeButton = newProductElement.querySelector('.btn-remove')
  removeButton.addEventListener('click', removeProduct)

  document.querySelector('.new-product').value = ''
  document.querySelector('.new-product-quantity').value = 0
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  const removeProductBtn = document.querySelectorAll('.btn-remove')
  Array.from(removeProductBtn).forEach(btn => {
    btn.addEventListener('click', removeProduct)
  })

  const createProductBtn = document.querySelector('#create')
  createProductBtn.addEventListener('click', createProduct)
});
