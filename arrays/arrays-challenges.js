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