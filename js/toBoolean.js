//======= TO BOOLEAN ==========

//ЛЮБОЕ СТРОЧНОЕ ЗНАЧЕНИЕ К БУЛЮ
let value = "my friends";

//1й способ
let toBoolean = Boolean(value);
console.log(`${value}, через конструктор Boolean(): `, toBoolean);
console.log('тип данных ${value}, через конструктор Boolean():', typeof toBoolean);

//2й способ
toBoolean = !!value;
console.log(`${value}, через !!: `, toBoolean);
console.log(`тип данных ${value}, через !!: `, typeof toBoolean);

//-------------------------------------------------------------------------------------------------

//ЛЮБОЕ СТРОЧНОЕ ЧИСЛО К БУЛЮ
value = "56478";

//1й способ
toBoolean = Boolean(value);
console.log(`${value}, через конструктор Boolean(): `, toBoolean);
console.log('тип данных ${value}, через конструктор Boolean():', typeof toBoolean);

//2й способ
toBoolean = !!value;
console.log(`${value}, через !!: `, toBoolean);
console.log(`тип данных ${value}, через !!: `, typeof toBoolean);

//-------------------------------------------------------------------------------------------------

//пустая строка К БУЛЮ
value = "";

//1й способ
toBoolean = Boolean(value);
console.log(`пустая строка${value}, через конструктор Boolean(): `, toBoolean);
console.log('тип данных пустой строки ${value}, через конструктор Boolean():', typeof toBoolean);

//2й способ
toBoolean = !!value;
console.log(`пустая строка${value}, через !!: `, toBoolean);
console.log(`тип данных пустой строки ${value}, через !!: `, typeof toBoolean);

//-------------------------------------------------------------------------------------------------

//строка с пробелом К БУЛЮ
value = " ";

//1й способ
toBoolean = Boolean(value);
console.log(`строка с пробелом ${value}, через конструктор Boolean(): `, toBoolean);
console.log('тип данных строки с прбелом ${value}, через конструктор Boolean():', typeof toBoolean);

//2й способ
toBoolean = !!value;
console.log(`строка с пробелом ${value}, через !!: `, toBoolean);
console.log(`тип данных строки с пробелом  ${value}, через !!: `, typeof toBoolean);

//-------------------------------------------------------------------------------------------------

//ЧИСЛО К БУЛЮ
value = 0;

//1й способ
toBoolean = Boolean(value);
console.log(`${value}, через конструктор Boolean(): `, toBoolean);
console.log('тип данных ${value}, через конструктор Boolean():', typeof toBoolean);

//2й способ
toBoolean = !!value;
console.log(`${value}, через !!: `, toBoolean);
console.log(`тип данных ${value}, через !!: `, typeof toBoolean);


value = 1;

//1й способ
toBoolean = Boolean(value);
console.log(`${value}, через конструктор Boolean(): `, toBoolean);
console.log('тип данных ${value}, через конструктор Boolean():', typeof toBoolean);

//2й способ
toBoolean = !!value;
console.log(`${value}, через !!: `, toBoolean);
console.log(`тип данных ${value}, через !!: `, typeof toBoolean);

//-------------------------------------------------------------------------------------------------

//NaN К БУЛЮ
value = NaN;

//1й способ
toBoolean = Boolean(value);
console.log(`${value}, через конструктор Boolean(): `, toBoolean);
console.log('тип данных ${value}, через конструктор Boolean():', typeof toBoolean);

//2й способ
toBoolean = !!value;
console.log(`${value}, через !!: `, toBoolean);
console.log(`тип данных ${value}, через !!: `, typeof toBoolean);

//-------------------------------------------------------------------------------------------------

//INFINITY К БУЛЮ
value = Infinity;

//1й способ
toBoolean = Boolean(value);
console.log(`${value}, через конструктор Boolean(): `, toBoolean);
console.log('тип данных ${value}, через конструктор Boolean():', typeof toBoolean);

//2й способ
toBoolean = !!value;
console.log(`${value}, через !!: `, toBoolean);
console.log(`тип данных ${value}, через !!: `, typeof toBoolean);

//-------------------------------------------------------------------------------------------------

//UNDEFINED К БУЛЮ
value = undefined;

//1й способ
toBoolean = Boolean(value);
console.log(`${value}, через конструктор Boolean(): `, toBoolean);
console.log('тип данных ${value}, через конструктор Boolean():', typeof toBoolean);

//2й способ
toBoolean = !!value;
console.log(`${value}, через !!: `, toBoolean);
console.log(`тип данных ${value}, через !!: `, typeof toBoolean);

//-------------------------------------------------------------------------------------------------

//NULL К БУЛЮ
value = null;

//1й способ
toBoolean = Boolean(value);
console.log(`${value}, через конструктор Boolean(): `, toBoolean);
console.log('тип данных ${value}, через конструктор Boolean():', typeof toBoolean);

//2й способ
toBoolean = !!value;
console.log(`${value}, через !!: `, toBoolean);
console.log(`тип данных ${value}, через !!: `, typeof toBoolean);

//-------------------------------------------------------------------------------------------------

