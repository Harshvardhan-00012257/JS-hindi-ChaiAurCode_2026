/********************************************************************************Operations**************************************************************************************/
/*
// We will just have an overview about this topic here, the main learning will happen as you dive into projects, where you will find actual use-cases and applications of these things.
// You need not waste time understanding every nook-and-cranny of conversions.
// The only things that you need to learn here is:
        1. Learn operators (go through precedences, no need to remember)
        2. Exam specific tricky code v/s Production grade clean code and practices.
        3. Code readability an simple-logic >>>>>>> Tricky code doing same job.
        4. Make use of prentheses...!!
*/
let value = 3;
let negValue = -value;
console.log (negValue);
console.log("***********---------------------------------------***********")
console.log ("Arithmetic Operations");
console.log (2+2);  
console.log (2-2);
console.log (2*2);
console.log (2**4);
console.log (2/2);
console.log (2%3);
console.log("***********---------------------------------------***********")
console.log ("String Operations");
let str1 = "Hello"
let str2 = " 2026"
console.log (str1 + str2);
console.log("***********---------------------------------------***********")
console.log ("String and Numeric Operations");
let s_one = "1"; let s_two = "2";
let n_one = 1; let n_two = 2;
let ans1 = s_one + n_two;           // "1" + 2 
let ans2 = n_one + s_two;           //  1 + "2"
let ans3 = s_one + s_two;           // "1"+ "2"
let ans4 = n_one + n_two;           //  1 +  2
let ans5 = s_one + s_two + n_two;   // "1" +"2" + 2
let ans6 = s_one + n_two + n_two;   // "1" + 2  + 2
let ans7 = n_one + n_two + s_two;   //  1 +  2  + "2"

console.log (typeof(ans1), "ans1 = ", ans1);
console.log (typeof(ans2), "ans2 = ", ans2);
console.log (typeof(ans3), "ans3 = ", ans3);                
console.log (typeof(ans4), "ans4 = ", ans4);                               
console.log (typeof(ans5), "ans5 = ", ans5);                // NOTE: All of this behaviour executed by JS in these operations is defined by the ECMA-standards for JS
console.log (typeof(ans6), "ans6 = ", ans6);                //       However, rather than relying solely on this behaviour, the trick is to make use of parenthesis
console.log (typeof(ans7), "ans7 = ", ans7);                //       Using parenthesis to dictate behaviour, makes code more readabale, easy to understand and logical.
                                                            //       For Ex: 
                                                            //               ans7 = (n_one + n_two) + s_two;
                                                            //               is a better way to deal with things.
console.log("***********---------------------------------------***********")
console.log ("Tricky operations and conversions that exists, but are absolutely not-recommended");
console.log (+true);
console.log (-"");

let num1, num2, num3;
num1 = num2 = num3 = 2+2;
console.log ("num1 = ", num1, ", num2 = ", num2, ", num3 = ", num3);
console.log("***********---------------------------------------***********")
console.log ("Assignment: Learn about Increment operator from MDN-docs");
consolw.log ("Learn about precedence of pre/post-increments and their behaviour")