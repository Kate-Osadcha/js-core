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
// console.log(countTotalSalary({})); // 0
// console.log(countTotalSalary({ mango: 100, poly: 150, alfred: 80 })); // 330
// console.log(countTotalSalary({ kiwi: 200, poly: 50, ajax: 150 })); // 400

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

// console.log(hexColors);
// console.log(rgbColors);

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
// console.log(getProductPrice("Radar"));
// console.log(getProductPrice("Grip"));
// console.log(getProductPrice("Scanner"));
// console.log(getProductPrice("Droid"));
// console.log(getProductPrice("Engine"));

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

// console.log(getAllPropValues("name"));
// console.log(getAllPropValues("quantity"));
// console.log(getAllPropValues("price"));
// console.log(getAllPropValues("category"));

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

// console.log(calculateTotalPrice1("Blaster"));
// console.log(calculateTotalPrice1("Radar"));
// console.log(calculateTotalPrice1("Droid"));
// console.log(calculateTotalPrice1("Grip"));
// console.log(calculateTotalPrice1("Scanner"));

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
// console.log(meanTemperature1);

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
// console.log(meanTemperature);

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

// console.log(hexColors1);
// console.log(rgbColors1);

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

// console.log(
//   makeTask({
//     category: "Homemade",
//     priority: "Low",
//     text: "Take out the trash",
//   })
// );
// console.log(makeTask({ category: "Finance", text: "Take interest" }));
// console.log(makeTask({ priority: "Low", text: "Choose shampoo" }));
// console.log(makeTask({ text: "Buy bread" }));
// console.log(makeTask({}));

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

// console.log(add(15, 27));
// console.log(add(12, 4, 11, 48));
// console.log(add(32, 6, 13, 19, 8));
// console.log(add(74, 11, 62, 46, 12, 36));

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

// console.log(addOverNum(50, 15, 27));
// console.log(addOverNum(10, 12, 4, 11, 48, 10, 8));
// console.log(addOverNum(15, 32, 6, 13, 19, 8));
// console.log(addOverNum(20, 74, 11, 62, 46, 12, 36));

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

// console.log(findMatches([1, 2, 3, 4, 5], 1, 8, 2, 7));
// console.log(findMatches([4, 89, 17, 36, 2], 8, 17, 89, 27, 2));
// console.log(findMatches([10, 24, 41, 6, 9, 19], 24, 11, 9, 23, 41));
// console.log(findMatches([63, 11, 8, 29], 4, 7, 16));

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

// console.log(bookShelf.getBooks());
// console.log(bookShelf.addBook("Haze"));
// console.log(bookShelf.removeBook("Red sunset"));
// console.log(bookShelf.updateBook("Sands of dune", "Dune"));

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
    // console.log(this.name);
  },

  showPrice() {
    // console.log(this.price);
  },

  showQuantity() {
    // console.log(this.quantity);
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
// console.log(product);
// product.deleteProp('name')

//проверка выполнения
product.showName();
product.showPrice();
product.showQuantity();

product.changeName("Peach");
product.changePrice(55);
product.changeQuantity(3);
// console.log(product);
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
  // console.log(`${prod} нет такого на складе`);
}
getResponse(allProducts, "lavazza", 24);

// =============================================================================
// МОДУЛЬ 4
//----------------------------------------------------------------------
//4-1
// Дополни код так, чтобы в переменной result был результат
// выполнения функции makePizza, а в переменной pointer была
// ссылка на функцию makePizza.

function makePizza() {
  return "Ваша пицца готовится, ожидайте.";
}
const result = makePizza(null);
const pointer = makePizza;
// console.log(result);
// console.log(pointer);

//----------------------------------------------------------------------
//4-2
// Дополни функцию makeMessage так, чтобы она ожидала вторым
// параметром(параметр callback) колбэк - функцию и возвращала
// ее вызов.Функция deliverPizza или makePizza будет
// передаваться как колбэк и ожидать аргументом имя готовой
// доставляемой пиццы.

function deliverPizza(pizzaName) {
  return `Доставляем пиццу ${pizzaName}.`;
}

function makePizza1(pizzaName) {
  return `Пицца ${pizzaName} готовится, ожидайте...`;
}

function makeMessage(pizzaName, callback) {
  return callback(pizzaName);
}

makeMessage("Роял гранд", makePizza1);
makeMessage("Ультрасыр", deliverPizza);

// console.log(makeMessage("Роял гранд", makePizza1));
// console.log(makeMessage("Ультрасыр", deliverPizza));

//----------------------------------------------------------------------
//4-3
// Дополни второй вызов функции makePizza(pizzaName,
// callback), передав вторым аргументом инлайн колбэк -
// функцию eatPizza(pizzaName), которая логирует строку
// 'Едим пиццу <имя пиццы>'.

function makePizza2(pizzaName, callback) {
  // console.log(`Пицца ${pizzaName} готовится, ожидайте...`);
  callback(pizzaName);
}

makePizza2("Роял гранд", function deliverPizza(pizzaName) {
  // console.log(`Доставляем пиццу ${pizzaName}.`);
});

makePizza2("Ультрасыр", function eatPizza(pizzaName) {
  // console.log("Едим пиццу <имя пиццы>");
});

//----------------------------------------------------------------------
//4-4
// Необходимо написать логику обработки заказа пиццы. Выполни рефакторинг метода order так, чтобы он принимал вторым и третим параметрами два колбэка onSuccess и onError.

// Если в свойстве pizzas нет пиццы с названием из параметра
// pizzaName, метод order должен возвращать результат вызова
// колбэка onError, передавая ему аргументом строку
// 'В ассортименте нет пиццы с названием <имя пиццы>.'
// Если в свойстве pizzas есть пицца с названием из
// параметра pizzaName, метод order должен возвращать
// результат вызова колбэка onSuccess, передавая ему
// аргументом имя заказанной пиццы.
// После объявления объекта pizzaPalace мы добавили колбэки
// и вызовы методов.Пожалуйста ничего там не меняй.

const pizzaPalace = {
  pizzas: ["Ультрасыр", "Аль Копчино", "Четыре нарезона"],
  order(pizzaName, onSuccess, onError) {
    for (let pizza of this.pizzas) {
      if (pizza === pizzaName) {
        return onSuccess(pizzaName);
      }
    }
    return onError(`В ассортименте нет пиццы с названием ${pizzaName}.`);
  },
};

// Колбэк для onError
function onOrderError(error) {
  return `Ошибка! ${error}`;
}

// Вызовы метода с колбэками
pizzaPalace.order("Аль Копчино", makePizza, onOrderError);
pizzaPalace.order("Четыре нарезона", makePizza, onOrderError);
pizzaPalace.order("Биг майк", makePizza, onOrderError);
pizzaPalace.order("Венская", makePizza, onOrderError);

// console.log(pizzaPalace.order("Аль Копчино", makePizza, onOrderError));
// console.log(pizzaPalace.order("Четыре нарезона", makePizza, onOrderError));
// console.log(pizzaPalace.order("Биг майк", makePizza, onOrderError));
// console.log(pizzaPalace.order("Венская", makePizza, onOrderError));

//----------------------------------------------------------------------
//4-5
// Выполни рефакторинг методов объекта pizzaPalace, расставив
// отсутствующие this в местах обращения к свойствам и
// методам объекта.

const pizzaPalace4 = {
  pizzas: ["Ультрасыр", "Аль Копчино", "Четыре нарезона"],
  // Пиши код ниже этой строки
  checkPizza(pizzaName) {
    return this.pizzas.includes(pizzaName);
  },
  order(pizzaName) {
    const isPizzaAvailable = this.checkPizza(pizzaName);

    if (!isPizzaAvailable) {
      return `В ассортименте нет пиццы с названием «${pizzaName}».`;
    }

    return `Заказ принят, готовим пиццу «${pizzaName}».`;
  },
  // Пиши код выше этой строки
};

// console.log(pizzaPalace4.order("Аль Копчино"));
// console.log(pizzaPalace4.order("Четыре нарезона"));
// console.log(pizzaPalace4.order("Биг майк"));
// console.log(pizzaPalace4.order("Венская"));

//----------------------------------------------------------------------
//4-6
// Перед увольнением разработчик сломал исходный код
// управления аккаунтами пользователей нашего сервиса
// доставки еды.Выполни рефакторинг методов объекта
// customer, расставив отсутствующие this при обращении к
// свойствам объекта.

// После объявления объекта мы добавили вызовы методов в
// той последовательности, в которой твой код будут
// проверять тесты.Пожалуйста ничего там не меняй.

const customer = {
  username: "Mango",
  balance: 24000,
  discount: 0.1,
  orders: ["Burger", "Pizza", "Salad"],
  // Пиши код ниже этой строки
  getBalance() {
    return this.balance;
  },
  getDiscount() {
    return this.discount;
  },
  setDiscount(value) {
    this.discount = value;
  },
  getOrders() {
    return this.orders;
  },
  addOrder(cost, order) {
    this.balance -= cost - cost * this.discount;
    this.orders.push(order);
  },
  // Пиши код выше этой строки
};

