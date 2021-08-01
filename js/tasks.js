//Задачи

// МОДУЛЬ 3
//3-16
//Напиши функцию countTotalSalary(salaries) которая принимает объект зарплат,
// где имя свойства это имя сотрудника, а значение свойства это зарплата.
// Функция должна рассчитать общую сумму зарплат сотрудников и вернуть её.
// Используй переменную totalSalary для хранения общей суммы зарплаты.

function countTotalSalary(salaries) {
  let totalSalary = 0;

  for (const salary of Object.values(salaries)) {
    totalSalary += salary;
  }
  return totalSalary;
}
console.log(countTotalSalary({})); // 0
console.log(countTotalSalary({ mango: 100, poly: 150, alfred: 80 })); // 330
console.log(countTotalSalary({ kiwi: 200, poly: 50, ajax: 150 })); // 400

//-----------------------------------------------------

//3-17
//Перебери массив объектов colors используя цикл for...of.
// Добавь в массив hexColors значения свойств hex,
// а в массив rgbColors значения свойств rgb из всех объектов массива colors.

const colors = [
  { hex: "#f44336", rgb: "244,67,54" },
  { hex: "#2196f3", rgb: "33,150,243" },
  { hex: "#4caf50", rgb: "76,175,80" },
  { hex: "#ffeb3b", rgb: "255,235,59" },
];

const hexColors = [];
const rgbColors = [];

for (const color of colors) {
  hexColors.push(color.hex);
  rgbColors.push(color.rgb);
}

console.log(hexColors);
console.log(rgbColors);

//-------------------------------------------------------------------

//3-18
//Напиши функцию getProductPrice(productName) которая принимает один
// параметр productName - название продукта.Функция ищет объект продукта
// с таким именем(свойство name) в массиве products и возвращает его
// цену(свойство price).Если продукт с таким названием не найден,
// функция должна возвращать null.

const products = [
  { name: "Radar", price: 1300, quantity: 4 },
  { name: "Scanner", price: 2700, quantity: 3 },
  { name: "Droid", price: 400, quantity: 7 },
  { name: "Grip", price: 1200, quantity: 9 },
];

function getProductPrice(productName) {
  for (let product of products) {
    if (productName === product.name) {
      return product.price;
    }
  }
  return null;
}
console.log(getProductPrice("Radar"));
console.log(getProductPrice("Grip"));
console.log(getProductPrice("Scanner"));
console.log(getProductPrice("Droid"));
console.log(getProductPrice("Engine"));

//-------------------------------------------------------------------
//3-19
//Напиши функцию getAllPropValues(propName) которая принимает один параметр
// propName - имя(ключ) свойства.Функция должна вернуть массив всех значений
// свойства с таким именем из каждого объекта в массиве products.
// Если в объектах нет свойства с таким именем, функция должна вернуть
// пустой массив.

const products2 = [
  { name: "Radar", price: 1300, quantity: 4 },
  { name: "Scanner", price: 2700, quantity: 3 },
  { name: "Droid", price: 400, quantity: 7 },
  { name: "Grip", price: 1200, quantity: 9 },
];

function getAllPropValues(propName) {
  const newArray = [];
  for (const product of products2) {
    if (product.hasOwnProperty(propName)) {
      newArray.push(product[propName]);
    }
  }
  return newArray;
}

console.log(getAllPropValues("name"));
console.log(getAllPropValues("quantity"));
console.log(getAllPropValues("price"));
console.log(getAllPropValues("category"));

//----------------------------------------------------------------------
//3-20
//Напиши функцию calculateTotalPrice(productName) которая принимает один
// параметр productName - название товара.Функция должна вернуть общую
// стоимость(цена * количество) товара с таким именем из массива products.
const products3 = [
  { name: "Radar", price: 1300, quantity: 4 },
  { name: "Scanner", price: 2700, quantity: 3 },
  { name: "Droid", price: 400, quantity: 7 },
  { name: "Grip", price: 1200, quantity: 9 },
];

function calculateTotalPrice1(productName) {
  let totalPrice1 = 0;
  for (const product of products3) {
    if (product.name === productName) {
      return product.price * product.quantity;
    }
  }
  return 0;
}

console.log(calculateTotalPrice1("Blaster"));
console.log(calculateTotalPrice1("Radar"));
console.log(calculateTotalPrice1("Droid"));
console.log(calculateTotalPrice1("Grip"));
console.log(calculateTotalPrice1("Scanner"));

