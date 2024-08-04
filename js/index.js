// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
  let quantity = product.querySelector(".quantity").querySelector('input');
  let price = product.querySelector(".price").querySelector("span");
  let subtotal = product.querySelector(".subtotal").querySelector("span");
  let quantityValue = parseInt(quantity.value);
  let priceValue = parseFloat(price.textContent);
  subtotal.textContent = (quantityValue * priceValue).toFixed(2);
  //... your code goes here
}



function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  //const singleProduct = document.querySelector('.product');
  //updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  //... your code goes here
  let products = document.querySelectorAll(".product");
  products.forEach((product) => {
    updateSubtotal(product);
  });
  // ITERATION 3
  //... your code goes here
  let total = 0;
  let subtotals = document.querySelectorAll(".subtotal");
  subtotals.forEach((sub) => {
    total += parseFloat(sub.querySelector("span").textContent);
  });
  let totalVal = document.querySelector("#total-value").querySelector("span");
  totalVal.textContent = total;
}

// ITERATION 4

function removeProduct() {
 // const target = event.currentTarget;
  //console.log('The target in remove is:', target);
  //... your code goes here
  let remBtns = document.querySelectorAll(".btn-remove");
  remBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      let parent = btn.parentNode.parentNode;
      parent.remove();
    });
  });
}

// ITERATION 5

function createProduct() {
  //... your code goes here
  let createBtn = document.querySelector("#create");
  createBtn.addEventListener("click", ()=>{
    let pName = document.querySelector("#pName").value;
    let pPrice = document.querySelector("#pPrice").value;
    let tr = document.createElement("tr");
    tr.classList.add("product");
    let td1 = document.createElement("td");
    td1.classList.add("name");
    let nameSpan = document.createElement("span");
    nameSpan.textContent = pName;
    td1.appendChild(nameSpan);
    tr.appendChild(td1);
    let td2= document.createElement("td");
    td2.classList.add("price");
    td2.textContent="$";
    let priceSpan = document.createElement("span");
    priceSpan.textContent = pPrice;
    td2.appendChild(priceSpan);
    tr.appendChild(td2);
    let td3= document.createElement("td");
    td3.classList.add('quantity');
    let quantityInput = document.createElement("input");
    quantityInput.type = "number";
    quantityInput.value="0";
    quantityInput.min="0";
    td3.appendChild(quantityInput);
    tr.appendChild(td3);
    let td4 = document.createElement("td");
    td4.classList.add("subtotal");
    td4.textContent="$";
    let stotal = document.createElement("span");
    stotal.textContent = "0";
    td4.appendChild(stotal);
    tr.appendChild(td4);
    let td5 = document.createElement("td");
    td5.classList.add("action");
    let remBtn = document.createElement("button");
    remBtn.textContent = "Remove";
    remBtn.classList.add("btn-remove");
    remBtn.classList.add("btn");
    td5.appendChild(remBtn);
    remBtn.addEventListener("click", ()=>{
        let parent = remBtn.parentNode.parentNode;
        parent.remove();
    });
    tr.appendChild(td5);
    removeProduct();
    document.querySelector("tbody").appendChild(tr); 
    document.querySelector("#pName").value="";
    document.querySelector("#pPrice").value="";
  });
  
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);
removeProduct();
createProduct();

  //... your code goes here
});