// customer.setDiscount(0.15);
// console.log(customer.getDiscount()); // 0.15
// customer.addOrder(5000, 'Steak');
// console.log(customer.getBalance()); // 19750
// console.log(customer.getOrders()); // ['Burger', 'Pizza', 'Salad', 'Steak']

//----------------------------------------------------------------------
//4-7
// Сервису приготовления и доставки еды требуется функция
// генерации сообщений о статусе заказа.

// Дополни функцию composeMessage(position) так, чтобы она
// возвращала строку в формате 'Готовим <блюдо> для <почта>.
// Ваш заказ < позиция > -й в очереди.' Позиция это значение
// параметра position - позиция элемента в массиве(на
// единицу больше чем индекс).

// Не объявляй дополнительные параметры функции
// composeMessage(position).
// Используй call для вызова функции в контексте одного
// объекта - заказа.
// Используй this в теле функции для доступа к свойствам
// объекта - заказа в контексте которого она была вызывана.
// Дополни код так, чтобы в переменной messages получился
// массив сообщений о статусе заказов из массива orders с
// помощью цикла for.

const orders = [
  { email: "solomon@topmail.ua", dish: "Burger" },
  { email: "artemis@coldmail.net", dish: "Pizza" },
  { email: "jacob@mail.com", dish: "Taco" },
];

// Пиши код ниже этой строки
function composeMessage(position) {
  return `Готовим ${this.dish} для ${this.email}. Ваш заказ ${position}-й в очереди.`;
}

const messages = [];
for (let i = 0; i < orders.length; i += 1) {
  messages.push(composeMessage.call(orders[i], i + 1));
}
// console.log(messages);

//----------------------------------------------------------------------
//4-8
// Выполни рефакторинг кода так, чтобы функция
// composeMessage(position) вызывалась методом apply.

const orders1 = [
  { email: "solomon@topmail.ua", dish: "Burger" },
  { email: "artemis@coldmail.net", dish: "Pizza" },
  { email: "jacob@mail.com", dish: "Taco" },
];

// Пиши код ниже этой строки
function composeMessage1(position) {
  return `Готовим ${this.dish} для ${this.email}. Ваш заказ ${position}-й в очереди.`;
}

const messages1 = [];
for (let i = 0; i < orders1.length; i++) {
  const msg = composeMessage1.apply(orders1[i], [i + 1]);
  messages1.push(msg);
}

//----------------------------------------------------------------------
//4-9
// Функция composeMessage(customerName) создаёт
// приветственные сообщения для ресторанов.Дополни код так,
// чтобы в переменных pizzaPalaceComposer и burgerShackComposer
// были её копии с привязанным контекстом к соответствующим
// объектам.

const pizzaPalace5 = {
  company: "Pizza Palace",
};

const burgerShack = {
  company: "Burger Shack",
};

function composeMessage5(customerName) {
  return `${customerName}, всегда рады вас видеть в «${this.company}».`;
}
// Пиши код ниже этой строки

const pizzaPalaceComposer = composeMessage5.bind(pizzaPalace5);
const pizzaPalaceMessage = pizzaPalaceComposer("Манго");

const burgerShackComposer = composeMessage5.bind(burgerShack);
const burgerShackMessage = burgerShackComposer("Поли");

//----------------------------------------------------------------------
//4-10
// Сервису рассылки электронной почты необходимо добавить
// логирование действий для сбора статистики.Функция
// logAndInvokeAction(email, action) ожидает почту и
// действие которое нужно выполнить - ссылку на метод
// объекта service.Сбор статистики симулируется
// логированием строки.Разберись и дополни код так,
// чтобы он работал верно.

const service = {
  mailingList: ["mango@mail.com", "poly@hotmail.de", "ajax@jmail.net"],
  subscribe(email) {
    this.mailingList.push(email);
    return `Почта ${email} добавлена в рассылку.`;
  },
  unsubscribe(email) {
    this.mailingList = this.mailingList.filter((e) => e !== email);
    return `Почта ${email} удалена из рассылки.`;
  },
};

function logAndInvokeAction(email, action) {
  console.log(`Выполняем действие с ${email}.`);
  return action(email);
}

const firstInvoke = logAndInvokeAction(
  "kiwi@mail.uk",
  service.subscribe.bind(service)
);
console.log(firstInvoke);
// Почта kiwi@mail.uk добавлена в рассылку.

console.log(service.mailingList);
/* ['mango@mail.com', 
    'poly@hotmail.de', 
    'ajax@jmail.net', 
    'kiwi@mail.uk']*/
const secondInvoke = logAndInvokeAction(
  "poly@hotmail.de",
  service.unsubscribe.bind(service)
);
console.log(secondInvoke);
// Почта poly@hotmail.de удалена из рассылки.

console.log(service.mailingList); // ['mango@mail.com', 'ajax@jmail.net', 'kiwi@mail.uk']
//==============================================================
//МОДУЛЬ 5
//----------------------------------------------------------------------
//5-1
// Измени код так, чтобы объект parent стал прототипом для
// объекта в переменной сhild.

const parent = {
  name: "Stacey",
  surname: "Moore",
  age: 54,
  heritage: "Irish",
};

const child = Object.create(parent);

child.name = "Jason";
child.age = 27;

console.log(parent.hasOwnProperty("surname"));
console.log(parent.hasOwnProperty("heritage"));
console.log(child.hasOwnProperty("name"));
console.log(child.name);
console.log(child.hasOwnProperty("age"));
console.log(child.age);
console.log(child.hasOwnProperty("surname"));
console.log(child.surname);
console.log(child.hasOwnProperty("heritage"));
console.log(child.heritage);
console.log(parent.isPrototypeOf(child));

//----------------------------------------------------------------------
//5-2
// Измени код, построив цепочку прототипов так, чтобы объект
// ancestor был прототипом для parent, а тот в свою очередь
// был прототипом для child

const ancestor = {
  name: "Paul",
  age: 83,
  surname: "Dawson",
  heritage: "Irish",
};

const parent1 = Object.create(ancestor);
parent1.name = "Stacey";
parent1.surname = "Moore";
parent1.age = 54;

const child1 = Object.create(parent1);
child1.name = "Jason";
child1.age = 27;

console.log(parent1.isPrototypeOf(child1));
console.log(parent1.surname);
console.log(parent1.heritage);
console.log(parent1.hasOwnProperty("surname"));
console.log(parent1.hasOwnProperty("heritage"));
console.log(ancestor.isPrototypeOf(parent1));
console.log(child1.hasOwnProperty("surname"));
console.log(child1.surname);
console.log(child1.heritage);
console.log(child1.hasOwnProperty("heritage"));
console.log(ancestor.heritage);
console.log(ancestor.hasOwnProperty("surname"));
console.log(ancestor.hasOwnProperty("heritage"));
console.log(ancestor.surname);

//----------------------------------------------------------------------
//5-3
// Объяви функцию-конструктор Car которая принимает три
// параметра:
// brand - марка автомобиля.
// model - модель автомобиля.
// price - цена автомобиля.
// Функция Car должна создавать объект с одноимёнными
// свойствами brand, model и price, значениями которых
// должны быть переданные аргументы во время её вызова с
// оператором new.

// function Car(brand, model, price) {
//   this.brand = brand;
//   this.model = model;
//   this.price = price;
// }

// console.log(new Car("Audi", "Q3", 36000));
// console.log(new Car("BMW", "X5", 58900));
// console.log(new Car("Nissan", "Murano", 31700));

//----------------------------------------------------------------------
//5-4
// Выполни рефакторинг функции-конструктора Car так, чтобы
// она принимала один параметр - объект со свойсвами brand,
// model и price.Деструктуризируй объект в сигнатуре(подписи)
// функции.

function Car1({ brand, model, price }) {
  this.brand = brand;
  this.model = model;
  this.price = price;
}

console.log(new Car1({ brand: "Audi", model: "Q3", price: 36000 }));
console.log(new Car1({ brand: "BMW", model: "X5", price: 58900 }));
console.log(new Car1({ brand: "Nissan", model: "Murano", price: 31700 }));

//----------------------------------------------------------------------
//5-5
// Добавь в свойство prototype функции-конструктора Car два метода:

// getPrice() - возвращает значение свойства price из объекта который его будет
// вызывать.
// changePrice(newPrice) - обновляет значение свойства price у объекта который
// его будет вызывать на newPrice.

function Car2({ brand, model, price }) {
  this.brand = brand;
  this.model = model;
  this.price = price;
}

Car2.prototype.getPrice = function () {
  return this.price;
};

Car2.prototype.changePrice = function (newPrice) {
  this.price = newPrice;
};

