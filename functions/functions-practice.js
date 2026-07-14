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


function maskPassword(password){
  return "*".repeat(password.length);
}

console.log(maskPassword("mypassword123"));

function checkEmail(email){
  if(email.includes("@") && email.includes(".")){
    return "Valid Email";
  } 
  else {
    return "Invalid Email";
  }
}
console.log(checkEmail("rupesh@gmail.com"));

function getUsername(username){
 return username.slice(0, username.indexOf("@"));
}

console.log(getUsername("rupesh@gmail.com"));

function countWords(words){
  return words.split(" ").length;
  
}
console.log(countWords("JavaScript is fun"));

function canDrive(age, hasLicense){
  return age >= 18 && hasLicense;
}

console.log(canDrive(20,true));

function checkPassword(password){
  if(password.length >= 12){
    return "Strong password.";
  } else if(password.length >= 8 ){
    return "Medium password.";
  } else{
    return "Weak password";
  }
}
console.log(checkPassword("javascript123"));

function randomNumber(min, max){
  let random = Math.floor(Math.random() * (max - min + 1)) + min ;
  return random;
}
console.log(randomNumber(1,10));

function rollDice(){
  return `You rolled: ${Math.floor(Math.random() * 6) + 1}`;
}
console.log(rollDice());

function coinFlip(){
  return Math.random() < 0.5 ? "Heads" : "Tails";
}
console.log(coinFlip());

let username = "Rupesh";

function test(){
  let age = 22;
}
console.log(username);
// console.log(age); This one will fail because age is not a global variable it is a scope variable 

function add(a, b){
  return a + b
}
console.log(add(1, 2));

//Conversion into arrow function
const add2 = (a, b) => {
  return a + b;
}
console.log(add2(1, 2));

