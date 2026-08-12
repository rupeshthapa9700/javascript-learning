const student = {
  name: "Rupesh",
  age: 22,
  course: "Computing",
  university: "University of Northampton"
};

const getStudentName = (student) => {
  return student.name;
}
console.log(getStudentName(student));
const getStudentCourse = (student) => {
  return student.course;
}
console.log(getStudentCourse(student));
const updateAge = (student, age) => {
  student.age = age;
  return student;
}
console.log(updateAge(student, 25));
const removeUniversity = (student) => {
  delete student.university;
  return student;
}
console.log(removeUniversity(student));
const hasCourse = (student) => {
  return student.hasOwnProperty('course');
  
}
console.log(hasCourse(student));


const user = {
  username: "rupesh",
  email: "rupesh@example.com",
  age: 22
};

const getProperty = (user, property) => {
  return user[property];
}
console.log(getProperty(user, 'username'));
const updateProperty = (user, property, value) => {
  user[property] = value;
  return user;
}
console.log(updateProperty(user, 'age', 25));
const removeProperty = (user, property) => {
  delete user[property];
  return user;
}
console.log(removeProperty(user, 'email'));



const user1 = {
  name: "Rupesh",
  age: 22
};

const user2 = {
  name: "John"
};

const getUserInfo = (user) => {
   const {name, age = 18} = user;
  return `${name} is ${age} years old.`;
}
console.log(getUserInfo(user1));
console.log(getUserInfo(user2));


const user = {
  name: "Rupesh",
  profile: {
    city: "Kathmandu",
    country: "Nepal",
    contact: {
      email: "rupesh@example.com",
      phone: "9800000000"
    }
  }
};

const getCity = (user) => {
  return user.profile.city;
}
console.log(getCity(user));
const getEmail = (user) => {
  return user.profile.contact.email;
}
console.log(getEmail(user));
const getPhone = (user) => {
  return user.profile.contact.phone;
}
console.log(getPhone(user));
const updateCity = (user, city) => {
   user.profile.city = city;
  return user;
}
console.log(updateCity(user, 'Pokhara'));


const user1 = {
  name: "Rupesh",
  profile: {
    city: "Kathmandu"
  }
};

const user2 = {
  name: "John"
};

const getPhone = (user) => user?.profile?.contact?.phone;

console.log(getPhone(user1));
console.log(getPhone(user2));


const product = {
  name: "MacBook",
  price: 180000,
  stock: 5
};
const saveProduct = (product) => {
  return JSON.stringify(product);
}
console.log(saveProduct(product));
const data = saveProduct(product);
console.log(data);

const loadProduct = (data) => {
  return JSON.parse(data);
}
console.log(loadProduct(data));

const students = [
  {
    name: "Rupesh",
    age: 22,
    course: "Computing"
  },
  {
    name: "Ram",
    age: 21,
    course: "Business"
  },
  {
    name: "Sita",
    age: 23,
    course: "Computing"
  }
];
const findStudent = (students, name) => {
  return students.find(student => student.name === name)
}
console.log(findStudent(students, "Sita"));

const getStudentCourse = (students, name) => {
  const student = students.find(student => student.name === name);
  return student?.course;
}
console.log(getStudentCourse(students, "Ram"));

const updateStudentAge = (students, name, age) => {
  const student = students.find(student => student.name === name);

  if (student) {
    student.age = age;
    console.log(`${name}'s age becomes ${age}.`);
  }

  return students;
};

console.log(updateStudentAge(students, "Rupesh", 23));



const cart = {
  owner: "Rupesh",
  items: [
    {
      name: "Mouse",
      price: 1200,
      quantity: 2
    },
    {
      name: "Keyboard",
      price: 3500,
      quantity: 1
    }
  ]
};

const addToCart = (cart, name, price, quantity) => {
  cart.items.push({name, price, quantity});
  return cart;
}
console.log(addToCart(cart, 'Headphone', 1000, 1));
const removeFromCart = (cart, name) => {
   const index = cart.items.findIndex(item => item.name === name);
  if (index !== -1) {
    cart.items.splice(index, 1);
  }
  return cart;
}
console.log(removeFromCart(cart, 'Headphone'));
const findItem = (cart, name) => {
  return cart.items.find(item => item.name === name);
}
console.log(findItem(cart, 'Keyboard'));
const calculateTotal = (cart) => {
    return cart.items.reduce((sum, item) => sum + (item.price * item.quantity), 0);

}
console.log(calculateTotal(cart));

const bank = {
  name: "Rupesh",
  account: {
    type: "Savings",
    balance: 5000
  }
};

const deposit = (bank, amount) => {
  bank.account.balance += amount;
  return bank;
}
console.log(deposit(bank, 2000));
const withdraw = (bank, amount) => {
  if(amount > bank.account.balance){
    return "Insufficient Balance.";
  }
  bank.account.balance -= amount;
  return bank;
}
console.log(withdraw(bank, 2000));
const getBalance = (bank) => {
  return bank.account.balance;
}
console.log(getBalance(bank));
const changeAccountType = (bank, type) => {
  bank.account.type = type;
  return bank;
}
console.log(changeAccountType(bank, 'FD'));
const deleteAccountType = (bank) => {
  delete bank.account.type;
  return bank;
}
console.log(deleteAccountType(bank));