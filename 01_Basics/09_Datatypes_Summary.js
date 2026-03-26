/*
Broad categorization of all datatypes in JS
    - PRIMITIVE 
    - NON-PRIMITIVE (or REFERENCE-TYPE)
This categorization is made on following basis
    - How is the data being stored in memory
    - How are you accessing that data from memory

Q1. Is JS statically-typed (or) Dynamically-typed language ?
Q2. Is TS statically-typed (or) Dynamically-typed language ?
Q3. If null is primititve-DT, then why is it's type "Object" ?
Q4. What is the DT of all non-primitive-datatypes ? (It is not exactly what you see for FUNCTIONS....)
Q5. How many ways can you declare functions in JS ?
*/
/* ----------------------------------------------------------------------------------------------------------------------------------- */
/* 
Return type of variables in JavaScript
1) Primitive Datatypes
       Number => number
       String  => string
       Boolean  => boolean
       null  => object
       undefined  =>  undefined
       Symbol  =>  symbol
       BigInt  =>  bigint

2) Non-primitive Datatypes
       Arrays  =>  object
       Function  =>  function
       Object  =>  object
*/
/* ----------------------------------------------------------------------------------------------------------------------------------- */

/* 
// PRIMITIVE (Call By value)
    - String 
    - Number
    - Boolean
    - null          // type = Object
    - undefined
    - Symbol
    - BigInt
*/
const id = '123';
const id0 = '123';
console.log (id == id0);
console.log (id === id0);

const id1 = Symbol('123');
const id2 = Symbol('123');
console.log (id1 == id2);
console.log (id1 === id2);


let num1 = 847389879359389584958494449989893423423423423423423423423423423432423423423423423423423423423423423423423423423;
let num2 = 847389879359389584958494449989893423423423423423423423423423423432423423423423423423423423423423423423423423423n;
console.log (typeof num1, "num1 = ", num1);
console.log (typeof num2, "num2 = ", num2);

/*--------------^^^^^^^^^^^^^^^^^^^^^^***********************************************^^^^^^^^^^^^^^^^^^^^^^--------------/

/* 
// NON-PRIMITIVE (Call by reference)
    - Array
    - Objects
    - Functions

// Sabhi non-primitive datatypes ka type: OBJECT hi hota hai
*/

const myArr = [1, true, "meth", null];
const myObj = {
    name: "Gopal",
    age: 42
};
const myFunction = function () {
    console.log ("Hello World");    // Declaring function as a variable.
}

console.log (typeof myArr);      // Object
console.log (typeof myObj);      // Object
console.log (typeof myFunction); // Object-function
console.log (typeof null);       // Object