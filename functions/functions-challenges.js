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

function generateOTP(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
console.log(generateOTP(1000, 9999));

function emailMasker(email) {
  let atIndex = email.indexOf("@");
  let username = email.slice(0, atIndex);
  let domain = email.slice(atIndex);
  let firstLetter = username[0];
  let lastLetter = username[username.length - 1];
  let masked = "*".repeat(username.length - 2);

  return firstLetter + masked + lastLetter + domain;
}

console.log(emailMasker("test@gmail.com"));

function login(username, password) {
  return username === "admin" && password === "javascript123"
    ? "Login Successful."
    : "Invalid Credentials.";
}

console.log(login("admin", "javascript123"));

function convertTemperature(degree, convertor) {
  switch (convertor) {
    case "CtoF":
      return (degree * 9) / 5 + 32;
    case "FtoC":
      return ((degree - 32) * 5) / 9;

    case "CtoK":
      return degree + 273.15;

    default:
      return "Invalid temperature.";
  }
}
console.log(convertTemperature(30, "CtoF"));

function calculateBMI(weight, height) {
  let bmi = weight / height ** 2;
  if (bmi < 18.5) {
    return "Underweight";
  } else if (bmi < 25) {
    return "Healthy weight";
  } else if (bmi < 30) {
    return "Overweight";
  } else {
    return "Obese";
  }
}
console.log(calculateBMI(70, 1.75));

function convertCurrency(amount, currency) {
  switch (currency) {
    case "USD":
      return amount * 153.16;

    case "EUR":
      return amount * 175.73;
      break;
    case "INR":
      return amount * 1.59;

    default:
      return "Invalid currency.";
  }
}
console.log(convertCurrency(100, "USD"));
