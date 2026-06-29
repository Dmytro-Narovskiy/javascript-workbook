function calculateRentalCost(days, pricePerDay, insurancePerDay, cleaningFee) {
  const rentalDays = Number.parseFloat(days);
  const rentalCostPerDay = Number.parseFloat(pricePerDay);
  const costOfInsurancePerDay = Number.parseFloat(insurancePerDay);
  const cleaningFeeNumber = Number.parseFloat(cleaningFee);
  return `Rental for ${rentalDays} days will cost ${rentalDays * rentalCostPerDay + rentalDays * costOfInsurancePerDay + cleaningFeeNumber} credits.`;
}

console.log(
  calculateRentalCost("3 days", "100 credits", "20 credits", "50 credits"),
);
// "Rental for 3 days will cost 410 credits."

console.log(
  calculateRentalCost("5 days", "80 credits", "15 credits", "30 credits"),
);
// "Rental for 5 days will cost 505 credits."

console.log(
  calculateRentalCost("2.5 days", "120 credits", "25 credits", "40 credits"),
);
// "Rental for 2.5 days will cost 402.5 credits."
