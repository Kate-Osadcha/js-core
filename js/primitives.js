console.log('primitives');


// STRING - строка
let stringData = 'string data';
console.log(stringData);
// typeof - оператор типа данных
console.log(typeof stringData);

stringData = "";
console.log(stringData);
console.log(typeof stringData);

stringData = " ";
console.log(stringData);
console.log(typeof stringData);


//NUMBER - число
let number = 1;
console.log(number);
console.log(typeof number);

number = 2e53;
console.log(number);
console.log(typeof number);

number = Infinity;
console.log(number);
console.log(typeof number);

number = NaN; // NaN - Not a Number (не число)
console.log(number);
console.log(typeof number);


//BOOLEAN  true || false
let isOnline = true;
console.log(isOnline);
console.log(typeof isOnline);

isOnline = false;
console.log(isOnline);
console.log(typeof isOnline);


//UNDEFINED (значение не присвоено)
let message;
console.log(message);
console.log(typeof message);


//NULL
let user = null;
console.log(user);
console.log(typeof user);