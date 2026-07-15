function gradeCalculator(grades) {
  if (grades >= 90) {
    return "A+";
  } else if (grades >= 80) {
    return "A";
  } else if (grades >= 70) {
    return "B+";
  } else if (grades >= 60) {
    return "B";
  } else if (grades >= 50) {
    return "C+";
  } else if (grades >= 40) {
    return "C";
  } else {
    return "Failed.";
  }
}
console.log(gradeCalculator(85));

function validateUsername(username) {
  return username.length >= 5 && !username.includes(" ");
}
console.log(validateUsername("Rupesh"));

function diceGame(dice1, dice2) {
  dice1 = Math.floor(Math.random() * 6) + 1;
  dice2 = Math.floor(Math.random() * 6) + 1;
  let total = dice1 + dice2;

  return total;
}
console.log(diceGame());

function generateUsername(firstname, lastname) {
  return `${firstname.toLowerCase()}_${lastname.toLowerCase()}`;
}
console.log(generateUsername("Rupesh", "Thapa"));

function calculateDiscount(price, percent) {
  let discount = (price * percent) / 100;
  let total = price - discount;
  return total;
}
console.log(calculateDiscount(400, 20));
