"use strict";

// ПЕРЕБЕРАЮЩИЕ МЕТОДЫ МАСИВА

// forEach – для перебора массива.
// filter – для фильтрации массива.
// every/some – для проверки массива.
// map – для трансформации массива в массив.
// reduce/reduceRight – для прохода по массиву с вычислением значения.

//====================== forEach (для перебора массива)=================================//
// позволяет пробежаться по каждому элементу массива(последовательно перебрать их)
// и произвести с ним какое - либо действие
// Данный метод ничего не возвращает.

// Метод в параметре получает функцию, которая выполнится для каждого элемента массива.
// В эту функцию можно передавать 3 параметра(но ои не являются обязательными)
// массив.forEach(function(элемент, индекс, массив) {
// 	код, который выполнится для всех элементов
// })

// Пример 1
let arr = [7, 2, 8, 4, 5];
let sum = 0;

// arr.forEach(function (elem) {
//   sum += elem;
// });
// console.log(sum);

arr.forEach((elem) => (sum += elem));
// console.log(sum);

// Пример 2
const friends = [
  {
    passport: "03005988",
    name: "Joseph Francis Tribbiani Jr",
    age: 32,
    sex: "m",
  },
  {
    passport: "03005989",
    name: "Chandler Muriel Bing",
    age: 33,
    sex: "m",
  },
  {
    passport: "03005990",
    name: "Ross Eustace Geller",
    age: 33,
    sex: "m",
  },
  {
    passport: "03005991",
    name: "Rachel Karen Green",
    age: 31,
    sex: "f",
  },
  {
    passport: "03005992",
    name: "Monica Geller",
    age: 31,
    sex: "f",
  },
  {
    passport: "03005993",
    name: "Phoebe Buffay",
    age: 34,
    sex: "f",
  },
];

// подсчитаем, сколько им всем лет в сумме.
// Сделать это можно с помощью цикла for или привычного метода forEach
// решение с for
// let totalYears = 0;
// for (let i = 0; i < friends.length; i++) {
//   totalYears += friends[i].age;
// }
// console.log(totalYears);

// решение с forEach
let totalYears = 0;
friends.forEach((friend) => (totalYears += friend.age));
// console.log(totalYears);


// виберем паспорторта с масива друзей
//forEach
// const passports = [];
// friends.forEach((friend) => passports.push(friend.passport));
// console.log(passports);

//for
// const passports = [];
// for (let i = 0; i < friends.length; i++) {
//   passports.push(friends[i].passport);
// }
// console.log(passports);
//==============================================================================//

//=============================== filter (для фильтрации массива) =======================================//
// Создает новый массив, куда добавляются все элементы исходного массива,
//  которые соответствуют нашим условиям.
// Каждый элемент исходного массива проверяется на соответствие нашим условиям.
// В случае соответствия, возвращается true и элемент добавляется в новый массив.
// В противном случае возвращается false и.filter переходит к оценке следующего элемента.

// пример 1
// let gentlemen = friends.filter(function (friend) {
//   return friend.sex === "m";
// });
// console.log(gentlemen);

let ladies = friends.filter((friend) => friend.sex === "f");
let gentlemen = friends.filter((friend) => friend.sex === "m");
// console.log(ladies);
// console.log(gentlemen);

// пример 2
let numbers = [-2, 5, 1, -5, -1, 1, 3, 4, -1];

// let result = numbers.filter(function (elem) {
//   if (elem >= 0) {
//     return true;
//   } else {
//     return false;
//   }
// });
// console.log(result);

let result = numbers.filter((elem) => elem >= 0)
// console.log(result);

//================================================================================//

//====================== every/some (для проверки массива)========================//
// Метод .some() перебирает исходный массив и возвращает true, 
// если хотя бы один из элементов массива удовлетворяет нашему условию,
// в противном случае метод возвращает false.

// Метод .every() возвращает true, только в том случае, 
// если каждый элемент массива удовлетворяет нашему условию,
// в противном случае метод возвращает false.

const students = [
  { name: "Alex", age: 17 },
  { name: "Stas", age: 18 },
  { name: "Mike", age: 22 },
  { name: "Den", age: 20 },
];

// const overEighteen = students.some((student) => {
//   return student.age > 18;
// });
// console.log(overEighteen);//true

const overEighteen = students.every((student) => {
  return student.age > 18;
});
// console.log(overEighteen); //false

//================================================================================//

//==================== map (для трансформации массива в массив) ==================//
// Метод .map() перебирает каждый элемент массива, производит с ним какие-либо 
// действия и добавляет в новый массив, который мы получаем после 
// окончания работы метода.
// При этом метод не изменяет исходный массив, а возвращает измененный.
// Новый массив, который создается в результате работы метода 
// .map() всегда имеет такую же длину, что и исходный массив.
// Даже если обработчик вернет ложное значение или 
// вообще ничего не вернет(в этом случае будет undefined)

// Пример 1
// виберем паспорторта с масива друзей
const passports = friends.map((friend) => friend.passport);
// console.log(passports);

// Пример 2
const names = ["Вася", "Петя", "Маша"];
const sayHi = names.map((name) => {
  return `${name} привет!`;
});
// console.log(sayHi);

//================================================================================//

//=======reduce/reduceRight (для прохода по массиву с вычислением значения)=======//
// Метод .reduce() – также использует исходный массив для последовательной 
// обработки каждого элемента.С помощью данного метода можно сохранять 
// промежуточный результат и возвращать новые объекты, массивы или, например, числа.

// Метод reduce принимает 2 параметра:
// - коллбэк, как и map, который будет вызван последовательно для 
// каждого элемента коллекции;
// -начальное значение аккумулятора.

// В коллбэке тоже 2 аргумента:
// первый – это накопленное значение (аккумулятор);
// второй – непосредственно элемент массива.

// пример
// подсчитаем, сколько всем друзьям с нашего масива лет в сумме
let totalYears1 = friends.reduce(function (accumulator, friend) {
  return accumulator + friend.age;
}, 0);

// let totalYears = friends.reduce(
//   (accumulator, friend) => accumulator + friend.age,
//   0
// );
// console.log(totalYears1);

// Метод reduceRight работает точно так же как и reduce 
// Единственное отличие: reduce перебирает элементы слева направо, 
// а reduceRight - справа налево.





