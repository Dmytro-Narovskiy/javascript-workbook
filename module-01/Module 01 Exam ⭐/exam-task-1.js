function cinemaTickets(movieName, quantity, pricePerTicket) {
  return `You bought ${quantity} ticket(s) for "${movieName}" worth ${quantity * pricePerTicket} credits.`;
}

console.log(cinemaTickets("Avatar", 2, 150));
// You bought 2 ticket(s) for "Avatar" worth 300 credits.

console.log(cinemaTickets("Cars", 5, 200));
// You bought 5 ticket(s) for "Cars" worth 1000 credits.
