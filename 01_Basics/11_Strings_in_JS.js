/**
    The motive here is to understand some moden-day JS practices to be followed while working with strings.
    Get familiar with JS-Strings and its methods.
    The easist way is to 
            - use-broswer console -> know available inbuilt methods for strings -> Use MDN docs for detailed documentation -> Practice
*/

// 1. Prefer String interpolation (over) String Concatenation using "+" or ",""
// 2. string v/s String (is there any difference?)
// 3. Use browser console to better undertand strings
// 4. Get familiar with string methods - Very important (use MDN docs, browser-console etc.)
//      - String methods (length(), charAt(), indexof(), substring(), slice(), trim(), replace(), includes(), split())
// 5. Declare strings normally v/s declare string explicitly as object
// 6. Do not confuse string as an Object with Arrays

//--------------------------------------+++++++++++++++++++++++++++++++++++++++++++++++----------------------------------------------

// String Interpolation
let name = "Ramesh"; let age = 35; let weight = "75 Kg";
console.log ("\n")
console.log ("String concatenation example");
console.log ("His name is: ", name, ", age is: ", age, ", weight is: " + weight)    // less readable, difficult to maintain and modify
console.log ("\n")
console.log ("String interpolation example");
console.log (`His name is:  ${name},  age is:  ${age},  weight is:  ${weight}`)             // more readable, more easy to maintain and modify
console.log ("\n")

//--------------------------------------+++++++++++++++++++++++++++++++++++++++++++++++----------------------------------------------

// string v/s Strings (Try on console, slightly different, will help you get an overview of String Object)
let myString = "CommonWealth"       // JS by-default implements String object to create myString
let myString2 = new String();       // another way to create sring (xplicitly imicing JS behavior)
myString2 = myString;
myString = "Olympics"

console.log (`Type of myString: ${console.log (typeof myString)}, value within myString: ${myString}`);
console.log (`Type of myString2: ${console.log (typeof myString2)}, value within myString2: ${myString2}`); // Point to be noted, even-though strings are implemeted as Objects, they are still PRIMITIVE  D.T. and refers stack (pass by value). This might also help you clarify the concept for "null" as an Object.
console.log ("\n");

//--------------------------------------+++++++++++++++++++++++++++++++++++++++++++++++----------------------------------------------

//Practicing String methods

