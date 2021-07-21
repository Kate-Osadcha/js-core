//  переменные, объявление и инициализация
console.log('variables');

console.log(student); // undefined

var student = "Kate";
console.log(student);

var caunt; //обьявления переменной без инициализации
console.log(caunt); //undefined


caunt = 5;
console.log(caunt); //5

caunt = 3;
console.log(caunt); //3



// console.log(number); //Uncaught ReferenceError: Cannot access 'number' before initialization
let number = 20;
console.log(number);

let age; //обьявления переменной без инициализации
console.log(age); //undefined


age = 18;
console.log(age); //18

age = 21;
console.log(age); //21



// console.log(userName); //Uncaught ReferenceError: Cannot access 'userName' before initialization
// const user; //Uncaught SyntaxError: Missing initializer in const declaration

const userName = "Markus";
console.log(userName);

// userName = "" //module-1-1.js:44 Uncaught TypeError: Assignment to constant variable.
