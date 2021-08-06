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

