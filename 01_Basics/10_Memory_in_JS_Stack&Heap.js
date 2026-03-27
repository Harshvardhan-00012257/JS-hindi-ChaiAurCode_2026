/* 
This lecture focuses on understanding memory mnagement in JS
    - Early era:        Using, organizing and managing the available memory efficiently within your system was job of programmer.
    - Modern langauges: Reduces memory management hassle for programmers by handling few things on its own (Ex: Garbage Collectors), complete management by programmer is not needed.

In previous lecture on D.T. we saw two ifferent types based on how they use the memory (Again implicit behavior of language, not controlled by programmer, as explained above)
    - PRIMITIVE D.T. - 
    - NON-PRIMITIVE D.T. - Reference types
*/


/* 
Memory divided into two types
    - STACK Memory (PRIMITVE D.T.)      - Provides copy of data
    - HEAP Memory  (NON PRIMITIVE D.T.) - Provides reference of data (operations/actions performed on original value)
*/

/* 
Questions (To be attended after understanding entire concept of Memory):
    1. "null" is a PRIMITIVE D.T., however it's type is Object. Which memory does is refers to ?
    2. number v/s Number
       string v/s String
        etc.
*/

// Concept of STACK: 

let myYoutubeName = "alphabetdotcom"
let myYoutubeName2 = myYoutubeName
myYoutubeName = "numericsdotcom"

console.log ("myYoutubeName: ", myYoutubeName);
console.log ("myYoutubeName2: ", myYoutubeName2);
console.log ("-------------+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++---------------");



// Concept of HEAP: 

let userOne = {
    username: "user@gmail.com",
    password: "123@userpass",
    accountId: 23455
};

let userTwo = userOne;
userTwo.password = "SteveHarrington@user";

console.log ("userOne: ", userOne);
console.log ("userTwo: ", userTwo);