console.log(Car2.prototype.hasOwnProperty("getPrice"));
console.log(Car2.prototype.getPrice);
console.log(Car2.prototype.hasOwnProperty("changePrice"));
console.log(new Car2({ brand: "Audi", model: "Q3", price: 36000 }));
console.log(new Car2({ brand: "Audi", model: "Q3", price: 36000 }));

//----------------------------------------------------------------------
//5-6
// С помощью Function Declaration напиши функцию-конструктор Storage, которая
// будет создавать объекты для управления складом товаров.Функция ожидает только
// один аргумент - начальный массив товаров, который записывается на создаваемый
// объект в свойство items.

// Добавь методы на прототип:

// getItems() - возвращает массив текущих товаров в свойстве items объекта,
// который вызывает этот метод.
// addItem(newItem) - принимает новый товар newItem и добавляет его в массив
// товаров в свойстве items объекта, который вызывает этот метод.
// removeItem(item) - принимает товар item и удаляет его из массива товаров в
// свойстве items объекта, который вызывает этот метод.
// Под комментарием мы добавили инициализацию экземпляра и вызовы методов в той
// последовательности, в которой твой код будут проверять тесты.Пожалуйста ничего
// там не меняй.

function Storage(items) {
  this.items = items;
}

Storage.prototype.getItems = function () {
  return this.items;
};
Storage.prototype.addItem = function (newItem) {
  return this.items.push(newItem);
};
Storage.prototype.removeItem = function (item) {
  this.items.splice(this.items.indexOf(item), 1);
};
// Пиши код выше этой строки
const storage = new Storage(["Нанитоиды", "Пролонгер", "Антигравитатор"]);
console.log(storage.getItems()); // ["Нанитоиды", "Пролонгер", "Антигравитатор"]
storage.addItem("Дроид");
console.log(storage.getItems()); // ["Нанитоиды", "Пролонгер", "Антигравитатор", "Дроид"]
storage.removeItem("Пролонгер");
console.log(storage.getItems()); // ["Нанитоиды", "Антигравитатор", "Дроид"]

//----------------------------------------------------------------------
//5-7
// С помощью Function Declaration напиши функцию-конструктор StringBuilder,
// которая принимает один параметр baseValue - произвольную строку, которая
// записывается на создаваемый объект в свойство value.

// Добавь методы на прототип:

// getValue() - возвращает текущее значение свойства value.
// padEnd(str) - получает парметр str (строку) и добавляет её в конец значения
// свойства value объекта, который вызывает этот метод.
// padStart(str) - получает парметр str (строку) и добавляет её в начало
// значения свойства value объекта, который вызывает этот метод.
// padBoth(str) - получает парметр str (строку) и добавляет её в начало и в
// конец значения свойства value объекта, который вызывает этот метод.

function StringBuilder(baseValue) {
  this.value = baseValue;
}

StringBuilder.prototype.getValue = function () {
  return this.value;
};
StringBuilder.prototype.padEnd = function (str) {
  this.value = this.value + str;
};

StringBuilder.prototype.padStart = function (str) {
  this.value = str + this.value;
};
StringBuilder.prototype.padBoth = function (str) {
  this.value = str + this.value + str;
};
// Пиши код выше этой строки
const builder = new StringBuilder(".");
console.log(builder.getValue()); // '.'
builder.padStart("^");
console.log(builder.getValue()); // '^.'
builder.padEnd("^");
console.log(builder.getValue()); // '^.^'
builder.padBoth("=");
console.log(builder.getValue()); // '=^.^='

//----------------------------------------------------------------------
//5-8
// Используя ключевое слово class объяви класс Car с пустым телом.
// class Car {}

//----------------------------------------------------------------------
//5-9
// Выполни рефакторинг кода, заменив функцию-конструктор Car на класс
// с методом - конструктором, принимающим объект.

// До рефакторинга
function Car({ brand, model, price }) {
  this.brand = brand;
  this.model = model;
  this.price = price;
}
// После рефакторинга
// class Car {
//   constructor({ brand, model, price }) {
//     this.brand = brand;
//     this.model = model;
//     this.price = price;
//   }
// }

//----------------------------------------------------------------------
//5-10
// Добавь классу Car две метода.

// getPrice() - возвращает значение свойства price из объекта который его
// будет вызывать.
// changePrice(newPrice) - обновляет значение свойства price у объекта
// который его будет вызывать на newPrice.

// class Car {
//   constructor({ brand, model, price }) {
//     this.brand = brand;
//     this.model = model;
//     this.price = price;
//   }

//   getPrice() {
//     return this.price;
//   }

//   changePrice(newPrice) {
//     this.price = newPrice;
//   }
// }

//----------------------------------------------------------------------
//5-11
// Выполни рефакторинг класса Car так, чтобы свойство brand было
// приватным и добавь два метода для публичного интерфейса, для
// чтения и изменения этого свойства.

// getBrand() - возвращает значение приватного свойства brand.
// changeBrand(newBrand) - изменяет значение приватного свойства
// brand на newBrand.

// class Car {
//   #brand;
//   constructor({ brand, model, price }) {
//     this.#brand = brand;
//     this.model = model;
//     this.price = price;
//   }

//   getBrand() {
//     return this.#brand;
//   }

//   changeBrand(newBrand) {
//     this.#brand = newBrand;
//   }
// }

//----------------------------------------------------------------------
//5-12
// Выполни рефакторинг заменив функцию-конструктор Storage на класс с
// методами.Сделай так, чтобы свойство items было приватным.

// До рефакторинга
// function Storage(items) {
//   this.items = items;
// }

// Storage.prototype.getItems = function () {
//   return this.items;
// };

// Storage.prototype.addItem = function (newItem) {
//   this.items.push(newItem);
// };

// Storage.prototype.removeItem = function (item) {
//   const itemIndex = this.items.indexOf(item);
//   this.items.splice(itemIndex, 1);
// };

// После рефакторинга
// class Storage {
//   #items;

//   constructor(items) {
//     this.#items = items;
//   }
//   getItems() {
//     return this.#items;
//   }
//   addItem(newItem) {
//     this.#items.push(newItem);
//   }
//   removeItem(item) {
//     const itemIndex = this.#items.indexOf(item);
//     this.#items.splice(itemIndex, 1);
//   }
// }

// const storage = new Storage(["Нанитоиды", "Пролонгер", "Антигравитатор"]);
// console.log(storage.getItems()); // ["Нанитоиды", "Пролонгер", "Антигравитатор"]
// storage.addItem("Дроид");
// console.log(storage.getItems()); // ["Нанитоиды", "Пролонгер", "Антигравитатор", "Дроид"]
// storage.removeItem("Пролонгер");
// console.log(storage.getItems()); // ["Нанитоиды", "Антигравитатор", "Дроид"]

//----------------------------------------------------------------------
//5-13
// Выполни рефакторинг заменив функцию-конструктор StringBuilder на класс
// с методами.Сделай так, чтобы свойство value было приватным.

// До рефакторинга
// function StringBuilder(baseValue) {
//   this.value = baseValue;
// }

// StringBuilder.prototype.getValue = function () {
//   return this.value;
// };

// StringBuilder.prototype.padEnd = function (str) {
//   this.value += str;
// };

// StringBuilder.prototype.padStart = function (str) {
//   this.value = str + this.value;
// };

// StringBuilder.prototype.padBoth = function (str) {
//   this.padStart(str);
//   this.padEnd(str);
// };

// После рефакторинга
// class StringBuilder {
//   #value;
//   constructor(baseValue) {
//     this.#value = baseValue;
//   }
//   getValue() {
//     return this.#value;
//   }
//   padEnd(str) {
//     this.#value += str;
//   }
//   padStart(str) {
//     this.#value = str + this.#value;
//   }
//   padBoth(str) {
//     this.padStart(str);
//     this.padEnd(str);
//   }
// }

// const builder = new StringBuilder(".");
// // console.log(builder.getValue()); // '.'
// builder.padStart("^");
// // console.log(builder.getValue()); // '^.'
// builder.padEnd("^");
// // console.log(builder.getValue()); // '^.^'
// builder.padBoth("=");
// // console.log(builder.getValue()); // '=^.^='

//----------------------------------------------------------------------
//5-14
// Выполни рефакторинг класса Car. Сделай свойства model и price приватными,
// также как #brand.Стандартизируй публичный интерфейс класса заменив уже
// объявленные методы на геттеры и сеттеры brand, model и price для
// взаимодействия с приватными свойствами.

// class Car {
//   #model;
//   #price;
//   #brand;

//   constructor({ brand, model, price }) {
//     this.#brand = brand;
//     this.#model = model;
//     this.#price = price;
//   }

//   get brand() {
//     return this.#brand;
//   }

//   set brand(newBrand) {
//     this.#brand = newBrand;
//   }

//   get model() {
//     return this.#model;
//   }

//   set model(newModel) {
//     this.#model = newModel;
//   }

