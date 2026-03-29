// 12_Numbers_and_Maths.js
/*
🧪 Mini Challenge (Important)

Predict this:

                let a = { score: 10 };
                let b = a;

                a.score = 20;
                b.score = 30;

                console.log(a.score);
                ❓
Output?
Why?
---------------------------------------------------------
Predict output:

                let a = { count: 1 };
                let b = a;

                b = { count: 2 };

                console.log(a.count);
❓
Output?
Why didn’t it change?
---------------------------------------------------------
Predict:

                let num = 500;
                let obj = { value: 500 };

                console.log(typeof num);              // ?
                console.log(typeof num.toFixed);      // ?
                console.log(typeof obj.toFixed);      // ?
                console.log(typeof obj.value.toFixed); // ?
---------------------------------------------------------
Task:
                How can you use Number() -> methods on plain-object like u used them for number (primitives)?
---------------------------------------------------------
Use Math.random to :

        1. to generate random value in between 0 to 10
        2. to generate random value in between 1 to 10
        3. to generate random INTEGER-value in between 1 to 10 using floor() (Why floor() ? why mot ceil () ?)
        4. to generate random INTEGER-value in between min to max (min, max proided by user)
-----------------------------------------------------------
Generate intuitive proof for formula 
                let min1 = 11; let max1 = 20;
                console.log (Math.floor(Math.random() * (max-min+1)) + min)
------------------------------------------------------------
Advance level task: 
                Write code to prove that probability of occurence of each integer over number of trials, is preety much the same (Basically prove random() is fairly uniform function)
*/