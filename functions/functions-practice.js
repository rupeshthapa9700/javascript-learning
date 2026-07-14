function greet(name){
  return `Hello ${name}`;
}

console.log(greet("Rupesh"));


function calculateAge(year1, year2){
  let age = year2 - year1;
  return age;
}
console.log(calculateAge(2003, 2026));


function checkNumber(num){
  if(num % 2 === 0){
    return "Even";
  } else {
    return "Odd";
  }
}
console.log(checkNumber(7));

function calculator(num1, num2, operator){
  switch(operator){
    case "+":
      return num1 + num2;
      break;
      case "-":
      return num1 - num2;
      break;
      case "*":
      return num1 * num2;
      break;
      case "/":
      return num1 / num2;
      break;
    default:
      return "Invalid operator.";
  }
}

console.log(calculator(10,5,"+"));


function zeroDivision(num1, num2){
  if(num2 === 0){
    return "Cannot divide by 0";
  }
  else{
    return num1 / num2;
  }
}
console.log(zeroDivision(10, 0));