//   get price() {
//     return this.#price;
//   }

//   set price(newPrice) {
//     this.#price = newPrice;
//   }
// }

//----------------------------------------------------------------------
//5-15
// Выполни рефакторинг класса Car. Добавь публичное статическое свойство
// MAX_PRICE со значением 50000 - максимально допустимая цена автомобиля.

// Добавь сеттеру price проверку передаваемого значения параметра newPrice.
// Если оно больше чем MAX_PRICE, сеттер ничего не делает, а если меньше или
// равно, то перезаписывает цену автомобиля.

// class Car5 {
//   // Пиши код ниже этой строки
//   static MAX_PRICE = 50000;
//   #price;

//   constructor({ price }) {
//     this.#price = price;
//   }

//   get price() {
//     return this.#price;
//   }
// // вариант 1
//   // set price(newPrice) {
//   //   if (newPrice > 50000) {
//   //     return;
//   //   }
//   //   this.#price = newPrice;
//   // }
// // вариант2
//   set price(newPrice) {
//     if (newPrice <= Car5.MAX_PRICE) {
//       this.#price = newPrice;
//     }
//   }

//   // Пиши код выше этой строки
// }

// const audi = new Car5({ price: 35000 });
// console.log(audi.price); // 35000

// audi.price = 49000;
// console.log(audi.price); // 49000

// audi.price = 51000;
// console.log(audi.price); // 49000

//----------------------------------------------------------------------
//5-16
// Добавь классу Car публичный статический метод checkPrice(price),
// принимающий цену автомобиля.Метод должен сравнить значения параметра
// price и приватного статического свойства MAX_PRICE.

// Если цена автомобиля превышает максимальную, метод должен вернуть
// строку 'Внимание! Цена превышает допустимую.'.
// В противном случае метод должен вернуть строку 'Всё хорошо, цена в порядке.'.
// Под объявлением класса мы добавили инициализацию экземпляра и вызовы
// методов, чтобы показать как будет использоваться метод checkPrice(price).

// class Car {
//   static #MAX_PRICE = 50000;
//
//   static checkPrice(price) {
//     if (price > Car.#MAX_PRICE) {
//       return ("Внимание! Цена превышает допустимую.");
//     }
//     return ('Всё хорошо, цена в порядке.')
//   }
//
//   constructor({ price }) {
//     this.price = price;
//   }
// }

// const audi = new Car({ price: 36000 });
// const bmw = new Car({ price: 64000 });

// console.log(Car.checkPrice(audi.price)); // Всё хорошо, цена в порядке.
// console.log(Car.checkPrice(bmw.price)); // Внимание! Цена превышает допустимую.

//----------------------------------------------------------------------
//5-17

// В приложении нужен администратор с возможностью добавлять почты
// пользователей в чёрный список.

// Объяви класс Admin, который наследует от класса User.
// Добавь классу Admin публичное статическое свойство AccessLevel
// (уровень доступа), значение которого это объект
// { BASIC: 'basic', SUPERUSER: 'superuser' }.

// class User {
//   email;

//   constructor(email) {
//     this.email = email;
//   }

//   get email() {
//     return this.email;
//   }

//   set email(newEmail) {
//     this.email = newEmail;
//   }
// }

// class Admin extends User {
//   static AccessLevel = { BASIC: "basic", SUPERUSER: "superuser" };
// }

// console.log(Admin.AccessLevel.BASIC);
// console.log(Admin.AccessLevel.SUPERUSER);

//----------------------------------------------------------------------
//5-18
// Добавь классу Admin метод constructor, который принимает один
// параметр - объект настроек с двумя свойствами email и accessLevel.
// Добавь классу Admin публичное свойство accessLevel, значение
// которого будет передаваться при вызове конструктора.

// Чтобы показать как будет использоваться класс Admin, мы добавили
// инициализацию экземпляра под объявлением класса.

// class User {
//   email;

//   constructor(email) {
//     this.email = email;
//   }

//   get email() {
//     return this.email;
//   }

//   set email(newEmail) {
//     this.email = newEmail;
//   }
// }

// class Admin extends User {
//   accessLevel;
//   static AccessLevel = {
//     BASIC: "basic",
//     SUPERUSER: "superuser",
//   };

//   constructor({ email, accessLevel }) {
//     super(email);
//     this.accessLevel = accessLevel;
//   }
// }

// const mango = new Admin({
//   email: "mango@mail.com",
//   accessLevel: Admin.AccessLevel.SUPERUSER,
// });

// console.log(mango.email); // mango@mail.com
// console.log(mango.accessLevel); // superuser

//----------------------------------------------------------------------
//5-19
// Добавь классу Admin следующие свойства и методы.

// Публичное свойство blacklistedEmails для хранения чёрного списка
// почтовых адресов пользователей.Значение по умолчанию это пустой массив.
// Публичный метод blacklist(email) для добавления почты в чёрный список.
// Метод должен добавлять значение параметра email в массив хранящийся в
// свойстве blacklistedEmails.
// Публичный метод isBlacklisted(email) для проверки почты в чёрном списке.
// Метод должен проверять наличие значения параметра email в массиве
// хранящемся в свойстве blacklistedEmails и возвращать true или false.

// После объявления класса мы добавили инициализацию экземпляра и вызовы
// методов в той последовательности, в которой твой код будут проверять
// тесты.Пожалуйста ничего там не меняй.

// class User {
//   email;

//   constructor(email) {
//     this.email = email;
//   }

//   get email() {
//     return this.email;
//   }

//   set email(newEmail) {
//     this.email = newEmail;
//   }
// }
// class Admin extends User {
//    static AccessLevel = {
//     BASIC: "basic",
//     SUPERUSER: "superuser",
//   };

//   accessLevel;
//   blacklistedEmails = [];

//   constructor({ email, accessLevel }) {
//     super(email);
//     this.accessLevel = accessLevel;
//   }

//   blacklist(email) {
//     this.blacklistedEmails.push(email);
//   }

//   isBlacklisted(email) {
//     if (this.blacklistedEmails.includes(email)) {
//       return true;
//     }
//     return false;
//   }
// }

// const mango = new Admin({
//   email: "mango@mail.com",
//   accessLevel: Admin.AccessLevel.SUPERUSER,
// });

// console.log(mango.email); // mango@mail.com
// console.log(mango.accessLevel); // superuser
// mango.blacklist("poly@mail.com");
// console.log(mango.blacklistedEmails); // 'poly@mail.com'
// console.log(mango.isBlacklisted("mango@mail.com")); //  false
// console.log(mango.isBlacklisted("poly@mail.com")); // true

//==============================================================
//МОДУЛЬ 6
//----------------------------------------------------------------------
//6-1
// Функция calculateTotalPrice(orderedItems) принимает один параметр
// orderedItems - массив чисел, и рассчитывает общую сумму его
// элементов, которая сохраняется в переменной totalPrice и
// возвращается как результат работы функции.

// Выполни рефакторинг функции так, чтобы вместо цикла for она
// использовала метод forEach.

function calculateTotalPrice(orderedItems) {
  let totalPrice = 0;

  // Классический for
  // for (let i = 0; i < orderedItems.length; i += 1) {
  //   totalPrice += orderedItems[i];
  // }

  // Перебирающий forEach
  orderedItems.forEach(function (item) {
    totalPrice += item;
  });

  return totalPrice;
}

console.log(calculateTotalPrice([12, 85, 37, 4]));
console.log(calculateTotalPrice([164, 48, 291]));
console.log(calculateTotalPrice([412, 371, 94, 63, 176]));

//----------------------------------------------------------------------
//6-2
// Функция filterArray(numbers, value) принимает массив чисел numbers и возвращает
// новый массив, в котором будут только те элементы оригинального массива, которые
// больше чем значение параметра value.

// Выполни рефакторинг функции так, чтобы вместо цикла for она использовала метод
// forEach.

function filterArray(numbers, value) {
  const filteredNumbers = [];

  // Классический for
  // for (let i = 0; i < numbers.length; i += 1) {
  //   if (numbers[i] > value) {
  //     filteredNumbers.push(numbers[i]);
  //   }
  // }

  // Перебирающий forEach
  numbers.forEach(function (number) {
    if (number > value) {
      filteredNumbers.push(number);
    }
  });

  return filteredNumbers;
}

console.log(filterArray([1, 2, 3, 4, 5], 3));
console.log(filterArray([1, 2, 3, 4, 5], 4));
console.log(filterArray([1, 2, 3, 4, 5], 5));
console.log(filterArray([12, 24, 8, 41, 76], 38));
console.log(filterArray([12, 24, 8, 41, 76], 20));

//----------------------------------------------------------------------
//6-3
// Функция getCommonElements(firstArray, secondArray) принимает два массива
// произвольной длины в параметры firstArray и secondArray, и возвращает
// новый массив их общих элементов, то есть тех которые есть в обоих массивах.

