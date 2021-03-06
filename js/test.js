// const isComing = confirm("Please confirm hotel reservation");
// console.log(isComing);

// const hotelName = prompt("Please enter desired hotel name:");
// console.log(hotelName);

//===========================================================

//callback functions

// const printValue = function (value) {
//   console.log(value);
// };

// const prettyPrint = function (value) {
//   console.log("Logging value: ", value);
// };

// const repeat = function (n, action) {
//   for (let i = 0; i < n; i += 1) {
//     action(i);
//   }
// };

// repeat(3, printValue);

// repeat(3, prettyPrint);

//==================================================

// const repeat = function (n, action) {
//   for (let i = 0; i < n; i += 1) {
//     action(i);
//   }
// };

// const labels = [];

// repeat(5, (value) => {
//   labels.push(`Label ${value + 1}`);
// });
// console.log(labels);

//===================================================

//Фильтрация масива

// const filter = function (array) {
//   for (const element of array) {
//   }
// };
// -------
// const filter = function (array, test) {
//   for (const element of array) {
//     test(element);
//   }
// };

// ------

// const filter = function (array, test) {
//   const filteredElements = [];

//   for (const element of array) {
//     test(element);
//   }

//   return filteredElements;
// };
// -----
// const filter = function (array, test) {
//   const filteredElements = [];

//   for (const element of array) {
//     const passed = test(element);

//     if (passed) {
//       filteredElements.push(element);
//     }
//   }

//   return filteredElements;
// };
// ----

// ============================================================

// Приватные свойства
class User {
  // Необязательное объявление публичных свойств
  name;
  // Обязательное объявление приватных свойств
  #email;

  constructor({ name, email }) {
    this.name = name;
    this.#email = email;
  }

  getEmail() {
    return this.#email;
  }

  changeEmail(newEmail) {
    this.#email = newEmail;
  }
}

const mango = new User({ name: 'Манго', email: 'mango@mail.com' });

mango.changeEmail('mango@supermail.com');
console.log(mango.getEmail()); // mango@supermail.com
console.log(mango.#email); // Будет ошибка, это приватное свойство

// Методы класса также могут быть приватными, то есть доступны только 
// в теле класса.Для этого перед их именем необходимо поставить символ #.


// =====================================================================
// модуль 3
// // TASK 1
// // ============================
// // Создать объект товара со свойствами name, price,
// // quantity и методами, которые показывают их текущее значение
// // и методами, что изменяют их значения.
// // code =========
// const product = {
//   name: 'prod',
//   price: 0,
//   quantity: 0,

//   showName() {
//     console.log(this.name)
//   },
//   showPrice() {
//     console.log(this.price)
//   },
//   showQuantity() {
//     console.log(this.quantity)
//   },

//   changeName(value) {
//     return (this.name = value)
//   },
//   changePrice(value) {
//     return (this.price = value)
//   },
//   changeQuantity(value) {
//     return (this.quantity = value)
//   },
//   // deleteProp(propName){
//   //   delete this[propName]
//   // }
//   updateQuantity(value, isCost) {
//     // 1 if..else
//     // if (isCost) {
//     //   // уменьшаем
//     //   return (this.quantity -= value)
//     // } else {
//     //   return (this.quantity += value)
//     // }
//     // 2 with Guard CLause
//     // if (isCost) return (this.quantity -= value)
//     // return (this.quantity += value)
//     // 3 by Ternary
//     isCost ? (this.quantity -= value) : (this.quantity += value)
//   },
// }
// console.log(product)
// // product.deleteProp('name')

// // checkup =========
// product.showName()
// product.showPrice()
// product.showQuantity()

// product.changeName('Peach')
// product.changePrice(55)
// product.changeQuantity(3)
// console.log(product)
// // product.showName()

// product.showQuantity() // до уменьшения веса
// product.updateQuantity(1, true)
// product.showQuantity() // после
// product.updateQuantity(0.5, false)
// product.showQuantity() // после

// // TASK 2
// // ============================
// // Добавь к объекту product метод, который высчитывает
// // стоимость общего количества текущего товара
// // code =========
// product.getTotalPrice = function () {
//   return this.price * this.quantity
// }

// // checkup =========
// console.log(product.getTotalPrice())

// // TASK 3
// // Записать в переменную totalPrice общую стоимость
// // всех товаров в массиве products
// // ============================
// const products = [
//   { name: 'Grape', price: 80, quantity: 2 },
//   { name: 'Banana', price: 30, quantity: 5 },
//   { name: 'Kiwi', price: 100, quantity: 1.5 },
// ]
// // code =========
// function getTotalPrice(arr) {
//   let totalPrice = 0

//   for (let i = 0; i < arr.length; i++) {
//     console.log(products[i])
//     totalPrice += products[i].price * products[i].quantity
//   }
//   console.log('totalPrice', totalPrice)
// }
// getTotalPrice(products)
// // checkup =========

// TASK 4
// Создать функцию, которая принимает массив продуктов,
// название товара и его количество
// и выводит его стоимость, если товара достаточно или сообщает о том,
// что товара нет на складе в указанном количестве
// Написать функцию тремя способами (Expression, Declaration & Arrow)
// ============================
const allProducts = [
  { name: 'bread', price: 20, quantity: 100 },
  { name: 'milk 2,5%', price: 30, quantity: 24 },
  { name: 'cheese', price: 300, quantity: 10 },
  { name: 'chorizo', price: 560, quantity: 4 },
  { name: 'lemon', price: 60, quantity: 9 },
  { name: 'lavazza', price: 250, quantity: 24 },
]
// console.log(allProducts)
// // code =========
function getResponse(arr, prod, count) {
  // console.log(arr)
  for (let product of arr) {
    // console.log(product.name)
    // проверяем есть ли желаемый товар prod в массиве продуктов
    // ==================
    // if (product.name === prod) {
    //   console.log(`${prod} есть на складе`)
    //   if (product.quantity >= count) {
    //     let cost = product.price * count
    //     console.log(`${prod} можете купить за ${cost} монет`)
    //   } else {
    //     console.log(`${prod} нет в достаточном количестве`)
    //   }
    // ==================
    const { name, quantity, price } = product
    // if (name === prod) {
    //   // console.log(`${prod} есть на складе`)
    //   return quantity >= count
    //     ? console.log(`${prod} можете купить за ${price * count} монет`)
    //     : console.log(`${prod} нет в достаточном количестве`)
    // }
    // ==================
  }
  console.log(`${prod} нет такого на складе`)
}
getResponse(allProducts, 'lavazza', 24)