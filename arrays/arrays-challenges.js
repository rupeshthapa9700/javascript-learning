let books = ["Atomic Habits", "Deep Work", "Clean Code"];
function addBook(books, book){
  if(books.includes(book)){
    console.log(`${book} already exists.`);
    return books;
  }
  books.push(book);
  console.log(`${book} added.`)
  return books;
}
console.log(addBook(books, 'Deep Work'));

function removeBook(books, book){
  let index = books.indexOf(book);
  if(index === -1){
    console.log(`${book} does not exist.`);
    return books;
  }
  books.splice(index, 1);
  console.log(`${book} removed.`);
  return books;
}
console.log(removeBook(books, 'Deep Work'));

function searchBook(books, book){
  return books.includes(book);
}
console.log(searchBook(books, 'Clean Code'));

function randomBook(books){
  return books[Math.floor(Math.random() * books.length)];
}
console.log(randomBook(books));

function showBooks(books){
  if(books.length === 0){
    console.log("No books.");
  }
  else{
    console.log(`Books: ${books.join(", ")}`);
  }
}
showBooks(books);
function countBooks(books){
  if(books.length === 0){
    return "No books in library.";
  }
  return `Total books: ${books.length}`;
}

console.log(countBooks(books));


let players = ["Messi", "Ronaldo", "Neymar"];
function addPlayer(players, player){
  if(players.includes(player)){
    console.log(`${player} already exists.`);
    return players;
  }
  players.push(player);
  console.log(`${player} is added.`);
  return players;
}
console.log(addPlayer(players, 'Ronaldo'));

function removePlayer(players, player){
  let index = players.indexOf(player);
  if(index === -1){
    console.log(`${player} does not exist.`);
    return players;
  }
  players.splice(index, 1);
  console.log(`${player} has been removed.`);
  return players;
}
console.log(removePlayer(players, 'Ronaldo'));

function hasPlayer(players, player){
  return players.includes(player);
}
console.log(hasPlayer(players, 'Messi'));

function showPlayers(players){
  if(players.length === 0){
    console.log("No players in the team.");
  } else{
    console.log(`Players: ${players.join(", ")}`);
  }
}
showPlayers(players);

function randomCaptain(players){
  if(players.length === 0){
    return "No players available.";
  }
  return players[Math.floor(Math.random() * players.length)];
}
console.log(randomCaptain(players));


let ratings = [5, 4, 3, 5, 2];

function addRating(ratings, rate){
  ratings.push(rate);
  return ratings;
}
console.log(addRating(ratings, 3));

function removeLastRating(ratings){
  ratings.pop();
  return ratings;
}
console.log(removeLastRating(ratings));

function highestRating(ratings){
  return Math.max(...ratings);
}
console.log(highestRating(ratings));

function averageRating(ratings){
  let total =
    ratings[0] +
    ratings[1] +
    ratings[2] +
    ratings[3] +
    ratings[4];

  return total / ratings.length;
}
console.log(averageRating(ratings));



let dice = [1, 2, 3, 4, 5, 6]

function playRound(dice){
  let player1 = dice[Math.floor(Math.random() * dice.length)];
  let player2 = dice[Math.floor(Math.random() * dice.length)];
  if(player1 > player2){
    return `Player 1 rolled ${player1} \n Player 2 rolled ${player2} \n Winner: Player 1`;
  }
  else if(player1 < player2){
    return `Player 1 rolled ${player1} \n Player 2 rolled ${player2} \n Winner: Player 2`;
  }
  else {
   return `Player 1 rolled ${player1} \n Player 2 rolled ${player2} \n Draw`;
  }
}
console.log(playRound(dice));

let users = ['Rupesh_Thapa', 'Ram_Shrestha'];
function registerUser(users, username) {
  if (username.includes(" ")) {
    return "Username should not contain spaces.";
  }

  if (username.length < 5) {
    return "Username must be at least 5 characters long.";
  }

  if (users.includes(username)) {
    return `${username} already exists.`;
  }

  users.push(username);
  return users;
}
console.log(registerUser(users, 'Rupesh_Thapa'));

