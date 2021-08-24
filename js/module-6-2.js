const arr = [
  { name: "Albert", surname: "Einstein", born: 1879, dead: 1955, id: 1 },
  { name: "Isaac", surname: "Newton", born: 1643, dead: 1727, id: 2 },
  { name: "Galileo", surname: "Galilei", born: 1564, dead: 1642, id: 3 },
  { name: "Pierre", surname: "Curie", born: 1859, dead: 1934, id: 4 },
  { name: "Marie", surname: "Curie", born: 1867, dead: 1934, id: 4 },
  { name: "Johannes", surname: "Kepler", born: 1571, dead: 1630, id: 5 },
  { name: "Nicolaus", surname: "Copernicus", born: 1473, dead: 1543, id: 6 },
  { name: "Max", surname: "Planck", born: 1858, dead: 1947, id: 7 },
  { name: "Katherine", surname: "Blodgett", born: 1898, dead: 1979, id: 8 },
  { name: "Ada", surname: "Lovelace", born: 1815, dead: 1852, id: 9 },
  { name: "Sarah E.", surname: "Goode", born: 1855, dead: 1905, id: 10 },
  { name: "Lise", surname: "Meitner", born: 1878, dead: 1968, id: 11 },
  { name: "Hanna", surname: "Hammarström", born: 1829, dead: 1909, id: 12 },
];
// console.log(arr)
// 1 
// Отримати масив вчених, що народилися в 19 столітті
// const condition = obj.born >= 1800 && obj.born < 1900
let result = arr.filter((obj) => obj.born >= 1800 && obj.born < 1900);
// console.log(result)

// 2
// Знайти сумму років скільки прожили всі вченні
// result = arr.reduce((acc, obj) => {
//   let age = obj.dead - obj.born
//   return acc + age
// }, 0)
result = arr.reduce((acc, obj) => (acc += obj.dead - obj.born), 0);
// console.log('result', result)

// 3
// Відсортувати вчених по алфавіту
result = arr.sort((a, b) =>
  (a.surname + " " + a.name).localeCompare(b.surname + " " + b.name)
);
// console.log('result', result)

// 4
// Відсортувати вчених по кількості прожитих років
result = arr.sort((a, b) => a.dead - a.born - (b.dead - b.born));
// console.log('result', result)
// result.forEach((el) => console.log(el.dead - el.born)) // проверка

// 5
// Видалити з масиву вчених, що народилися в 15 або 16 або 17 ст
result = arr.filter((obj) => !(obj.born >= 1400 && obj.born < 1700));
// console.log('result', result)

// 6
// Знайти вченого який народився найпізніше
// result = arr.sort((a, b) => a.born - b.born)[arr.length - 1]
// console.log('result', result)

// 7
// Знайти рік народження Albert Einstein
// result = arr.find((obj) => obj.name + ' ' + obj.surname === 'Albert Einstein')
//   .born
// console.log('result', result)

result = arr.reduce((acc, obj) => {
  if (obj.name + " " + obj.surname === "Albert Einstein") {
    acc = obj.born;
  }
  return acc;
}, 0);
// console.log('result', result)

// 8
// Знайти вчених прізвище яких починається на літеру C
result = arr.filter((obj) => obj.surname[0] === "C");
// console.log('result', result)

// 9
// Видалити з масива всіх вчених імя яких починається на A
result = arr.filter((obj) => obj.name[0] !== "A");
// console.log('result', result)

// 10
// Знайти вченого який прожив найбільше і вченого який прожив найменше
result = arr.sort((a, b) => {
  return a.dead - a.born - (b.dead - b.born);
});
let youngest = result[0];
let oldest = result.reverse()[0];
// console.log('result', youngest, oldest)
// result.forEach((el) => console.log(el.dead - el.born)) // проверка

// 11
// Знайти вчених в яких співпадають перші літери імені і прізвища
result = arr.filter((obj) => obj.name[0] === obj.surname[0]);
// console.log('result', result)

// 12
// Дізнатися чи всі вченні працювали в 19ст.
// console.log(arr)
result = arr.every((obj) => obj.dead >= 1800 && obj.dead < 1900);
console.log("result", result);
