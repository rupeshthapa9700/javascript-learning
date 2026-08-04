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