// Выполни рефакторинг функции так, чтобы вместо цикла for она использовала
// метод forEach.

function getCommonElements(firstArray, secondArray) {
  const commonElements = [];

  // Классический for
  // for (let i = 0; i < firstArray.length; i += 1) {
  //   if (secondArray.includes(firstArray[i])) {
  //     commonElements.push(firstArray[i]);
  //   }
  // }

  // Перебирающий forEach
  firstArray.forEach(function (elem) {
    if (secondArray.includes(elem)) {
      commonElements.push(elem);
    }
  });
  return commonElements;
}

console.log(getCommonElements([1, 2, 3], [2, 4]));
console.log(getCommonElements([1, 2, 3], [2, 1, 17, 19]));
console.log(getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27]));
console.log(getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40]));
console.log(getCommonElements([1, 2, 3], [10, 20, 30]));

//----------------------------------------------------------------------
//6-4
// Выполни рефакторинг функции calculateTotalPrice() так, чтобы она
// была объявлена как стрелочная.

const calculateTotalPrice0 = (quantity, pricePerItem) => {
  return quantity * pricePerItem;
};

console.log(calculateTotalPrice0(5, 100));
console.log(calculateTotalPrice0(8, 60));
console.log(calculateTotalPrice0(3, 400));

//----------------------------------------------------------------------
//6-5
// Выполни рефакторинг функции calculateTotalPrice() так, чтобы она
// использовала неявный возврат.

const calculateTotalPrice9 = (quantity, pricePerItem) =>
  quantity * pricePerItem;

console.log(calculateTotalPrice9(5, 100));
console.log(calculateTotalPrice9(8, 60));
console.log(calculateTotalPrice9(3, 400));

//----------------------------------------------------------------------
//6-6
// Выполни рефакторинг функции calculateTotalPrice(orderedItems)
// заменив её объявление на стрелочную функцию.Замени коллбек - функцию
// передаваемую в метод forEach() на стрелочную функцию.

const calculateTotalPrice8 = (orderedItems) => {
  let totalPrice = 0;
  orderedItems.forEach((item) => {
    totalPrice += item;
  });
  return totalPrice;
};

console.log(calculateTotalPrice8([12, 85, 37, 4]));
console.log(calculateTotalPrice8([164, 48, 291]));
console.log(calculateTotalPrice8([412, 371, 94, 63, 176]));

//----------------------------------------------------------------------
//6-7
// Замени объявление функции filterArray() и коллбек для метода
// forEach() на стрелочные функции.

const filterArray1 = (numbers, value) => {
  const filteredNumbers = [];

  numbers.forEach((number) => {
    if (number > value) {
      filteredNumbers.push(number);
    }
  });
  return filteredNumbers;
};

console.log(filterArray1([1, 2, 3, 4, 5], 3));
console.log(filterArray1([1, 2, 3, 4, 5], 4));
console.log(filterArray1([1, 2, 3, 4, 5], 5));
console.log(filterArray1([12, 24, 8, 41, 76], 38));
console.log(filterArray1([12, 24, 8, 41, 76], 20));

//----------------------------------------------------------------------
//6-8
// Замени объявление функции getCommonElements() и коллбек для
// метода forEach() на стрелочные функции.

const getCommonElements2 = (firstArray, secondArray) => {
  const commonElements = [];

  firstArray.forEach((element) => {
    if (secondArray.includes(element)) {
      commonElements.push(element);
    }
  });
  return commonElements;
};
console.log(getCommonElements2([1, 2, 3], [2, 4]));
console.log(getCommonElements2([1, 2, 3], [2, 1, 17, 19]));
console.log(getCommonElements2([24, 12, 27, 3], [12, 8, 3, 36, 27]));
console.log(getCommonElements2([10, 20, 30, 40], [4, 30, 17, 10, 40]));
console.log(getCommonElements2([1, 2, 3], [10, 20, 30]));

//----------------------------------------------------------------------
//6-9
// Функция changeEven(numbers, value) принимает массив чисел numbers
// и обновляет каждый элемент, значение которого это чётное число,
// добавляя к нему значение параметра value.

// Выполни рефакторинг функции так, чтобы она стала чистой - не изменяла
//  массив чисел numbers, а создавала, наполняла и возвращала новый массив
// с обновлёнными значениями.
function changeEven(numbers, value) {
  const newArray = [];
  numbers.forEach((number) => {
    if (number % 2 === 0) {
      newArray.push(number + value);
    } else newArray.push(number);
  });
  return newArray;
}
console.log(changeEven([1, 2, 3, 4, 5], 10));
console.log(changeEven([2, 8, 3, 7, 4, 6], 10));
console.log(changeEven([17, 24, 68, 31, 42], 100));
console.log(changeEven([44, 13, 81, 92, 36, 54], 100));

//----------------------------------------------------------------------
//6-10
// Дополни код так, чтобы в переменной planetsLengths получился массив
// длин названий планет.Обязательно используй метод map().

const planets = ["Земля", "Марс", "Венера", "Юпитер"];
const planetsLengths = planets.map((planet) => planet.length);
console.log(planetsLengths);

//----------------------------------------------------------------------
//6-11
// Используя метод map() сделай так, чтобы в переменной titles получился
// массив названий книг(свойство title) из всех объектов массива books.

const books = [
  { title: "Последнее королевство", author: "Бернард Корнуэлл", rating: 8.38 },
  { title: "На берегу спокойных вод", author: "Роберт Шекли", rating: 8.51 },
  { title: "Сон смешного человека", author: "Федор Достоевский", rating: 7.75 },
  { title: "Красна как кровь", author: "Ли Танит", rating: 7.94 },
  { title: "Враг Божий", author: "Бернард Корнуэлл", rating: 8.67 },
];
const titles = books.map((book) => book.title);

console.log(titles);

//----------------------------------------------------------------------
//6-12
// Используя метод flatMap() сделай так, чтобы в переменной genres
// получился массив всех жанров книг(свойство genres) из массива книг books.

const books1 = [
  {
    title: "Последнее королевство",
    author: "Бернард Корнуэлл",
    genres: ["приключения", "историческое"],
  },
  {
    title: "На берегу спокойных вод",
    author: "Роберт Шекли",
    genres: ["фантастика"],
  },
  {
    title: "Красна как кровь",
    author: "Ли Танит",
    genres: ["ужасы", "мистика"],
  },
];
// Пиши код ниже этой строки

const genres = books1.flatMap((book) => book.genres);
console.log(genres);

//----------------------------------------------------------------------
//6-13
// Дополни функцию getUserNames(users) так, чтобы она возвращала
// массив имён пользователей(свойство name) из массива объектов в параметре users.

const users = [
  {
    name: "Moore Hensley",
    email: "moorehensley@indexia.com",
    eyeColor: "blue",
    friends: ["Sharron Pace"],
    isActive: false,
    balance: 2811,
    skills: ["ipsum", "lorem"],
    gender: "male",
    age: 37,
  },
  {
    name: "Sharlene Bush",
    email: "sharlenebush@tubesys.com",
    eyeColor: "blue",
    friends: ["Briana Decker", "Sharron Pace"],
    isActive: true,
    balance: 3821,
    skills: ["tempor", "mollit", "commodo", "veniam", "laborum"],
    gender: "female",
    age: 34,
  },
  {
    name: "Ross Vazquez",
    email: "rossvazquez@xinware.com",
    eyeColor: "green",
    friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
    isActive: false,
    balance: 3793,
    skills: ["nulla", "anim", "proident", "ipsum", "elit"],
    gender: "male",
    age: 24,
  },
  {
    name: "Elma Head",
    email: "elmahead@omatom.com",
    eyeColor: "green",
    friends: ["Goldie Gentry", "Aisha Tran"],
    isActive: true,
    balance: 2278,
    skills: ["adipisicing", "irure", "velit"],
    gender: "female",
    age: 21,
  },
  {
    name: "Carey Barr",
    email: "careybarr@nurali.com",
    eyeColor: "blue",
    friends: ["Jordan Sampson", "Eddie Strong"],
    isActive: true,
    balance: 3951,
    skills: ["ex", "culpa", "nostrud"],
    gender: "male",
    age: 27,
  },
  {
    name: "Blackburn Dotson",
    email: "blackburndotson@furnigeer.com",
    eyeColor: "brown",
    friends: ["Jacklyn Lucas", "Linda Chapman"],
    isActive: false,
    balance: 1498,
    skills: ["non", "amet", "ipsum"],
    gender: "male",
    age: 38,
  },
  {
    name: "Sheree Anthony",
    email: "shereeanthony@kog.com",
    eyeColor: "brown",
    friends: ["Goldie Gentry", "Briana Decker"],
    isActive: true,
    balance: 2764,
    skills: ["lorem", "veniam", "culpa"],
    gender: "female",
    age: 39,
  },
];

const getUserNames = users.map((user) => user.name);

