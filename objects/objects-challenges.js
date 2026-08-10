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