//----------------------------------------------------------------------
//3-21
//Пришел трёхдневный прогноз максимальных температур и мы считаем среднюю
// температуру за три дня(meanTemperature).Замени объявления переменных
// yesterday, today и tomorrow одной операцией деструктуризации свойств
// объекта highTemperatures.

// const highTemperatures = {
//   yesterday: 28,
//   today: 26,
//   tomorrow: 33,
// };
// Деструктиризация
// const { yesterday, today, tomorrow } = highTemperatures

// Решение,которое было до деструктиразации
// const yesterday = highTemperatures.yesterday;
// const today = highTemperatures.today;
// const tomorrow = highTemperatures.tomorrow;

// const meanTemperature = (yesterday + today + tomorrow) / 3;
// console.log(meanTemperature);

//----------------------------------------------------------------------
//3-22
// В прогнозе максимальных температур также может быть необязательное
// свойство icon - иконка погоды.Замени объявления переменных yesterday,
// today, tomorrow и icon одной операцией деструктуризации свойств объекта
// highTemperatures.Задай значение по умолчанию для icon -
// строку "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg".

const highTemperatures1 = {
  yesterday: 28,
  today: 26,
  tomorrow: 33,
};

// Деструктиризация
const {
  yesterday,
  today,
  tomorrow,
  icon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg",
} = highTemperatures1;

// Решение,которое было до деструктиразации
// const yesterday1 = highTemperatures1.yesterday1;
// const today1 = highTemperatures1.today1;
// const tomorrow1 = highTemperatures1.tomorrow1;
// const icon = highTemperatures1.icon1;

const meanTemperature1 = (yesterday + today + tomorrow) / 3;
console.log(meanTemperature1);

//----------------------------------------------------------------------
//3-23
// Замени объявления переменных highYesterday, highToday, highTomorrow
// и highIcon одной операцией деструктуризации свойств объекта
// highTemperatures.Задай значение по умолчанию для highIcon -
// строку "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg".

const highTemperatures = {
  yesterday: 28,
  today: 26,
  tomorrow: 33,
};

// Деструктиризация
const {
  yesterday: highYesterday,
  today: highToday,
  tomorrow: highTomorrow,
  icon: highIcon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg",
} = highTemperatures;

// Решение,которое было до деструктиразации
// const highYesterday = highTemperatures.yesterday;
// const highToday = highTemperatures.today;
// const highTomorrow = highTemperatures.tomorrow;
// const highIcon = highTemperatures.icon;

const meanTemperature = (highYesterday + highToday + highTomorrow) / 3;
console.log(meanTemperature);

//----------------------------------------------------------------------
//3-24
// Выполни рефакторинг цикла for...of так, чтобы в нём использовалась
// деструктуризация объекта..

const colors1 = [
  { hex: "#f44336", rgb: "244,67,54" },
  { hex: "#2196f3", rgb: "33,150,243" },
  { hex: "#4caf50", rgb: "76,175,80" },
  { hex: "#ffeb3b", rgb: "255,235,59" },
];

const hexColors1 = [];
const rgbColors1 = [];

// Деструктиризация
for (const { hex, rgb } of colors) {
  hexColors1.push(hex);
  rgbColors1.push(rgb);
}

// Решение,которое было до деструктиразации
// for (const color of colors) {
//   hexColors1.push(color.hex);
//   rgbColors1.push(color.rgb);
// }

console.log(hexColors1);
console.log(rgbColors1);

//----------------------------------------------------------------------
//3-25
//Мы получили прогноз погоды на два дня, с минимальными и максимальными
// температурами, а также необязательными иконками.Замени объявления всех
// переменных одной операцией деструктуризации свойств объекта forecast.
// Задай значение по умолчанию для иконок, переменных todayIcon и tomorrowIcon
// - строку "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg".

const forecast1 = {
  today: {
    low: 28,
    high: 32,
    icon: "https://www.flaticon.com/svg/static/icons/svg/861/861059.svg",
  },
  tomorrow: {
    low: 27,
    high: 31,
  },
};

// Деструктиризация
const {
  today: {
    low: lowToday,
    high: highToday1,
    icon: todayIcon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg",
  },
  tomorrow: {
    low: lowTomorrow,
    high: highTomorrow1,
    icon: tomorrowIcon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg",
  },
} = forecast1;

// Решение,которое было до деструктиразации
// const highToday1 = forecast.today.high;
// const lowToday = forecast.today.low;
// const todayIcon = forecast.today.icon;

