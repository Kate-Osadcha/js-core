// ====== TO STRING (приводим к строке)======


// ЧИСЛО К СТРОКЕ
let value = 0;

//1й способ
let toString = String(value);
console.log(`${value}, через конструктор String(): `, toString);
console.log(`тип данных ${value}, через конструктор String(): `, typeof toString);

//2й способ (конкатенация)
toString = value + "";
console.log(`${value}, через конкатенацию: `, toString);
console.log(`тип данных ${value}, через конкатенацию: `, typeof toString);

value = 1;
//1й способ
toString = String(value);
console.log(`${value}, через конструктор String(): `, toString);
console.log(`тип данных ${value}, через конструктор String(): `, typeof toString);
//2й способ (конкатенация)
toString = value + "";
console.log(`${value}, через конкатенацию: `, toString);
console.log(`тип данных ${value}, через конкатенацию: `, typeof toString);

//---------------------------------------------------------------------------------------

// ЗНАЧЕНИЕ БЕСКОНЕЧНОСТИ К СТРОКЕ

value = Infinity;

//1й способ
toString = String(value);
console.log(`${value}, через конструктор String(): `, toString);
console.log(`тип данных ${value}, через конструктор String(): `, typeof toString);

//2й способ (конкатенация)
toString = value + "";
console.log(`${value}, через конкатенацию: `, toString);
console.log(`тип данных ${value}, через конкатенацию: `, typeof toString);

//--------------------------------------------------------------------------------------

// НЕ ЧИСЛО К СТРОКЕ

value = NaN;

//1й способ
toString = String(value);
console.log(`${value}, через конструктор String(): `, toString);
console.log(`тип данных ${value}, через конструктор String(): `, typeof toString);

//2й способ (конкатенация)
toString = value + "";
console.log(`${value}, через конкатенацию: `, toString);
console.log(`тип данных ${value}, через конкатенацию: `, typeof toString);

//--------------------------------------------------------------------------------------

//БУЛЕВОЕ (логическое) true к строке
value = true;

//1й способ
toString = String(value);
console.log(`${value}, через конструктор String(): `, toString);
console.log(`тип данных ${value}, через конструктор String(): `, typeof toString);

//2й способ (конкатенация)
toString = value + "";
console.log(`${value}, через конкатенацию: `, toString);
console.log(`тип данных ${value}, через конкатенацию: `, typeof toString);



//БУЛЕВОЕ (логическое) false к строке
value = false;

//1й способ
toString = String(value);
console.log(`${value}, через конструктор String(): `, toString);
console.log(`тип данных ${value}, через конструктор String(): `, typeof toString);

//2й способ (конкатенация)
toString = value + "";
console.log(`${value}, через конкатенацию: `, toString);
console.log(`тип данных ${value}, через конкатенацию: `, typeof toString);

//---------------------------------------------------------------------------------------

//UNDEFINED к строке
value = undefined;

//1й способ
toString = String(value);
console.log(`${value}, через конструктор String(): `, toString);
console.log(`тип данных ${value}, через конструктор String(): `, typeof toString);

//2й способ (конкатенация)
toString = value + "";
console.log(`${value}, через конкатенацию: `, toString);
console.log(`тип данных ${value}, через конкатенацию: `, typeof toString);

//---------------------------------------------------------------------------------------


//NULL к строке
value = null;

//1й способ
toString = String(value);
console.log(`${value}, через конструктор String(): `, toString);
console.log(`тип данных ${value}, через конструктор String(): `, typeof toString);

//2й способ (конкатенация)
toString = value + "";
console.log(`${value}, через конкатенацию: `, toString);
console.log(`тип данных ${value}, через конкатенацию: `, typeof toString);