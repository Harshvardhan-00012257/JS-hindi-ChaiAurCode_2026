/*
Type conversion karte waqt 2 cheejo ka dhyaan rakhna bahut jaroori hai:
    1. Kya datatype convert hua?
    2. Kya value sahi se convert hui?

NOTE:   - In ths file we have covered typeconversion to "number" only.
        - Similarly you can type-convert to other datatypes as well (i.e., string, boolean etc.)
        - Just remember the concept from above two points while performing typeconversion from one-type to another and you are good to go.
*/
let score1 = 33;        //number
let score2 = "text";    //string
let score3 = null;      //null (object)
let score4;             //undefined
let score5 = true;      //boolean

//score1 = 33 --> number
console.log("score1 = 33");
console.log(typeof(score1));
console.log("*------------------------------------*/")

//score2 = "text"; ---> string
console.log("score2 = 'text'");
console.log(typeof(score2));
let valueInNumber = Number(score2);
console.log(typeof valueInNumber);
console.log(valueInNumber);
console.log("*------------------------------------*/")

//score3 = null;   ---> null (object)
console.log("score3 = null");
console.log(typeof(score3));
valueInNumber = Number(score3);
console.log(typeof valueInNumber);
console.log(valueInNumber);
console.log("*------------------------------------*/")

//score4;          ---> undefined
console.log("score4");
console.log(typeof(score4));
valueInNumber = Number(score4);
console.log(typeof valueInNumber);
console.log(valueInNumber);
console.log("*------------------------------------*/")

//score5 = true;   ---> boolean
console.log("score5 = true");
console.log(typeof(score5));
valueInNumber = Number(score5);
console.log(typeof valueInNumber);
console.log(valueInNumber);