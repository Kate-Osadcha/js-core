//Обьявление (создание)

// FUNCTION EXPRESSION
// myFunc() //нельзя вызывать до обьявления
// const myFunc = function (param1, param2) {
    //перечисляем действия - инструкции,которые должны выполняться
    // console.log(`Это функциональное выражение с параметрами ${param1} & ${param2}`);
    // console.log(param1, param2);
// }

// FUNCTION DECLARATION
// myFuncDecl() //Можно вызовать до обьевления
// function myFuncDecl(param) {
    // console.log(`Это декларативное обьявление`);
// }

// ARROW FUNCTION -ES6
// myArrowFunc() //нельзя вызывать до обьявления
// const myArrowFunc = (param1) => {
    //перечисляем действия - инструкции,которые должны выполняться
    // console.log(`Это стрелочная функция`);
// }

//Вызовы функций
// myFunc("Hello", "Baby")
// myFuncDecl()
// myArrowFunc()

// PARAMS & ARGUMENTS          
// default params
// function toSayHello(userName) {
//     alert(`${userName}, рады вас приветствовать!!!`)
//     
// }
// toSayHello('Kate')

// function showInfo(userName, userAge) {
    // console.log(`Hello, my name is ${userName}. Iam ${userAge} year old`);  
// }
// showInfo("Kate", 35)


// arguments & ...args
// function getResult(...allParams) {
    // console.log(arguments);
    // console.log("allParams", allParams);
    // for (let elem of arguments) {
        // console.log(elem);
    // }
    // arguments.push(1)
    //Преобразование псевдомасива в полноценный масив
    // const myArgs = Array.from(arguments)
    // console.log(myArgs);
    // myArgs.push(1)
    // console.log(myArgs);
// }
// getResult(0, 1, 2, 3, 4, 5, 6, 7)
// getResult()

// const getArreyRes = (...allParams) => {
    // console.log(arguments);
    // console.log(allParams);
// }
// getArreyRes(1, 2, 3, 4)

//Guard Clause

// function getValue(array, value) {
//     console.log(array)
//     for (let i = 0; i < array.length; i += 1) {
//         console.log(`iteration-${i + 1}`);
//       if (array[i] === value) return console.log(`Значение ${value} есть в масиве`);
//     }
//     return console.log(`Значение ${value} отсутсвует в масиве`);        
// }
// let result = getValue([1, 2, 3, 4, 5, 6, 7], 1)
// console.log(result);
// result = getValue([1, 2, 3, 4], 5)
// console.log(result);