// const highTomorrow1 = forecast.tomorrow.high;
// const lowTomorrow = forecast.tomorrow.low;
// const tomorrowIcon = forecast.tomorrow.icon;

//----------------------------------------------------------------------
//3-26
// Функция calculateMeanTemperature(forecast) принимает один параметр
// forecast - объект температур на два дня следующего формата.
// {
//   today: { low: 10, high: 20 },
//   tomorrow: { low: 20, high: 30 }
// }
// Замени объявления переменных todayLow, todayHigh, tomorrowLow и
// tomorrowHigh одной операцией деструктуризации свойств объекта forecast.

function calculateMeanTemperature(forecast) {
  // Деструктиризация
  const {
    today: { low: todayLow, high: todayHigh },
    tomorrow: { low: tomorrowLow, high: tomorrowHigh },
  } = forecast;

  // Решение,которое было до деструктиразации
  //   const todayLow = forecast.today.low;
  //   const todayHigh = forecast.today.high;
  //   const tomorrowLow = forecast.tomorrow.low;
  //   const tomorrowHigh = forecast.tomorrow.high;

  return (todayLow + todayHigh + tomorrowLow + tomorrowHigh) / 4;
}

//----------------------------------------------------------------------
//3-27 (spread  - распыление)
// В переменной scores хранится массив результатов тестирования. Используя
// распыление и методы Math.max() и Math.min() дополни код так, чтобы в
// переменной bestScore был самый высокий балл, а в worstScore самый низкий.

const scores = [89, 64, 42, 17, 93, 51, 26];

const bestScore = Math.max(...scores);
const worstScore = Math.min(...scores);

//----------------------------------------------------------------------
//3-28
// В переменных firstGroupScores, secondGroupScores и thirdGroupScores
// хранятся результаты тестирования отдельных групп.Используя распыление
// дополни код так, чтобы:

// - В переменной allScores хранился массив всех результатов от первой до
// третьей группы.
// - В переменной bestScore был самый высокий общий балл.
// - В переменной worstScore был самый низкий общий балл.

const firstGroupScores = [64, 42, 93];
const secondGroupScores = [89, 14, 51, 26];
const thirdGroupScores = [29, 47, 18, 97, 81];

const allScores = [
  ...firstGroupScores,
  ...secondGroupScores,
  ...thirdGroupScores,
];
const bestScore1 = Math.max(...allScores);
const worstScore1 = Math.min(...allScores);

//----------------------------------------------------------------------
//3-29
// В конструкторе можно создавать новые тесты, для которых есть настройки
// по умолчанию которые хранятся в переменной defaultSettings.Во время
// создания теста, все или часть настроек можно переопределить, они
// хранятся в переменной overrideSettings.

// Для того чтобы получить финальные настройки теста, необходимо взять
// настройки по умолчанию и поверх них применить переопределённые настройки.
// Дополни код так, чтобы в переменной finalSettings получился объект
// финальных настроек теста.

const defaultSettings = {
  theme: "light",
  public: true,
  withPassword: false,
  minNumberOfQuestions: 10,
  timePerQuestion: 60,
};
const overrideSettings = {
  public: false,
  withPassword: true,
  timePerQuestion: 30,
};

const finalSettings = { ...defaultSettings, ...overrideSettings };

//----------------------------------------------------------------------
//3-30
// Напиши функцию makeTask(data) которая принимает один параметр data -
// объект со следующими свойствами.
// text - текст задачи.
// category - категория задачи.
// priority - приоритет задачи.
// Функция должна составить и вернуть новый объект задачи, не изменяя
// напрямую параметр data.В новом объекте должно быть свойство completed,
// значение которого хранится в одноимённой локальной переменной.
// В параметре data гарантированно будет только свойство text, а остальные
// два, category и priority, могут отсутствовать.Тогда, в новом объекте
// задачи, в свойствах category и priority должны быть значения по умолчанию,
// хранящиеся в одноимённых локальных переменных.

function makeTask(data) {
  const completed = false;
  const category = "General";
  const priority = "Normal";

  return { category, completed, priority, ...data };
}

console.log(
  makeTask({
    category: "Homemade",
    priority: "Low",
    text: "Take out the trash",
  })
);
console.log(makeTask({ category: "Finance", text: "Take interest" }));
console.log(makeTask({ priority: "Low", text: "Choose shampoo" }));
console.log(makeTask({ text: "Buy bread" }));
console.log(makeTask({}));

