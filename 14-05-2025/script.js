// const person={
//     name: "jhon",
//     age : 30,
//     hobby: [ "dance", "singing"],
//     address : {
//         state: "mp",
//         city : " bhopal ",
//         country : " india ",
//      },
// }

// // update
// person.age=60;
// //add
// person.hasaddress = true;
// console.log(person);

// // spread opertor....

// const obj1= {
//     a : 1,
//     b : 2,
// };

// const obj2={
//     c: 3,
//     d: 4,
// };

// const obj3={ ...obj1,...obj2};
// console.log(obj3);

// // array of objects....
// const students = [
//     {name : "ram", id: 1, course: "frontend"},
//     {name : "rohit", id: 2, course: "backend"},
//     {name : "yashraj", id: 3, course: "fullstack"},
//     {name : "rishabh", id: 3, course: "python"},
//     {name : "kesav", id: 4, course: "dads"},
// ];

// console.log(student[0].course);
// console.log(student[1].name+" "+student[1].id+" "+student[1].course);

// console.log(`${student[2].name} ${student[2].id} ${student[2].course}`);

// // destructuring

// const car ={
//     color: "red",
//     model: 2025,
//     brand: "BMW",
// };

// // const a = car. color;
// // const b = car. model;

// const { color, model, brand} = car;

// console.log(color,model,brand);

// const{ color: a, model: b, brand: c } = car;
// console.log(a,b,c);

// Object to json string....
const user = {
    name : "jhon",
    id: 1,
    age: 32,
    city: "bhopal",
};
console.log(user.name);

const data = JSON.stringify(user);
console.log(data);

// json string to javascript object.....
const updated = JSON.parse(data);
console.log(updated);



