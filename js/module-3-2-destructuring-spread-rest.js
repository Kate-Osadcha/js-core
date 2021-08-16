const product = {
  title: "mask",
  price: 100,
  values: ["50ml", "30ml", "100ml"],
};

function showTitle(name) {
  console.log(`this product is ${name}`);
}
showTitle("Parfum");
console.log(product.title);
showTitle(product.title);
const { title: myTitle } = product;
showTitle(myTitle);
//===========================================================
const prod = {
  parfums: {
    male: [
      {
        title: "Home",
        name: "Dior",
        price: 3000,
      },
    ],
    female: [
      {
        title: "jadore",
        name: "Dior",
        price: 2800,
      },
    ],
  },
  mask: {},
};
console.log(prod.parfums.female[0].title);

let title = prod.parfums.female[0].title;
console.log("title:", title);

// Деструкция
//const { property1 } = obj
const { title: productTitle, name, price } = prod.parfums.female[0];
console.log("productTitle:", productTitle);
console.log("name:", name);
console.log("price:", price);

const { title: maleParfumTitle } = prod.parfums.male[0];
console.log("maleParfumTitle:", maleParfumTitle);

const { female, male } = prod.parfums;

//============================================================

const user = {
  login: "nickname",
  pass: "aldjncbw;hefiq2r8437ry8",
  userInfo: {
    email: "",
    phone: "",
  },
};

function sayHello(name) {
  alert(`${name} Hello!`);
}
const { login } = user;
// sayHello(login)

const myFavouriteMusic = {
  rock: {
    bands: ["Rammstein", "Limp Biskit"],
    songs: ["Du riest so gut"],
  },
};

// 2nd level
const {
  rock: { bands, songs },
} = myFavouriteMusic;

console.log(bands);
bands.push("Linkin Park");
console.log(bands);
console.log(songs);

// 1st level
const { rock: objectOfRock, rap = "nothing for this time" } = myFavouriteMusic;
console.log(objectOfRock);
console.log(rap);

//==================================================

const rgb = [255, 39, 45];
console.log(rgb);

// const [] = array

const [red, , blue] = rgb;

// console.log("red:", red);
// console.log('green:', green)
// console.log("blue:", blue);

//===================================================================
// SPREAD - распыление
// распыление элементов массива - Math.min(...arr)
const numbers = [1, 2, 3, 4, 5, 6, 7, 84];

console.log(Math.max(3, 6, 3, 2, 6, 9, 1, 2, 34));
console.log(Math.max(...numbers));
console.log(Math.min(...numbers));

function getResult(a, b) {
  let total = 0;
  console.log(arguments); //pseudoarray
  // создание нового массива через распыление исходного
  const nums = [...arguments]; // normal array

  for (let num of nums) {
    total += num;
  }
  console.log(nums);
  return total;
}
console.log(getResult(2, 5, 4, 5, 6));

//====================

const first = [1, 2, 3];
const cloneFirst = first.slice(1, 2);
console.log("cloneFirst:", cloneFirst);
console.log(first === cloneFirst);

const newArr = first.concat(cloneFirst);
console.log(newArr);

//=============================================================

// + slice() || добавить любое кол-во элементов
const spreadArr = [...first, 444, ...first.slice(1, 2)];
console.log(spreadArr);

// распыление объектов {...obj1, ...obj2}, можно добавляя отдельные св-ва
const product1 = {
  title: "Cake",
  name: "Napoleon",
};
console.log(product1);

const params = {
  category: "sweets",
};
const { category } = params;

const newProduct = { ...product1, price: 30, category };

console.log(newProduct);
console.log(product === newProduct);

//================================================================

// REST - сбор
// аргументы в функциях в полноценный массив
const getTotalResult = (...args) => {
  console.log(args);
  let total = 0;
  for (let num of args) {
    total += num;
  }
  return total;
};
let result = getTotalResult(23, 45, 23, 45, 56, 15, 32, 43, 65);
console.log("result", result);

result = getTotalResult(22, 35, 1, 25, 31, 24, 44, 6, 78);
console.log("result", result);

//===================

const scoresOfStudents = [];
function getResultsOfTests(mail, ...scores) {
  console.log(mail);
  console.log(scores);
  let totalScore = 0;
  for (let score of scores) {
    totalScore += score;
  }
  console.log("totalScore:", totalScore);
  const obj = {
    email: mail,
    score: totalScore,
  };
  console.log(obj);
  scoresOfStudents.push(obj);
  console.log(scoresOfStudents);
}

getResultsOfTests("a@gmail.com", 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1);
getResultsOfTests("b@gmail.com", 0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1);
getResultsOfTests("c@gmail.com", 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1);
getResultsOfTests("d@gmail.com", 0, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1);
getResultsOfTests("e@gmail.com", 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1);

//=====================================================================================
