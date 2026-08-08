const student = {
  name: "Rupesh",
  age: 22,
  course: "BSc Computing"
};

const updateAge = (student, age) => {
  student.age = age;
  return student;
}
console.log(updateAge(student, 25));

const updateCourse = (student, course) => {
  student.course = course;
  return student;
}
console.log(updateCourse(student, 'Cyber Security'));
const removeCourse = (student) => {
  delete student.course;
  return student;
}
console.log(removeCourse(student));
const hasCourse = (student) => {
  return student.hasOwnProperty('course');
}
console.log(hasCourse(student));
const showStudent = (student) => {
  return student;
}
console.log(showStudent(student));



const car = {
  brand: "Toyota",
  model: "Corolla",
  year: 2020
};

const updateYear = (car, year) => {
  car.year = year;
  return car;
}
console.log(updateYear(car, 2026));

const changeBrand = (car, brand) =>{
  car.brand = brand;
  return car;
}
console.log(changeBrand(car, 'Hyundai'));

const deleteModel = (car) => {
  delete car.model;
  return car;
}
console.log(deleteModel(car));

const hasModel = (car) => {
  return car.hasOwnProperty('model');
}
console.log(hasModel(car));

const showCar = (car) => {
  return car;
}
console.log(showCar(car));

const user = {
  username: "rupesh",
  password: "javascript123",
  isLoggedIn: false
};

const login = (user, username, password) => {
  if(user.username === username && user.password === password){
    user.isLoggedIn = true;
    return user;
  }
  else {
    user.isLoggedIn = false;
    return user;
  }
}
console.log(login(user, 'rupesh', 'javascript123'));

const logout = (user) => {
   user.isLoggedIn = false;
  return user;
}
console.log(logout(user));

const showStatus = (user) => {
  return user.isLoggedIn;
}
console.log(showStatus(user));


const laptop = {
  brand: "Apple",
  ram: "16GB",
  storage: "512GB",
  available: true
};

const sellLaptop = (laptop) => {
  laptop.available = false;
  return laptop;
}
console.log(sellLaptop(laptop));

const restockLaptop = (laptop) => {
  laptop.available = true;
  return laptop;
}
console.log(restockLaptop(laptop));

const updateStorage = (laptop, storage) => {
  laptop.storage = storage;
  return laptop;
}
console.log(updateStorage(laptop, '1TB'));

const showLaptop = (laptop) => {
  return laptop;
}
console.log(showLaptop(laptop));


const employee = {
  name: "John",
  salary: 45000,
  department: "IT"
};


const increaseSalary = (employee, amount) => {
  employee.salary += amount;
  return employee;
}
console.log(increaseSalary(employee, 10000));

const transferDepartment = (employee, department) => {
  employee.department = department;
  return employee;
}
console.log(transferDepartment(employee, 'Customer Care'));

const removeDepartment = (employee) => {
  delete employee.department;
  return employee;
}
console.log(removeDepartment(employee));

const employeeDetails = (employee) => {
  return employee;
}
console.log(employeeDetails(employee));


const movie = {
  title: "Inception",
  rating: 9,
  watched: false
};

const markWatched = (movie) => {
  movie.watched = true;
  return movie;
}
console.log(markWatched(movie));

const updateRating = (movie, rating) => {
  movie.rating = rating;
  return movie;
}
console.log(updateRating(movie, 10));

const removeRating = (movie) => {
  delete movie.rating;
  return movie;
}
console.log(removeRating(movie));

const showMovie = (movie) => {
  return movie;
}
console.log(showMovie(movie));

const account = {
  owner: "Rupesh",
  balance: 1000
};

const deposit = (account, amount) => {
  account.balance += amount;
  return account;
}
console.log(deposit(account, 1000));

const withdraw = (account, amount) => {
 if(account.balance < amount){
   return "Insufficient Balance.";
 }
  else {
    account.balance -= amount;
    return account;
  }
}
console.log(withdraw(account, 1000));

const checkBalance = (account) => {
  return account.balance;
}
console.log(checkBalance(account));


const product = {
  name: "Keyboard",
  price: 3500,
  stock: 10
};

const buyProduct = (product, quantity) => {
    if (quantity > product.stock) {
        return "Not enough stock.";
    }

    product.stock -= quantity;
    return product;
  
}
console.log(buyProduct(product, 10));

const restock = (product, quantity) => {
  product.stock += quantity;
  return product;
}
console.log(restock(product, 20));

const updatePrice = (product, price) => {
  product.price = price;
  return product;
}
console.log(updatePrice(product, 4000));

const productInfo = (product) => {
  return product;
}
console.log(productInfo(product));

const phoneBook = {
  Rupesh: "9800000000",
  John: "9811111111"
};

const addContact = (phoneBook, name, number) => {
  phoneBook[name] = number;
  return phoneBook;
}
console.log(addContact(phoneBook, "Ram", "9833333333"));

const removeContact = (phoneBook, name) => {
  delete phoneBook[name];
  return phoneBook;
}
console.log(removeContact(phoneBook, 'Ram'));
const searchContact = (phoneBook, name) =>{
  return phoneBook.hasOwnProperty(name);
} 
console.log(searchContact(phoneBook, 'Ram'));
const updateNumber = (phoneBook, name, number) => {
  phoneBook[name] = number;
  return phoneBook;
}
console.log(updateNumber(phoneBook, 'Rupesh', '9700000000'));
const showContacts = (phoneBook) => {
  return phoneBook;
}
console.log(showContacts(phoneBook));


const library = {
  books: [
    {
      title: "Atomic Habits",
      available: true
    },
    {
      title: "Deep Work",
      available: false
    }
  ]
};

const borrowBook = (library, title) => {
  const book = library.books.find(book => book.title === title);
  if(book){
    book.available = false;
  }
  return library;
}
console.log(borrowBook(library, 'Atomic Habits'));

const returnBook = (library, title) => {
 const book = library.books.find(book => book.title === title);
  if(book){
    book.available = true;
  }
  return library;
}
console.log(returnBook(library, 'Deep Work'));

const showBooks = (library) => {
  return library;
}
console.log(showBooks(library));


const cart = {
  owner: "Rupesh",
  items: [
    {
      name: "Mouse",
      price: 1200
    },
    {
      name: "Keyboard",
      price: 3500
    }
  ]
};

const addItem = (cart, name, price) => {
  cart.items.push({name, price});
  return cart;
}
console.log(addItem(cart, 'USB', 1000));

const removeItem = (cart, name) => {
  const index = cart.items.findIndex(item => item.name === name);
  if(index === -1) {
   return `${name} is not found.`;
}
  cart.items.splice(index, 1);
  return cart;
}
console.log(removeItem(cart, 'USB'));

const totalPrice = (cart) => {
  return cart.items.reduce((total, item) => total + item.price, 0);
};

console.log(totalPrice(cart));

const showCart = (cart) => {
  return cart;
}
console.log(showCart(cart));
