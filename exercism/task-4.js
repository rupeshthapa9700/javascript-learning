
export function dayRate(ratePerHour) {
  return ratePerHour * 8;
}


export function daysInBudget(budget, ratePerHour) {
  
  return Math.floor(budget / dayRate(ratePerHour));
}


export function priceWithMonthlyDiscount(ratePerHour, numDays, discount) {
  let fullMonths = Math.floor(numDays / 22);
  let remainingDays = numDays % 22;

  let monthlyRate = dayRate(ratePerHour) * 22;

  let discountedMonths = monthlyRate * fullMonths * (1 - discount);
  let remainingCost = remainingDays * dayRate(ratePerHour);
  return Math.ceil(discountedMonths + remainingCost);
  
  
}
dayRate(89);
daysInBudget(20000, 89);
priceWithMonthlyDiscount(89, 230, 0.42);