// const getUserNames = (users) => users.map((user) => user.name); (вариант ответа для тестов)

console.log(getUserNames);

//----------------------------------------------------------------------
//6-14
// Дополни функцию getUserEmails(users) так, чтобы она возвращала массив
// почтовых адресов пользователей(свойство email) из массива объектов в
// параметре users.
const getUserEmails1 = users.map((user) => user.email);
console.log(getUserEmails1);

//----------------------------------------------------------------------
//6-15
// Дополни код так, чтобы в переменной evenNumbers получился массив
// чётных чисел из массива numbers, а в переменной oddNumbers массив
// нечётных.Обязательно используй метод filter().

const numbers = [17, 24, 82, 61, 36, 18, 47, 52, 73];

const evenNumbers = numbers.filter((number) => number % 2 === 0);
const oddNumbers = numbers.filter((number) => number % 2 !== 0);

console.log(numbers);
console.log(evenNumbers);
console.log(oddNumbers);

//----------------------------------------------------------------------
//6-16
// Дополни код так, чтобы в переменной allGenres был массив всех
// жанров книг(свойство genres) из массива books, а в переменной
// uniqueGenres массив уникальных жанров - без повторений.

const books2 = [
  {
    title: "Последнее королевство",
    author: "Бернард Корнуэлл",
    genres: ["приключения", "историческое"],
  },
  {
    title: "На берегу спокойных вод",
    author: "Роберт Шекли",
    genres: ["фантастика", "мистика"],
  },
  {
    title: "Красна как кровь",
    author: "Ли Танит",
    genres: ["ужасы", "мистика", "приключения"],
  },
];

const allGenres = books2.flatMap((book) => book.genres);
const uniqueGenres = allGenres.filter(
  (genres, index, array) => array.indexOf(genres) === index
);

console.log(allGenres);
console.log(uniqueGenres);

//----------------------------------------------------------------------
//6-17
// Используя метод filter() дополни код так, чтобы:

// В переменной topRatedBooks получился массив книг рейтинг которых
// (свойство rating) больше либо равно значению переменной MIN_RATING.
// В переменной booksByAuthor получился массив книг написанных автором
// с именем(свойство author) которое совпадает со значением в переменной AUTHOR.

const books3 = [
  { title: "Последнее королевство", author: "Бернард Корнуэлл", rating: 8.38 },
  { title: "На берегу спокойных вод", author: "Роберт Шекли", rating: 8.51 },
  { title: "Сон смешного человека", author: "Федор Достоевский", rating: 7.75 },
  { title: "Красна как кровь", author: "Ли Танит", rating: 7.94 },
  { title: "Враг Божий", author: "Бернард Корнуэлл", rating: 8.67 },
];

const MIN_RATING = 8;
const AUTHOR = "Бернард Корнуэлл";

const topRatedBooks = books3.filter((book) => book.rating >= MIN_RATING);
const booksByAuthor = books3.filter((book) => book.author === AUTHOR);

console.log(topRatedBooks);
console.log(booksByAuthor);

//----------------------------------------------------------------------
//6-18
// Дополни функцию getUsersWithEyeColor(users, color) так, чтобы она
// возвращала массив пользователей у которых цвет глаз(свойство eyeColor)
//  совпадает со значением параметра color.

const getUsersWithEyeColor = (users, color) =>
  users.filter((user) => user.eyeColor === color);

//----------------------------------------------------------------------
//6-19
// Дополни функцию getUsersWithAge(users, minAge, maxAge) так, чтобы она
// возвращала массив пользователей, возраст которых(свойство age) попадает
// в промежуток от minAge до maxAge.

const getUsersWithAge = (users, minAge, maxAge) =>
  users.filter((user) => user.age > minAge && user.age < maxAge);

//----------------------------------------------------------------------
//6-20
//Дополни функцию getUsersWithFriend(users, friendName) так, чтобы
// она возвращала массив пользователей у которых есть друг с именем
// в параметре friendName.Массив друзей пользователя хранится в свойстве friends.

const getUsersWithFriend = (users, friendName) =>
  users.filter((user) => user.friends.includes(friendName));

//----------------------------------------------------------------------
//6-21
// Дополни функцию getFriends(users) так, чтобы она возвращала массив
// друзей всех пользователей(свойство friends).У нескольких пользователей
// могут быть одинаковые друзья, сделай так чтобы возвращаемый массив не
// содержал повторений.

const getFriends = (users) => {
  const frends = users.flatMap((user) => user.friends);
  const uniqueFrends = frends.filter(
    (frends, index, array) => array.indexOf(frends) === index
  );
  return uniqueFrends;
};

//----------------------------------------------------------------------
//6-22
// Дополни функцию getActiveUsers(users) так, чтобы она возвращала
// массив активных пользователей, значение свойства isActive которых true.

const getActiveUsers = (users) =>
  users.filter((user) => user.isActive === true);

//----------------------------------------------------------------------
//6-23
// Дополни функцию getInactiveUsers(users) так, чтобы она возвращала
// массив неактивных пользователей, значение свойства isActive которых false.

const getActiveUsers6 = (users) =>
  users.filter((user) => user.isActive === false);

//----------------------------------------------------------------------
//6-24
// Используя метод find() дополни код так, чтобы:

// В переменной bookWithTitle получился объект книги название которой
// (свойство title) совпадает со значением переменной BOOK_TITLE.
// В переменной bookByAuthor получился объект книги автор который
// (свойство author) совпадает со значением переменной AUTHOR.

const books7 = [
  { title: "Последнее королевство", author: "Бернард Корнуэлл", rating: 8.38 },
  { title: "На берегу спокойных вод", author: "Роберт Шекли", rating: 8.51 },
  { title: "Сон смешного человека", author: "Федор Достоевский", rating: 7.75 },
  { title: "Красна как кровь", author: "Ли Танит", rating: 7.94 },
];
const BOOK_TITLE = "Сон смешного человека";
const AUTHOR1 = "Роберт Шекли";
// Пиши код ниже этой строки

const bookWithTitle = books.find((book) => book.title === BOOK_TITLE);
const bookByAuthor = books.find((book) => book.author === AUTHOR1);

//----------------------------------------------------------------------
//6-25
// Дополни функцию getUserWithEmail(users, email) так, чтобы она
// возвращала объект пользователя, почта которого(свойство email) совпадает
//  со значением параметра email.

const getUserWithEmail = (users, email) =>
  users.find((user) => user.email === email);

//----------------------------------------------------------------------
//6-26
// Используя метод every() дополни код так, чтобы:

// В переменной eachElementInFirstIsEven был результат проверки всех
// элементов массива firstArray на чётность.
// В переменной eachElementInFirstIsOdd был результат проверки всех
// элементов массива firstArray на нечётность.
// В переменной eachElementInSecondIsEven был результат проверки всех
// элементов массива secondArray на чётность.
// В переменной eachElementInSecondIsOdd был результат проверки всех
// элементов массива secondArray на нечётность.
// В переменной eachElementInThirdIsEven был результат проверки всех
// элементов массива thirdArray на чётность.
// В переменной eachElementInThirdIsOdd был результат проверки всех
// элементов массива thirdArray на нечётность.

const firstArray = [26, 94, 36, 18];
const secondArray = [17, 61, 23];
const thirdArray = [17, 26, 94, 61, 36, 23, 18];

const eachElementInFirstIsEven = firstArray.every((value) => value % 2 === 0);
const eachElementInFirstIsOdd = firstArray.every((value) => value % 2 !== 0);

const eachElementInSecondIsEven = secondArray.every((value) => value % 2 === 0);
const eachElementInSecondIsOdd = secondArray.every((value) => value % 2 !== 0);

const eachElementInThirdIsEven = thirdArray.every((value) => value % 2 === 0);
const eachElementInThirdIsOdd = thirdArray.every((value) => value % 2 !== 0);

console.log(eachElementInFirstIsEven);
console.log(eachElementInFirstIsOdd);
console.log(eachElementInSecondIsEven);
console.log(eachElementInSecondIsOdd);
console.log(eachElementInThirdIsEven);
console.log(eachElementInThirdIsEven);

//----------------------------------------------------------------------
//6-27
// Дополни функцию isEveryUserActive(users) так, чтобы она проверяла
// все ли пользователи сейчас активны (свойство isActive) и возвращала
// true или false.

const isEveryUserActive = (users) =>
  users.every((user) => user.isActive === true);

//----------------------------------------------------------------------
//6-28
// Используя метод some() дополни код так, чтобы:

// В переменной anyElementInFirstIsEven был результат проверки
// наличия чётных элементов в массиве firstArray.
// В переменной anyElementInFirstIsOdd был результат проверки
// наличия нечётных элементов в массиве firstArray.
// В переменной anyElementInSecondIsEven был результат проверки
// наличия чётных элементов в массиве secondArray.
// В переменной anyElementInSecondIsOdd был результат проверки
// наличия нечётных элементов в массиве secondArray.
// В переменной anyElementInThirdIsEven был результат проверки
// наличия чётных элементов в массиве thirdArray.
// В переменной anyElementInThirdIsOdd был результат проверки
// наличия нечётных элементов в массиве thirdArray.

