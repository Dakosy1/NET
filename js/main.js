//







//cart
let cartIcon = document.querySelector('#cart-icon')
let cart = document.querySelector('.cart')
let closeCart = document.querySelector('#close-cart')

//Open cart
cartIcon.onclick = () => {
  cart.classList.add("active");
};

//Close cart
closeCart.onclick = () => {
  cart.classList.remove("active");
};

//cart working js
if(document.readyState == "leading"){
  document.addEventListener("DOMcontentLoaded", ready);
} else{
  ready();
}

//Making Function
function ready(){
  //remove items from cart
  var removeCartButtons = document.getElementsByClassName('cart-remove');
  console.log(removeCartButtons);
  for(var i=0; i < removeCartButtons.length; i++){
    var button = removeCartButtons[i];
    button.addEventListener('click', removeCartItem);
  }

  //quantity changes
  var quantityInputs = document.getElementsByClassName('cart-quantity')
  for(var i=0; i < quantityInputs.length; i++){
    var input = quantityInputs[i];
    input.addEventListener("change", quantityChanged);
  }
  //add to cart
  var addCart = document.getElementsByClassName('add-cart');
  for (var i = 0; i < quantityInputs.length; i++){
    var button = addCart[i];
    button.addEventListener("clicl", addCartClicked);
  }
}
  //remove items from cart
function removeCartItem(event){
  var buttonClicked = event.target;
  buttonClicked.parentElement.remove();
  updatetotal();
}

//quantity changes
function quantityChanged(event){
  var input = event.target
  if (isNaN(input.value) || input.value <= 0){
    input.value = 1;
  }
  updatetotal();
}

//add to cart
function addCartClicked(event){
  var button = event.target;
  var shopProducts = button.parentElement;
  var title = shopProducts.getElementsByClassName('product-title')[0].innerText;
  var title = shopProducts.getElementsByClassName('price')[0].innerText;

  console.log(title, price);
}


//update total
function updatetotal(){
  var cartContent = document.getElementsByClassName('cart-content')[0];
  var cartBoxes = cartContent.getElementsByClassName('cart-box');
  var total = 0;
  for(var i = 0; i<cartBoxes.length; i++){
    var cartBox = cartBoxes[i]
    var priceElement = cartBox.getElementsByClassName('cart-price')[0];
    var quantityElement = cartBox.getElementsByClassName('cart-quantity')[0];
    var price = parseFloat (priceElement.innerText.replace("$", ""));
    var quantity = quantityElement.value;
    total = total + (price * quantity);
    //if price Contain some cents value
    total = Math.round(total *100) / 100;

    document.getElementsByClassName('total-price')[0].innerText = "$" + total;
  }

}





















// // Get references to the input and product list elements
// const searchInput = document.getElementById('searchInput');
// const productList = document.getElementById('productList');

// // Add event listener to the search input for real-time filtering
// searchInput.addEventListener('input', function() {
//   const searchTerm = searchInput.value.toLowerCase();
//   const products = productList.getElementsByTagName('li');

//   // Loop through each product and hide/show based on search term
//   for (let i = 0; i < products.length; i++) {
//     const product = products[i];
//     const productName = product.textContent.toLowerCase();

//     if (productName.includes(searchTerm)) {
//       product.style.display = 'block'; // Show the product
//     } else {
//       product.style.display = 'none'; // Hide the product
//     }
//   }
// });


