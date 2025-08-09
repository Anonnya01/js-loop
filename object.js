// const student = {
//   age: 20,
//   school: "Milestone",
//   year: 2020,
//   passed: true,
//   chapters: ['one','two','three','four']
// };

// console.log(student.passed);

// // ----------value---------
// const student = {
//   age: 20,
//   school: "Milestone",
//   year: 2020,
//   passed: true,
//   chapters: ['one','two','three','four']
// };
//  student.age = 24;
//  student['school'] ='UHNC'
// console.log(student);

// ---------dot notation------------
// const subject ={
//    name: 'biology',
//    teacher: 'mam',
//    exam: '20 th',
//    chapters: ['one','two','three','four']
// }
// const tec = subject.teacher;
// console.log(tec);

// //-------- bracket notation-----------

// const subject ={
//    name: 'biology',
//    teacher: 'mam',
//    exam: '20 th',
//    chapters: ['one','two','three','four']
// }

// console.log(subject['name']);
// const sub = subject['name'];
// console.log(sub);

// ---------key--------//

// const pet = {
//   name: "Simba",
//   breed: "Persian",
//   color: "Gray-Tabby",
//   age: "2 y",
//   weight: "4.5 kg",
// };
// const keys =Object.keys(pet);
// console.log(keys);

// --------values--------//

// const pet = {
//   name: "Simba",
//   breed: "Persian",
//   color: "Gray-Tabby",
//   age: "2 y",
//   weight: "4.5 kg",
// };
// const values =Object.values(pet);
// console.log(values);

// -------nested-object-------//

// const school = {
//   name: "Milestone",
//   location: "Uttara",
//   building: "30",
//   dressColor: {
//     color: "Gray",
//     type: ["Shirt", "pants"],
//   },
// };
// delete school.building;
// console.log(school.dressColor.type);
// console.log(school);

//------------- loop object------------

let myObject = {
  name: "John Doe",
  age: 25,
  city: "Example City",
  isStudent: true,
};

// for in / for of key in myObject

// const value = myObject[key] =  "John Doe",
// let type = type of value
// console.log( "Key:" + key + "| type:" + type);




const keys =Object.keys(myObject) ;
console.log(typeof keys);

// console.log( "Key:" + key + "| type:" + type);

// key: name | type:  string
// key: age | type:  number
// key: city | type:  string
// key: isStudent | type:  boolean