// function getSpam(text, words) {
  //   //   console.log(text)
  //   //   console.log(words)
  //   let i = 0;
  //   for (let word of words) {
  //     i++;
  //     console.log(word, i);
  //     if (text.includes(word)) return `SPAMMMM!!!!`;
  //   }
  //   return text;
  // }
  // const arr = ['volptatum', 'oficia']
  // let value = `corporis, officia blanditiis, voluptatum illo aliquam tempore molestias minus eos architecto dolorum sit sapiente commodi sunt neque odio ipsum exercitationem tenetur laborum veniam fugiat error explicabo? Enim reprehenderit repudiandae voluptatum laborum, molestias rem ut ducimus doloribus saepe tempora illum recusandae blanditiis amet quod omnis, at dolore porro maiores quam accusamus labore eveniet, reiciendis praesentium. Facilis dolore excepturi facere deleniti? Incidunt, deleniti blanditiis? Impedit consequuntur deserunt a! Porro libero inventore impedit maiores error?`
  // console.log(getSpam(value, arr))

  //ARROW FUNC & RETURN

  // const getTotal = (a, b) => {
  //     return a + b
  // }
  // console.log(getTotal(2, 5));

  // const getTotal = (a, b) => a + b
  // console.log(getTotal(2, 5));

  // const greet = user => `Hello ${user}`
  // console.log(greet('World!'));


  //Задачи

  //1
  // function chekYear(year) {
  //     console.log(year % 4);
  // }
  // chekYear(1768)

  //2
  // function chekYear(year) {
  //     let condition = year % 4 === 0
  //     if (condition) return `${year} высокосный`
  //     return `${year} не высокосный`
  // }
  // console.log(chekYear(2021));

  //3
  // function game() {
  //     let comp = Math.ceil(Math.random() * (10 - 1) + 1)
  // console.log(comp);
  // }
  // game()

  //4
  // function game() {
  //   let comp = Math.ceil(Math.random() * (10 - 1) + 1)
  //   let user = prompt('Введите число от 1 до 10')
  //   console.log(comp, user)
  //     console.log()
  //   if (comp == user) return 'You are win'
  //   return `You lose`
  // }
  // console.log(game())

  //5
  // function getMathResult() {
  //     let num1 = prompt(`Enter the first number`)
  //     let num2 = prompt(`Enter the second number`);
  //     let symbol = prompt(`Enter the symbol`);
  // let total = 0
  //     // console.log(num1, num2, symbol);
  //     return total
  // }
  // getMathResult();

  //6
  // function getMathResult() {
  //   let num1 = prompt('`Enter the first number')
  //   let num2 = prompt('`Enter the second number')
  //   let symbol = prompt('`Enter the symbol')
  //   let total = 0
  //   console.log(num1, num2, symbol)
  //   switch (symbol) {
  //     case '+':
  //       total = Number(num1) + Number(num2)
  //       break

  //     case '-':
  //       total = num1 - num2
  //       break

  //     case '*':
  //       total = num1 * num2
  //       break
  //     case '/':
  //       total = num1 / num2
  //       break

  //     default:
  //       console.error(`ERROR`)
  //   }
  //   return total
  // }
  // console.log('result', getMathResult())
  // console.log(2 + 2 + "2");
  // console.log(2 + "2" + "2");
  // console.log("2" + 2 + 2);


//не работает почему?????
  // function makeArray(firstArray, secondArray, maxLength) {
    
    
  //   const allArray = firstArray.concat(secondArray);
  //   if (allArray > maxLength) {
  //     return allArray.slice(0, maxLength);
  //   } else {
  //     return allArray;
  //   }
  
  // }
  // makeArray(["Mango", "Poly", "Houston"], ["Ajax", "Chelsea"], 4);



// function findLongestWord(string) {
//   // Change code below this line
//   const worldsSplit = string.split(" ");
//   let longestWord = "";
//   for (let i = 0; i < worldsSplit.length; i += 1) {
//     if (worldsSplit[i].length > longestWord.length) {
//       longestWord = worldsSplit[i];
//     }
//   }
//   console.log(longestWord);
//   return longestWord;

//   // Change code above this line
// }
// findLongestWord("The quick brown fox jumped over the lazy dog");




// function calculateTotalPrice(order) {
//   let total = 0
  
//   // for (let i = 0; i < order.length; i += 1) {
//   //   total += order[i];
//   // }

//   for (let i of order) {
//     total += i;
//   }  
      
//   console.log(total);
//   return total;
// }
// calculateTotalPrice([12, 85, 37, 4]);


//27-2
// function filterArray(numbers, value) {
  
//   const filteredNumbers = [];

//   // for (let i = 0; i < numbers.length; i += 1) {
//   //   const number = numbers[i];

//   //   if (number > value) {
//   //     filteredNumbers.push(number);
//   //   }
//   // }

//   for (let i of numbers) {
//     const number = i;
//     if (number > value) {
//       filteredNumbers.push(number);
//     }
//   }
//     console.log(filteredNumbers);
//   return filteredNumbers;
  
// }

// filterArray([1, 2, 3, 4, 5], 3);


//29
// function getEvenNumbers(start, end) {
//   // Change code below this line
//   let arr = [];
//   for (let i = start; i <= end; i += 1) {
//     if (i % 2 === 0) {
//       arr.push(i);
//       console.log(arr);
//     }
//   }
//   return arr;

//   // Change code above this line
// }

// getEvenNumbers(2, 5); 

