let fruits = ["Apple", "Banana"];

fruits.push("Orange");
fruits.unshift("Mango");

console.log(fruits);

fruits.pop();
fruits.shift();

console.log(fruits);

console.log(fruits.length);
console.log(fruits.includes("Banana"));
console.log(fruits.indexOf("Apple"));

function firstAndLast(arr){
  return `First: ${arr[0]} Last: ${arr[arr.length - 1]}`;
}
console.log(firstAndLast(["Apple", "Banana", "Mango"]));

function middleItem(lang){
  let middle = Math.floor((lang.length - 1) / 2);
  
  return lang[middle];
}
console.log(middleItem(["HTML","CSS","JavaScript"]));
