let birthYear = 2003;
let currentYear = 2026;
let age = currentYear - birthYear;
console.log(`You are ${age} years old.`);

let marks = 85;

if(marks >= 90){
    console.log("Grade A");
}
else if(marks >= 80){
    console.log("Grade B");
}
else if(marks >= 70){
    console.log("Grade C");
}
else{
    console.log("Failed");
}

let num1 = 10;
let num2 = 5;
let operator = "+";

switch(operator){
  case "+":
    console.log(num1 + num2);
    break;
  case "-":
    console.log(num1 - num2);
    break;
  case "*":
    console.log(num1 * num2);
    break;
  case "/":
    console.log(num1 / num2);
    break;
  default: 
    console.log("Invalid operator");
}

let day = 3;

switch(day){
  case 0:
    console.log("Sunday");
    break;
    case 1:
    console.log("Monday");
    break;
    case 2:
    console.log("Tuesday");
    break;
    case 3:
    console.log("Wednesday");
    break;
    case 4:
    console.log("Thursday");
    break;
    case 5:
    console.log("Friday");
    break;
    case 6:
    console.log("Saturday");
    break;
  default:
console.log("Invalid day.");
}
  
  

let password = "javascript123";

if(password.length >= 12){
    console.log("Strong password");
}
else if(password.length >= 8){
    console.log("Medium password");
}
else{
    console.log("Weak password");
}


let secretNumber = 7;
let guess = 5;

if(guess > secretNumber){
  console.log("Too high");
} else if(guess < secretNumber){
  console.log("Too low");
} else if(guess === secretNumber){
  console.log("Correct");
}
else{
  console.log("Not a number")
}

let diceRoll = Math.floor(Math.random() * 6) + 1
console.log(`You rolled: ${diceRoll}`)
let random = Math.random();
if(random < 0.5){
  console.log("Heads");
}else{
  console.log("Tails");
}