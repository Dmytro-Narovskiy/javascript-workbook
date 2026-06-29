function calculateFuelOrder(liters, pricePerLiter, deliveryFee) {
  const litersVolume = Number.parseFloat(liters);
  const pricePerLiterNumber = Number.parseFloat(pricePerLiter);
  const deliveryCost = Number.parseFloat(deliveryFee);
  return `Fuel order: ${litersVolume} liters for ${litersVolume * pricePerLiterNumber + deliveryCost} credits.`;
}

console.log(calculateFuelOrder("10 liters", "5 credits", "20 credits"));
// "Fuel order: 10 liters for 70 credits."

console.log(calculateFuelOrder("7.5 liters", "4 credits", "10 credits"));
// "Fuel order: 7.5 liters for 40 credits."

console.log(calculateFuelOrder("20 liters", "3.5 credits", "0 credits"));
// "Fuel order: 20 liters for 70 credits."
