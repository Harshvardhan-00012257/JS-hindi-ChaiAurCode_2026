// Q. Which declaration of variable is preferable?
// Q. Which declaration of variable is preferred?
//              - ⚠️ Industry Insight (Very Important)
//                      You almost NEVER use:
//                              new Number()
//                              new String()
//
//                      Because:
//
//                          They behave like objects (confusing)
//                          They break expectations
//                          They cause subtle bugs
//
//                      👉 Instead, if you need shared mutable data:
//                          Use objects or arrays
//
//              - If your goal is:
//                          Shared updates → use objects
//                          Independent values → use primitives

/* 
Concept of AUTOBOXING in JS:

🧠 The Core Idea (This is the magic)

When you write:

                let num = 500;
                num.toFixed(2);

You might think:

“Wait… I didn’t use new Number(), so where did .toFixed() come from?”

⚙️ Behind the Scenes (JavaScript Wizardry)

JavaScript quietly does this:

// What YOU write
                500.toFixed(2);

// What JS internally does
                (new Number(500)).toFixed(2);

👉 This is called autoboxing
        - Primitive → temporarily wrapped into object
        - Method runs
        - Object disappears like a ninja 🥷

*/

let num1 = 400; let string1 = "Mehta";
console.log (`Type of num1 is: ${String(typeof num1).toLocaleUpperCase()} and typeof string1 is: ${String(typeof string1).toLocaleUpperCase()}`);    // Implicit DT assignment by JS

let num2 = new Number (500); 
let string2 = new String ("Nehta");
console.log (`Type of num2 is: ${String(typeof num2).toLocaleUpperCase()} and typeof string2 is: ${String(typeof string2).toLocaleUpperCase()}`);    // Explicit DT assignment by JS (Usefulness explained in strings lecture)

console.log (`Value of num1: ${num1} and string1: ${string1}`)
console.log (`Value of num2: ${num2} and string2: ${string2}`)
console.log ("--------+++++++++++++++++++++++++++++++++++++++++++++++++++++++++---------");

// Since num2 and string2 are of type OBJECT, lets check when assigned to num1 and string1, do they impact their datatye (are they passed by reference or value)

num1 = num2;
string1 = string2;
console.log (`Type of num1 is: ${String(typeof num1).toLocaleUpperCase()} and typeof string1 is: ${String(typeof string1).toLocaleUpperCase()}`);    

num2 = 600;
string2 = "Rehta";
console.log (`Value of num1: ${num1} and string1: ${string1}`)
console.log (`Value of num2: ${num2} and string2: ${string2}`)

// Explanation of this behavior:
/*
🔍 What You Observed

After this:

num1 = num2;
string1 = string2;

👉 num1 and string1 became "object" → ✅ correct

🧠 The Core Concept (This is the real lesson)
🔑 Assignment ≠ Permanent Link
----------------------------------------------------------------------------------------
When you do:

num1 = num2;

👉 You are NOT saying:

“num1 will always follow num2”

👉 You are saying:

“num1 now points to whatever num2 is pointing to right now”
----------------------------------------------------------------------------------------
🎯 Step-by-Step Mental Simulation

Let’s slow it down like a debugger.

🟢 Step 1: Initial state
let num2 = new Number(500);

Memory:

num2 ──▶ [Number Object: 500]
🟡 Step 2: Assignment
num1 = num2;

Now:

num1 ──▶ [Number Object: 500]
num2 ──▶ [Number Object: 500]

👉 Both point to SAME object

🔴 Step 3: Reassignment (IMPORTANT)
num2 = 600;

Now:

num2 ──▶ 600 (primitive)
num1 ──▶ [Number Object: 500]

👉 You didn’t change the object
👉 You just made num2 point somewhere else
---------------------------------------------------------------------------------------
⚠️ Why new Number() is avoided

This is where things get dangerous:

                let a = new Number(500);
                let b = new Number(500);

                console.log(a === b); // false 😵

👉 Because:

They are different objects
Even though values look same

Now compare:

                let a = 500;
                let b = 500;

                console.log(a === b); // true ✅
---------------------------------------------------------------------------------------
🔥 Golden Rule (Tattoo this mentally)
🪨 Primitives:
        Copied by value
🧱 Objects:
        Reference is copied
        BUT reassignment breaks the link
---------------------------------------------------------------------------------------
⚙️ Let’s Fix It (Correct Way)

Instead of using new Number() (which is awkward in JS), use a plain object:

        let num2 = { value: 500 };
        let num1 = num2;

        // Modify the object (not the variable)
        num2.value = 600;

        console.log(num1.value); // 600 ✅

👉 This WILL change both.
🚀 Final Insight

You don’t use new Number() for methods.

👉 JS already gives you methods on primitives
👉 Objects are for structure & shared state, not for mimicking primitives
---------------------------------------------------------------------------------------
⚠️ Industry Insight (Very Important)
        You almost NEVER use:
            new Number()
            new String()

        Because:

            They behave like objects (confusing)
            They break expectations
            They cause subtle bugs

👉 Instead, if you need shared mutable data:
        Use objects or arrays

You don’t use new Number() for methods.

👉 JS already gives you methods on primitives
👉 Objects are for structure & shared state, not for mimicking primitives
*/

// Number and its properties (you know how to view them in browser-console)
let balance = {value: 200};
console.log (balance.value);
console.log (balance.value.toString().length);
console.log (balance.value.toFixed(2));

let otherNumber = 123.89408;
console.log (otherNumber.toPrecision(2));
console.log (otherNumber.toPrecision(3));
console.log (otherNumber.toPrecision(4));
console.log (otherNumber.toPrecision(5));

let amount = 1000000;
console.log (amount.toLocaleString())
console.log (amount.toLocaleString('en-IN'))

// ++++++++++++++++++++++++++ Maths ++++++++++++++++++++++++++

console.log (Math);
console.log (Math.abs(-4));
console.log (Math.abs(4));
console.log (Math.round(4.2395));
console.log (Math.ceil(4.2395));
console.log (Math.floor(4.2395));
console.log (Math.min (4,6,5,3,9))
console.log (Math.max (4,6,5,3,9))

// Most important method in Math object.
// Math.random()
console.log (Math.random());  // Always provides values in between 0 to 1
let min = 11; let max = 20;
console.log (Math.floor(Math.random() * (max-min+1)) + min)