//----------------------------------------------------------------------
//3-31
//Используя операцию rest дополни код функции add() так, чтобы она
// принимала любое количество аргументов, считала и возвращала их сумму.

function add(...args) {
  let total = 0;
  for (let num of args) {
    total += num;
  }
  return total;
}

console.log(add(15, 27));
console.log(add(12, 4, 11, 48));
console.log(add(32, 6, 13, 19, 8));
console.log(add(74, 11, 62, 46, 12, 36));

//----------------------------------------------------------------------
//3-32
// Функция addOverNum() считает сумму всех аргументов. Измени параметры и
// тело функции addOverNum() так, чтобы она считала сумму только тех
// аргументов, которые больше чем заданное число.Это число должно быть
// первым параметром функции.

function addOverNum(firstNumber, ...args1) {
  let total1 = 0;

  for (const arg of args1) {
    if (firstNumber < arg) {
      total1 += arg;
    }
  }

  return total1;
}

console.log(addOverNum(50, 15, 27));
console.log(addOverNum(10, 12, 4, 11, 48, 10, 8));
console.log(addOverNum(15, 32, 6, 13, 19, 8));
console.log(addOverNum(20, 74, 11, 62, 46, 12, 36));

//----------------------------------------------------------------------
//3-33
// Функция findMatches() принимает произвольное количество аргументов.
// Первым аргументом всегда будет массив чисел, а остальные аргументы
// будут просто числами.

// Дополни код функции так, чтобы она возвращала новый массив matches,
// в котором будут только те аргументы, начиная со второго, которые есть
// в массиве первого аргумента.

// Например, findMatches([1, 2, 3, 4, 5], 1, 8, 2, 7) должна вернуть
// массив[1, 2], потому что только они есть в массиве первого аргумента.

function findMatches(num, ...args2) {
  const matches = [];

  for (const arg2 of args2) {
    if (num.includes(arg2)) {
      matches.push(arg2);
    }
  }

  return matches;
}

console.log(findMatches([1, 2, 3, 4, 5], 1, 8, 2, 7));
console.log(findMatches([4, 89, 17, 36, 2], 8, 17, 89, 27, 2));
console.log(findMatches([10, 24, 41, 6, 9, 19], 24, 11, 9, 23, 41));
console.log(findMatches([63, 11, 8, 29], 4, 7, 16));

//----------------------------------------------------------------------
//3-34
// Добавь объекту bookShelf ещё два метода, которые пока что будут
// возвращать просто строки по аналогии с getBooks() и addBook(bookName).

// Метод removeBook(bookName) будет удалять книгу по имени. Возвращает
// строку "Deleting book <имя книги>", где < имя книги > это значение
// параметра bookName.

// Метод updateBook(oldName, newName) будет обновлять название книги на
// новое.Возвращает строку "Updating book <старое имя> to <новое имя>",
// где < старое имя > и < новое имя > это значения параметров oldName и
// newName соотвественно.

const bookShelf = {
  books: ["The last kingdom", "The guardian of dreams"],
  getBooks() {
    return "Returning all books";
  },
  addBook(bookName) {
    return `Adding book ${bookName}`;
  },
  removeBook(bookName) {
    return `Deleting book ${bookName}`;
  },
  updateBook(oldName, newName) {
    return `Updating book ${oldName} to ${newName}`;
  },
};

console.log(bookShelf.getBooks());
console.log(bookShelf.addBook("Haze"));
console.log(bookShelf.removeBook("Red sunset"));
console.log(bookShelf.updateBook("Sands of dune", "Dune"));

//----------------------------------------------------------------------
//3-35
// Дополни метод updateBook(oldName, newName) так, чтобы он изменял
// название книги с oldName на newName в свойстве books.
// Используй indexOf() для того, чтобы найти нужный элемент массива,
// и splice() для того чтобы заменить этот элемент
const bookShelf1 = {
  books: ["The last kingdom", "Haze", "The guardian of dreams"],
  updateBook(oldName, newName) {
    let bookIndex = this.books.indexOf(oldName);
    let newBook = this.books.splice(bookIndex, 1, newName);
  },
};

//----------------------------------------------------------------------
//3-36
// К нам обратилась владелица лавки зелий «У старой жабы» и заказала
// программу для ведения инвентаря - добавления, удаления, поиска и
// обновления зелий.Добавь объекту atTheOldToad свойство potions,
// значением которого сделай пустой массив.

