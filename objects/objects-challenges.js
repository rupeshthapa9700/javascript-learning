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