const firstArray1 = [26, 94, 36, 18];
const secondArray1 = [17, 61, 23];
const thirdArray1 = [17, 26, 94, 61, 36, 23, 18];

const anyElementInFirstIsEven = firstArray1.some((value) => value % 2 === 0);
const anyElementInFirstIsOdd = firstArray1.some((value) => value % 2 !== 0);

const anyElementInSecondIsEven = secondArray1.some((value) => value % 2 === 0);
const anyElementInSecondIsOdd = secondArray1.some((value) => value % 2 !== 0);

const anyElementInThirdIsEven = thirdArray1.some((value) => value % 2 === 0);
const anyElementInThirdIsOdd = thirdArray1.some((value) => value % 2 !== 0);

//----------------------------------------------------------------------
//6-29
// Дополни функцию isAnyUserActive(users) так, чтобы она проверяла
// наличие активных пользователей(свойство isActive) и возвращала true или false.
const isAnyUserActive = (users) => users.some((user) => user.isActive === true);

//----------------------------------------------------------------------
//6-30
// Игровому сервису необходим функционал подсчёта среднего времени
// проведённого в играх. Дополни код так, чтобы в переменной totalPlayTime
// получилось общее игровое время из массива playtimes.

const players = {
  mango: 1270,
  poly: 468,
  ajax: 710,
  kiwi: 244,
};
const playtimes = Object.values(players); // [1270, 468, 710, 244]
const totalPlayTime = playtimes.reduce((player, number) => {
  return player + number;
});
const averagePlayTime = totalPlayTime / playtimes.length;
console.log(playtimes);
console.log(totalPlayTime);
console.log(averagePlayTime);

//----------------------------------------------------------------------
//6-31
// Нашему сервису необходимо рассчитать среднее время проведённое
// в одной игре для каждого игрока, и получить общую сумму этих времён.
// Рассчитать время для каждого из игроков, можно разделив его время
// (свойство playtime) на количество игр (свойство gamesPlayed).

const players1 = [
  { name: "Манго", playtime: 1270, gamesPlayed: 4 },
  { name: "Поли", playtime: 469, gamesPlayed: 2 },
  { name: "Аякс", playtime: 690, gamesPlayed: 3 },
  { name: "Киви", playtime: 241, gamesPlayed: 1 },
];

const totalAveragePlaytimePerGame = players1.reduce((acc, player) => {
  return acc + player.playtime / player.gamesPlayed;
}, 0);

console.log(totalAveragePlaytimePerGame);

//----------------------------------------------------------------------
//6-32
// Дополни функцию calculateTotalBalance(users) так, чтобы она считала
// и возвращала сумму всех средств(свойство balance) которые хранят
// пользователи из массива users.

const calculateTotalBalance = (users) =>
  users.reduce((acc, user) => {
    return acc + user.balance;
  }, 0);

//----------------------------------------------------------------------
//6-33
// Дополни функцию getTotalFriendCount(users) так, чтобы она
// считала и возвращала общее количество друзей(свойство friends)
// всех пользователей из массива users.

const getTotalFriendCount = (users) =>
  users.reduce((acc, user) => {
    return acc + user.friends.length;
  }, 0);

//----------------------------------------------------------------------
//6-34
// Дополни код так, чтобы в переменной ascendingReleaseDates
// получилась отсортированная по возрастанию копия массива releaseDates,
// а в переменной alphabeticalAuthors копия массива имён авторов authors
// отсортированная в по алфавиту.

const releaseDates = [2016, 1967, 2008, 1984, 1973, 2012, 1997];
const authors = [
  "Ли Танит",
  "Бернард Корнуэлл",
  "Роберт Шекли",
  "Федор Достоевский",
];
const ascendingReleaseDates = [...releaseDates].sort();
const alphabeticalAuthors = [...authors].sort();

console.log(ascendingReleaseDates);
console.log(alphabeticalAuthors);

//----------------------------------------------------------------------
//6-35
// Онлайн бибилиотеке необходимо отображать книги сортированные по дате
// издания, по её возрастанию или убыванию.Дополни код так, чтобы в
// переменной ascendingReleaseDates получилась отсортированная по
// возрастанию копия массива releaseDates, а в переменной descendingReleaseDates
// копия отсортированная по убыванию.

const releaseDates1 = [2016, 1967, 2008, 1984, 1973, 2012, 1997];

const ascendingReleaseDates1 = [...releaseDates1].sort((a, b) => a - b);
const descendingReleaseDates1 = [...releaseDates1].sort((a, b) => b - a);

console.log(ascendingReleaseDates1);
console.log(descendingReleaseDates1);

//----------------------------------------------------------------------
//6-36 (сортировка строк)
// Онлайн бибилиотеке необходимо отображать книги отсортированные по
// автору, в алфавитном и обратном алфавитном порядке.Дополни код так,
// чтобы в переменной authorsInAlphabetOrder получилась отсортированная
// по алфавиту копия массива authors, а в переменной authorsInReversedOrder
// копия отсортированная в обратном алфавитном порядке.

const authors1 = [
  "Ли Танит",
  "Бернард Корнуэлл",
  "Роберт Шекли",
  "Федор Достоевский",
  "Говард Лавкрафт",
];
const authorsInAlphabetOrder = [...authors1].sort((a, b) => a.localeCompare(b));
const authorsInReversedOrder = [...authors1].sort((a, b) => b.localeCompare(a));

console.log(authorsInAlphabetOrder);
console.log(authorsInReversedOrder);

//----------------------------------------------------------------------
//6-37 (сортировка обьектов)
// Дополни код так, чтобы:

// В переменной sortedByAuthorName получился массив книг отсортированный
// по имени автора в алфавитном порядке.
// В переменной sortedByReversedAuthorName получился массив книг
// отсортированный по имени автора в обратном алфавитном порядке.
// В переменной sortedByAscendingRating получился массив книг
// отсортированный по возрастанию рейтинга.
// В переменной sortedByDescentingRating получился массив книг
// отсортированный по убыванию рейтинга.

const books5 = [
  { title: "Последнее королевство", author: "Бернард Корнуэлл", rating: 8.38 },
  { title: "На берегу спокойных вод", author: "Роберт Шекли", rating: 8.51 },
  { title: "Сон смешного человека", author: "Федор Достоевский", rating: 7.75 },
  { title: "Красна как кровь", author: "Ли Танит", rating: 7.94 },
  { title: "Враг Божий", author: "Бернард Корнуэлл", rating: 8.67 },
];

const sortedByAuthorName = [...books5].sort((firstBook, secondBook) =>
  firstBook.author.localeCompare(secondBook.author)
);
const sortedByReversedAuthorName = [...books5].sort((firstBook, secondBook) =>
  secondBook.author.localeCompare(firstBook.author)
);
const sortedByAscendingRating = [...books5].sort(
  (firstBook, secondBook) => firstBook.rating - secondBook.rating
);
const sortedByDescentingRating = [...books5].sort(
  (firstBook, secondBook) => secondBook.rating - firstBook.rating
);

console.log(sortedByAuthorName);
console.log(sortedByReversedAuthorName);
console.log(sortedByAscendingRating);
console.log(sortedByDescentingRating);

//----------------------------------------------------------------------
//6-38
// Дополни функцию sortByAscendingBalance(users) так, чтобы она
// возвращала массив пользователей отсортированный по возрастанию их
// баланса(свойство balance).

const sortByAscendingBalance = (users) =>
  [...users].sort((a, b) => a.balance - b.balance);

//----------------------------------------------------------------------
//6-39
// Дополни функцию sortByDescendingFriendCount(users) так, чтобы она
// возвращала массив пользователей отсортированный по убыванию количества
// их друзей(свойство friends).
const users1 = [
  {
    name: "Moore Hensley",
    email: "moorehensley@indexia.com",
    eyeColor: "blue",
    friends: ["Sharron Pace"],
    isActive: false,
    balance: 2811,
    gender: "male",
  },
  {
    name: "Sharlene Bush",
    email: "sharlenebush@tubesys.com",
    eyeColor: "blue",
    friends: ["Briana Decker", "Sharron Pace"],
    isActive: true,
    balance: 3821,
    gender: "female",
  },
  {
    name: "Ross Vazquez",
    email: "rossvazquez@xinware.com",
    eyeColor: "green",
    friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
    isActive: false,
    balance: 3793,
    gender: "male",
  },
  {
    name: "Elma Head",
    email: "elmahead@omatom.com",
    eyeColor: "green",
    friends: ["Goldie Gentry", "Aisha Tran"],
    isActive: true,
    balance: 2278,
    gender: "female",
  },
  {
    name: "Carey Barr",
    email: "careybarr@nurali.com",
    eyeColor: "blue",
    friends: ["Jordan Sampson", "Eddie Strong"],
    isActive: true,
    balance: 3951,
    gender: "male",
  },
  {
    name: "Blackburn Dotson",
    email: "blackburndotson@furnigeer.com",
    eyeColor: "brown",
    friends: ["Jacklyn Lucas", "Linda Chapman"],
    isActive: false,
    balance: 1498,
    gender: "male",
  },
  {
    name: "Sheree Anthony",
    email: "shereeanthony@kog.com",
    eyeColor: "brown",
    friends: ["Goldie Gentry", "Briana Decker"],
    isActive: true,
    balance: 2764,
    gender: "female",
  },
];
const sortByDescendingFriendCount = [...users1].sort(
  (a, b) => b.friends.length - a.friends.length
);