const atTheOldToad = {
  potions: [],
};

// console.log(atTheOldToad);

//----------------------------------------------------------------------
//3-37
// Добавь объекту atTheOldToad метод getPotions(), который просто возвращает
// значение свойства potions.

const atTheOldToad1 = {
  potions: ["Speed potion", "Dragon breath", "Stone skin"],
  getPotions(potions) {
    return this.potions;
  },
};

//----------------------------------------------------------------------
//3-38
// Дополни метод addPotion(potionName) так, чтобы он добавлял зелье
// potionName в конец массива зелий в свойстве potions.

const atTheOldToad2 = {
  potions1: ["Speed potion", "Dragon breath", "Stone skin"],
  addPotion(potionName) {
    // Change code below this line
    this.potions1.push(potionName);
    // Change code above this line
  },
};

//----------------------------------------------------------------------
//3-39
// Дополни метод removePotion(potionName) так, чтобы он удалял зелье
// potionName из массива зелий в свойстве potions.

const atTheOldToad4 = {
  potions: ["Speed potion", "Dragon breath", "Stone skin"],
  removePotion(potionName) {
    // Change code below this line
    let rem = this.potions.indexOf(potionName);
    this.potions.splice(rem, 1);
    // Change code above this line
  },
};
//----------------------------------------------------------------------
//3-40
// Дополни метод updatePotionName(oldName, newName) так, чтобы он обновлял
// название зелья с oldName на newName, в массиве зелий в свойстве potions.
const atTheOldToad5 = {
  potions: ["Speed potion", "Dragon breath", "Stone skin"],
  updatePotionName(oldName, newName) {
    // Change code below this line
    let nameIndex = this.potions.indexOf(oldName);
    let newPotion = this.potions.splice(nameIndex, 1, newName);
    // Change code above this line
  },
};

//----------------------------------------------------------------------
//3-41
// Заказчица хочет чтобы каждое зелье было представлено не только именем,
// но и ценой, а в будущем может быть и другими характеристиками.Поэтому
// теперь в свойстве potions будет храниться массив объектов со следующими
// свойствами.

// {
//   name: "Dragon breath",
//   price: 700
// }

// Выполни рефакторинг методов объекта atTheOldToad так, чтобы они работали
// не с массивом строк, а с массивом объектов.

// getPotions() - метод для получения всех зелий. Возвращает значение
// свойства potions.
// addPotion(newPotion) - добавляет зелье newPotion (уже объект) в массив
// в свойстве potions.
// removePotion(potionName) - удаляет объект зелья с именем potionName из
// массива в свойстве potions.
// updatePotionName(oldName, newName) - обновляет свойство name
// объекта - зелья с названием oldName на newName в массиве potions.

const atTheOldToad6 = {
  potions: [
    { name: "Speed potion", price: 460 },
    { name: "Dragon breath", price: 780 },
    { name: "Stone skin", price: 520 },
  ],

  //После рефакторинга
  getPotions() {
    return this.potions;
  },

  addPotion(potionName) {
    this.potions.push(potionName);
  },
  removePotion(potionName) {
    for (let i = 0; i < this.potions.length; i += 1) {
      if (this.potions[i].name === potionName) {
        this.potions.splice(i, 1);
      }
    }
  },
  updatePotionName1(oldName, newName) {
    let prov = false;
    for (let i = 0; i < this.potions.length; i += 1) {
      if (this.potions[i].name === oldName) {
        prov = true;
        this.potions[i].name = newName;
      }
    }
    if (!prov) {
      return `Potion ${oldName} is not in inventory!`;
    }
  },

  // До рефакторинга
  // getPotions() {
  //   return this.potions;
  // },
  // addPotion(potionName) {
  // if (this.potions.includes(potionName)) {
  //   return `Potion ${potionName} is already equipped!`;
  // }

  // this.potions.push(potionName);
  //   },
  // removePotion(potionName) {
  //   const potionIndex = this.potions.indexOf(potionName);

  // //   if (potionIndex === -1) {
  // //     return `Potion ${potionName} is not in inventory!`;
  // //   }

  //   this.potions.splice(potionIndex, 1);
  // },
  // updatePotionName1(oldName, newName) {
  //   const potionIndex = this.potions.indexOf(oldName);

  // //   if (potionIndex === -1) {
  // //     return `Potion ${oldName} is not in inventory!`;
  // //   }

  //   this.potions.splice(potionIndex, 1, newName);
  // },
};







