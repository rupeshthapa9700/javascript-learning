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

function rotate(args){
  args.push(args.shift());
  return args
}
console.log(rotate(["A","B","C","D"]));

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

let foods = ["bread", "milk"];

function addFood(foods, food) {
  foods.push(food);
  console.log(`${food} added.`);
  return foods;
}
console.log(addFood(foods, "jam"));

function removeFood(foods, food) {
  let index = foods.indexOf(food);

  if (index === -1) {
    console.log(`${food} not found.`);
    return foods;
  }

  foods.splice(index, 1);
  console.log(`${food} removed.`);
  return foods;
}
console.log(removeFood(foods, "milk"));

function findFood(foods, food) {
  return foods.includes(food);
}
console.log(findFood(foods, "jam"));


function showFoods(foods) {
  if (foods.length === 0) {
    console.log("No foods available.");
  } else {
    console.log(`Foods: ${foods.join(", ")}`);
  }
}




showFoods(foods);



let movies = ['avenger', 'superman', 'batman']
function watchMovie(movies, movie){
  if (movies.includes(movie)) {
  console.log(`${movie} is already in the watchlist.`);
  return movies;
}

  movies.push(movie);
  console.log(`${movie} added.`)
  return movies;
}

console.log(watchMovie(movies, 'hulk'));


function removeMovie(movies, movie){
  let index = movies.indexOf(movie);
  
  if(index === -1){
    console.log(`${movie} not found.`);
    return movies;
  }
  
  movies.splice(index, 1);
  console.log(`${movie} removed.`);
  return movies;
}
console.log(removeMovie(movies, 'batman'));

function isWatched(movies, movie){
  return movies.includes(movie);
}


console.log(isWatched(movies, 'avenger'));

function showMovies(movies){
  if(movies.length === 0){
    console.log(`No movies.`);
  } else{
    console.log(`Movies: ${movies.join(", ")}`);
  }
}


showMovies(movies);