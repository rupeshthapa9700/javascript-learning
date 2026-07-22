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




function arrSize(size){
  if(size.length >= 7){
    return "Large";
  }
  else if(size.length >= 4){
    return "Medium";
  }
  else if(size.length >= 1){
    return "Small";
  }
  else {
    return "Empty";
  }
}

console.log(arrSize([1, 2, 3, 4, 5, 6, 7]));

function replaceItem(item, oldItem, newItem){
 let index = item.indexOf(oldItem);
  if(index !== -1){
    item[index] = newItem;
  }
  return item;
}
console.log(replaceItem(
    ["HTML","CSS","JS"],
    "CSS",
    "Tailwind"
));




function removeItem(item, remove){
  let index = item.indexOf(remove);
  if (index !== -1) {
    item.splice(index, 1);
  }

  return item;
  
}
console.log(removeItem(
["Apple","Orange","Banana"],
"Orange"
));



function shoppingCart(item, added){

  let included = item.includes(added);
  
  if(included){
    console.log("Already in cart.");
  }
  else {
    item.push(added);
    console.log("Added to cart.");
  }
  return item;
  
}
console.log(shoppingCart(
["Milk","Bread","Eggs"],
"Milk"
));

function usernameGenerator(username){
  return username.join('_').toLowerCase();
}
console.log(usernameGenerator([
"Rupesh",
"Thapa"
]));


function passwordGenerator(password){
  return password.join('');
}
console.log(passwordGenerator(["Java","Script","2026"]));