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