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