//============================================================================
// const bookShelf = {
//   books: ["Последнее королевство"],
//   getBooks() {
//     return this.books;
//   },
//   addBook(bookName) {
//     this.books.push(bookName);
//   },
//   removeBook(bookName) {
//     const bookIndex = this.books.indexOf(bookName);
//     this.books.splice(bookIndex, 1);
//   },
// };

// console.log(bookShelf.getBooks()); // []
// bookShelf.addBook("Мгла");
// bookShelf.addBook("Страж снов");
// console.log(bookShelf.getBooks()); // ["Последнее королевство", "Мгла", "Страж снов"]
// bookShelf.removeBook("Мгла");
// console.log(bookShelf.getBooks()); // ["Последнее королевство", "Страж снов"]

//===============================================================================

//  Создать объект товара со свойствами name, price,
// quantity и методами, которые показывают их текущее значение
// и методами, что изменяют их значения.

const product = {
  name: "prod",
  price: 0,
  quantity: 0,

  showName() {
    console.log(this.name);
  },

  showPrice() {
    console.log(this.price);
  },

  showQuantity() {
    console.log(this.quantity);
  },

  changeName(value) {
    return (this.name = value);
  },
  changePrice(value) {
    return (this.price = value);
  },

  changeQuantity(value) {
    return (this.quantity = value);
  },
  //   // deleteProp(propName){
  //   //   delete this[propName]
  //   // }

  updateQuantity(value, isCost) {
    // 1 if..else
    // if (isCost) {
    //   // уменьшаем
    //   return (this.quantity -= value)
    // } else {
    //   return (this.quantity += value)
    // }
    // // 2 with Guard CLause
    // if (isCost) return (this.quantity -= value)
    // return (this.quantity += value)
    // 3 by Ternary
    isCost ? (this.quantity -= value) : (this.quantity += value);
  },
};
console.log(product);
// product.deleteProp('name')

//проверка выполнения
product.showName();
product.showPrice();
product.showQuantity();

product.changeName("Peach");
product.changePrice(55);
product.changeQuantity(3);
console.log(product);
product.showName();

product.showQuantity(); // до уменьшения веса

product.updateQuantity(1, true);
product.showQuantity(); // после

product.updateQuantity(0.5, false);
product.showQuantity(); // после
//------------------------------------------------------------------
// // Добавь к объекту product метод, который высчитывает
// // стоимость общего количества текущего товара

// product.getTotalPrice = function () {
//   return this.price * this.quantity
// }

// console.log(product.getTotalPrice())
//-------------------------------------------------------------------
// // Записать в переменную totalPrice общую стоимость
// // всех товаров в массиве products
// // ============================
// const products = [
//   { name: 'Grape', price: 80, quantity: 2 },
//   { name: 'Banana', price: 30, quantity: 5 },
//   { name: 'Kiwi', price: 100, quantity: 1.5 },
// ]

// function getTotalPrice(arr) {
//   let totalPrice = 0

//   for (let i = 0; i < arr.length; i++) {
//     console.log(products[i])
//     totalPrice += products[i].price * products[i].quantity
//   }
//   console.log('totalPrice', totalPrice)
// }
// getTotalPrice(products)
//-----------------------------------------------------------------
// Создать функцию, которая принимает массив продуктов,
// название товара и его количество
// и выводит его стоимость, если товара достаточно или сообщает о том,
// что товара нет на складе в указанном количестве
// Написать функцию тремя способами (Expression, Declaration & Arrow)
// ============================
const allProducts = [
  { name: "bread", price: 20, quantity: 100 },
  { name: "milk 2,5%", price: 30, quantity: 24 },
  { name: "cheese", price: 300, quantity: 10 },
  { name: "chorizo", price: 560, quantity: 4 },
  { name: "lemon", price: 60, quantity: 9 },
  { name: "lavazza", price: 250, quantity: 24 },
];
// console.log(allProducts)

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
    const { name, quantity, price } = product;
    // if (name === prod) {
    //   // console.log(`${prod} есть на складе`)
    //   return quantity >= count
    //     ? console.log(`${prod} можете купить за ${price * count} монет`)
    //     : console.log(`${prod} нет в достаточном количестве`)
    // }
    // ==================
  }
  console.log(`${prod} нет такого на складе`);
}
getResponse(allProducts, "lavazza", 24);
