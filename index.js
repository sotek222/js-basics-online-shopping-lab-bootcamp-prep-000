var cart = [];

function getCart() {
}

function setCart(c) {
}

function addToCart(item) {
  let price = Math.floor(Math.random() * 100 + 1);
  cart.push({itemName: item, itemPrice: price});
  return `${item} has been added to your cart.`
}

function viewCart() {
}

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