console.log(sortByDescendingFriendCount);

//----------------------------------------------------------------------
//6-40
// Дополни функцию sortByName(users) так, чтобы она возвращала массив
// пользователей отсортированный по их имени (свойство name) в алфавитном порядке.

const sortByName = [...users].sort((a, b, name) =>
  a.name.localeCompare(b.name)
);

console.log(sortByName);

//----------------------------------------------------------------------
//6-41
// Дополни код так, чтобы в переменной names получился массив имён авторов
// в алфавитном порядке, рейтинг книг которых больше значения переменной MIN_BOOK_RATING.
const books_ = [
  { title: "Последнее королевство", author: "Бернард Корнуэлл", rating: 8.38 },
  { title: "На берегу спокойных вод", author: "Роберт Шекли", rating: 8.51 },
  { title: "Сон смешного человека", author: "Федор Достоевский", rating: 7.75 },
  { title: "Красна как кровь", author: "Ли Танит", rating: 8.14 },
  { title: "Сны В Ведьмином Доме", author: "Говард Лавкрафт", rating: 8.67 },
];
const MIN_BOOK_RATING = 8;
// Пиши код ниже этой строки

const names = [...books_]
  .filter((book) => book.rating > MIN_BOOK_RATING)
  .sort((a, b) => a.author.localeCompare(b.author))
  .map((book) => book.author);

console.log(names);

//----------------------------------------------------------------------
//6-42
// Дополни функцию getNamesSortedByFriendCount(users) так, чтобы она возвращала
// массив имён пользователей отсортированный по возрастанию количества их друзей (свойство friends).
const users3 = [
  {
    name: "Moore Hensley",
    email: "moorehensley@indexia.com",
    eyeColor: "blue",
    friends: ["Sharron Pace"],
    isActive: false,
    balance: 2811,
    gender: "male",
  },
  {
    name: "Sharlene Bush",
    email: "sharlenebush@tubesys.com",
    eyeColor: "blue",
    friends: ["Briana Decker", "Sharron Pace"],
    isActive: true,
    balance: 3821,
    gender: "female",
  },
  {
    name: "Ross Vazquez",
    email: "rossvazquez@xinware.com",
    eyeColor: "green",
    friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
    isActive: false,
    balance: 3793,
    gender: "male",
  },
  {
    name: "Elma Head",
    email: "elmahead@omatom.com",
    eyeColor: "green",
    friends: ["Goldie Gentry", "Aisha Tran"],
    isActive: true,
    balance: 2278,
    gender: "female",
  },
  {
    name: "Carey Barr",
    email: "careybarr@nurali.com",
    eyeColor: "blue",
    friends: ["Jordan Sampson", "Eddie Strong", "Adrian Cross"],
    isActive: true,
    balance: 3951,
    gender: "male",
  },
  {
    name: "Blackburn Dotson",
    email: "blackburndotson@furnigeer.com",
    eyeColor: "brown",
    friends: [
      "Jacklyn Lucas",
      "Linda Chapman",
      "Adrian Cross",
      "Solomon Fokes",
    ],
    isActive: false,
    balance: 1498,
    gender: "male",
  },
  {
    name: "Sheree Anthony",
    email: "shereeanthony@kog.com",
    eyeColor: "brown",
    friends: ["Goldie Gentry", "Briana Decker"],
    isActive: true,
    balance: 2764,
    gender: "female",
  },
];
const getNamesSortedByFriendCount = [...users3]
  .sort((a, b) => a.friends.length - b.friends.length)
  .map((user) => user.name);
console.log(getNamesSortedByFriendCount);

//----------------------------------------------------------------------
//6-43
// Дополни функцию getSortedFriends(users) так, чтобы она возвращала массив
// уникальных имён друзей(свойство friends) отсортированный по алфавиту.
const users4 = [
  {
    name: "Moore Hensley",
    email: "moorehensley@indexia.com",
    eyeColor: "blue",
    friends: ["Sharron Pace"],
    isActive: false,
    balance: 2811,
    gender: "male",
  },
  {
    name: "Sharlene Bush",
    email: "sharlenebush@tubesys.com",
    eyeColor: "blue",
    friends: ["Briana Decker", "Sharron Pace"],
    isActive: true,
    balance: 3821,
    gender: "female",
  },
  {
    name: "Ross Vazquez",
    email: "rossvazquez@xinware.com",
    eyeColor: "green",
    friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
    isActive: false,
    balance: 3793,
    gender: "male",
  },
  {
    name: "Elma Head",
    email: "elmahead@omatom.com",
    eyeColor: "green",
    friends: ["Goldie Gentry", "Aisha Tran"],
    isActive: true,
    balance: 2278,
    gender: "female",
  },
  {
    name: "Carey Barr",
    email: "careybarr@nurali.com",
    eyeColor: "blue",
    friends: ["Jordan Sampson", "Eddie Strong", "Adrian Cross"],
    isActive: true,
    balance: 3951,
    gender: "male",
  },
  {
    name: "Blackburn Dotson",
    email: "blackburndotson@furnigeer.com",
    eyeColor: "brown",
    friends: [
      "Jacklyn Lucas",
      "Linda Chapman",
      "Adrian Cross",
      "Solomon Fokes",
    ],
    isActive: false,
    balance: 1498,
    gender: "male",
  },
  {
    name: "Sheree Anthony",
    email: "shereeanthony@kog.com",
    eyeColor: "brown",
    friends: ["Goldie Gentry", "Briana Decker"],
    isActive: true,
    balance: 2764,
    gender: "female",
  },
];

const getSortedFriends = [...users4]
  .reduce((allFriends, user) => {
    allFriends.push(...user.friends);
    return allFriends;
  }, [])
  .filter((friends, index, array) => array.indexOf(friends) === index)
  .sort((a, b) => a.localeCompare(b));

console.log(getSortedFriends);


//----------------------------------------------------------------------
//6-44
// Дополни функцию getTotalBalanceByGender(users, gender) так, чтобы 
// она возвращала общий баланс пользователей(свойство balance), пол 
// которых(свойство gender) совпадает со значением параметра gender.

const users5 = [
  {
    name: "Moore Hensley",
    email: "moorehensley@indexia.com",
    eyeColor: "blue",
    friends: ["Sharron Pace"],
    isActive: false,
    balance: 2811,
    gender: "male",
  },
  {
    name: "Sharlene Bush",
    email: "sharlenebush@tubesys.com",
    eyeColor: "blue",
    friends: ["Briana Decker", "Sharron Pace"],
    isActive: true,
    balance: 3821,
    gender: "female",
  },
  {
    name: "Ross Vazquez",
    email: "rossvazquez@xinware.com",
    eyeColor: "green",
    friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
    isActive: false,
    balance: 3793,
    gender: "male",
  },
  {
    name: "Elma Head",
    email: "elmahead@omatom.com",
    eyeColor: "green",
    friends: ["Goldie Gentry", "Aisha Tran"],
    isActive: true,
    balance: 2278,
    gender: "female",
  },
  {
    name: "Carey Barr",
    email: "careybarr@nurali.com",
    eyeColor: "blue",
    friends: ["Jordan Sampson", "Eddie Strong", "Adrian Cross"],
    isActive: true,
    balance: 3951,
    gender: "male",
  },
  {
    name: "Blackburn Dotson",
    email: "blackburndotson@furnigeer.com",
    eyeColor: "brown",
    friends: [
      "Jacklyn Lucas",
      "Linda Chapman",
      "Adrian Cross",
      "Solomon Fokes",
    ],
    isActive: false,
    balance: 1498,
    gender: "male",
  },
  {
    name: "Sheree Anthony",
    email: "shereeanthony@kog.com",
    eyeColor: "brown",
    friends: ["Goldie Gentry", "Briana Decker"],
    isActive: true,
    balance: 2764,
    gender: "female",
  },
];

const getTotalBalanceByGender = (users5, gender) => {
  return users5
    .filter((el) => el.gender === gender)
    .map((el) => el.balance)
    .reduce((total, el) => {
      return total + el;
    }, 0);
};




