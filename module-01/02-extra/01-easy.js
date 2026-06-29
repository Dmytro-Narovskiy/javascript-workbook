function buyBooks(quantity, pricePerBook) {
  return `You bought ${quantity} books for ${quantity * pricePerBook} credits!`;
}

console.log(buyBooks(2, 150));
// "You bought 2 books for 300 credits!"

console.log(buyBooks(4, 200));
// "You bought 4 books for 800 credits!"

console.log(buyBooks(1, 500));
// "You bought 1 books for 500 credits!"
